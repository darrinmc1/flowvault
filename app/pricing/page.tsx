import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Star, Building2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: `Pricing & Early Access | ${siteConfig.name}`,
  description: "Join the waitlist and lock in early-bird pricing before launch. Choose the plan that fits your learning goals.",
}

const tiers = [
  {
    name: "Starter",
    icon: Zap,
    earlyBirdPrice: "Free",
    regularPrice: "Free",
    description: "Perfect for individuals just getting started.",
    badge: null,
    features: [
      "Up to 3 active flows",
      "Basic analytics",
      "Community support",
      "Core integrations",
      "1 GB storage",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
  {
    name: "Pro",
    icon: Star,
    earlyBirdPrice: "$9",
    regularPrice: "$19",
    period: "/month",
    description: "For power users who want the full experience.",
    badge: "Most Popular",
    features: [
      "Unlimited flows",
      "Advanced analytics & insights",
      "Priority email support",
      "All integrations",
      "50 GB storage",
      "Custom domains",
      "Early access to new features",
    ],
    cta: "Lock In Early Price",
    highlighted: true,
  },
  {
    name: "Team",
    icon: Building2,
    earlyBirdPrice: "$29",
    regularPrice: "$59",
    period: "/month",
    description: "Built for teams that move fast together.",
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team analytics dashboard",
      "Dedicated onboarding",
      "500 GB storage",
      "SSO & advanced security",
      "SLA guarantee",
    ],
    cta: "Lock In Early Price",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            🚀 Early Access — Limited Spots
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the waitlist today and lock in our early-bird rates — up to{" "}
            <strong className="text-foreground">50% off</strong> regular pricing.
            No credit card required.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-full px-4 py-2 text-sm text-amber-800 dark:text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Early-bird pricing ends at launch — secure yours now
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => {
              const Icon = tier.icon
              return (
                <Card
                  key={tier.name}
                  className={`relative flex flex-col ${
                    tier.highlighted
                      ? "border-primary shadow-lg shadow-primary/10 scale-105"
                      : "border-border"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1">
                        {tier.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-lg ${
                        tier.highlighted ? "bg-primary/10" : "bg-muted"
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          tier.highlighted ? "text-primary" : "text-muted-foreground"
                        }`} />
                      </div>
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {tier.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">
                          {tier.earlyBirdPrice}
                        </span>
                        {tier.period && (
                          <span className="text-muted-foreground mb-1">
                            {tier.period}
                          </span>
                        )}
                      </div>
                      {tier.regularPrice !== tier.earlyBirdPrice && tier.earlyBirdPrice !== "Free" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Regular price:{" "}
                          <span className="line-through">{tier.regularPrice}{tier.period}</span>
                          {" "}— save 50%
                        </p>
                      )}
                      {tier.earlyBirdPrice === "Free" && (
                        <p className="text-sm text-muted-foreground mt-1">Always free</p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.highlighted ? "default" : "outline"}
                    >
                      <Link href="#waitlist">{tier.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include a 14-day free trial. No credit card required to join the waitlist.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "When will the product launch?",
                a: "We're targeting a launch in the coming months. Waitlist members will be the first to know and will receive their early-bird pricing locked in.",
              },
              {
                q: "How does early-bird pricing work?",
                a: "Join the waitlist now and we'll honor the early-bird price for your first 12 months after launch — regardless of when we officially raise prices.",
              },
              {
                q: "Can I change plans later?",
                a: "Absolutely. You can upgrade or downgrade at any time. If you upgrade, you'll pay the difference. If you downgrade, the change takes effect at the next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes — all paid plans include a 14-day free trial so you can explore every feature before committing.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We'll accept all major credit cards, PayPal, and bank transfers for annual plans at launch.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-6 last:border-0">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              🎉 Join the Waitlist
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Secure Your Early-Bird Rate
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to access {siteConfig.name} and lock in pricing
              that won't be available after launch. No spam — just launch updates
              and your exclusive discount.
            </p>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <NewsletterForm />
              <p className="text-xs text-muted-foreground mt-4">
                By signing up you agree to our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                  Privacy Policy
                </Link>
                . Unsubscribe at any time.
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                No credit card
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                50% off at launch
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
