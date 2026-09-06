"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const CARDS = [
  {
    kicker: "01",
    title: "The three files that ship now.",
    body: "Content Drafter, Telegram Capture, and QA Review. The bundle is those three plus a connector. We will not sell you a library number we have not built.",
    href: "/products",
    cta: "Browse templates",
  },
  {
    kicker: "02",
    title: "Setup guides that match the nodes.",
    body: "Each pack includes the JSON plus a setup walkthrough for credentials and destinations: Notion, Docs, Telegram, Slack.",
    href: "/lessons",
    cta: "Read the walkthroughs",
  },
  {
    kicker: "03",
    title: "Import it, add your keys, then change a node.",
    body: "Import first, add your API keys, then tweak. The walkthroughs show why each node is there so you can change one without guessing.",
    href: "/lessons/how-the-drafter-works",
    cta: "Open the Drafter walkthrough",
  },
] as const

export function WhatYouGet() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <p className="text-sm font-medium text-amber-400">What you get</p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-white">
            The JSON files and the walkthroughs that match them.
          </h2>
        </Reveal>
      </div>

      <div className="stack-pin pb-8 md:pb-16">
        {CARDS.map((card, index) => (
          <div key={card.kicker} className="stack-slot">
            <article
              className="stack-card mx-auto w-full max-w-3xl px-5 sm:px-8"
              style={{ top: `calc(5.5rem + ${index * 0.75}rem)`, zIndex: index + 1 }}
            >
              <div className="rounded-xl border border-white/10 bg-slate-950/90 p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-xl md:p-8">
                <p className="text-xs tabular-nums text-amber-400">{card.kicker}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-400 md:text-base">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex text-sm font-medium text-amber-400 hover:text-amber-300"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
