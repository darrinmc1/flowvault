"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"
import HumorBreak from "@/components/humor-break"

const CHIPS = [
  { label: "Content", href: "/products" },
  { label: "Capture", href: "/products" },
  { label: "QA & Review", href: "/products" },
] as const

const ITEMS = [
  {
    title: "AI Content Drafter Pack",
    href: "/products/ai-content-drafter",
    meta: "Workflow · n8n JSON · import",
  },
  {
    title: "Telegram Capture Bot",
    href: "/products/telegram-capture-bot",
    meta: "Workflow · n8n JSON · import",
  },
  {
    title: "Reviewer / QA Agent",
    href: "/products/reviewer-qa-agent",
    meta: "Workflow · n8n JSON · import",
  },
  {
    title: "How the AI Content Drafter Works",
    href: "/lessons/how-the-drafter-works",
    meta: "Written · 12 min · walkthrough",
  },
] as const

export function PathRail() {
  return (
    <section className="border-b border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium text-amber-400">The vault</p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-white">
            Three n8n JSON templates you can import today.
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            Content Drafter, Telegram Capture, and QA Review, plus written
            walkthroughs. We will not list a workflow we have not wired.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map((chip, i) => (
            <Reveal key={chip.label} className={`stagger-${i + 1}`}>
              <Link
                href={chip.href}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 transition-colors hover:border-amber-500/50 hover:bg-white/10"
              >
                {chip.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <li key={item.href}>
              <Reveal className={`stagger-${Math.min(i + 1, 4)}`}>
                <Link
                  href={item.href}
                  className="block rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-amber-500/40 hover:bg-white/[0.07]"
                >
                  <p className="text-xs text-slate-500">{item.meta}</p>
                  <p className="mt-1 text-base font-semibold text-white">{item.title}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>

        <HumorBreak tag="automation" />
      </div>
    </section>
  )
}
