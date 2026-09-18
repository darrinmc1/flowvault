import { siteConfig } from "@/config/site.config"
import Link from "next/link"

const testimonials = [
  {
    quote: "FlowVault cut our onboarding workflow from 3 hours to 20 minutes. We saved over $4,000 in the first month alone.",
    name: "Sarah K.",
    role: "Operations Manager",
    company: "TechScale Inc.",
    avatar: "SK",
    metric: "90% time saved",
  },
  {
    quote: "I was skeptical at first, but after automating our invoice approval process, our team gets back an entire day every week.",
    name: "Marcus T.",
    role: "Finance Director",
    company: "Brightline Solutions",
    avatar: "MT",
    metric: "1 day/week recovered",
  },
  {
    quote: "FlowVault replaced three separate tools we were paying for. The ROI was immediate and the setup took less than an afternoon.",
    name: "Priya M.",
    role: "Head of Product",
    company: "Loopcraft",
    avatar: "PM",
    metric: "3 tools replaced",
  },
  {
    quote: "Our client reporting used to be a nightmare. Now it runs automatically every Friday morning. I honestly forget it exists.",
    name: "James R.",
    role: "Agency Owner",
    company: "Redwood Digital",
    avatar: "JR",
    metric: "Zero manual effort",
  },
]

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-b from-background to-muted/30">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Now in early access
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-3xl">
          Automate your workflows.
          <span className="text-primary"> Save hours every week.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          FlowVault lets you build powerful automations without writing a single line of code. Connect your tools, define your logic, and let it run.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Get early access
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            See how it works
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free to start. No credit card required.</p>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-border bg-muted/20 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div>
            <p className="text-2xl font-bold">2,400+</p>
            <p className="text-sm text-muted-foreground">workflows created</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-border" />
          <div>
            <p className="text-2xl font-bold">18,000+</p>
            <p className="text-sm text-muted-foreground">hours saved</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-border" />
          <div>
            <p className="text-2xl font-bold">98%</p>
            <p className="text-sm text-muted-foreground">satisfaction rate</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-border" />
          <div>
            <p className="text-2xl font-bold">500+</p>
            <p className="text-sm text-muted-foreground">teams onboarded</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Customer stories</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real teams. Real results.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Here&apos;s what early FlowVault users are saying after putting their workflows on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Metric badge */}
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t.metric}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm leading-relaxed text-foreground/90 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} &middot; {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case study CTA */}
          <div className="mt-10 rounded-xl border border-border bg-muted/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg">Want the full story?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Read how Brightline Solutions reduced invoice approval time by 87% in their first month.
              </p>
            </div>
            <Link
              href="/case-studies/brightline"
              className="shrink-0 inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Read case study
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to reclaim your time?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join hundreds of teams already running on FlowVault. Get started free — no credit card needed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Start for free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
