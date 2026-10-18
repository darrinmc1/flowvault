/**
 * Public support address from NEXT_PUBLIC_SUPPORT_EMAIL.
 * When the variable is unset, callers must show no address.
 */
export function getSupportEmail(): string | undefined {
  const value = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()
  return value || undefined
}
