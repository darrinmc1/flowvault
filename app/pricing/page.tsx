import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for every stage of your journey. Choose the plan that fits your needs.",
}

const tiers = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for getting started and exploring the basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to 5 free lessons",
      "Basic progress tracking",
      "Community forum access",
      "1 active project",
      "Email support",
    ],
    missing: [
      "Unlimited lessons",
      "Advanced analytics",
      "Priority support",
      "Certificates of completion",
      "Team collaboration",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "Everything you need to level up your skills fast.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Unlimited lessons & modules",
      "Full progress tracking & XP",
      "Community forum access",
      "Unlimited projects",
      "Priority email support",
      "Advanced analytics dashboard",
      "Certificates of completion",
      "Early access to new content",
    ],
    missing: [
      "Team collaboration",
    ],
  },
  {
    name: "Team",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "Collaborate and grow together with your entire team.",
    cta: "Start Team Trial",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team analytics & reporting",
      "Shared project workspaces",
      "Dedicated account manager",
      "Custom onboarding session",
      "SSO & advanced security",
      "SLA-backed support",
    ],
    missing: [],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Absolutely. Both Pro and Team plans come with a 14-day free trial — no credit card required. Cancel anytime before the trial ends.",
  },
  {
    q: "How does the annual discount work?",
    a: "When you choose annual billing you pay for 10 months and get 2 months free — roughly a 20% saving compared to monthly billing.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, Amex) as well as Apple Pay and Google Pay via Stripe.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel at any time from your account settings. You'll retain access until the end of your current billing period.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact support and we'll make it right.",
  },
]

const comparisonRows = [
  { feature: "Free lessons", free: "5", pro: "Unlimited", team: "Unlimited" },
  { feature: "Progress tracking", free: "Basic", pro: "Advanced", team: "Advanced" },
  { feature: "XP & badges", free: "✓", pro: "✓", team: "✓" },
  { feature: "Community access", free: "✓", pro: "✓", team: "✓" },
  { feature: "Certificates", free: "—", pro: "✓", team: "✓" },
  { feature: "Analytics dashboard", free: "—", pro: "✓", team: "✓" },
  { feature: "Priority support", free: "—", pro: "✓", team: "✓" },
  { feature: "Team members", free: "—", pro: "—", team: "Up to 10" },
  { feature: "Team workspaces", free: "—", pro: "—", team: "✓" },
  { feature: "Dedicated manager", free: "—", pro: "—", team: "✓" },
  { feature: "SSO & security", free: "—", pro: "—", team: "✓" },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-slate-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
          Simple, transparent pricing
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Invest in your growth
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
          Start free, upgrade when you're ready. No hidden fees, no surprises — just clear value at every tier.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-2 py-2 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium cursor-pointer">Monthly</span>
          <span className="px-4 py-1.5 rounded-full text-slate-400 text-sm font-medium cursor-pointer hover:text-white transition-colors">Annual <span className="text-green-400 font-semibold">–20%</span></span>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-gradient-to-b from-indigo-600/30 to-purple-600/10 border border-indigo-500/50 shadow-lg shadow-indigo-500/10"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">${tier.monthlyPrice}</span>
                {tier.monthlyPrice > 0 && (
                  <span className="text-slate-400 text-sm ml-1">/month</span>
                )}
                {tier.monthlyPrice === 0 && (
                  <span className="text-slate-400 text-sm ml-1">forever</span>
                )}
                {tier.annualPrice > 0 && (
                  <p className="text-green-400 text-xs mt-1">${tier.annualPrice}/mo billed annually</p>
                )}
              </div>
              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm mb-8 transition-all ${
                  tier.highlight
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
                {tier.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Full feature comparison</h2>
        <p className="text-slate-400 text-center mb-10">See exactly what's included in each plan.</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-6 py-4 text-slate-400 font-medium">Feature</th>
                <th className="text-center px-6 py-4 text-slate-400 font-medium">Free</th>
                <th className="text-center px-6 py-4 text-indigo-400 font-semibold">Pro</th>
                <th className="text-center px-6 py-4 text-slate-400 font-medium">Team</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  }`}
                >
                  <td className="px-6 py-4 text-slate-300">{row.feature}</td>
                  <td className="px-6 py-4 text-center text-slate-400">{row.free}</td>
                  <td className="px-6 py-4 text-center text-white font-medium">{row.pro}</td>
                  <td className="px-6 py-4 text-center text-slate-400">{row.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Frequently asked questions</h2>
        <p className="text-slate-400 text-center mb-10">Everything you need to know before you commit.</p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Join thousands of learners already levelling up with {siteConfig.name}. Start free, no credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Start for free
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
