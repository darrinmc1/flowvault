import { PAYMENTS_OPEN } from "@/lib/payments"
import { WaitlistCta } from "@/components/waitlist-cta"

type ProductCheckoutProps = {
  productId: string
  price: number
  buyLabel?: string
}

/**
 * Park/gate: waitlist now. Buy form stays so flipping
 * NEXT_PUBLIC_PAYMENTS_OPEN=true restores Stripe Checkout.
 */
export function ProductCheckout({
  productId,
  price,
  buyLabel = "Buy Now",
}: ProductCheckoutProps) {
  if (PAYMENTS_OPEN) {
    return (
      <form action="/api/checkout" method="POST">
        <input type="hidden" name="productId" value={productId} />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40"
        >
          {buyLabel}
        </button>
      </form>
    )
  }

  return (
    <WaitlistCta
      source={`product:${productId}`}
      heading={`$${price} one-time when checkout opens. Join the waitlist — we will not charge you now.`}
      anchorId="waitlist"
    />
  )
}
