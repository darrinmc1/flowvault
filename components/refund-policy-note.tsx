import { REFUND_POLICY } from "@/lib/refund-policy"

export function RefundPolicyNote({
  className = "text-xs leading-relaxed text-slate-500",
}: {
  className?: string
}) {
  return <p className={className}>{REFUND_POLICY}</p>
}
