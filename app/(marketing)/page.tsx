import Link from "next/link"

const workflows = [
  {
    id: "content-drafting",
    title: "Content Drafting",
    description: "From raw idea to polished draft with AI assistance at every step.",
    before: { label: "Before", time: "4–6 hours", steps: ["Research topic manually", "Write outline from scratch", "Draft full article", "Edit and revise", "SEO check manually"] },
    after: { label: "After", time: "45 minutes", steps: ["Capture idea in Telegram", "AI generates outline", "AI drafts full article", "One-click SEO review", "Approve & publish"] },
    color: "indigo",
    icon: "✍️",
  },
  {
    id: "telegram-capture",
    title: "Telegram Idea Capture",
    description: "Never lose a fleeting thought — capture and organise ideas instantly.",
    before: { label: "Before", time: "Ideas lost or forgotten", steps: ["Idea appears mid-day", "No quick way to log it", "Forget by evening", "Recreate from memory", "Inconsistent quality"] },
    after: { label: "After", time: "10 seconds to capture", steps: ["Message your Telegram bot", "AI tags & categorises", "Stored in your workspace", "Linked to relevant projects", "Ready to action anytime"] },
    color: "violet",
    icon: "⚡",
  },
  {
    id: "qa-review",
    title: "QA Review Pipeline",
    description: "Systematic quality checks so nothing ships with errors.",
    before: { label: "Before", time: "2–3 hours per review", steps: ["Manual checklist review", "Cross-reference docs", "Spot-check outputs", "Email feedback loops", "Version confusion"] },
    after: { label: "After", time: "20 minutes", steps: ["AI runs checklist automatically", "Flags issues with context", "One-click approve or reject", "Feedback logged instantly", "Clear version history"] },
    color: "purple",
    icon: "✅",
  },
]

const colorMap: Record<string, { badge: string; border: string; glow: string; tag: string; dot: string }> = {
  indigo: {
    badge: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    border: "border-indigo-500/40",
    glow: "shadow-indigo-500/10",
    tag: "bg-indigo-500/10 text-indigo-400",
    dot: "bg-indigo-400",
  },
  violet: {
    badge: "bg-violet-500/20 text-violet-300 border border-violet-500/30",
    border: "border-violet-500/40",
    glow: "shadow-violet-500/10",
    tag: "bg-violet-500/10 text-violet-400",
    dot: "bg-violet-400",
  },
  purple: {
    badge: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    border: "border-purple-500/40",
    glow: "shadow-purple-500/10",
    tag: "bg-purple-500/10 text-purple-400",
    dot: "bg-purple-400",
  },
}

export default function MarketingPage() {
  return (
    <main className="flex flex-col items-center bg-[#0a0a0f] min-h-screen">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          AI Workflow Automation
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Your AI workflows,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            finally organised
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Stop juggling prompts across a dozen tabs. Build, run, and refine AI workflows in one place — and reclaim hours every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-500/20"
          >
            Get started free
          </Link>
          <a
            href="#workflows"
            className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-colors"
          >
            See it in action ↓
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "10×", label: "faster content drafting" },
            { value: "< 10s", label: "to capture any idea" },
            { value: "80%", label: "less time on QA reviews" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              <span className="text-3xl font-extrabold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-zinc-500 text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Previews */}
      <section id="workflows" className="w-full max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See real workflows in action
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            These aren't mockups — they're the actual workflows our users run every day. Here's what before and after looks like.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {workflows.map((workflow, idx) => {
            const c = colorMap[workflow.color]
            return (
              <div
                key={workflow.id}
                className={`rounded-3xl border ${c.border} bg-white/[0.02] shadow-2xl ${c.glow} overflow-hidden`}
              >
                {/* Header */}
                <div className="px-8 pt-8 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{workflow.icon}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                      Workflow {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{workflow.title}</h3>
                  <p className="text-zinc-400">{workflow.description}</p>
                </div>

                {/* Before / After */}
                <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                  {/* Before */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Before</span>
                      <span className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                        ⏱ {workflow.before.time}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {workflow.before.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1 w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-500 shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-zinc-400 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">After</span>
                      <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        ✓ {workflow.after.time}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {workflow.after.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`mt-1 w-2 h-2 rounded-full ${c.dot} shrink-0 mt-2`} />
                          <span className="text-zinc-200 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mock UI preview */}
                <div className="px-8 pb-8 pt-2">
                  <div className="rounded-2xl bg-[#0d0d14] border border-white/[0.06] overflow-hidden">
                    {/* Fake browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                      <span className="w-3 h-3 rounded-full bg-red-500/60" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <span className="w-3 h-3 rounded-full bg-green-500/60" />
                      <span className="ml-3 flex-1 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-zinc-600">
                        app.yourproduct.com/workflows/{workflow.id}
                      </span>
                    </div>
                    {/* Fake workflow canvas */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        {workflow.after.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-3 shrink-0">
                            <div
                              className={`px-4 py-3 rounded-xl border ${
                                i === 0
                                  ? `${c.border} ${c.tag}`
                                  : "border-white/[0.08] bg-white/[0.03] text-zinc-400"
                              } text-xs font-medium max-w-[140px] text-center leading-snug`}
                            >
                              {step}
                            </div>
                            {i < workflow.after.steps.length - 1 && (
                              <span className="text-zinc-700 text-lg">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-1.5 flex-1 rounded-full bg-white/[0.04] overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${
                              workflow.color === "indigo"
                                ? "from-indigo-500 to-violet-500"
                                : workflow.color === "violet"
                                ? "from-violet-500 to-purple-500"
                                : "from-purple-500 to-pink-500"
                            }`}
                            style={{ width: `${60 + idx * 15}%` }}
                          />
                        </div>
                        <span className="text-xs text-zinc-600">{60 + idx * 15}% complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-24 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to cut your workflow time in half?</h2>
          <p className="text-zinc-400 mb-8">
            Join teams already saving hours every week with automated AI workflows.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-500/20"
          >
            Start for free →
          </Link>
        </div>
      </section>
    </main>
  )
}
