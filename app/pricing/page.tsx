import { siteConfig } from "@/config/site.config"
import Link from "next/link"

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
      "Community badge (Starter)",
      "Newsletter & updates",
      "Limited template library",
    ],
    missing: [
      "Pro lesson bundles",
      "Full template library",
      "Priority support",
      "Team & enterprise features",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "one-time",
    description: "Everything you need to master FlowVault and unlock the full template bundle.",
    cta: "Buy Pro Bundle",
    ctaHref: "/products",
    highlight: true,
    features: [
      "All free tier features",
      "Unlimited lesson access",
      "Full template library (50+ templates)",
      "Exclusive Pro badge",
      "Lifetime updates included",
      "Priority email support",
    ],
    missing: [
      "Team & enterprise features",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per team",
    description: "Tailored solutions for teams and organizations that need more power and control.",
    cta: "Contact Us",
    ctaHref: "/about",
    highlight: false,
    features: [
      "Everything in Pro",
      "Team seat management",
      "Custom onboarding & training",
      "Dedicated account manager",
      "SLA & priority support",
      "Custom integrations",
    ],
    missing: [],
  },
]

const comparisonRows = [
  { feature: "Free lessons", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Template library", free: "Limited", pro: "50+ templates", enterprise: "50+ templates" },
  { feature: "Progress tracking", free: true, pro: true, enterprise: true },
  { feature: "Badges & XP", free: "Starter only", pro: "All tiers", enterprise: "All tiers" },
  { feature: "Lifetime updates", free: false, pro: true, enterprise: true },
  { feature: "Priority support", free: false, pro: true, enterprise: true },
  { feature: "Team management", free: false, pro: false, enterprise: true },
  { feature: "Custom integrations", free: false, pro: false, enterprise: true },
  { feature: "Dedicated account manager", free: false, pro: false, enterprise: true },
]

const faqs = [
  {
    q: "Is the Free tier really free forever?",
    a: "Yes. The Free tier never expires. You get access to 3 lessons, basic progress tracking, and community features at no cost — no credit card required.",
  },
  {
    q: "What does 'one-time' mean for Pro?",
    a: "You pay once and own it forever. There are no recurring subscription fees. All future updates to the Pro bundle are included at no extra charge.",
  },
  {
    q: "Can I upgrade from Free to Pro later?",
    a: "Absolutely. You can start on the Free tier and upgrade to Pro at any time. Your progress and badges carry over seamlessly.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards via Stripe. Payments are processed securely and you'll receive a receipt by email.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. We offer a 30-day money-back guarantee on the Pro bundle. If you're not satisfied, contact us and we'll make it right.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Enterprise pricing is custom-quoted based on team size, usage, and required integrations. Reach out via our contact page and we'll get back to you within one business day.",
  },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-slate-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <XIcon />
  return <span className="text-sm text-slate-300">{value}</span>
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Simple pricing,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              no surprises
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Start for free and upgrade when you're ready. One-time payment for Pro — no subscriptions, no hidden fees.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-gradient-to-b from-emerald-900/40 to-slate-900/60 border border-emerald-500/50 shadow-lg shadow-emerald-900/30"
                  : "bg-slate-900/50 border border-slate-800"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
                {tier.missing.map((f) => (
                  <li key={f} className="flex items-start gap-3 opacity-40">
                    <XIcon />
                    <span className="text-sm text-slate-400">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  tier.highlight
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:opacity-90"
                    : "border border-slate-700 text-white hover:border-slate-500 hover:bg-slate-800"
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Full feature{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">comparison</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium text-sm">Feature</th>
                  <th className="text-center py-4 px-6 text-slate-300 font-semibold">Free</th>
                  <th className="text-center py-4 px-6 text-emerald-400 font-semibold">Pro</th>
                  <th className="text-center py-4 px-6 text-slate-300 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-800/50 ${
                      i % 2 === 0 ? "bg-slate-900/20" : "bg-transparent"
                    }`}
                  >
                    <td className="py-4 px-6 text-sm text-slate-300 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center"><CellValue value={row.free} /></div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center"><CellValue value={row.pro} /></div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center"><CellValue value={row.enterprise} /></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-800/40 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-400 mb-8">
            Join thousands of learners already using FlowVault. Start free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition-all"
            >
              Start for Free
            </Link>
            <Link
              href="/products"
              className="border border-slate-700 text-white font-semibold py-3 px-8 rounded-xl hover:border-slate-500 hover:bg-slate-800 transition-all"
            >
              View Pro Bundle
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
