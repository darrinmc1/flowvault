import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { Check } from "lucide-react"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing.",
}

const tiers = [
  {
    name: "Founder",
    emoji: "\u{1F680}",
    price: siteConfig.pricing.founder,
    description: "Lock in early access pricing forever.",
    badge: "Early Bird",
    highlighted: false,
    cta: "Claim Founder Pricing",
    features: [
      "Access to all current lessons",
      "Weekly updates newsletter",
      "Badge & XP progression",
      "Community access",
      "Price locked forever",
    ],
  },
  {
    name: "Standard",
    emoji: "⚡",
    price: siteConfig.pricing.standard,
    description: "Everything you need to go from curious to capable.",
    badge: "Most Popular",
    highlighted: true,
    cta: "Get Started",
    features: [
      "Access to all lessons",
      "Weekly updates newsletter",
      "Badge & XP progression",
      "Community access",
      "New content as it drops",
      "Priority email support",
    ],
  },
  {
    name: "Premium",
    emoji: "\u{1F9E0}",
    price: siteConfig.pricing.premium,
    description: "For serious learners who want the full experience.",
    badge: "Full Access",
    highlighted: false,
    cta: "Go Premium",
    features: [
      "Everything in Standard",
      "Digital product downloads",
      "Downloadable cheat sheets & templates",
      "Early access to new content",
      "Monthly live Q&A sessions",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-20`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Simple Pricing</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            No surprise fees. No confusing tiers. Pick a plan and start learning.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-to-b from-cyan-950/60 to-blue-950/40 border-cyan-500/40 shadow-xl shadow-cyan-500/10"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                    tier.highlighted
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {tier.badge}
                </span>
              </div>

              <div className="mb-6 mt-2">
                <div className="text-3xl mb-2">{tier.emoji}</div>
                <h2 className="text-2xl font-bold text-white">{tier.name}</h2>
                <p className="text-sm text-slate-400 mt-1">{tier.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    ${tier.price.monthly}
                  </span>
                  <span className="text-slate-400 mb-1">/mo</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  or ${tier.price.yearly}/yr
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up"
                className={`block text-center rounded-xl py-3 font-bold text-sm transition-all ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25"
                    : "bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
