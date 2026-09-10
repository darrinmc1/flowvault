import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Automate your workflows,<br />
          <span className="text-indigo-500">reclaim your time.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          FlowVault connects your tools — content drafting, Telegram capture, QA review, and more — into seamless automated pipelines so your team ships faster with less manual work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-colors"
          >
            Get started free
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-base transition-colors"
          >
            See all workflows
          </Link>
        </div>

        {/* Workflow example cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
            <div className="text-3xl">✍️</div>
            <h3 className="font-bold text-white text-base">Content Drafting</h3>
            <p className="text-sm text-slate-400">Auto-generate first drafts from briefs and publish-ready outlines in seconds.</p>
            <span className="mt-auto inline-block text-xs font-semibold text-indigo-400 bg-indigo-950 rounded-full px-3 py-1 w-fit">Save 10 hrs/week</span>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
            <div className="text-3xl">📲</div>
            <h3 className="font-bold text-white text-base">Telegram Capture</h3>
            <p className="text-sm text-slate-400">Instantly log ideas, links, and voice notes from Telegram into your knowledge base.</p>
            <span className="mt-auto inline-block text-xs font-semibold text-emerald-400 bg-emerald-950 rounded-full px-3 py-1 w-fit">Zero inbox clutter</span>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
            <div className="text-3xl">🔍</div>
            <h3 className="font-bold text-white text-base">QA Review</h3>
            <p className="text-sm text-slate-400">Run automated quality checks on copy, code, and assets before they ever reach a client.</p>
            <span className="mt-auto inline-block text-xs font-semibold text-amber-400 bg-amber-950 rounded-full px-3 py-1 w-fit">Cut revision rounds by 60%</span>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
            <div className="text-3xl">🔄</div>
            <h3 className="font-bold text-white text-base">Cross-Tool Sync</h3>
            <p className="text-sm text-slate-400">Keep Notion, Slack, and your CRM in sync automatically — no copy-paste, ever again.</p>
            <span className="mt-auto inline-block text-xs font-semibold text-violet-400 bg-violet-950 rounded-full px-3 py-1 w-fit">1 source of truth</span>
          </div>
        </div>
      </section>
    </main>
  )
}
