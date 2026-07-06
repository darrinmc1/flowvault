import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Dashboard | ${siteConfig.name}`,
}

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-sm text-slate-400 mb-1">Lessons Completed</p>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-sm text-slate-400 mb-1">Total XP</p>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-sm text-slate-400 mb-1">Current Rank</p>
          <p className="text-3xl font-bold text-white">{siteConfig.badges.tierEmojis[0]} {siteConfig.badges.tierNames[0]}</p>
        </div>
      </div>
    </div>
  )
}
