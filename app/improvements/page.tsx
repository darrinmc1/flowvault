import Link from "next/link"
import { Construction, ArrowLeft } from "lucide-react"
import { ComingSoonSignup } from "@/components/coming-soon-signup"

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="py-16 text-center">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-white/5 border border-white/10 p-4">
              <Construction className="h-12 w-12 text-slate-300" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3 text-white">Coming soon</h1>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
            The payment system is not live yet.
          </p>
          <ComingSoonSignup />
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
