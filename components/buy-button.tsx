"use client"

import { useState } from "react"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { RefundPolicyNote } from "@/components/refund-policy-note"
import { NewsletterForm } from "@/components/newsletter-form"

const checkoutEnabled = process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"

export function BuyButton({
  sku,
  price,
  available,
}: {
  /** Catalog lookup key, for example flowvault_drafter_once_usd69. Never a Stripe price id. */
  sku: string
  price: number
  /** Catalog flag. Unavailable packs stay on Coming soon even when Stripe is enabled. */
  available: boolean
}) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSale = checkoutEnabled && available

  async function startCheckout() {
    if (process.env.NEXT_PUBLIC_STRIPE_ENABLED !== "true" || !available) return
    setPending(true)
    setError(null)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sku }),
      })
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string }
      if (res.status === 401) {
        window.location.assign("/sign-in")
        return
      }
      if (!res.ok || !data.url) {
        setError(data.error ?? "Checkout is unavailable")
        setPending(false)
        return
      }
      window.location.assign(data.url)
    } catch {
      setError("Checkout is unavailable")
      setPending(false)
    }
  }

  return (
    <div className="w-full space-y-3">
      {onSale ? (
        <button
          type="button"
          onClick={startCheckout}
          disabled={pending}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Redirecting…" : `Buy now — $${price}`}
        </button>
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full cursor-not-allowed rounded-xl bg-slate-800 px-8 py-3 text-sm font-bold text-slate-300 opacity-80"
        >
          Coming soon: ${price}
        </button>
      )}

      <MerchantOfRecordDisclosure />
      <RefundPolicyNote />

      {onSale ? null : (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="mb-3 text-sm text-slate-300">
            Join the waitlist and we&apos;ll let you know when checkout opens.
          </p>
          <NewsletterForm source={`waitlist:${sku}`} compact submitLabel="Join the waitlist" />
        </div>
      )}

      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  )
}
