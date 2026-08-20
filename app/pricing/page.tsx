import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { Check, X, Zap, Shield, Building2 } from "lucide-react"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for every stage of your journey. Start free, upgrade when you're ready.",
}

const tiers = [
  {
    id: "free",
    name: "Free",
    icon: Zap,
    price: 0,
    period: "forever",
    description: "Everything you need to get started and explore FlowVault.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to 5 free lessons",
      "Basic progress tracking",
      "1 downloadable template",
      "Community forum access",
      "Email support",
    ],
    missing: [
      "Full lesson library (50+ lessons)",
      "Pro template bundle (20+ templates)",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    icon: Shield,
    price: 29,
    period: "month",
    description: "Unlock the full library and pro templates to accelerate your workflow.",
    cta: "Start Pro — $29/mo",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Full lesson library (50+ lessons)",
      "Pro template bundle (20+ templates)",
      "Advanced progress analytics",
      "Priority email support",
      "Early access to new content",
      "XP badges & leaderboard",
    ],
    missing: [
      "Team collaboration",
      "Custom integrations",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    price: null,
    period: null,
    description: "Custom plans for teams and organizations that need more control.",
    cta: "Contact Sales",
    ctaHref: "/about#contact",
    highlight: false,
    features: [
      "Everything in Pro",
      "Team collaboration (unlimited seats)",
      "Custom integrations & API access",
      "Dedicated account manager",
      "SLA & uptime guarantee",
      "Custom onboarding & training",
      "Invoice billing",
    ],
    missing: [],
  },
]

const comparisonRows = [
  { label: "Free lessons", free: "5", pro: "50+", enterprise: "50+" },
  { label: "Downloadable templates", free: "1", pro: "20+", enterprise: "20+" },
  { label: "Progress tracking", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
  { label: "XP & badges", free: false, pro: true, enterprise: true },
  { label: "Priority support", free: false, pro: true, enterprise: true },
  { label: "Early access to content", free: false, pro: true, enterprise: true },
  { label: "Team collaboration", free: false, pro: false, enterprise: true },
  { label: "API & custom integrations", free: false, pro: false, enterprise: true },
  { label: "Dedicated account manager", free: false, pro: false, enterprise: true },
  { label: "Invoice billing", free: false, pro: false, enterprise: true },
]

const faqs = [
  {
    q: "Can I try Pro before paying?",
    a: "Yes — start with the Free plan and explore the core features at no cost. When you're ready to unlock the full library and pro templates, upgrading takes seconds.",
  },
  {
    q: "What's included in the Pro template bundle?",
    a: "You get 20+ professionally designed workflow templates covering productivity systems, project planning, habit tracking, and more — all ready to import and customize.",
  },
  {
    q: "Can I cancel my Pro subscription anytime?",
    a: "Absolutely. Cancel anytime from your account settings with no penalties. You'll retain Pro access until the end of your billing period.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Enterprise plans are custom-quoted based on team size, usage, and required integrations. Reach out via the Contact Sales link and we'll get back to you within one business day.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes — annual Pro billing saves you 2 months compared to monthly. Contact us or look for the annual toggle at checkout.",
  },
  {
    q: "Is my payment information secure?",
    a: "All payments are processed by Stripe, a PCI-DSS Level 1 certified provider. FlowVault never stores your card details.",
  },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-slate-600 mx-auto" />
    )
  }
  return <span className="text-sm text-slate-300">{value}</span>
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-slate-400 mb-6">
          <Zap className="w-3.5 h-3.5 text-violet-400" />
          Simple, transparent pricing
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Invest in your workflow.
          <br />Start free.
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          No hidden fees. No surprise charges. Pick the plan that fits where you are today — and upgrade when you're ready to go further.
        </p>
      </section>

      {/* Tier Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "border-violet-500/60 bg-violet-950/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    tier.highlight ? "bg-violet-500/20" : "bg-white/10"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      tier.highlight ? "text-violet-400" : "text-slate-300"
                    }`} />
                  </div>
                  <h2 className="text-xl font-bold">{tier.name}</h2>
                </div>

                <div className="mb-4">
                  {tier.price === null ? (
                    <p className="text-3xl font-bold">Custom</p>
                  ) : tier.price === 0 ? (
                    <p className="text-3xl font-bold">Free</p>
                  ) : (
                    <p className="text-3xl font-bold">
                      ${tier.price}
                      <span className="text-base font-normal text-slate-400">/{tier.period}</span>
                    </p>
                  )}
                  <p className="text-sm text-slate-400 mt-1">{tier.description}</p>
                </div>

                <Link
                  href={tier.ctaHref}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all mb-8 ${
                    tier.highlight
                      ? "bg-violet-500 hover:bg-violet-400 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  {tier.cta}
                </Link>

                <ul className="space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                  {tier.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <X className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Compare plans side by side
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-6 py-4 text-slate-400 font-medium w-1/2">Feature</th>
                <th className="text-center px-4 py-4 text-slate-300 font-semibold">Free</th>
                <th className="text-center px-4 py-4 text-violet-400 font-semibold">Pro</th>
                <th className="text-center px-4 py-4 text-slate-300 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  }`}
                >
                  <td className="px-6 py-4 text-slate-300">{row.label}</td>
                  <td className="px-4 py-4 text-center">
                    <FeatureCell value={row.free} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <FeatureCell value={row.pro} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <FeatureCell value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-28">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-2xl mx-auto px-4 pb-28 text-center">
        <div className="rounded-2xl border border-violet-500/30 bg-violet-950/20 p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to level up your workflow?</h2>
          <p className="text-slate-400 mb-6">
            Join thousands of builders using FlowVault to ship faster and stay organized.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="bg-violet-500 hover:bg-violet-400 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Start for free
            </Link>
            <Link
              href="/sign-up?plan=pro"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl border border-white/10 transition-all"
            >
              Go Pro — $29/mo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
