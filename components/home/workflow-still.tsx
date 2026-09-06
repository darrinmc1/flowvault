/**
 * Frozen still of a real FlowVault workflow — AI Content Drafter.
 * Node names match the published walkthrough. Not stock, not a laptop frame.
 */
const NODES = [
  { id: "trigger", label: "Trigger", kind: "Webhook / Cron / Telegram", x: 28, y: 38 },
  { id: "llm", label: "LLM Generate", kind: "Topic + prompt template", x: 168, y: 38 },
  { id: "split", label: "Output Split", kind: "blog · social · newsletter", x: 308, y: 38 },
] as const

const DELIVERIES = [
  { label: "Notion page", x: 448, y: 12 },
  { label: "Google Doc", x: 448, y: 72 },
  { label: "Markdown file", x: 448, y: 132 },
] as const

export function WorkflowCanvas() {
  return (
    <div
      className="hero-workflow-still min-w-[620px] bg-[#0B1220] text-slate-100"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-amber-400/80">
            n8n · Content Automation
          </p>
          <p className="text-xs font-medium text-white">AI Content Drafter Pack</p>
        </div>
        <p className="text-[11px] text-slate-400">Trigger → Generate → Split → Deliver</p>
      </div>

      <svg viewBox="0 0 620 220" className="h-auto w-full">
        <line x1="108" y1="62" x2="168" y2="62" stroke="#f59e0b" strokeWidth="1.4" opacity="0.55" />
        <line x1="248" y1="62" x2="308" y2="62" stroke="#f59e0b" strokeWidth="1.4" opacity="0.55" />
        <line x1="388" y1="62" x2="448" y2="36" stroke="#f59e0b" strokeWidth="1.2" opacity="0.4" />
        <line x1="388" y1="62" x2="448" y2="96" stroke="#f59e0b" strokeWidth="1.2" opacity="0.4" />
        <line x1="388" y1="62" x2="448" y2="156" stroke="#f59e0b" strokeWidth="1.2" opacity="0.4" />

        {NODES.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width="80"
              height="48"
              rx="8"
              fill="#1a140c"
              stroke="#f59e0b"
              strokeWidth="1.2"
            />
            <text x={node.x + 8} y={node.y + 20} fill="#fff7ed" fontSize="10" fontFamily="ui-sans-serif, system-ui">
              {node.label}
            </text>
            <text x={node.x + 8} y={node.y + 36} fill="#d6d3d1" fontSize="8" fontFamily="ui-sans-serif, system-ui">
              {node.kind.length > 18 ? `${node.kind.slice(0, 18)}…` : node.kind}
            </text>
          </g>
        ))}

        {DELIVERIES.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={node.y}
              width="132"
              height="44"
              rx="8"
              fill="#121820"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
            />
            <text x={node.x + 10} y={node.y + 26} fill="#e2e8f0" fontSize="11" fontFamily="ui-sans-serif, system-ui">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export function WorkflowStillFrame({
  caption = "Workflow · AI Content Drafter Pack",
}: {
  caption?: string
}) {
  return (
    <figure
      id="workflow-still"
      className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 shadow-[0_0_48px_-12px_rgba(245,158,11,0.35)]"
    >
      <figcaption className="border-b border-white/10 px-4 py-2 text-xs text-slate-400">
        {caption}
      </figcaption>
      <div className="relative h-40 overflow-hidden sm:h-52 lg:h-56">
        <div className="kickoff-pan origin-top-left">
          <WorkflowCanvas />
        </div>
      </div>
    </figure>
  )
}
