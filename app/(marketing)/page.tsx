import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Automate Anything with
          <span className="text-indigo-400"> Ready-Made n8n Workflows</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          FlowVault gives you a growing library of production-ready n8n workflow templates — download, import, and run in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all"
          >
            Browse Workflows
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-slate-700 hover:border-indigo-500 text-slate-300 font-semibold transition-all"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How It Works</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From zero to running automation in under 5 minutes — no coding required.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-xl font-bold mb-4">
              1
            </div>
            <div className="text-3xl mb-3">📥</div>
            <h3 className="text-white font-bold text-lg mb-2">Download JSON</h3>
            <p className="text-slate-400 text-sm">
              Pick a workflow from the library and download the n8n-compatible JSON file instantly.
            </p>
          </div>
          {/* Step 2 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-xl font-bold mb-4">
              2
            </div>
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-white font-bold text-lg mb-2">Open n8n</h3>
            <p className="text-slate-400 text-sm">
              Log in to your n8n instance — cloud or self-hosted. Any version works.
            </p>
          </div>
          {/* Step 3 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-xl font-bold mb-4">
              3
            </div>
            <div className="text-3xl mb-3">📂</div>
            <h3 className="text-white font-bold text-lg mb-2">Import Workflow</h3>
            <p className="text-slate-400 text-sm">
              Use n8n&apos;s built-in import feature to load the JSON file — your workflow appears instantly.
            </p>
          </div>
          {/* Step 4 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-xl font-bold mb-4">
              4
            </div>
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-bold text-lg mb-2">Customize &amp; Run</h3>
            <p className="text-slate-400 text-sm">
              Add your API keys, tweak any steps to fit your needs, then activate and let it run.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all"
          >
            Get Your First Workflow →
          </Link>
        </div>
      </section>

      {/* Features / Value Props */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Why FlowVault?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Stop building automations from scratch. Start with battle-tested templates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl mb-4">🗂️</div>
            <h3 className="text-white font-bold text-lg mb-2">Growing Library</h3>
            <p className="text-slate-400 text-sm">
              New workflows added regularly across categories like marketing, ops, data, and more.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-white font-bold text-lg mb-2">Production-Ready</h3>
            <p className="text-slate-400 text-sm">
              Every workflow is tested, documented, and built to handle real-world edge cases.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-white font-bold text-lg mb-2">Learn As You Go</h3>
            <p className="text-slate-400 text-sm">
              Each template comes with a walkthrough so you understand exactly how it works.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to automate your workflow?
        </h2>
        <p className="text-slate-400 text-lg mb-8">
          Join FlowVault and get instant access to the full workflow library.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg transition-all"
        >
          See Pricing Plans
        </Link>
      </section>
    </main>
  )
}
