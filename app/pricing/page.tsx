import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: `Simple, transparent pricing for ${siteConfig.name}. Start free, upgrade when you're ready.`,
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring and getting started with the basics.",
    cta: "Get started free",
    ctaHref: "/sign-up",
    highlighted: false,
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1 GB storage",
      "Public projects only",
    ],
  },
  {
    name: "Starter",
    price: "$12",
    period: "per month",
    description: "Great for individuals and small teams ready to do more.",
    cta: "Start free trial",
    ctaHref: "/sign-up?plan=starter",
    highlighted: true,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Email support",
      "10 GB storage",
      "Private projects",
      "Custom domains",
      "API access",
    ],
  },
  {
    name: "Pro",
    price: "$39",
    period: "per month",
    description: "For power users and growing teams that need the full suite.",
    cta: "Start free trial",
    ctaHref: "/sign-up?plan=pro",
    highlighted: false,
    features: [
      "Everything in Starter",
      "Unlimited storage",
      "Priority support",
      "Team collaboration",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated account manager",
    ],
  },
]

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we prorate any billing differences.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Starter and Pro plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. Annual plans can also be paid by invoice.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Absolutely. There are no long-term contracts. You can cancel your subscription at any time and you won't be charged again.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! Paying annually saves you 20% compared to monthly billing. Switch to annual billing in your account settings.",
  },
  {
    question: "What happens to my data if I downgrade?",
    answer:
      "Your data is always safe. If you downgrade to a plan with lower limits, you'll have 30 days to adjust before any data is affected.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Start for free. Upgrade when you need more. No hidden fees, ever.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-primary shadow-lg shadow-primary/10 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground mb-1">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`block text-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include a 14-day free trial on paid tiers. No credit card required for Free.
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Compare plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 pr-4 font-semibold w-1/2">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold">Free</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary">Starter</th>
                  <th className="text-center py-3 px-4 font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Projects", "3", "Unlimited", "Unlimited"],
                  ["Storage", "1 GB", "10 GB", "Unlimited"],
                  ["Private projects", false, true, true],
                  ["Custom domains", false, true, true],
                  ["API access", false, true, true],
                  ["Team collaboration", false, false, true],
                  ["SSO", false, false, true],
                  ["Priority support", false, false, true],
                  ["SLA guarantee", false, false, true],
                ].map(([feature, free, starter, pro]) => (
                  <tr key={String(feature)} className="hover:bg-muted/50 transition-colors">
                    <td className="py-3 pr-4 font-medium">{feature}</td>
                    {[free, starter, pro].map((val, i) => (
                      <td key={i} className="text-center py-3 px-4">
                        {typeof val === "boolean" ? (
                          val ? (
                            <svg
                              className="h-5 w-5 text-primary mx-auto"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-5 w-5 text-muted-foreground mx-auto"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          )
                        ) : (
                          <span>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b pb-6 last:border-0">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of users already using {siteConfig.name}. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Get started free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
