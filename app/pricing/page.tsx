import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Save 40+ hours per month with FlowVault. Start free, upgrade when you're ready.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for exploring FlowVault and getting started.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      { text: "3 lessons per month", included: true },
      { text: "Basic progress tracking", included: true },
      { text: "Community access", included: true },
      { text: "1 workflow template", included: true },
      { text: "Email support", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Unlimited lessons", included: false },
      { text: "Priority support", included: false },
      { text: "Custom integrations", included: false },
      { text: "Team collaboration", included: false },
    ],
    roi: null,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For individuals serious about mastering their workflow.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Unlimited lessons", included: true },
      { text: "Full progress tracking & XP", included: true },
      { text: "Community access", included: true },
      { text: "50+ workflow templates", included: true },
      { text: "Priority email support", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Saves ~40 hours/month", included: true },
      { text: "Priority support", included: false },
      { text: "Custom integrations", included: false },
      { text: "Team collaboration", included: false },
    ],
    roi: {
      stat: "~40 hrs",
      label: "saved per month",
      sub: "At $50/hr, that's $2,000/mo in recovered time.",
    },
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For teams that want to move faster together.",
    cta: "Start Team Trial",
    ctaHref: "/sign-up?plan=team",
    highlight: false,
    badge: "Best Value for Teams",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 10 team members", included: true },
      { text: "Team progress dashboard", included: true },
      { text: "Unlimited workflow templates", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Saves ~100 hrs/month per team", included: true },
      { text: "Custom integrations", included: true },
      { text: "Team collaboration tools", included: true },
      { text: "SLA & priority support", included: true },
    ],
    roi: {
      stat: "~100 hrs",
      label: "saved per team/month",
      sub: "At $50/hr across your team, that's $5,000/mo back.",
    },
  },
]

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel anytime from your account settings — no questions asked, no hidden fees.",
  },
  {
    q: "Is there a free trial?",
    a: "Pro and Team plans include a 7-day free trial. No credit card required to start.",
  },
  {
    q: "How does FlowVault save me 40 hours a month?",
    a: "FlowVault replaces scattered docs, repetitive onboarding, and manual tracking with structured lessons and automated progress workflows — cutting busywork dramatically.",
  },
  {
    q: "What happens to my data if I downgrade?",
    a: "Your progress and data are always preserved. Downgrading limits future access but never deletes what you've earned.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — annual plans save you 20%. Contact us or select annual billing at checkout.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Transparent Pricing
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
          Invest in your workflow.
          <br />Get back your time.
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
          FlowVault users save an average of <span className="text-indigo-400 font-semibold">40 hours per month</span>. At any hourly rate, the math is obvious.
        </p>
        <div className="flex items-center justify-center gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-1">✓ <span>No credit card to start</span></span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1">✓ <span>Cancel anytime</span></span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1">✓ <span>7-day free trial on paid plans</span></span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col gap-6 ${
                tier.highlight
                  ? "border-indigo-500 bg-indigo-950/40 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                  : "border-slate-800 bg-slate-900/40"
              }`}
            >
              {tier.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${
                    tier.highlight
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">{tier.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-500 mb-2">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              {tier.roi && (
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-indigo-400">{tier.roi.stat}</p>
                  <p className="text-xs text-indigo-300 font-semibold uppercase tracking-wide">{tier.roi.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{tier.roi.sub}</p>
                </div>
              )}

              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        f.included
                          ? "bg-indigo-500/20 text-indigo-400"
                          : "bg-slate-800 text-slate-600"
                      }`}
                    >
                      {f.included ? "✓" : "✕"}
                    </span>
                    <span className={f.included ? "text-slate-200" : "text-slate-600"}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-bold text-sm transition-all ${
                  tier.highlight
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Full Feature Comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60">
                <th className="text-left px-6 py-4 text-slate-400 font-semibold w-1/2">Feature</th>
                <th className="text-center px-4 py-4 text-slate-400 font-semibold">Free</th>
                <th className="text-center px-4 py-4 text-indigo-400 font-bold">Pro</th>
                <th className="text-center px-4 py-4 text-slate-400 font-semibold">Team</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Lessons per month", "3", "Unlimited", "Unlimited"],
                ["Workflow templates", "1", "50+", "Unlimited"],
                ["Progress tracking & XP", "Basic", "Full", "Full + Team"],
                ["Analytics dashboard", "—", "✓", "✓ Advanced"],
                ["Community access", "✓", "✓", "✓"],
                ["Email support", "—", "Priority", "Dedicated manager"],
                ["Custom integrations", "—", "—", "✓"],
                ["Team collaboration", "—", "—", "Up to 10 members"],
                ["SLA guarantee", "—", "—", "✓"],
                ["Estimated time saved/mo", "—", "~40 hrs", "~100 hrs/team"],
              ].map(([feature, free, pro, team], i) => (
                <tr
                  key={feature}
                  className={`border-b border-slate-800/60 ${
                    i % 2 === 0 ? "bg-slate-900/20" : "bg-transparent"
                  }`}
                >
                  <td className="px-6 py-4 text-slate-300 font-medium">{feature}</td>
                  <td className="px-4 py-4 text-center text-slate-500">{free}</td>
                  <td className="px-4 py-4 text-center text-indigo-300 font-semibold">{pro}</td>
                  <td className="px-4 py-4 text-center text-slate-300">{team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ROI Calculator Banner */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">What's your time worth?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            FlowVault Pro costs <span className="text-white font-semibold">$29/month</span>. If it saves you just 1 hour at $30/hr, it pays for itself. Most users save 40+.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900/60 rounded-xl p-5">
              <p className="text-3xl font-extrabold text-indigo-400">40 hrs</p>
              <p className="text-xs text-slate-500 mt-1">Average monthly time saved</p>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-5">
              <p className="text-3xl font-extrabold text-indigo-400">$2,000</p>
              <p className="text-xs text-slate-500 mt-1">Value recovered at $50/hr</p>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-5">
              <p className="text-3xl font-extrabold text-indigo-400">68×</p>
              <p className="text-xs text-slate-500 mt-1">Average ROI on Pro plan</p>
            </div>
          </div>
          <Link
            href="/sign-up?plan=pro"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
          >
            Start Saving Time Today →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-28">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-slate-800 rounded-xl p-6 bg-slate-900/30">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center pb-24 px-4">
        <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
        <Link
          href="/about"
          className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 text-sm transition-colors"
        >
          Learn more about FlowVault →
        </Link>
      </section>
    </main>
  )
}
