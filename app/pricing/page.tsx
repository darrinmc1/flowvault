import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for every stage of your journey. Choose the plan that fits your goals.",
}

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for exploring the basics and getting a feel for the platform.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to 5 free lessons",
      "Basic progress tracking",
      "Community access",
      "Email support",
    ],
    notIncluded: [
      "Full lesson library",
      "Downloadable resources",
      "Priority support",
      "Certificates of completion",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    description: "Everything you need to level up fast. Most popular for serious learners.",
    cta: "Start Pro Plan",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      "Full lesson library (50+ lessons)",
      "Advanced progress tracking & XP",
      "Downloadable resources & templates",
      "Priority email support",
      "Certificates of completion",
      "Community access",
    ],
    notIncluded: [
      "1-on-1 coaching sessions",
    ],
  },
  {
    name: "Lifetime",
    price: "$149",
    period: "one-time",
    description: "Pay once, learn forever. Best value for committed learners.",
    cta: "Get Lifetime Access",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Everything in Pro, forever",
      "All future lessons included",
      "Lifetime updates & new content",
      "1-on-1 onboarding session",
      "Certificates of completion",
      "VIP community access",
      "Priority support — always",
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes — you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "The Starter plan is free forever and gives you a real taste of the platform. You can upgrade to Pro whenever you're ready.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards via Stripe. All transactions are secure and encrypted.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you're not satisfied within 14 days of purchase, contact us and we'll make it right — no questions asked.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Simple, transparent pricing.
            <br />
            <span className="text-indigo-400">No surprises.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Choose the plan that fits where you are today. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-indigo-600/20 border-2 border-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{plan.name}</h2>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-200">
                    <span className="text-indigo-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5">✕</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-6 text-slate-400 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Starter</th>
                  <th className="text-center py-3 px-4 text-indigo-400 font-semibold">Pro</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Lifetime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Lessons available", "5", "50+", "50+ & growing"],
                  ["Progress tracking", "Basic", "Advanced", "Advanced"],
                  ["XP & badges", "✕", "✓", "✓"],
                  ["Downloadable resources", "✕", "✓", "✓"],
                  ["Certificates", "✕", "✓", "✓"],
                  ["Community access", "✓", "✓", "VIP"],
                  ["Email support", "Standard", "Priority", "Priority"],
                  ["1-on-1 onboarding", "✕", "✕", "✓"],
                  ["Future content", "✕", "While subscribed", "Forever"],
                ].map(([feature, starter, pro, lifetime]) => (
                  <tr key={feature}>
                    <td className="py-3 pr-6 text-slate-300">{feature}</td>
                    <td className="py-3 px-4 text-center text-slate-400">{starter}</td>
                    <td className="py-3 px-4 text-center text-indigo-300 font-medium">{pro}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{lifetime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-400 mb-8">
            Join hundreds of learners already building better habits and skills with {siteConfig.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 px-8 rounded-xl transition-all"
            >
              Start for Free
            </Link>
            <Link
              href="/lessons"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all"
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
