import { siteConfig } from "@/config/site.config"

export default function BadgesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Badges</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {siteConfig.badges.tierNames.map((name, i) => (
          <div key={name} className="glass-card p-4 rounded-2xl text-center">
            <div className="text-4xl mb-2">{siteConfig.badges.tierEmojis[i]}</div>
            <p className="text-sm font-bold text-white">{name}</p>
            <p className="text-xs text-slate-500">{siteConfig.badges.xpPerTier[i]} XP</p>
          </div>
        ))}
      </div>
    </div>
  )
}
