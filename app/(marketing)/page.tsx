import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    quote: "FlowVault cut my client onboarding time from 3 hours down to 20 minutes. I just drop in the workflow, tweak two fields, and it's done. Absolute game changer.",
    name: "Sarah K.",
    role: "Freelance Operations Consultant",
    metric: "87% faster onboarding",
    avatar: "SK"
  },
  {
    quote: "We were rebuilding the same Zapier automations for every new client. Now we grab a workflow from FlowVault and we're live in minutes. Saved us probably 10 hours a week.",
    name: "Marcus T.",
    role: "Agency Owner, 12-person team",
    metric: "10 hrs/week saved",
    avatar: "MT"
  },
  {
    quote: "The quality of the workflows is what got me. These aren't toy examples — they're production-ready with error handling and everything. Worth every penny.",
    name: "Priya M.",
    role: "SaaS Founder",
    metric: "Production-ready on day 1",
    avatar: "PM"
  },
  {
    quote: "I used to charge clients for automation setup time. Now I use FlowVault templates and pocket the difference. My margins went up 40% on automation projects.",
    name: "James R.",
    role: "No-code Developer",
    metric: "40% higher project margins",
    avatar: "JR"
  }
]

export default function MarketingHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-6 py-24 px-4 text-center bg-gradient-to-b from-background to-muted/30">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Trusted by 500+ automation professionals
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-3xl">
          Stop rebuilding automations from scratch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link
            href="/workflows"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Browse Workflows
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md border bg-background px-8 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            View Docs
          </Link>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y bg-muted/40 py-6 px-4">
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">500+</span>
            <span>professionals using FlowVault</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">120+</span>
            <span>production-ready workflows</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
            <span>average rating</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">10k+</span>
            <span>workflow downloads</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
              Real results from real users
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Beta users are already saving hours every week. Here's what they're saying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Metric badge */}
                <div className="inline-flex self-start items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.061l5.25-5.25a.75.75 0 0 1 1.06 0l3.074 3.073a20.923 20.923 0 0 1 5.545-4.931l-3.042-.815a.75.75 0 0 1-.53-.918Z" clipRule="evenodd" />
                  </svg>
                  {t.metric}
                </div>

                {/* Quote */}
                <blockquote className="text-sm leading-relaxed text-foreground flex-1">
                  <span className="text-3xl leading-none text-muted-foreground/40 font-serif select-none">&ldquo;</span>
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-amber-400">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case study callout */}
          <div className="mt-10 rounded-xl border bg-muted/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Case Study</div>
                <h3 className="text-xl font-bold mb-2">How a 3-person agency replaced a $2,400/mo developer retainer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bright Loop Agency was paying a contractor to build and maintain client automations. After switching to FlowVault, they now deploy workflows in under 30 minutes and redirected that budget to growth. Their automation revenue stayed the same — their costs dropped 80%.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">80%</div>
                    <div className="text-xs text-muted-foreground">cost reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">&lt;30 min</div>
                    <div className="text-xs text-muted-foreground">per deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">$2,400</div>
                    <div className="text-xs text-muted-foreground">saved monthly</div>
                  </div>
                </div>
              </div>
              <Link
                href="/workflows"
                className="shrink-0 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30 border-t">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to stop rebuilding from scratch?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join 500+ automation professionals who ship faster with FlowVault.
          </p>
          <Link
            href="/workflows"
            className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Browse free workflows
          </Link>
        </div>
      </section>
    </div>
  )
}
