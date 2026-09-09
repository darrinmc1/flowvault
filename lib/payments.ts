/**
 * Cash-site payment gate.
 *
 * PARKED: waitlist is the public CTA.
 * Stripe, webhook, price IDs, and Buy forms stay in the tree.
 * Flip later with NEXT_PUBLIC_PAYMENTS_OPEN=true (Preview only — not Production).
 */
export const PAYMENTS_OPEN =
  process.env.NEXT_PUBLIC_PAYMENTS_OPEN === "true"

export function isPaymentsOpen() {
  return PAYMENTS_OPEN
}
