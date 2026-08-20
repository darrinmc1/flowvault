import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for every stage of your journey. Start free, upgrade when you're ready.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring FlowVault and getting started with the basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to 3 free lessons",
      "Basic progress tracking",
      "Community Discord access",
      "1 downloadable template",
      "Email support",
    ],
    missing: [
      "Pro lesson library (50+ lessons)",
      "Full template bundle",
      "Priority support",
      "Team & enterprise features",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "one-time",
    description: "Everything you need to master FlowVault and ship faster than ever.",
    cta: "Buy Pro Bundle",
    ctaHref: "/products",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Full lesson library (50+ lessons)",
      "Complete template bundle (20+ templates)",
      "XP badges & achievement system",
      "Lifetime updates included",
      "Priority email support",
      "Private Pro community channel",
    ],
    missing: [
      "Team & enterprise features",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per team",
    description: "Tailored solutions for teams and organizations that need more.",
    cta: "Contact Us",
    ctaHref: "mailto:hello@flowvault.io",
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited team seats",
      "Custom onboarding & training",
      "Dedicated account manager",
      "SLA & uptime guarantee",
      "Custom integrations",
      "Invoice billing available",
    ],
    missing: [],
  },
]

const comparisonRows = [
  { feature: "Free lessons", free: "3", pro: "50+", enterprise: "50+" },
  { feature: "Downloadable templates", free: "1", pro: "20+", enterprise: "20+" },
  { feature: "Progress tracking", free: true, pro: true, enterprise: true },
  { feature: "XP & badge system", free: false, pro: true, enterprise: true },
  { feature: "Lifetime updates", free: false, pro: true, enterprise: true },
  { feature: "Priority support", free: false, pro: true, enterprise: true },
  { feature: "Private community", free: false, pro: true, enterprise: true },
  { feature: "Team seats", free: false, pro: false, enterprise: true },
  { feature: "Custom onboarding", free: false, pro: false, enterprise: true },
  { feature: "Dedicated account manager", free: false, pro: false, enterprise: true },
]

const faqs = [
  {
    q: "Is the Pro bundle really a one-time payment?",
    a: "Yes! Pay once and own it forever. You also get all future updates to the lesson library and templates at no extra cost.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, Apple Pay, and Google Pay via Stripe. Enterprise customers can also pay by invoice.",
  },
  {
    q: "Can I upgrade from Free to Pro later?",
    a: "Absolutely. Start with the Free tier and upgrade whenever you're ready. Your progress and data carry over seamlessly.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 30-day money-back guarantee on the Pro bundle, no questions asked. Just reach out to our support team.",
  },
  {
    q: "What counts as an 'Enterprise' team?",
    a: "Enterprise is designed for teams of 5 or more, or organizations that need custom integrations, SLAs, or dedicated support. Contact us and we'll tailor a plan.",
  },
  {
    q: "Are there discounts for students or non-profits?",
    a: "Yes! We offer 50% off the Pro bundle for verified students and registered non-profits. Email us with proof and we'll send you a discount code.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-4">
            Simple Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Invest in your workflow once.
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Start free, upgrade when you need more. No subscriptions, no surprises — just a one-time Pro bundle that pays for itself.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                tier.highlight
                  ? "bg-violet-600/10 border-violet-500/50 shadow-lg shadow-violet-500/10"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-violet-500 text-white">
                  {tier.badge}
                </span>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1">/ {tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
                {tier.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5">✕</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  tier.highlight
                    ? "bg-violet-600 hover:bg-violet-500 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Full Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-slate-300 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 text-violet-300 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 text-slate-300 font-semibold">Enterprise</th>
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
                    <td className="py-3 px-6 text-slate-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <span className="text-green-400">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-slate-300">{row.free}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <span className="text-green-400">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-violet-300 font-semibold">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <span className="text-green-400">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-slate-300">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center bg-violet-600/10 border border-violet-500/30 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to level up your workflow?</h2>
          <p className="text-slate-400 mb-8">
            Join thousands of builders who use FlowVault to ship smarter. Start free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-8 rounded-xl transition-all"
            >
              Get Started Free
            </Link>
            <Link
              href="/products"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl border border-white/10 transition-all"
            >
              View Pro Bundle
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
