import Link from "next/link"
import { ALL_UPDATES } from "@/data/updates"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Updates | ${siteConfig.name}`,
  description: "Latest news and weekly updates.",
}

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Updates</span>
          </h1>
          <p className="text-lg text-slate-400">Stay current with the latest.</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-4">
          {ALL_UPDATES.map((update) => (
            <Link
              key={update.id}
              href={`/updates/${update.id}`}
              className="block glass-card p-6 rounded-2xl transition-all hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-medium text-rose-400">
                  {update.category}
                </span>
                <span className="text-sm text-slate-500">{update.date}</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-1">{update.title}</h2>
              <p className="text-sm text-slate-400">{update.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
