import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Start free, upgrade when you're ready. Save 30% with annual billing.",
}

const tiers = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for exploring FlowVault and getting started with the basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      { text: "5 lessons per month", included: true },
      { text: "Basic progress tracking", included: true },
      { text: "Community access", included: true },
      { text: "1 learning path", included: true },
      { text: "Certificates of completion", included: false },
      { text: "Offline downloads", included: false },
      { text: "Priority support", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Custom learning paths", included: false },
      { text: "Team collaboration", included: false },
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 13,
    description: "For serious learners who want unlimited access and powerful tools.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Unlimited lessons", included: true },
      { text: "Advanced progress tracking", included: true },
      { text: "Community access", included: true },
      { text: "All learning paths", included: true },
      { text: "Certificates of completion", included: true },
      { text: "Offline downloads", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom learning paths", included: false },
      { text: "Team collaboration", included: false },
    ],
  },
  {
    name: "Team",
    monthlyPrice: 49,
    annualPrice: 34,
    description: "For teams and organizations scaling knowledge across their workforce.",
    cta: "Start Team Trial",
    ctaHref: "/sign-up?plan=team",
    highlight: false,
    features: [
      { text: "Unlimited lessons", included: true },
      { text: "Advanced progress tracking", included: true },
      { text: "Community access", included: true },
      { text: "All learning paths", included: true },
      { text: "Certificates of completion", included: true },
      { text: "Offline downloads", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom learning paths", included: true },
      { text: "Team collaboration", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens when my free trial ends?",
    a: "After your 7-day free trial, you'll be charged for the plan you selected. We'll send you a reminder email 24 hours before the trial ends so you're never surprised.",
  },
  {
    q: "Is there a student or nonprofit discount?",
    a: "Absolutely. We offer 50% off Pro for verified students and nonprofits. Reach out to our support team with proof of eligibility to claim your discount.",
  },
  {
    q: "How does annual billing work?",
    a: "When you choose annual billing, you pay for 12 months upfront and save 30% compared to monthly billing. Your subscription renews automatically each year.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), as well as PayPal. All payments are processed securely through Stripe.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you're not satisfied within the first 14 days of a paid plan, contact us for a full refund — no questions asked.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm text-emerald-400 font-medium mb-6">
          <span>🎉</span>
          <span>Save 30% with annual billing</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
          Start free. Upgrade when you need more. No hidden fees, no surprises.
        </p>

        {/* Billing toggle label */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-sm text-slate-400">Monthly</span>
          <div className="relative w-12 h-6 bg-emerald-500/30 rounded-full border border-emerald-500/40 cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 bg-emerald-400 rounded-full" />
          </div>
          <span className="text-sm text-white font-medium">Annual</span>
          <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-2 py-0.5 font-semibold">Save 30%</span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-gradient-to-b from-emerald-500/20 to-slate-900/80 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                  : "bg-slate-900/60 border border-slate-700/50"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <p className="text-sm text-slate-400 mb-4">{tier.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">
                    ${tier.annualPrice === 0 ? "0" : tier.annualPrice}
                  </span>
                  <span className="text-slate-400 mb-1">/mo</span>
                </div>
                {tier.annualPrice > 0 && (
                  <p className="text-xs text-slate-500 mt-1">
                    Billed annually · <span className="line-through">${tier.monthlyPrice}/mo</span> monthly
                  </p>
                )}
                {tier.annualPrice === 0 && (
                  <p className="text-xs text-slate-500 mt-1">Free forever</p>
                )}
              </div>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all mb-8 ${
                  tier.highlight
                    ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-sm">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        feature.included
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-800 text-slate-600"
                      }`}
                    >
                      {feature.included ? "✓" : "✕"}
                    </span>
                    <span className={feature.included ? "text-slate-200" : "text-slate-600"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Full feature comparison</h2>
        <p className="text-slate-400 text-center mb-10">Everything you need to make the right choice.</p>

        <div className="overflow-x-auto rounded-2xl border border-slate-700/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50 bg-slate-900/80">
                <th className="text-left p-4 text-slate-400 font-medium w-1/2">Feature</th>
                {tiers.map((tier) => (
                  <th key={tier.name} className="p-4 text-center font-bold text-white">
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Lessons per month", values: ["5", "Unlimited", "Unlimited"] },
                { label: "Learning paths", values: ["1", "All", "All + Custom"] },
                { label: "Progress tracking", values: ["Basic", "Advanced", "Advanced"] },
                { label: "Certificates", values: ["—", "✓", "✓"] },
                { label: "Offline downloads", values: ["—", "✓", "✓"] },
                { label: "Community access", values: ["✓", "✓", "✓"] },
                { label: "Priority support", values: ["—", "✓", "✓"] },
                { label: "Advanced analytics", values: ["—", "✓", "✓"] },
                { label: "Custom learning paths", values: ["—", "—", "✓"] },
                { label: "Team collaboration", values: ["—", "—", "✓"] },
                { label: "Team seats", values: ["1", "1", "Up to 25"] },
                { label: "SSO / SAML", values: ["—", "—", "✓"] },
              ].map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-slate-800/50 ${
                    i % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/10"
                  }`}
                >
                  <td className="p-4 text-slate-300">{row.label}</td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={`p-4 text-center ${
                        val === "✓" ? "text-emerald-400" : val === "—" ? "text-slate-600" : "text-slate-200"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why teams choose FlowVault</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "⚡",
              title: "Learn faster",
              desc: "Structured paths and bite-sized lessons help you retain knowledge 3× faster than traditional courses.",
            },
            {
              icon: "📊",
              title: "Track everything",
              desc: "Detailed analytics show exactly where you're improving and where to focus next — no guesswork.",
            },
            {
              icon: "🏆",
              title: "Stay motivated",
              desc: "XP, badges, and streaks keep you coming back. Celebrate milestones and build lasting habits.",
            },
          ].map((prop) => (
            <div key={prop.title} className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">{prop.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
              <p className="text-sm text-slate-400">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Frequently asked questions</h2>
        <p className="text-slate-400 text-center mb-10">Still have questions? <Link href="/about" className="text-emerald-400 hover:underline">Contact us</Link> — we're happy to help.</p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-24 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-500/20 to-slate-900/60 border border-emerald-500/30 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to level up your skills?</h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Join thousands of learners already using FlowVault. Start free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 px-8 rounded-xl transition-all"
            >
              Get started for free
            </Link>
            <Link
              href="/sign-up?plan=pro"
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-xl border border-slate-600 transition-all"
            >
              Start Pro trial
            </Link>
          </div>
          <p className="text-xs text-slate-500 mt-4">7-day free trial on Pro · Cancel anytime · 14-day money-back guarantee</p>
        </div>
      </section>
    </main>
  )
}
