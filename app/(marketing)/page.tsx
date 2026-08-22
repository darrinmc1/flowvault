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
          <span className="text-indigo-500">Reclaim your time.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
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
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold px-8 py-3 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Trusted by early adopters</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
          Real results from real people who joined our beta program.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;FlowVault cut my weekly reporting work from 12 hours down to under 1. I genuinely couldn&rsquo;t believe how fast the automations ran on the first try.&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">SR</div>
              <div>
                <p className="text-white text-sm font-semibold">Sarah R.</p>
                <p className="text-slate-500 text-xs">Operations Manager, TechScale</p>
              </div>
            </div>
            <div className="rounded-lg bg-indigo-950/60 border border-indigo-800/40 px-3 py-2 text-indigo-300 text-xs font-medium">
              ⏱ Saved 11 hours/week
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;We replaced three separate tools with FlowVault. Our team onboarded in an afternoon and we were shipping automations the same day. Reliability has been rock-solid.&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">MK</div>
              <div>
                <p className="text-white text-sm font-semibold">Marcus K.</p>
                <p className="text-slate-500 text-xs">Head of Engineering, Loopify</p>
              </div>
            </div>
            <div className="rounded-lg bg-emerald-950/60 border border-emerald-800/40 px-3 py-2 text-emerald-300 text-xs font-medium">
              💰 Reduced tooling costs by 60%
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;As a solo founder I was drowning in manual tasks. FlowVault gave me back 15 hours every week — that&rsquo;s basically a part-time employee I didn&rsquo;t have to hire.&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm">AL</div>
              <div>
                <p className="text-white text-sm font-semibold">Anika L.</p>
                <p className="text-slate-500 text-xs">Founder, Driftly</p>
              </div>
            </div>
            <div className="rounded-lg bg-violet-950/60 border border-violet-800/40 px-3 py-2 text-violet-300 text-xs font-medium">
              🚀 Saved 15 hours/week
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to automate your workflow?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join hundreds of teams already saving time with {siteConfig.name}.
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
