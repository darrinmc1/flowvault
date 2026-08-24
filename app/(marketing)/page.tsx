import { siteConfig } from "@/config/site.config"
import NewsletterForm from "@/components/newsletter-form"

export default function MarketingHomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            🚀 Early Access — Limited Spots
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Automate Your Work with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              FlowVault
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            The ultimate library of battle-tested automation workflows. Stop building from scratch — browse, copy, and deploy in minutes.
          </p>

          {/* Email Capture Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-8 border border-indigo-500/20">
            <p className="text-white font-bold text-xl mb-1">Get 5 Free Workflows Instantly</p>
            <p className="text-slate-400 text-sm mb-5">
              Join 2,400+ automators. Enter your email and we'll send your free workflow pack right away — no credit card needed.
            </p>
            <NewsletterForm
              buttonLabel="Claim My Free Workflows →"
              placeholder="Enter your best email..."
            />
            <p className="text-xs text-slate-500 mt-3">🔒 No spam, ever. Unsubscribe anytime.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span>✅ 500+ ready-made workflows</span>
            <span>✅ New flows added weekly</span>
            <span>✅ Works with Zapier, Make & n8n</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Everything you need to automate faster</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">FlowVault gives you a curated, searchable vault of automation workflows so you can ship faster and work smarter.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">Deploy in Minutes</h3>
              <p className="text-slate-400 text-sm">Copy any workflow and import it directly into your automation tool. No setup headaches.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-white font-bold text-lg mb-2">Searchable Library</h3>
              <p className="text-slate-400 text-sm">Filter by tool, use case, or complexity. Find exactly what you need in seconds.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-white font-bold text-lg mb-2">New Flows Weekly</h3>
              <p className="text-slate-400 text-sm">Our team adds fresh, community-tested workflows every week. Your vault keeps growing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-10 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to reclaim your time?</h2>
          <p className="text-slate-400 mb-6">Join thousands of founders and operators who automate the boring stuff with FlowVault.</p>
          <NewsletterForm
            buttonLabel="Get Free Access →"
            placeholder="Your email address"
          />
        </div>
      </section>
    </main>
  )
}
