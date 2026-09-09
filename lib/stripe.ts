import Stripe from "stripe"

// Parked, not deleted. Checkout UI/API stay gated until NEXT_PUBLIC_PAYMENTS_OPEN=true.
const key = process.env.STRIPE_SECRET_KEY

export const stripe = key
  ? new Stripe(key, { apiVersion: "2025-02-24.acacia" })
  : null
