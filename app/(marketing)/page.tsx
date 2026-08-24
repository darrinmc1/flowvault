import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6">
          {siteConfig.tagline}
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 transition-all"
          >
            Get Started Free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold px-8 py-3 transition-all"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Loved by teams who move fast</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Real results from real users who replaced chaos with clarity.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 leading-relaxed">
              &ldquo;FlowVault cut our onboarding time in half. New hires are productive in days, not weeks. We&apos;ve saved over <span className="text-indigo-400 font-semibold">20 hours per week</span> across the team.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-white font-bold text-sm">SR</div>
              <div>
                <p className="text-white font-semibold text-sm">Sarah R.</p>
                <p className="text-slate-500 text-xs">Head of Operations, Stackly</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 leading-relaxed">
              &ldquo;We replaced three separate tools with FlowVault. Our project delivery rate improved by <span className="text-indigo-400 font-semibold">40%</span> in the first month alone.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-sm">MK</div>
              <div>
                <p className="text-white font-semibold text-sm">Marcus K.</p>
                <p className="text-slate-500 text-xs">CTO, Driftwave Labs</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 leading-relaxed">
              &ldquo;The structured lessons and progress tracking keep my whole team aligned. We&apos;ve reduced status meetings by <span className="text-indigo-400 font-semibold">3 hours every week</span>.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center text-white font-bold text-sm">JL</div>
              <div>
                <p className="text-white font-semibold text-sm">Jamie L.</p>
                <p className="text-slate-500 text-xs">Product Lead, Novaform</p>
              </div>
            </div>
          </div>
          {/* Testimonial 4 */}
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 leading-relaxed">
              &ldquo;Switching to FlowVault was the best decision we made this year. Our team&apos;s knowledge retention score jumped <span className="text-indigo-400 font-semibold">60%</span> after just 30 days.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">AT</div>
              <div>
                <p className="text-white font-semibold text-sm">Anika T.</p>
                <p className="text-slate-500 text-xs">Learning & Dev Manager, Cruxio</p>
              </div>
            </div>
          </div>
        </div>
        {/* Social proof bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-white">500+</p>
            <p className="text-slate-500 text-sm">Teams onboarded</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700" />
          <div>
            <p className="text-3xl font-extrabold text-white">20 hrs</p>
            <p className="text-slate-500 text-sm">Saved per team / week</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700" />
          <div>
            <p className="text-3xl font-extrabold text-white">4.9 ★</p>
            <p className="text-slate-500 text-sm">Average user rating</p>
          </div>
        </div>
      </section>
    </main>
  )
}
