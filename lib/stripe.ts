import Stripe from "stripe"

const key = process.env.STRIPE_SECRET_KEY

export const stripe = key
  ? new Stripe(key, { apiVersion: "2025-02-24.acacia" })
  : null

/** Runtime gate for /api/checkout and the webhook. Unset or any other value stays off. */
export function isStripeEnabled(): boolean {
  return process.env.STRIPE_ENABLED === "true"
}
