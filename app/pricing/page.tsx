"use client"

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for getting started with workflow automation basics.",
      cta: "Get Started Free",
      ctaHref: "/sign-up",
      highlight: false,
      features: [
        "Access to 5 free lessons",
        "Basic XP & badge tracking",
        "Community forum access",
        "1 workflow template",
        "Email support",
      ],
      missing: [
        "Advanced lesson library",
        "Pro workflow templates",
        "Priority support",
        "Team collaboration",
        "Custom integrations",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 19,
      annualPrice: 15,
      description: "For individuals serious about mastering automation workflows.",
      cta: "Start Pro Trial",
      ctaHref: "/sign-up?plan=pro",
      highlight: true,
      features: [
        "Unlimited lesson access",
        "Full XP & badge system",
        "Community forum access",
        "50+ workflow templates",
        "Priority email support",
        "Advanced lesson library",
        "Progress analytics",
        "Certificate of completion",
      ],
      missing: [
        "Team collaboration",
        "Custom integrations",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: null,
      annualPrice: null,
      description: "For teams and organizations scaling automation across the board.",
      cta: "Contact Sales",
      ctaHref: "/about#contact",
      highlight: false,
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Custom integrations",
        "Dedicated account manager",
        "SSO & advanced security",
        "Custom lesson paths",
        "SLA guarantee",
        "Onboarding & training",
      ],
      missing: [],
    },
  ]

  const faqs = [
    {
      q: "Can I switch plans at any time?",
      a: "Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.",
    },
    {
      q: "Is there a free trial for Pro?",
      a: "Absolutely. Pro comes with a 14-day free trial — no credit card required. You'll only be charged if you decide to continue.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal via our secure Stripe-powered checkout.",
    },
    {
      q: "How does annual billing work?",
      a: "Annual billing charges you once per year at the discounted rate. You save roughly 20% compared to monthly billing.",
    },
    {
      q: "What happens to my data if I cancel?",
      a: "Your progress and XP are preserved for 90 days after cancellation. You can export your data at any time from settings.",
    },
    {
      q: "Do you offer discounts for students or nonprofits?",
      a: "Yes! Reach out to us via the contact page and we'll set you up with a special rate.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
          Start free, scale when you're ready. No hidden fees, no surprises.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
          <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-slate-500"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              annual ? "bg-indigo-600" : "bg-white/20"
            }`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                annual ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-slate-500"}`}>
            Annual
            <span className="ml-2 text-xs bg-indigo-600 text-white rounded-full px-2 py-0.5">Save 20%</span>
          </span>
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all ${
                plan.highlight
                  ? "bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-900/30"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400 text-sm mb-1">/mo</span>
                  </div>
                ) : (
                  <div className="text-4xl font-extrabold">Custom</div>
                )}
                {plan.monthlyPrice !== null && annual && (
                  <p className="text-xs text-indigo-400 mt-1">Billed annually</p>
                )}
              </div>

              <Link
                href={plan.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all mb-8 ${
                  plan.highlight
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-200">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5">✕</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">Full Feature Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-6 py-4 font-semibold text-slate-300">Feature</th>
                <th className="text-center px-6 py-4 font-semibold text-slate-300">Free</th>
                <th className="text-center px-6 py-4 font-semibold text-indigo-400">Pro</th>
                <th className="text-center px-6 py-4 font-semibold text-slate-300">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Lessons", "5 free", "Unlimited", "Unlimited"],
                ["Workflow Templates", "1", "50+", "Custom"],
                ["XP & Badges", "✓", "✓", "✓"],
                ["Progress Analytics", "—", "✓", "✓"],
                ["Certificate of Completion", "—", "✓", "✓"],
                ["Priority Support", "—", "✓", "✓"],
                ["Team Collaboration", "—", "—", "✓"],
                ["Custom Integrations", "—", "—", "✓"],
                ["SSO & Security", "—", "—", "✓"],
                ["Dedicated Account Manager", "—", "—", "✓"],
              ].map(([feature, free, pro, ent], i) => (
                <tr
                  key={feature}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <td className="px-6 py-3 text-slate-300">{feature}</td>
                  <td className="px-6 py-3 text-center text-slate-400">{free}</td>
                  <td className="px-6 py-3 text-center text-indigo-300 font-medium">{pro}</td>
                  <td className="px-6 py-3 text-center text-slate-400">{ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-28">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-indigo-600/20 border border-indigo-500/40 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to level up your workflows?</h2>
          <p className="text-slate-400 mb-6">Join thousands of learners automating smarter with {siteConfig.name}.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Start for Free
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
