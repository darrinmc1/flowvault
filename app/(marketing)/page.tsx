import Link from "next/link"
import { MousePointerClick, FileInput, Play } from "lucide-react"
import { siteConfig } from "@/config/site.config"
import { ALL_PRODUCTS } from "@/data/products"
import { NewsletterForm } from "@/components/newsletter-form"

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Pick",
    description: "Choose an n8n workflow from the template library that matches the job.",
    icon: MousePointerClick,
  },
  {
    step: "2",
    title: "Import",
    description: "Download the JSON and import it in n8n via Settings → Import from File.",
    icon: FileInput,
  },
  {
    step: "3",
    title: "Run",
    description: "Add your credentials, flip the workflow on, and let it handle the busywork.",
    icon: Play,
  },
] as const

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section
        className={`${siteConfig.theme.heroGradient} relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32`}
      >
        <div
          className="absolute inset-0 bg-[url('/images/hero-flowvault.jpg')] bg-cover bg-center opacity-30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-up">
            <span className="gradient-text-cyan">{siteConfig.name}</span>
          </p>
          <h1
            className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-5 animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            {siteConfig.copy.heroTitle}
          </h1>
          <p
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-4 animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            {siteConfig.copy.heroSubtitle}
          </p>
          <p
            className="text-sm font-medium text-cyan-300/90 mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Compatible with <span className="text-cyan-200">n8n</span>
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.28s" }}
          >
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              {siteConfig.copy.ctaButton}
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-4 rounded-xl font-bold border border-white/10 text-slate-200 hover:bg-white/5 transition-all"
            >
              {siteConfig.copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Template grid */}
      <section id="templates" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">
            <span className="gradient-text-cyan">Workflow templates</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ready-to-import n8n workflows from the FlowVault library.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {ALL_PRODUCTS.map((product) => {
            const isFree = product.price === 0
            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="glass-card p-6 rounded-2xl transition-all hover:scale-[1.01] flex flex-col group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-3xl" aria-hidden="true">
                    {product.emoji}
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <span
                      className={
                        isFree
                          ? "text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-400/20"
                          : "text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-200 border border-amber-400/20"
                      }
                    >
                      {isFree ? "Free" : "Paid"}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                      n8n
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-400 mb-5 flex-1">{product.description}</p>
                <div className="flex items-end justify-between gap-3">
                  <span className="text-xs font-medium text-slate-500">
                    {product.category}
                  </span>
                  <span className="text-lg font-extrabold text-white">
                    {isFree ? "Free" : `$${product.price}`}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View all products →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">
              <span className="gradient-text-cyan">Pick → Import → Run</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Three steps from template to a live n8n workflow.
            </p>
          </div>
          <ol className="grid md:grid-cols-3 gap-10 md:gap-6">
            {HOW_IT_WORKS.map((item, index) => {
              const Icon = item.icon
              return (
                <li
                  key={item.title}
                  className="relative text-center md:text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 mb-4">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/80 mb-2">
                    Step {item.step}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </li>
              )
            })}
          </ol>
          <div className="mt-12 text-center">
            <Link
              href="/lessons"
              className="text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors"
            >
              Walk through setup in the lessons →
            </Link>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          {siteConfig.copy.emailCaptureHeading}
        </h2>
        <p className="text-slate-400 mb-8">
          {siteConfig.copy.emailCaptureSubheading}
        </p>
        <NewsletterForm source="homepage" />
      </section>
    </div>
  )
}
