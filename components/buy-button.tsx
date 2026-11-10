import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { RefundPolicyNote } from "@/components/refund-policy-note"
import { NewsletterForm } from "@/components/newsletter-form"

export function BuyButton({
  sku,
  price,
}: {
  /** Catalog key, for example flowvault_drafter_once_usd69. */
  sku: string
  price: number
  /** Catalog flag. Packs stay on Coming soon. */
  available: boolean
}) {
  return (
    <div className="w-full space-y-3">
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="w-full cursor-not-allowed rounded-xl bg-slate-800 px-8 py-3 text-sm font-bold text-slate-300 opacity-80"
      >
        Coming soon: ${price}
      </button>

      <MerchantOfRecordDisclosure />
      <RefundPolicyNote />

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="mb-3 text-sm text-slate-300">
          Join the waitlist and we&apos;ll let you know when checkout opens.
        </p>
        <NewsletterForm source={`waitlist:${sku}`} compact submitLabel="Join the waitlist" />
      </div>
    </div>
  )
}
