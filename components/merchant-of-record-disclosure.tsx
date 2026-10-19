import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"

export function MerchantOfRecordDisclosure({
  className = "",
}: {
  className?: string
}) {
  return (
    <p className={`text-xs leading-relaxed text-slate-500 ${className}`.trim()}>
      {MERCHANT_OF_RECORD_DISCLOSURE}
    </p>
  )
}
