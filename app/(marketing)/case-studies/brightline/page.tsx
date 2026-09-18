import Link from "next/link"

export const metadata = {
  title: "Case Study: Brightline Solutions | FlowVault",
  description: "How Brightline Solutions reduced invoice approval time by 87% using FlowVault automations.",
}

export default function BrightlineCaseStudy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#testimonials" className="hover:text-foreground transition-colors">Customer stories</Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground">Brightline Solutions</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
          Case Study
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How Brightline Solutions cut invoice approval time by 87%
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          A mid-sized finance team replaced a manual, error-prone approval chain with a FlowVault workflow — and got their Fridays back.
        </p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { label: "Approval time reduced", value: "87%" },
          { label: "Hours saved per month", value: "40 hrs" },
          { label: "Setup time", value: "< 1 day" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl border border-border bg-muted/30 p-5 text-center">
            <p className="text-3xl font-bold text-primary">{m.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Body */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>The challenge</h2>
        <p>
          Brightline Solutions processes hundreds of vendor invoices each month. Before FlowVault, every invoice required a Finance team member to manually email the relevant department head, wait for approval, chase follow-ups, and then log the result in their accounting system. The process averaged <strong>4.5 hours per invoice cycle</strong> and was a constant source of delays and errors.
        </p>
        <p>
          Marcus T., Finance Director at Brightline, described it bluntly: &ldquo;We had a spreadsheet to track the spreadsheet. It was embarrassing.&rdquo;
        </p>

        <h2>The solution</h2>
        <p>
          Marcus discovered FlowVault during early access and built their first workflow in an afternoon — no engineering help required. The workflow:
        </p>
        <ol>
          <li>Detects new invoices uploaded to their shared drive</li>
          <li>Automatically routes approval requests to the correct department head based on vendor category</li>
          <li>Sends a reminder after 24 hours if no response is received</li>
          <li>Logs the approved invoice directly into their accounting software</li>
          <li>Notifies the vendor of payment status</li>
        </ol>
        <p>
          The entire chain — from invoice receipt to accounting entry — now completes in under 35 minutes on average.
        </p>

        <h2>The results</h2>
        <p>
          Within the first month, Brightline&apos;s finance team reclaimed over 40 hours of manual work. Late payments dropped to near zero. And Marcus finally stopped dreading Monday mornings.
        </p>
        <blockquote>
          <p>&ldquo;I was skeptical at first, but after automating our invoice approval process, our team gets back an entire day every week. FlowVault paid for itself in the first two weeks.&rdquo;</p>
          <footer>— Marcus T., Finance Director, Brightline Solutions</footer>
        </blockquote>

        <h2>What&apos;s next</h2>
        <p>
          Brightline is now rolling out FlowVault across their HR and procurement teams, with three additional workflows already in production.
        </p>
      </article>

      {/* CTA */}
      <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 sm:p-8 text-center">
        <h3 className="font-semibold text-xl">Ready to write your own success story?</h3>
        <p className="text-sm text-muted-foreground mt-2 mb-6">
          Join Brightline and hundreds of other teams saving time with FlowVault.
        </p>
        <Link
          href="/register"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
        >
          Get started free
        </Link>
      </div>
    </main>
  )
}
