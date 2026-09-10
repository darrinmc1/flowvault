import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for n8n automation mastery. Start free, upgrade when you're ready.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring n8n automation basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to 5 beginner lessons",
      "Basic workflow templates",
      "Community forum access",
      "XP & badge system",
      "Email support",
    ],
    missing: [
      "Advanced automation modules",
      "Pro workflow library (50+ templates)",
      "1-on-1 setup assistance",
      "Priority support",
    ],
  },
  {
    name: "Starter",
    price: "$9",
    period: "per month",
    description: "For builders ready to automate their first real workflows.",
    cta: "Start Starter Plan",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Everything in Free",
      "Access to 20+ lessons",
      "15 workflow templates",
      "Step-by-step n8n setup guide",
      "Progress tracking & certificates",
      "Email support",
    ],
    missing: [
      "Pro workflow library (50+ templates)",
      "1-on-1 setup assistance",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For power users who want to automate everything.",
    cta: "Go Pro",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      "Everything in Starter",
      "All 50+ lessons & modules",
      "Pro workflow library (50+ templates)",
      "1-on-1 n8n setup assistance",
      "Early access to new content",
      "Priority support",
      "Private Discord community",
    ],
    missing: [],
  },
]

const faqs = [
  {
    q: "Do I need to know how to code to use n8n?",
    a: "Not at all. n8n is a visual, node-based automation tool. Our lessons are designed for non-developers and walk you through every step with clear screenshots and video walkthroughs.",
  },
  {
    q: "Is n8n hard to set up?",
    a: "It can feel overwhelming at first, which is exactly why FlowVault exists. Our step-by-step setup guides take you from zero to your first running workflow in under an hour. Pro members also get 1-on-1 setup assistance.",
  },
  {
    q: "Do I need to host n8n myself?",
    a: "No. You can use n8n Cloud (their hosted option) or self-host it. We cover both approaches in our lessons so you can choose what fits your budget and technical comfort level.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, absolutely. There are no long-term contracts. You can cancel your subscription at any time and you'll retain access until the end of your billing period.",
  },
  {
    q: "What's the difference between Starter and Pro?",
    a: "Starter gives you access to foundational lessons and 15 templates — great for learning the basics. Pro unlocks the full lesson library, 50+ workflow templates, 1-on-1 setup help, and priority support for serious automators.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "You can start with the Free tier indefinitely to get a feel for the platform. We don't currently offer a time-limited trial, but our Free plan gives you a genuine taste of what's inside.",
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
            Automate more. Pay less.
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees, no surprise charges — just clear value at every tier.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                tier.highlight
                  ? "bg-violet-600/20 border-2 border-violet-500 shadow-lg shadow-violet-500/20"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1">/{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm mb-6 transition-all ${
                  tier.highlight
                    ? "bg-violet-500 hover:bg-violet-400 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
                {tier.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 shrink-0">✗</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-white">Full Feature Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="text-left px-6 py-4 text-slate-300 font-semibold">Feature</th>
                  <th className="text-center px-4 py-4 text-slate-300 font-semibold">Free</th>
                  <th className="text-center px-4 py-4 text-slate-300 font-semibold">Starter</th>
                  <th className="text-center px-4 py-4 text-violet-300 font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lessons available", "5", "20+", "50+"],
                  ["Workflow templates", "Basic", "15", "50+"],
                  ["n8n setup guide", "✗", "✓", "✓"],
                  ["Progress tracking", "✓", "✓", "✓"],
                  ["XP & badges", "✓", "✓", "✓"],
                  ["1-on-1 setup help", "✗", "✗", "✓"],
                  ["Private Discord", "✗", "✗", "✓"],
                  ["Priority support", "✗", "✗", "✓"],
                  ["Early access content", "✗", "✗", "✓"],
                ].map(([feature, free, starter, pro], i) => (
                  <tr
                    key={feature}
                    className={`border-b border-white/5 ${
                      i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="px-6 py-3.5 text-slate-300">{feature}</td>
                    <td className="px-4 py-3.5 text-center text-slate-400">{free}</td>
                    <td className="px-4 py-3.5 text-center text-slate-300">{starter}</td>
                    <td className="px-4 py-3.5 text-center text-violet-300 font-medium">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-2">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center bg-violet-600/10 border border-violet-500/20 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to start automating?</h2>
          <p className="text-slate-400 mb-6">
            Join hundreds of builders using FlowVault to master n8n and reclaim their time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="bg-violet-500 hover:bg-violet-400 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Start for Free
            </Link>
            <Link
              href="/lessons"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
