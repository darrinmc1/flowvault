"use client"

import Link from "next/link"
import { WorkflowStillFrame } from "@/components/home/workflow-still"
import { useParallax } from "@/hooks/use-parallax"

export function Hero() {
  const washRef = useParallax<HTMLDivElement>(0.16)
  const gridRef = useParallax<HTMLDivElement>(0.09)
  const artefactRef = useParallax<HTMLDivElement>(0.06)
  const stillRef = useParallax<HTMLDivElement>(0.03)

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Plane 1 — amber wash (FlowVault live brand, not PM navy) */}
      <div
        ref={washRef}
        className="pointer-events-none absolute -inset-x-10 -top-24 h-[140%] bg-[radial-gradient(80%_60%_at_70%_10%,rgba(245,158,11,0.16),transparent_58%)]"
        aria-hidden="true"
      />
      {/* Plane 2 — soft site grid */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
        aria-hidden="true"
      />
      {/* Plane 3 — abstract JSON artefact, not stock */}
      <div
        ref={artefactRef}
        className="pointer-events-none absolute right-[3%] top-14 hidden w-[22rem] opacity-[0.16] lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 280 360" className="h-auto w-full text-amber-400">
          <rect x="8" y="8" width="264" height="344" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text x="28" y="44" fill="currentColor" fontSize="11" fontFamily="ui-sans-serif, system-ui">
            workflow.json
          </text>
          <line x1="28" y1="58" x2="168" y2="58" stroke="currentColor" strokeWidth="1" />
          <rect x="28" y="78" width="70" height="8" rx="2" fill="currentColor" opacity="0.45" />
          <rect x="28" y="96" width="220" height="6" rx="2" fill="currentColor" opacity="0.28" />
          <rect x="28" y="112" width="190" height="6" rx="2" fill="currentColor" opacity="0.28" />
          <rect x="28" y="148" width="90" height="6" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="28" y="168" width="220" height="6" rx="2" fill="currentColor" opacity="0.22" />
          <rect x="28" y="184" width="200" height="6" rx="2" fill="currentColor" opacity="0.22" />
          <rect x="28" y="220" width="80" height="6" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="28" y="240" width="160" height="56" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-6 px-5 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,32rem)] lg:gap-12 lg:py-14">
        {/* Plane 4 — foreground copy (still sits under H1 on mobile) */}
        <div className="min-w-0">
          <p className="text-sm font-medium text-amber-400">
            n8n JSON workflow templates + walkthroughs
          </p>
          <h1 className="mt-3 max-w-[18ch] text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Import n8n workflows without building them from scratch
          </h1>
          <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base md:text-lg">
            Importable JSON files — Content Drafter, Telegram Capture, QA Review —
            plus a walkthrough that matches the nodes. Download the file, import it
            in your n8n, run it.
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
            We already spent the weekend on the nodes. You import the file.
          </p>
        </div>

        {/* Plane 5 — product still stays in the fold */}
        <div ref={stillRef} className="min-w-0 will-change-transform lg:row-span-2">
          <WorkflowStillFrame />
        </div>

        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-400 hover:to-amber-500"
            >
              Browse n8n JSON templates
            </Link>
            <Link
              href="/lessons/how-the-drafter-works"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-500/40 hover:bg-white/10"
            >
              Read a walkthrough
            </Link>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Walkthrough: How the AI Content Drafter Works
          </p>
        </div>
      </div>
    </section>
  )
}
