import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="text-6xl mb-6">{siteConfig.theme.emoji}</div>
      <h1 className="text-4xl font-extrabold mb-4">404</h1>
      <p className="text-slate-400 mb-8">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all"
      >
        Go Home
      </Link>
    </div>
  )
}
