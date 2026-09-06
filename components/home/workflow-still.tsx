/**
 * FlowVault product still — AI Content Drafter.
 * Unique motion (CSS, 7s): JSON import wipe → node-to-node execute pulse.
 * Node names match the published walkthrough. Not stock, not a laptop frame.
 */

const NODES = [
  { id: "trigger", step: 1, label: "Trigger", kind: "Webhook / Cron / Telegram", x: 28, y: 38 },
  { id: "llm", step: 2, label: "LLM Generate", kind: "Topic + prompt template", x: 168, y: 38 },
  { id: "split", step: 3, label: "Output Split", kind: "blog · social · newsletter", x: 308, y: 38 },
] as const

const DELIVERIES = [
  { step: 4, label: "Notion page", x: 448, y: 12 },
  { step: 5, label: "Google Doc", x: 448, y: 72 },
  { step: 6, label: "Markdown file", x: 448, y: 132 },
] as const

const EDGES = [
  { id: "e1", step: 1, x1: 108, y1: 62, x2: 168, y2: 62 },
  { id: "e2", step: 2, x1: 248, y1: 62, x2: 308, y2: 62 },
  { id: "e3", step: 3, x1: 388, y1: 62, x2: 448, y2: 34 },
  { id: "e4", step: 3, x1: 388, y1: 62, x2: 448, y2: 94 },
  { id: "e5", step: 3, x1: 388, y1: 62, x2: 448, y2: 154 },
] as const

export function WorkflowCanvas() {
  return (
    <div
      className="hero-workflow-still fv-workflow relative h-full w-full bg-[#0B1220] text-slate-100"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-amber-400/80">
            n8n · Content Automation
          </p>
          <p className="text-xs font-medium text-white">AI Content Drafter Pack</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="fv-json-chip inline-flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-200">
            <span className="fv-json-dot h-1.5 w-1.5 rounded-full bg-amber-400" />
            workflow.json
          </span>
          <span className="relative hidden h-4 w-[13.5rem] text-right text-[11px] text-slate-400 sm:block">
            <span className="fv-status fv-status-import absolute inset-0">
              Importing — we already named the nodes
            </span>
            <span className="fv-status fv-status-run absolute inset-0">
              Running · Trigger → Generate → Split
            </span>
            <span className="fv-status fv-status-done absolute inset-0">
              Delivered · Notion · Doc · Markdown
            </span>
          </span>
        </div>
      </div>

      <svg viewBox="0 0 620 220" className="h-auto w-full">
        {EDGES.map((edge) => (
          <g key={edge.id}>
            <line
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="#f59e0b"
              strokeWidth={edge.step === 3 ? 1.2 : 1.4}
              className="fv-edge-idle"
            />
            <line
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="#fbbf24"
              strokeWidth="2.2"
              strokeLinecap="round"
              className={`fv-edge-pulse fv-edge-pulse-${edge.step}`}
            />
          </g>
        ))}

        <circle r="4" className="fv-packet fv-packet-1" cx="0" cy="0" fill="#fbbf24" />
        <circle r="4" className="fv-packet fv-packet-2" cx="0" cy="0" fill="#fbbf24" />
        <circle r="3.5" className="fv-packet fv-packet-3" cx="0" cy="0" fill="#f59e0b" />
        <circle r="3.5" className="fv-packet fv-packet-4" cx="0" cy="0" fill="#f59e0b" />
        <circle r="3.5" className="fv-packet fv-packet-5" cx="0" cy="0" fill="#f59e0b" />

        {NODES.map((node) => (
          <g key={node.id} className={`fv-node fv-node-${node.step}`}>
            <rect
              x={node.x}
              y={node.y}
              width="80"
              height="48"
              rx="8"
              fill="#1a140c"
              stroke="#f59e0b"
              strokeWidth="1.2"
              className={`fv-node-box fv-node-box-${node.step}`}
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
          <g key={node.label} className={`fv-node fv-delivery fv-node-${node.step}`}>
            <rect
              x={node.x}
              y={node.y}
              width="132"
              height="44"
              rx="8"
              fill="#121820"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
              className={`fv-node-box fv-node-box-${node.step}`}
            />
            <text x={node.x + 10} y={node.y + 26} fill="#e2e8f0" fontSize="11" fontFamily="ui-sans-serif, system-ui">
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="fv-wipe" />
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
      <div className="relative overflow-hidden">
        <WorkflowCanvas />
      </div>
    </figure>
  )
}
