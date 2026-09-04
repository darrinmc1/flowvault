import Link from "next/link"
import { LESSON_COUNT, SAMPLE_JSON_COUNT } from "@/data/inventory"
import { siteConfig } from "@/config/site.config"
import HumorBreak from "@/components/humor-break"

export const metadata = {
  title: `Tools | ${siteConfig.name}`,
  description: "Interactive FlowVault tools are Coming Soon. Written lessons and sample JSON are live.",
}

export default function ToolsComingSoonPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3">
          Coming Soon
        </p>
        <h1 className="text-4xl font-extrabold text-white mb-4">No tools on this aisle yet</h1>
        <p className="text-slate-400 text-lg mb-8">
          There is no webhook debugger, prompt sandbox, or agent console here. We will not
          pretend otherwise. {LESSON_COUNT} written lessons and {SAMPLE_JSON_COUNT} sample
          JSON files are the usable shelf today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/lessons"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 text-sm font-semibold"
          >
            Read the lessons
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 text-slate-300 hover:text-white px-5 py-3 text-sm font-semibold"
          >
            Pack downloads — Coming Soon
          </Link>
        </div>
        <HumorBreak tag="automation" />
      </div>
    </main>
  )
}
