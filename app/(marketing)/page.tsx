import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Manager at TechFlow",
    avatar: "SC",
    avatarColor: "bg-indigo-500",
    quote: "We cut our onboarding process from 3 days to 4 hours. The automated workflows eliminated all the manual back-and-forth our team was drowning in.",
    result: "Saved 18 hours/week",
    resultIcon: "⏱️"
  },
  {
    name: "Marcus Rivera",
    role: "Founder at GrowthLab",
    avatar: "MR",
    avatarColor: "bg-emerald-500",
    quote: "Before this tool, I was manually updating spreadsheets and sending follow-up emails every single day. Now everything runs on autopilot and I can focus on actually growing the business.",
    result: "3x faster client delivery",
    resultIcon: "🚀"
  },
  {
    name: "Priya Nair",
    role: "Head of Customer Success at Loopify",
    avatar: "PN",
    avatarColor: "bg-violet-500",
    quote: "Our team was skeptical at first, but after the first week the results spoke for themselves. We went from 40% to 94% on-time task completion without adding a single headcount.",
    result: "94% on-time completion",
    resultIcon: "✅"
  }
]

const caseStudies = [
  {
    company: "NorthBridge Consulting",
    industry: "Professional Services",
    tag: "Case Study",
    tagColor: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    before: {
      label: "Before",
      points: [
        "12-step manual client intake process",
        "Data scattered across 6 different tools",
        "Average 3-day response time to new leads",
        "2 full-time staff managing admin tasks"
      ]
    },
    after: {
      label: "After",
      points: [
        "Fully automated intake in under 10 minutes",
        "Single source of truth for all client data",
        "Instant automated responses within 5 minutes",
        "Staff reallocated to billable client work"
      ]
    },
    metric: "$140K",
    metricLabel: "additional revenue in 6 months"
  },
  {
    company: "Spark E-commerce",
    industry: "Retail & E-commerce",
    tag: "Case Study",
    tagColor: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    before: {
      label: "Before",
      points: [
        "Order fulfillment took 2-3 business days",
        "Manual inventory updates caused overselling",
        "Customer support overwhelmed with status emails",
        "30% cart abandonment with no recovery flow"
      ]
    },
    after: {
      label: "After",
      points: [
        "Same-day fulfillment with automated routing",
        "Real-time inventory sync across all channels",
        "Automated order status updates cut tickets 60%",
        "Abandoned cart recovery generating 22% recapture"
      ]
    },
    metric: "60%",
    metricLabel: "reduction in support tickets"
  }
]

export default function MarketingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-24">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span className="text-indigo-300 text-sm font-medium">Now in early access</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Automate Your Workflows.
          <span className="text-indigo-400"> Ship Faster.</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Get Started Free
          </Link>
          <Link
            href="#case-studies"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all duration-200"
          >
            See Results
          </Link>
        </div>
        <p className="mt-4 text-sm text-zinc-500">No credit card required &middot; Free 14-day trial</p>
      </section>

      {/* Social Proof Bar */}
      <section className="w-full max-w-4xl mx-auto mb-24">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-8 px-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-zinc-500 mt-1">Teams onboarded</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">12hrs</div>
            <div className="text-sm text-zinc-500 mt-1">Avg. saved per week</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-zinc-500 mt-1">Average rating</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-zinc-500 mt-1">Customer retention</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by teams who ship</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">Real results from real teams. Here&apos;s what our customers say after switching.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-3 py-2 mb-6 self-start">
                <span className="text-base">{t.resultIcon}</span>
                <span className="text-indigo-300 text-sm font-semibold">{t.result}</span>
              </div>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="w-full max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Before &amp; After</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">See exactly how teams transformed their workflows after implementing our platform.</p>
        </div>
        <div className="flex flex-col gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{cs.company.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{cs.company}</div>
                    <div className="text-zinc-500 text-sm">{cs.industry}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${cs.tagColor}`}>{cs.tag}</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{cs.metric}</div>
                    <div className="text-zinc-500 text-xs">{cs.metricLabel}</div>
                  </div>
                </div>
              </div>
              {/* Before / After grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">Before</span>
                  </div>
                  <ul className="space-y-3">
                    {cs.before.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-zinc-400 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">After</span>
                  </div>
                  <ul className="space-y-3">
                    {cs.after.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl mx-auto text-center">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-indigo-500/20 px-8 py-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to see results like these?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">Join 500+ teams already saving hours every week. Start your free trial today — no credit card needed.</p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-zinc-500">14-day free trial &middot; Cancel anytime &middot; No credit card required</p>
        </div>
      </section>
    </main>
  )
}
