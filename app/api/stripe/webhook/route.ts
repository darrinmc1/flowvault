import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { grantEntitlement } from "@/lib/entitlements"
import { sendAdminNotification } from "@/lib/email"
import type Stripe from "stripe"

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  const body = await req.text()
  const sig = req.headers.get("stripe-signature")
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !secret) {
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
    const productId = session.metadata?.productId

    if (userId && productId) {
      const granted = await grantEntitlement(userId, productId)
      console.log(
        `[stripe webhook] entitlement ${granted ? "granted" : "FAILED"}: user=${userId} product=${productId}`
      )

      await sendAdminNotification({
        kind: "purchase",
        payload: {
          userId,
          productId,
          amount: session.amount_total,
          currency: session.currency,
          granted,
        },
      }).catch(() => {})
    }
  }

  return NextResponse.json({ received: true })
}
