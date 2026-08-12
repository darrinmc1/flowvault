import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import posts from "@/lib/blog"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: "Practical n8n automation guides for solopreneurs, marketers, and the automation-curious.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Blog</span>
          </h1>
          <p className="text-lg text-slate-400">
            Field notes from the automation trenches — practical n8n guides in plain English, no hype.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.s}
              href={`/blog/${post.s}`}
              className="block glass-card p-6 rounded-2xl transition-all hover:scale-[1.01]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white mb-1">{post.t}</h2>
                  <p className="text-sm text-slate-400 mb-3">{post.e}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.d}
                    </span>
                    <span>{post.r} read</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-sm text-cyan-400 font-medium">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
