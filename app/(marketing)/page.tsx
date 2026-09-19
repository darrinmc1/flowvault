import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Automate your workflows.
          <br />
          <span className="text-indigo-500">Save hours every week.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 transition-colors"
          >
            Get Early Access
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold px-8 py-3 transition-colors"
          >
            See Products
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Loved by early users</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
          Here&apos;s what people who joined our beta are saying about FlowVault.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;FlowVault cut our onboarding workflow from 3 hours down to 20 minutes. We automated 8 manual steps and haven&apos;t looked back. It&apos;s the tool I wish existed two years ago.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                SR
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Sarah R.</p>
                <p className="text-slate-500 text-xs">Head of Ops, Stackline</p>
              </div>
            </div>
            <div className="rounded-xl bg-indigo-950/50 border border-indigo-800/40 px-4 py-3">
              <p className="text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-1">Case Study</p>
              <p className="text-slate-300 text-xs">Saved <span className="text-white font-bold">~12 hrs/week</span> by automating client onboarding across Notion, Slack &amp; HubSpot.</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;I&apos;m a solo founder and FlowVault is basically my second employee. My content pipeline, invoicing, and lead follow-ups all run on autopilot now. Genuinely game-changing.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                MK
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Marcus K.</p>
                <p className="text-slate-500 text-xs">Founder, Draftly</p>
              </div>
            </div>
            <div className="rounded-xl bg-emerald-950/50 border border-emerald-800/40 px-4 py-3">
              <p className="text-emerald-300 text-xs font-semibold uppercase tracking-wide mb-1">Case Study</p>
              <p className="text-slate-300 text-xs">Built <span className="text-white font-bold">5 automated workflows</span> in one afternoon — content scheduling, invoicing &amp; CRM sync.</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;Our team was drowning in repetitive reporting tasks. FlowVault connected our data sources and now weekly reports generate themselves. Setup took less than a day.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                JP
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Jamie P.</p>
                <p className="text-slate-500 text-xs">Data Lead, Lumio Analytics</p>
              </div>
            </div>
            <div className="rounded-xl bg-violet-950/50 border border-violet-800/40 px-4 py-3">
              <p className="text-violet-300 text-xs font-semibold uppercase tracking-wide mb-1">Case Study</p>
              <p className="text-slate-300 text-xs">Eliminated <span className="text-white font-bold">6 hrs of manual reporting</span> per week by connecting Airtable, Google Sheets &amp; Slack.</p>
            </div>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-white">500+</p>
            <p className="text-slate-500 text-sm">Beta signups</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700" />
          <div>
            <p className="text-3xl font-extrabold text-white">2,400+</p>
            <p className="text-slate-500 text-sm">Workflows created</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700" />
          <div>
            <p className="text-3xl font-extrabold text-white">18 hrs</p>
            <p className="text-slate-500 text-sm">Avg. time saved / week</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to reclaim your time?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Join hundreds of teams already automating their most tedious workflows with FlowVault.
        </p>
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-3 transition-colors"
        >
          Start for Free
        </Link>
      </section>
    </main>
  )
}
