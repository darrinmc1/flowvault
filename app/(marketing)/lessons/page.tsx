import Link from "next/link"
import { ALL_MODULES } from "@/data/modules"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Lessons | ${siteConfig.name}`,
  description: "Browse all available lessons.",
}

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Lessons</span>
          </h1>
          <p className="text-lg text-slate-400">
            Browse our complete curriculum.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-4">
          {ALL_MODULES.filter((m) => m.status === "published").map((mod) => (
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
                  </div>
                </div>
                <span className="text-slate-500">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
