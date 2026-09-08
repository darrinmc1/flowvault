import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Start free and upgrade when you're ready.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started and exploring the basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlighted: false,
    features: [
      "Access to 5 free lessons",
      "Basic progress tracking",
      "Community access",
      "Email support",
      "1 active module at a time",
    ],
    missing: [
      "Full lesson library",
      "XP & badge system",
      "Priority support",
      "Downloadable resources",
      "Early access to new content",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "Everything you need to master your craft and track real progress.",
    cta: "Start Pro — $12/mo",
    ctaHref: "/sign-up",
    highlighted: true,
    features: [
      "Full lesson library (50+ lessons)",
      "XP & badge system",
      "Advanced progress tracking",
      "Priority email support",
      "Unlimited active modules",
      "Downloadable resources",
      "Early access to new content",
      "Monthly live Q&A sessions",
    ],
    missing: [],
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For teams who want to learn and grow together.",
    cta: "Contact Us",
    ctaHref: "/about",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team progress dashboard",
      "Shared badge leaderboard",
      "Dedicated account manager",
      "Custom onboarding session",
      "Bulk seat discounts",
      "SSO & admin controls",
    ],
    missing: [],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-6">
            Simple Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Invest in your growth
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Start free, upgrade when you&apos;re ready. No hidden fees, no long-term contracts — cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border flex flex-col ${
                tier.highlighted
                  ? "bg-indigo-600/20 border-indigo-500/60 shadow-lg shadow-indigo-500/10 relative"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold bg-indigo-500 text-white shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1">/{tier.period}</span>
                </div>
              </div>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all mb-8 ${
                  tier.highlighted
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
                {tier.missing.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 shrink-0">✗</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-white">Full Feature Comparison</h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="text-left px-6 py-4 text-slate-400 font-semibold">Feature</th>
                  <th className="text-center px-4 py-4 text-slate-400 font-semibold">Free</th>
                  <th className="text-center px-4 py-4 text-indigo-300 font-semibold">Pro</th>
                  <th className="text-center px-4 py-4 text-slate-400 font-semibold">Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Lessons available", "5", "50+", "50+"],
                  ["Progress tracking", "Basic", "Advanced", "Advanced"],
                  ["XP & badges", "✗", "✓", "✓"],
                  ["Downloadable resources", "✗", "✓", "✓"],
                  ["Priority support", "✗", "✓", "✓"],
                  ["Early access to content", "✗", "✓", "✓"],
                  ["Live Q&A sessions", "✗", "✓", "✓"],
                  ["Team dashboard", "✗", "✗", "✓"],
                  ["Dedicated account manager", "✗", "✗", "✓"],
                  ["SSO & admin controls", "✗", "✗", "✓"],
                ].map(([feature, free, pro, team]) => (
                  <tr key={feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-slate-300">{feature}</td>
                    <td className="px-4 py-4 text-center text-slate-400">{free}</td>
                    <td className="px-4 py-4 text-center text-indigo-300 font-medium">{pro}</td>
                    <td className="px-4 py-4 text-center text-slate-400">{team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes. You can cancel your subscription at any time from your account settings. You'll retain access until the end of your billing period.",
              },
              {
                q: "Is there a free trial for Pro?",
                a: "The Free plan lets you explore the platform with no time limit. When you're ready to unlock everything, upgrading to Pro takes seconds.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit and debit cards via Stripe. All transactions are secure and encrypted.",
              },
              {
                q: "Can I switch plans later?",
                a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4 text-center">
        <div className="max-w-xl mx-auto bg-indigo-600/20 border border-indigo-500/30 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to level up?</h2>
          <p className="text-slate-400 mb-6 text-sm">Join thousands of learners already building skills on {siteConfig.name}.</p>
          <Link
            href="/sign-up"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3 rounded-xl transition-all text-sm"
          >
            Start for Free
          </Link>
        </div>
      </section>
    </main>
  )
}
