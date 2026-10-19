import Link from "next/link"
import type { Module } from "@/data/modules"
import { ALL_MODULES } from "@/data/modules"
import { SAMPLE_BY_LESSON, PAID_DOWNLOADS_READY } from "@/data/inventory"
import { siteConfig } from "@/config/site.config"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import HumorBreak from "@/components/humor-break"

export function LessonView({
  mod,
  backHref,
  backLabel,
}: {
  mod: Module
  backHref: string
  backLabel: string
}) {
  const sampleHref = SAMPLE_BY_LESSON[mod.id]
  const related = ALL_MODULES.filter(
    (m) => m.id !== mod.id && m.status === "published" && m.category === mod.category
  ).slice(0, 3)

  const humorTag =
    mod.category === "capture" || mod.category === "review" || mod.category === "content"
      ? mod.category
      : "workflow"

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href={backHref}
            className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <span className="mr-1">&larr;</span> {backLabel}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-400">
              {mod.level}
            </span>
            <span className="text-sm text-slate-500">{mod.duration}</span>
            <span className="text-sm text-slate-600">{mod.category}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            {mod.title}
          </h1>
          <p className="text-lg text-slate-400">{mod.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        {mod.learningOutcomes.length > 0 && (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-8">
            <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
              You will leave able to
            </h2>
            <ul className="space-y-2">
              {mod.learningOutcomes.map((outcome) => (
                <li key={outcome} className="text-sm text-slate-300">
                  <span className="text-cyan-500 mr-2">→</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}

        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <MarkdownRenderer content={mod.content} />
        </article>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {sampleHref ? (
            <a
              href={sampleHref}
              download
              className="inline-flex items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-500/20"
            >
              Download sample JSON
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-500">
              Pack JSON for this graph: Coming Soon
            </span>
          )}
          {!PAID_DOWNLOADS_READY && (
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              Product zips — Coming Soon
            </Link>
          )}
        </div>

        <HumorBreak tag={humorTag} />

        <div className="mt-8 flex flex-wrap gap-2">
          {mod.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Same shelf
            </h2>
            <div className="space-y-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/lessons/${item.id}`}
                  className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30"
                >
                  {item.title}
                  <span className="ml-2 text-xs text-slate-600">{item.duration}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <Link href={backHref} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
            &larr; {backLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
