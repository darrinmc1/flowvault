import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          {siteConfig.tagline}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black font-bold px-8 py-3 text-base hover:bg-slate-200 transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 text-white font-bold px-8 py-3 text-base hover:bg-slate-800 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Loved by teams who move fast</h2>
          <p className="text-slate-400 text-lg">Real results from real users — before we even launched publicly.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              &ldquo;FlowVault cut our onboarding time in half. We went from 3-hour setup sessions to under 90 minutes — and our team actually enjoys the process now.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">SR</div>
              <div>
                <p className="text-white font-semibold text-sm">Sarah R.</p>
                <p className="text-slate-500 text-xs">Head of Operations, Meridian Labs</p>
              </div>
              <span className="ml-auto text-emerald-400 font-bold text-sm bg-emerald-400/10 px-3 py-1 rounded-full">Saved 20 hrs/week</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              &ldquo;We replaced three separate tools with FlowVault. The cost savings alone paid for a year's subscription in the first month. Genuinely can't imagine going back.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">JM</div>
              <div>
                <p className="text-white font-semibold text-sm">James M.</p>
                <p className="text-slate-500 text-xs">CTO, Stackframe Inc.</p>
              </div>
              <span className="ml-auto text-emerald-400 font-bold text-sm bg-emerald-400/10 px-3 py-1 rounded-full">Saved $1,200/mo</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              &ldquo;The learning curve was basically zero. My non-technical team was up and running in a day. FlowVault just works — and the support during beta was outstanding.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm">AL</div>
              <div>
                <p className="text-white font-semibold text-sm">Anika L.</p>
                <p className="text-slate-500 text-xs">Product Manager, Driftwood Co.</p>
              </div>
              <span className="ml-auto text-emerald-400 font-bold text-sm bg-emerald-400/10 px-3 py-1 rounded-full">Setup in 1 day</span>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              &ldquo;I was skeptical of yet another workflow tool, but FlowVault delivered. Our sprint velocity increased by 35% in the first quarter. The automation features are a game-changer.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">DK</div>
              <div>
                <p className="text-white font-semibold text-sm">David K.</p>
                <p className="text-slate-500 text-xs">Engineering Lead, Novara Systems</p>
              </div>
              <span className="ml-auto text-emerald-400 font-bold text-sm bg-emerald-400/10 px-3 py-1 rounded-full">+35% velocity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to streamline your workflow?</h2>
        <p className="text-slate-400 text-lg mb-8">Join hundreds of teams already saving time and money with FlowVault.</p>
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center rounded-xl bg-white text-black font-bold px-10 py-3 text-base hover:bg-slate-200 transition-colors"
        >
          See Pricing Plans
        </Link>
      </section>
    </main>
  )
}
