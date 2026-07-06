import { siteConfig } from "@/config/site.config"

export default function ProgressPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Progress</h1>
      <div className="glass-card p-6 rounded-2xl">
        <h2 className="text-lg font-bold text-white mb-4">Badge Progress</h2>
        <div className="space-y-3">
          {siteConfig.badges.tierNames.map((name, i) => (
            <div key={name} className="flex items-center gap-3">
              <span className="text-2xl">{siteConfig.badges.tierEmojis[i]}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{name}</p>
                <p className="text-xs text-slate-500">{siteConfig.badges.xpPerTier[i]} XP required</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
