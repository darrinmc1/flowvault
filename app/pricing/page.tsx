import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for FlowVault. Start free, upgrade when you're ready.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started learning.",
    cta: "Get Started Free",
    href: "/sign-up",
    highlight: false,
    features: [
      "Access to 5 free lessons",
      "Basic progress tracking",
      "Community badge (Beginner)",
      "Newsletter & updates",
      "Email support",
    ],
    missing: [
      "Full lesson library",
      "XP & advanced badges",
      "Downloadable resources",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    description: "Unlock the full FlowVault experience.",
    cta: "Start Pro — $9/mo",
    href: "/sign-up?plan=pro",
    highlight: true,
    features: [
      "Full lesson library (50+ lessons)",
      "XP system & all badge tiers",
      "Advanced progress analytics",
      "Downloadable resources & cheat sheets",
      "Early access to new content",
      "Priority email support",
      "Cancel anytime",
    ],
    missing: [],
  },
  {
    name: "Lifetime",
    price: "$149",
    period: "one-time",
    description: "Pay once, own it forever. Best value.",
    cta: "Get Lifetime Access",
    href: "/sign-up?plan=lifetime",
    highlight: false,
    features: [
      "Everything in Pro",
      "Lifetime access — no recurring fees",
      "All future content included",
      "Exclusive Lifetime badge",
      "VIP support",
    ],
    missing: [],
  },
]

const faqs = [
  {
    q: "Can I cancel my Pro subscription anytime?",
    a: "Yes. Cancel anytime from your account settings — no questions asked. You keep access until the end of your billing period.",
  },
  {
    q: "What's included in the free tier?",
    a: "The free tier gives you access to 5 curated lessons, basic progress tracking, and community features. No credit card required.",
  },
  {
    q: "Is the Lifetime deal really one-time?",
    a: "Yes. Pay once and get permanent access to all current and future FlowVault content — no subscriptions, no surprises.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 7-day money-back guarantee on Pro and Lifetime purchases. Just reach out to support.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Pricing
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Simple, honest pricing
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Start free. Upgrade when you&apos;re ready. No hidden fees, no dark patterns.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-indigo-600/20 border-2 border-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-indigo-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
                {tier.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5">✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  tier.highlight
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">Full Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 pr-6 text-slate-400 font-medium">Feature</th>
                <th className="text-center py-3 px-4 text-slate-400 font-medium">Free</th>
                <th className="text-center py-3 px-4 text-indigo-400 font-semibold">Pro</th>
                <th className="text-center py-3 px-4 text-slate-400 font-medium">Lifetime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Lesson access", "5 lessons", "50+ lessons", "50+ lessons"],
                ["Progress tracking", "Basic", "Advanced", "Advanced"],
                ["XP & badges", "Beginner only", "All tiers", "All tiers + Exclusive"],
                ["Downloadable resources", "✗", "✓", "✓"],
                ["Early access to content", "✗", "✓", "✓"],
                ["Future content", "✗", "✓", "✓ (included)"],
                ["Support", "Email", "Priority email", "VIP"],
                ["Recurring payment", "None", "$9/mo", "None"],
              ].map(([feature, free, pro, lifetime]) => (
                <tr key={feature}>
                  <td className="py-3 pr-6 text-slate-300">{feature}</td>
                  <td className="py-3 px-4 text-center text-slate-400">{free}</td>
                  <td className="py-3 px-4 text-center text-indigo-300 font-medium">{pro}</td>
                  <td className="py-3 px-4 text-center text-slate-300">{lifetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-24 px-4">
        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl max-w-xl mx-auto p-10">
          <h2 className="text-2xl font-bold mb-3">Ready to level up?</h2>
          <p className="text-slate-400 mb-6 text-sm">Join hundreds of learners already using FlowVault. Start free — no credit card needed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 px-8 rounded-xl transition-all text-sm"
            >
              Get Started Free
            </Link>
            <Link
              href="/sign-up?plan=pro"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all text-sm"
            >
              Start Pro — $9/mo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
