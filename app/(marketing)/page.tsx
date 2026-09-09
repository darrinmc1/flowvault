import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import NewsletterForm from "@/components/newsletter-form"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero / Above-the-fold email capture */}
      <section className="w-full flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 bg-gradient-to-b from-slate-950 to-slate-900">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          🚀 Early-Bird Access — Limited Spots
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
          Automate Your Workflows.<br />
          <span className="text-indigo-400">Save Hours Every Week.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-4">
          FlowVault gives you battle-tested automation templates and step-by-step lessons — so you can reclaim your time and focus on what matters.
        </p>

        {/* Benefit bullets */}
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 text-sm text-slate-300">
          <li className="flex items-center gap-2"><span className="text-green-400 font-bold">✓</span> Free early-bird pricing</li>
          <li className="flex items-center gap-2"><span className="text-green-400 font-bold">✓</span> Exclusive workflow templates</li>
          <li className="flex items-center gap-2"><span className="text-green-400 font-bold">✓</span> No spam, unsubscribe anytime</li>
        </ul>

        {/* Email capture form */}
        <div className="w-full max-w-md bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl">
          <p className="text-white font-semibold text-lg mb-1">Join the waitlist — it&apos;s free</p>
          <p className="text-slate-400 text-sm mb-4">Get early access + 30% off at launch when you sign up today.</p>
          <NewsletterForm />
          <p className="text-xs text-slate-500 mt-3">🔒 Your email is safe with us. No spam, ever.</p>
        </div>
      </section>

      {/* Social proof / features strip */}
      <section className="w-full bg-slate-900 border-t border-slate-800 py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-indigo-400 mb-1">50+</p>
            <p className="text-slate-400 text-sm">Automation templates ready to use</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-indigo-400 mb-1">10 hrs</p>
            <p className="text-slate-400 text-sm">Average time saved per week</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-indigo-400 mb-1">100%</p>
            <p className="text-slate-400 text-sm">No-code — works with your existing tools</p>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="w-full flex flex-col items-center py-16 px-4 bg-slate-950">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Ready to see what&apos;s inside?</h2>
        <p className="text-slate-400 mb-8 text-center max-w-lg">Browse our free lessons and discover how FlowVault can transform the way you work.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/lessons"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors text-center"
          >
            Explore Free Lessons
          </Link>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-white font-semibold transition-colors text-center"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  )
}
