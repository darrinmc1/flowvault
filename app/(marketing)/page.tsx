import { siteConfig } from "@/config/site.config"
import Link from "next/link"

const testimonials = [
  {
    quote: "Saved 15 hours/week on manual reporting. Our team finally has time to focus on what matters.",
    author: "Sarah K.",
    role: "Head of Operations, TechFlow",
    metric: "15 hrs/week saved"
  },
  {
    quote: "Increased our conversion rate by 34% in the first month. The insights are incredibly actionable.",
    author: "Marcus R.",
    role: "Growth Lead, Launchpad",
    metric: "34% conversion lift"
  },
  {
    quote: "Cut our onboarding time from 2 weeks to 3 days. Customers are seeing value faster than ever.",
    author: "Priya M.",
    role: "CEO, Streamline SaaS",
    metric: "5x faster onboarding"
  }
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          {siteConfig.tagline}
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-colors"
          >
            Get Early Access
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            See How It Works
          </Link>
        </div>

        {/* Testimonials */}
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 uppercase tracking-widest mb-6 font-medium">Trusted by early adopters</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 text-left"
              >
                <span className="inline-block self-start rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-emerald-400 tracking-wide">
                  {t.metric}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
