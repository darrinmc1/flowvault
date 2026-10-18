/**
 * Exact TTPN Pty Ltd merchant-of-record copy.
 * Use this string in the footer and directly under every Buy button.
 */
export const MERCHANT_OF_RECORD_DISCLOSURE =
  "Part of the Empire HQ network. Payments are charged by TTPN Pty Ltd (statement may show as TTPN or TTPN* plus the product name)."

/** Card statement suffix. The account prefix is TTPN, so statements read TTPN* FLOWVAULT. */
export const STATEMENT_DESCRIPTOR_SUFFIX = "FLOWVAULT"

export const DEFAULT_STRIPE_SITE_KEY = "flowvault"

/** Prefix for this site's Stripe Price lookup keys. */
export function getStripeSiteKey(): string {
  const value = process.env.STRIPE_SITE_KEY?.trim()
  return value || DEFAULT_STRIPE_SITE_KEY
}
