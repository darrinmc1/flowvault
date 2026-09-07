import Link from "next/link"
import { ALL_MODULES } from "@/data/modules"
import { LESSON_COUNT, SAMPLE_JSON_COUNT, PAID_DOWNLOADS_READY } from "@/data/inventory"
import { siteConfig } from "@/config/site.config"
import HumorBreak from "@/components/humor-break"

export const metadata = {
  title: `Lessons | ${siteConfig.name}`,
  description: `${LESSON_COUNT} written n8n lessons. No video. Pack zips Coming Soon.`,
}

const published = ALL_MODULES.filter((m) => m.status === "published")

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Lessons</span>
          </h1>
          <p className="text-lg text-slate-400">
            {LESSON_COUNT} written walkthroughs. Zero videos. {SAMPLE_JSON_COUNT} free sample
            JSON files you can import today. Paid workflow zips:{" "}
            {PAID_DOWNLOADS_READY ? "ready" : "Coming Soon"}.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-4">
          {published.map((mod) => (
            <Link
              key={mod.id}
              href={`/lessons/${mod.id}`}
              className="block glass-card p-6 rounded-2xl transition-all hover:scale-[1.01]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white mb-1">{mod.title}</h2>
                  <p className="text-sm text-slate-400">{mod.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-cyan-400 font-medium">{mod.level}</span>
                    <span className="text-xs text-slate-500">{mod.duration}</span>
                    <span className="text-xs text-slate-600">{mod.category}</span>
                  </div>
                </div>
                <span className="text-slate-500">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        <HumorBreak tag="workflow" />
      </div>
    </div>
  )
}
