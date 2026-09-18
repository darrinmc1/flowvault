import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Start free, upgrade when you're ready. No hidden fees, cancel anytime.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring FlowVault and getting started with the basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlighted: false,
    badge: null,
    features: [
      "Access to 5 free lessons",
      "Basic progress tracking",
      "Community forum access",
      "1 learning path",
      "Email support",
    ],
    missing: [
      "Unlimited lessons",
      "Advanced analytics",
      "Certificates of completion",
      "Priority support",
      "Offline access",
      "Custom learning paths",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Everything you need to master new skills and track your growth.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up?plan=pro",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited lessons & modules",
      "Full progress tracking & XP",
      "Community forum access",
      "Unlimited learning paths",
      "Priority email support",
      "Advanced analytics dashboard",
      "Certificates of completion",
      "Offline access (mobile)",
    ],
    missing: [
      "Custom learning paths",
      "Team management",
    ],
  },
  {
    name: "Teams",
    price: "$49",
    period: "per month",
    description: "Empower your whole team with collaborative learning and admin controls.",
    cta: "Start Teams Trial",
    ctaHref: "/sign-up?plan=teams",
    highlighted: false,
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Custom learning paths",
      "Team progress dashboard",
      "Admin controls & roles",
      "Dedicated account manager",
      "SSO / SAML support",
      "SLA-backed support",
    ],
    missing: [],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately and we'll prorate any billing differences.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Pro comes with a 7-day free trial — no credit card required. Teams includes a 14-day free trial so your whole team can evaluate FlowVault risk-free.",
  },
  {
    q: "What's your refund policy?",
    a: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied for any reason, contact us within 30 days of your first payment and we'll issue a full refund.",
  },
  {
    q: "Do you offer discounts for students or nonprofits?",
    a: "Yes! We offer 50% off Pro for verified students and nonprofits. Reach out to our support team with proof of eligibility and we'll apply the discount to your account.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your progress, XP, and certificates are saved for 90 days after cancellation. You can export your data at any time from your account settings before or after cancelling.",
  },
  {
    q: "Can I add more than 10 members to a Teams plan?",
    a: "Absolutely. For teams larger than 10, contact us for a custom Enterprise quote with volume pricing, dedicated infrastructure, and white-glove onboarding.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-slate-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
          30-day money-back guarantee on all paid plans
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-2">
          Start free. Upgrade when you're ready. No hidden fees, no surprises.
        </p>
        <p className="text-sm text-slate-500">Cancel anytime — we make it easy.</p>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-to-b from-violet-600/20 to-violet-900/10 border-2 border-violet-500/60 shadow-xl shadow-violet-900/30"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${
                    tier.highlighted
                      ? "bg-violet-500 text-white"
                      : "bg-white/10 text-slate-300 border border-white/20"
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1">/{tier.period}</span>
                </div>
              </div>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all mb-8 ${
                  tier.highlighted
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/40"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                {tier.cta}
              </Link>

              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">What's included</p>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {tier.missing.length > 0 && (
                  <ul className="space-y-2.5">
                    {tier.missing.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-0.5 shrink-0">✕</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Full Feature Comparison</h2>
        <p className="text-slate-400 text-center mb-10 text-sm">See exactly what you get with each plan.</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-6 py-4 text-slate-300 font-semibold w-1/2">Feature</th>
                <th className="text-center px-4 py-4 text-slate-300 font-semibold">Free</th>
                <th className="text-center px-4 py-4 text-violet-300 font-semibold">Pro</th>
                <th className="text-center px-4 py-4 text-slate-300 font-semibold">Teams</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Lessons available", "5", "Unlimited", "Unlimited"],
                ["Learning paths", "1", "Unlimited", "Unlimited + Custom"],
                ["Progress tracking", "Basic", "Advanced", "Advanced + Team"],
                ["XP & Badges", "✓", "✓", "✓"],
                ["Certificates", "✕", "✓", "✓"],
                ["Offline access", "✕", "✓", "✓"],
                ["Community forum", "✓", "✓", "✓"],
                ["Email support", "Standard", "Priority", "Dedicated"],
                ["Team dashboard", "✕", "✕", "✓"],
                ["Admin controls", "✕", "✕", "✓"],
                ["SSO / SAML", "✕", "✕", "✓"],
                ["Money-back guarantee", "—", "30 days", "30 days"],
              ].map(([feature, free, pro, teams], i) => (
                <tr
                  key={feature}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  }`}
                >
                  <td className="px-6 py-3.5 text-slate-300">{feature}</td>
                  <td className="px-4 py-3.5 text-center text-slate-500">{free}</td>
                  <td className="px-4 py-3.5 text-center text-violet-300 font-medium">{pro}</td>
                  <td className="px-4 py-3.5 text-center text-slate-300">{teams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Money-back Guarantee Banner */}
      <section className="px-4 pb-24 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="text-5xl shrink-0">🛡️</div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We're confident you'll love FlowVault. But if you're not completely satisfied within your first 30 days,
              just reach out and we'll refund every penny — no questions asked, no hoops to jump through.
            </p>
          </div>
          <Link
            href="/sign-up"
            className="shrink-0 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap"
          >
            Try Risk-Free
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-28 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-center mb-10 text-sm">Still have questions? <Link href="/about" className="text-violet-400 hover:underline">Contact us</Link> — we're happy to help.</p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-28 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to level up?</h2>
        <p className="text-slate-400 mb-8">Join thousands of learners already building skills with FlowVault. Start free today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-violet-900/40"
          >
            Get Started Free
          </Link>
          <Link
            href="/lessons"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all border border-white/10"
          >
            Browse Lessons
          </Link>
        </div>
      </section>
    </main>
  )
}
