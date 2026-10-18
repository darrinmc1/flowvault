import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { stripe, isStripeEnabled } from "@/lib/stripe"
import { getProductById, getProductBySku } from "@/data/products"
import { getUserEntitlements, getSignedDownloadUrl } from "@/lib/entitlements"
import {
  getStripeSiteKey,
  STATEMENT_DESCRIPTOR_SUFFIX,
} from "@/lib/merchant-of-record"

function paymentsDisabled() {
  return NextResponse.json({ error: "Payments are not enabled" }, { status: 503 })
}

async function readSku(req: NextRequest): Promise<string | null> {
  const contentType = req.headers.get("content-type") ?? ""
  if (contentType.includes("application/json")) {
    const body = (await req.json().catch(() => null)) as { sku?: unknown } | null
    return typeof body?.sku === "string" ? body.sku.trim() : null
  }

  const form = await req.formData().catch(() => null)
  const sku = form?.get("sku")
  return typeof sku === "string" ? sku.trim() : null
}

export async function POST(req: NextRequest) {
  // Price IDs are not accepted from the client. The old sandbox price IDs are
  // retired in data/products.ts; nothing is deleted in Stripe.
  if (!isStripeEnabled()) return paymentsDisabled()

  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const sku = await readSku(req)
  if (!sku) {
    return NextResponse.json({ error: "Missing sku" }, { status: 400 })
  }

  const product = getProductBySku(sku)
  const site = getStripeSiteKey()
  if (!product || !product.lookupKey.startsWith(`${site}_`)) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  let priceId: string
  try {
    const prices = await stripe.prices.list({
      lookup_keys: [product.lookupKey],
      active: true,
      limit: 1,
    })
    const price = prices.data.find((item) => item.lookup_key === product.lookupKey)
    if (!price) {
      return NextResponse.json({ error: "Price not available" }, { status: 404 })
    }
    priceId = price.id
  } catch (err) {
    console.error("[checkout] price lookup failed", err)
    return NextResponse.json({ error: "Checkout unavailable" }, { status: 503 })
  }

  const origin = req.headers.get("origin") ?? req.nextUrl.origin
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/account?purchased=${product.id}`,
    cancel_url: `${origin}/products/${product.id}`,
    metadata: {
      site,
      sku: product.lookupKey,
      userId,
    },
    payment_intent_data: {
      statement_descriptor_suffix: STATEMENT_DESCRIPTOR_SUFFIX,
      metadata: {
        site,
        sku: product.lookupKey,
        userId,
      },
    },
  })

  if (!session.url) {
    return NextResponse.json({ error: "Checkout unavailable" }, { status: 503 })
  }

  const wantsJson = (req.headers.get("content-type") ?? "").includes("application/json")
  if (wantsJson) {
    return NextResponse.json({ url: session.url })
  }
  return NextResponse.redirect(session.url, 303)
}

export async function GET(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const downloadId = req.nextUrl.searchParams.get("download")
  if (!downloadId) {
    return NextResponse.json({ error: "Missing download param" }, { status: 400 })
  }

  const product = getProductById(downloadId)
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  const entitlements = await getUserEntitlements(userId)
  const hasAccess = entitlements.some((e) => e.product_id === downloadId)
  if (!hasAccess) {
    return NextResponse.json({ error: "Not purchased" }, { status: 403 })
  }

  const url = await getSignedDownloadUrl("downloads", product.downloadPath)
  if (!url) {
    return NextResponse.json(
      { error: "Download unavailable" },
      { status: 503 }
    )
  }

  return NextResponse.redirect(url, 303)
}
