import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { stripe } from "@/lib/stripe"
import { getProductById } from "@/data/products"
import { getUserEntitlements, getSignedDownloadUrl } from "@/lib/entitlements"

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 503 }
    )
  }

  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const body = await req.formData()
  const productId = body.get("productId") as string
  const product = getProductById(productId)
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  const origin = req.headers.get("origin") ?? req.nextUrl.origin

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: product.stripePriceId, quantity: 1 }],
    success_url: `${origin}/account?purchased=${productId}`,
    cancel_url: `${origin}/products/${productId}`,
    metadata: {
      userId,
      productId,
    },
  })

  return NextResponse.redirect(session.url!, 303)
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
