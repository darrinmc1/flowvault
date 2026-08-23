import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Choose the plan that fits your learning goals. Cancel anytime.",
}

const tiers = [
  {
    name: "Starter",
    price: "Free",
    priceMonthly: null,
    description: "Perfect for exploring and getting a feel for the content.",
    cta: "Get Started Free",
    ctaHref: "/register",
    highlighted: false,
    badge: null,
    features: [
      { text: "Access to 5 free lessons", included: true },
      { text: "Community forum access", included: true },
      { text: "Basic progress tracking", included: true },
      { text: "Mobile-friendly experience", included: true },
      { text: "Full course library", included: false },
      { text: "Downloadable resources", included: false },
      { text: "Certificates of completion", included: false },
      { text: "Priority support", included: false },
      { text: "Offline access", included: false },
      { text: "1-on-1 mentorship sessions", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    priceMonthly: 29,
    description: "Everything you need to learn faster and track your progress seriously.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/register?plan=pro",
    highlighted: true,
    badge: "Most Popular",
    features: [
      { text: "Access to 5 free lessons", included: true },
      { text: "Community forum access", included: true },
      { text: "Basic progress tracking", included: true },
      { text: "Mobile-friendly experience", included: true },
      { text: "Full course library (200+ lessons)", included: true },
      { text: "Downloadable resources & worksheets", included: true },
      { text: "Certificates of completion", included: true },
      { text: "Priority support", included: false },
      { text: "Offline access", included: false },
      { text: "1-on-1 mentorship sessions", included: false },
    ],
  },
  {
    name: "Team",
    price: "$79",
    priceMonthly: 79,
    description: "For teams and power learners who want the full experience and personal guidance.",
    cta: "Start Team Trial",
    ctaHref: "/register?plan=team",
    highlighted: false,
    badge: "Best Value",
    features: [
      { text: "Access to 5 free lessons", included: true },
      { text: "Community forum access", included: true },
      { text: "Basic progress tracking", included: true },
      { text: "Mobile-friendly experience", included: true },
      { text: "Full course library (200+ lessons)", included: true },
      { text: "Downloadable resources & worksheets", included: true },
      { text: "Certificates of completion", included: true },
      { text: "Priority support (24h response)", included: true },
      { text: "Offline access", included: true },
      { text: "2 x 1-on-1 mentorship sessions/mo", included: true },
    ],
  },
]

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees and you keep access until the end of your billing period.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Pro and Team plans both include a 7-day free trial. You won't be charged until the trial ends, and you can cancel before then with no cost.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied for any reason within 30 days of your first payment, contact us and we'll issue a full refund — no questions asked.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately and we'll prorate the difference. Downgrades take effect at the next billing cycle.",
  },
  {
    question: "Do you offer discounts for students or nonprofits?",
    answer:
      "Yes! We offer 50% off for verified students and registered nonprofits. Reach out to our support team with proof of eligibility and we'll apply the discount to your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), as well as PayPal. All payments are processed securely through Stripe.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your data is encrypted in transit and at rest. We never sell your personal information to third parties. You can request a full export or deletion of your data at any time.",
  },
]

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-green-500 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      className="h-5 w-5 text-gray-300 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Simple, Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Invest in your growth.
            <br />
            <span className="text-blue-600">Cancel anytime.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Start free and upgrade when you're ready.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            All paid plans include a{" "}
            <span className="font-semibold text-gray-600">30-day money-back guarantee</span>.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border ${
                tier.highlighted
                  ? "border-blue-500 shadow-2xl shadow-blue-100 ring-2 ring-blue-500"
                  : "border-gray-200 shadow-md"
              } bg-white overflow-hidden`}
            >
              {tier.badge && (
                <div
                  className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-xl ${
                    tier.highlighted
                      ? "bg-blue-500 text-white"
                      : "bg-amber-400 text-amber-900"
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              <div className="p-8 pb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h2>
                <p className="text-sm text-gray-500 mb-6">{tier.description}</p>

                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.priceMonthly && (
                    <span className="text-gray-400 text-sm mb-1">/month</span>
                  )}
                </div>
                {tier.priceMonthly && (
                  <p className="text-xs text-gray-400 mb-6">Billed monthly. Cancel anytime.</p>
                )}
                {!tier.priceMonthly && (
                  <p className="text-xs text-gray-400 mb-6">No credit card required.</p>
                )}

                <Link
                  href={tier.ctaHref}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-900 hover:bg-gray-700 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>

              <div className="border-t border-gray-100 p-8 pt-6 flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  What's included
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? <CheckIcon /> : <XIcon />}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
            Compare all features
          </h2>
          <p className="text-center text-gray-500 mb-12">
            A full breakdown of what each plan includes.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 font-semibold text-gray-500 w-1/2">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600 bg-blue-50">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Team</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Free lessons", starter: "5 lessons", pro: "200+ lessons", team: "200+ lessons" },
                  { feature: "Community forum", starter: true, pro: true, team: true },
                  { feature: "Progress tracking", starter: "Basic", pro: "Advanced", team: "Advanced" },
                  { feature: "Mobile access", starter: true, pro: true, team: true },
                  { feature: "Downloadable resources", starter: false, pro: true, team: true },
                  { feature: "Certificates of completion", starter: false, pro: true, team: true },
                  { feature: "Offline access", starter: false, pro: false, team: true },
                  { feature: "Priority support", starter: false, pro: false, team: "24h response" },
                  { feature: "1-on-1 mentorship", starter: false, pro: false, team: "2 sessions/mo" },
                  { feature: "Team management dashboard", starter: false, pro: false, team: true },
                  { feature: "Custom learning paths", starter: false, pro: true, team: true },
                  { feature: "API access", starter: false, pro: false, team: true },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="py-3 px-6 text-gray-700 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      <TableCell value={row.starter} />
                    </td>
                    <td className="py-3 px-4 text-center bg-blue-50/40">
                      <TableCell value={row.pro} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <TableCell value={row.team} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Money-back guarantee */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-4">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">30-Day Money-Back Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're confident you'll love the experience. But if for any reason you're not completely satisfied within
                your first 30 days, just reach out and we'll refund every penny — no questions asked, no hoops to jump
                through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">Frequently asked questions</h2>
          <p className="text-center text-gray-500 mb-12">Everything you need to know before signing up.</p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors list-none">
                  <span>{faq.question}</span>
                  <svg
                    className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Still have questions?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">
              Contact our support team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-500 mb-8">
            Join thousands of learners already growing with {siteConfig.name}. Start free, upgrade when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Start for Free
            </Link>
            <Link
              href="/register?plan=pro"
              className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Try Pro — 7 Days Free
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-4">No credit card required for free plan.</p>
        </div>
      </section>
    </main>
  )
}

function TableCell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex justify-center">
        <svg
          className="h-5 w-5 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex justify-center">
        <svg
          className="h-5 w-5 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    )
  }
  return <span className="text-gray-700 font-medium">{value}</span>
}
