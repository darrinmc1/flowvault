import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function MarketingHomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {siteConfig.name}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          {siteConfig.description}
        </p>
        <Link
          href="/products"
          className="hidden md:inline-flex items-center px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all"
        >
          Browse Templates
        </Link>
      </main>

      {/* Mobile sticky footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur border-t border-slate-700/60 px-4 py-3 flex items-center justify-center">
        <Link
          href="/products"
          className="w-full max-w-sm flex items-center justify-center px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-base transition-all shadow-lg"
        >
          Browse Templates
        </Link>
      </div>
    </>
  )
}
