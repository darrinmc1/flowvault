import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for every stage of your n8n automation journey.",
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
      "5 beginner lessons",
      "Community Discord access",
      "Basic workflow templates",
      "n8n setup guide",
      "Email support",
    ],
    missing: [
      "Advanced workflow modules",
      "Pro templates library",
      "1-on-1 onboarding call",
      "Priority support",
    ],
  },
  {
    name: "Starter",
    price: "$19",
    period: "per month",
    description: "For builders ready to automate their first real workflows.",
    cta: "Start Starter Plan",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Everything in Free",
      "30+ intermediate lessons",
      "50+ workflow templates",
      "Step-by-step n8n setup walkthroughs",
      "Progress tracking & XP badges",
      "Email support (48h response)",
    ],
    missing: [
      "1-on-1 onboarding call",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For power users who want to master n8n end-to-end.",
    cta: "Go Pro",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      "Everything in Starter",
      "100+ advanced lessons",
      "Full pro templates library",
      "Live n8n setup & debug sessions",
      "1-on-1 onboarding call",
      "Priority support (4h response)",
      "Early access to new modules",
      "Private Pro community channel",
    ],
    missing: [],
  },
]

const faqs = [
  {
    q: "Do I need to know how to code to use n8n?",
    a: "Not at all. Our lessons are designed for non-developers and developers alike. We walk you through every step visually, with no coding required for most workflows.",
  },
  {
    q: "Is n8n hard to set up?",
    a: "n8n can feel intimidating at first, but that's exactly why FlowVault exists. Our setup guides and walkthroughs take you from zero to your first running workflow in under an hour — even on the free plan.",
  },
  {
    q: "Can I self-host n8n with these lessons?",
    a: "Yes. We cover both n8n Cloud and self-hosted setups (Docker, Railway, Render, and more). Pro members get live debug sessions if you run into issues.",
  },
  {
    q: "What if I'm already comfortable with n8n basics?",
    a: "Start with Starter or Pro. Our intermediate and advanced modules cover real-world use cases like AI agents, CRM automation, webhook pipelines, and multi-step error handling.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, absolutely. No contracts, no lock-in. Cancel from your account settings at any time and you'll retain access until the end of your billing period.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "The Free plan lets you explore FlowVault with no credit card required. If you want to try Pro, reach out to us and we'll set you up with a 7-day trial.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Simple pricing for every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              automation journey
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees, no surprise charges.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-gradient-to-b from-purple-900/60 to-pink-900/30 border border-purple-500/50 shadow-lg shadow-purple-900/30"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
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

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
                {tier.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5">✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  tier.highlight
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Full Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-slate-400 font-medium">Free</th>
                  <th className="text-center py-3 px-4 text-slate-400 font-medium">Starter</th>
                  <th className="text-center py-3 px-4 text-purple-400 font-medium">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lessons", "5", "30+", "100+"],
                  ["Workflow Templates", "Basic", "50+", "Full Library"],
                  ["n8n Setup Guides", "✓", "✓", "✓"],
                  ["Progress Tracking & XP", "—", "✓", "✓"],
                  ["Community Discord", "✓", "✓", "✓"],
                  ["Private Pro Channel", "—", "—", "✓"],
                  ["Live Debug Sessions", "—", "—", "✓"],
                  ["1-on-1 Onboarding", "—", "—", "✓"],
                  ["Support Response", "Email", "48h", "4h Priority"],
                  ["Early Access", "—", "—", "✓"],
                ].map(([feature, free, starter, pro], i) => (
                  <tr
                    key={feature}
                    className={`border-b border-white/5 ${
                      i % 2 === 0 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="py-3 px-4 text-slate-300">{feature}</td>
                    <td className="py-3 px-4 text-center text-slate-400">{free}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{starter}</td>
                    <td className="py-3 px-4 text-center text-purple-300 font-medium">{pro}</td>
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
          <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">
              Still have questions? We're happy to help.
            </p>
            <Link
              href="/about"
              className="inline-block bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
