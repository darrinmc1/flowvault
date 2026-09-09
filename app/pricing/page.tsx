import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for every stage of your automation journey. Choose the plan that fits your workflow needs.",
}

const tiers = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "No credit card required",
    description: "Perfect for exploring automation fundamentals and building your first workflows.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "5 workflow templates",
      "3 active automations",
      "Community support",
      "Basic analytics dashboard",
      "1 workspace",
      "Email notifications",
    ],
    notIncluded: [
      "Advanced workflow logic",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    priceNote: "per month, billed monthly",
    description: "For power users who need unlimited workflows, advanced logic, and priority support.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Unlimited workflow templates",
      "Unlimited active automations",
      "Priority email & chat support",
      "Advanced analytics & reporting",
      "3 workspaces",
      "Email + Slack notifications",
      "Advanced workflow logic (branches, loops)",
      "50+ integrations",
    ],
    notIncluded: [
      "Team collaboration",
      "Custom integrations",
    ],
  },
  {
    name: "Team",
    price: "$79",
    priceNote: "per month, up to 5 seats",
    description: "Built for teams that automate together — shared workspaces, roles, and enterprise-grade controls.",
    cta: "Start Team Trial",
    ctaHref: "/sign-up?plan=team",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 5 team seats",
      "Shared workspaces & permissions",
      "Role-based access control",
      "Team analytics & audit logs",
      "Dedicated onboarding call",
      "Custom integrations (API access)",
      "SLA-backed support",
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Both Pro and Team plans include a 14-day free trial. No credit card is required to start your trial.",
  },
  {
    q: "What counts as an 'active automation'?",
    a: "An active automation is any workflow that is currently enabled and running. Paused or archived workflows do not count toward your limit.",
  },
  {
    q: "Do you offer annual billing discounts?",
    a: "Yes — annual billing saves you 20% compared to monthly. Contact us or toggle to annual billing during checkout.",
  },
  {
    q: "What happens to my data if I downgrade?",
    a: "Your data is never deleted. If you exceed the limits of a lower tier, excess workflows are paused until you re-upgrade or remove some.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Pricing that scales with your workflows
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start free, upgrade when you need more power. Every plan includes core automation features — no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.highlight
                  ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-violet-500 text-white">
                  {tier.badge}
                </span>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  {tier.price !== "Free" && (
                    <span className="text-slate-400 text-sm mb-1">/mo</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-3">{tier.priceNote}</p>
                <p className="text-sm text-slate-400">{tier.description}</p>
              </div>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all mb-8 ${
                  tier.highlight
                    ? "bg-violet-600 hover:bg-violet-500 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                {tier.cta}
              </Link>

              <div className="space-y-3 flex-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">What&apos;s included</p>
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-violet-400 mt-0.5 shrink-0">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
                {tier.notIncluded.length > 0 && (
                  <>
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider pt-2">Not included</p>
                    {tier.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-0.5 shrink-0">✗</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Full Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80">
                  <th className="text-left p-4 text-slate-400 font-semibold">Feature</th>
                  <th className="text-center p-4 text-slate-300 font-semibold">Starter</th>
                  <th className="text-center p-4 text-violet-300 font-semibold">Pro</th>
                  <th className="text-center p-4 text-slate-300 font-semibold">Team</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Workflow templates", "5", "Unlimited", "Unlimited"],
                  ["Active automations", "3", "Unlimited", "Unlimited"],
                  ["Workspaces", "1", "3", "Unlimited"],
                  ["Team seats", "1", "1", "Up to 5"],
                  ["Integrations", "10", "50+", "50+ & Custom"],
                  ["Analytics", "Basic", "Advanced", "Advanced + Audit"],
                  ["Notifications", "Email", "Email + Slack", "Email + Slack"],
                  ["Workflow branching & loops", "✗", "✓", "✓"],
                  ["Role-based access", "✗", "✗", "✓"],
                  ["API access", "✗", "✗", "✓"],
                  ["Support", "Community", "Priority", "SLA-backed"],
                  ["Onboarding call", "✗", "✗", "✓"],
                ].map(([feature, starter, pro, team], i) => (
                  <tr
                    key={feature}
                    className={`border-b border-slate-800/50 ${
                      i % 2 === 0 ? "bg-slate-900/20" : "bg-transparent"
                    }`}
                  >
                    <td className="p-4 text-slate-300">{feature}</td>
                    <td className="p-4 text-center text-slate-400">{starter}</td>
                    <td className="p-4 text-center text-violet-300 font-medium">{pro}</td>
                    <td className="p-4 text-center text-slate-300">{team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center rounded-2xl border border-violet-500/30 bg-violet-500/10 p-12">
          <h2 className="text-2xl font-bold mb-3">Not sure which plan is right for you?</h2>
          <p className="text-slate-400 mb-6">
            Start with the free Starter plan — no credit card needed. Upgrade anytime as your automation needs grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-sm transition-all"
            >
              Learn More About FlowVault
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
