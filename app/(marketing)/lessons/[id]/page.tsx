import { notFound } from "next/navigation"
import Link from "next/link"
import { ALL_MODULES, getModuleById } from "@/data/modules"
import { siteConfig } from "@/config/site.config"
import { MarkdownRenderer } from "@/components/markdown-renderer"

export function generateStaticParams() {
  return ALL_MODULES.map((mod) => ({ id: mod.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) return { title: "Not Found" }
  return {
    title: `${mod.title} | ${siteConfig.name}`,
    description: mod.description,
  }
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) notFound()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/lessons"
            className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <span className="mr-1">&larr;</span> Back to Lessons
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-400">
              {mod.level}
            </span>
            <span className="text-sm text-slate-500">{mod.duration}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            {mod.title}
          </h1>
          <p className="text-lg text-slate-400">{mod.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <MarkdownRenderer content={mod.content} />
        </article>

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

        <div className="mt-12">
          <Link href="/lessons" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
            &larr; All Lessons
          </Link>
        </div>
      </div>
    </div>
  )
}
