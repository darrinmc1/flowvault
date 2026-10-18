import { NextRequest, NextResponse } from "next/server"
import { stripe, isStripeEnabled } from "@/lib/stripe"
import { grantEntitlement } from "@/lib/entitlements"
import { sendAdminNotification } from "@/lib/email"
import { getProductBySku } from "@/data/products"
import { getStripeSiteKey } from "@/lib/merchant-of-record"
import type Stripe from "stripe"

export async function POST(req: NextRequest) {
  if (!isStripeEnabled()) {
    return NextResponse.json({ error: "Payments are not enabled" }, { status: 503 })
  }

  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) {
    return NextResponse.json({ error: "Webhook is not configured" }, { status: 503 })
  }

  const body = await req.text()
  const sig = req.headers.get("stripe-signature")
  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret)
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.userId
    const sku = session.metadata?.sku
    const site = session.metadata?.site
    const expectedSite = getStripeSiteKey()

    if (site && site !== expectedSite) {
      console.error(`[stripe webhook] ignored session for site=${site}`)
    } else if (userId && sku) {
      const product = getProductBySku(sku)
      if (!product) {
        console.error(`[stripe webhook] unknown sku=${sku}`)
      } else {
        const granted = await grantEntitlement(userId, product.id)
        console.log(
          `[stripe webhook] entitlement ${granted ? "granted" : "FAILED"}: user=${userId} product=${product.id} sku=${product.lookupKey}`
        )

        await sendAdminNotification({
          kind: "purchase",
          payload: {
            userId,
            productId: product.id,
            sku: product.lookupKey,
            site: expectedSite,
            amount: session.amount_total,
            currency: session.currency,
            granted,
          },
        }).catch(() => {})
      }
    }
  }

  return NextResponse.json({ received: true })
}
