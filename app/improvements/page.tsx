import Link from "next/link"
import { Construction, ArrowLeft } from "lucide-react"
import { WaitlistCta } from "@/components/waitlist-cta"

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-white/10 py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-orange-500/10 p-4">
              <Construction className="h-12 w-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">Checkout is parked</h1>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
            Stripe and Buy stay in the tree. They are gated — waitlist now,
            flip-ready later. We will not charge you from this page.
          </p>
          <div className="mb-8 flex justify-center">
            <WaitlistCta source="improvements" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
