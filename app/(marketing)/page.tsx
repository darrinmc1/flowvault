import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Master Your Workflow.
          <br />
          <span className="text-indigo-500">Ship Faster.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            href="/lessons"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold transition-colors"
          >
            Browse Lessons
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Loved by builders worldwide</h2>
          <p className="text-slate-400 text-lg">Real results from real teams who use FlowVault every day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;FlowVault cut our onboarding time by <span className="text-indigo-400 font-semibold">60%</span>. New engineers are productive in days, not weeks. It&apos;s become the single source of truth for our entire eng team.&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-700 flex items-center justify-center text-white font-bold text-sm">SR</div>
              <div>
                <p className="text-white text-sm font-semibold">Sarah R.</p>
                <p className="text-slate-500 text-xs">Engineering Lead, Fintech startup</p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-3 grid grid-cols-2 gap-2">
              <div className="text-center">
                <p className="text-indigo-400 font-bold text-lg">60%</p>
                <p className="text-slate-500 text-xs">faster onboarding</p>
              </div>
              <div className="text-center">
                <p className="text-indigo-400 font-bold text-lg">3 wks</p>
                <p className="text-slate-500 text-xs">saved per hire</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;We replaced three separate tools with FlowVault and saved <span className="text-indigo-400 font-semibold">$1,200/mo</span> in SaaS costs. The structured lessons keep the whole team aligned on best practices.&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-sm">MK</div>
              <div>
                <p className="text-white text-sm font-semibold">Marcus K.</p>
                <p className="text-slate-500 text-xs">CTO, SaaS agency</p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-3 grid grid-cols-2 gap-2">
              <div className="text-center">
                <p className="text-indigo-400 font-bold text-lg">$1.2k</p>
                <p className="text-slate-500 text-xs">saved per month</p>
              </div>
              <div className="text-center">
                <p className="text-indigo-400 font-bold text-lg">3 tools</p>
                <p className="text-slate-500 text-xs">replaced</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;My team reclaims <span className="text-indigo-400 font-semibold">5+ hours a week</span> that used to go to repetitive questions. FlowVault&apos;s gamified progress keeps everyone motivated to actually finish the material.&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">AL</div>
              <div>
                <p className="text-white text-sm font-semibold">Aisha L.</p>
                <p className="text-slate-500 text-xs">Head of Product, e-commerce brand</p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-3 grid grid-cols-2 gap-2">
              <div className="text-center">
                <p className="text-indigo-400 font-bold text-lg">5 hrs</p>
                <p className="text-slate-500 text-xs">saved per week</p>
              </div>
              <div className="text-center">
                <p className="text-indigo-400 font-bold text-lg">94%</p>
                <p className="text-slate-500 text-xs">course completion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-white">2,400+</p>
            <p className="text-slate-500 text-sm">active learners</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700" />
          <div>
            <p className="text-2xl font-bold text-white">4.9 / 5</p>
            <p className="text-slate-500 text-sm">average rating</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700" />
          <div>
            <p className="text-2xl font-bold text-white">$840k+</p>
            <p className="text-slate-500 text-sm">saved by teams annually</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your team?</h2>
        <p className="text-slate-400 mb-8">Join thousands of teams already saving time and money with FlowVault.</p>
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-colors"
        >
          Start for Free
        </Link>
      </section>
    </main>
  )
}
