import Link from "next/link"
import { ALL_MODULES } from "@/data/modules"

export default function DashboardLessonsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Lessons</h1>
      <div className="space-y-3">
        {ALL_MODULES.filter((m) => m.status === "published").map((mod) => (
          <Link
            key={mod.id}
            href={`/lessons/${mod.id}`}
            className="block glass-card p-4 rounded-xl hover:scale-[1.01] transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white">{mod.title}</h3>
                <p className="text-xs text-slate-400">{mod.level} &bull; {mod.duration}</p>
              </div>
              <span className="text-slate-500">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
