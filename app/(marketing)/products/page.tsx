import Link from "next/link"
import { Check } from "lucide-react"
import { ALL_PRODUCTS } from "@/data/products"
import { siteConfig } from "@/config/site.config"
import { BuyButton } from "@/components/buy-button"

export const metadata = {
  title: `Products | ${siteConfig.name}`,
  description: "One-time n8n workflow packs: AI Content Drafter, Telegram Capture Bot, Reviewer/QA Agent, and the complete bundle.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-20 text-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            One-time packs
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white">n8n workflow packs</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Four USD packs. Download the workflow JSON, import it into your own n8n instance, and follow the setup guide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {ALL_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-6">
                <p className="mb-3 text-3xl" aria-hidden="true">
                  {product.emoji}
                </p>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  <Link href={`/products/${product.id}`} className="hover:text-cyan-300">
                    {product.name}
                  </Link>
                </h2>
                <p className="text-sm leading-relaxed text-slate-400">{product.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">${product.price}</span>
                <span className="text-sm text-slate-500">USD, one-time</span>
              </div>

              <ul className="mb-8 flex-1 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <BuyButton sku={product.lookupKey} price={product.price} />

              <Link
                href={`/products/${product.id}`}
                className="mt-4 text-center text-sm text-slate-400 hover:text-cyan-300"
              >
                View the setup details
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">Want to inspect a workflow first?</h2>
          <p className="mb-6 text-slate-400">
            The lessons explain how the workflows are put together so you can see the pattern before you buy a pack.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-500"
          >
            Browse the lessons
          </Link>
        </div>
      </div>
    </div>
  )
}
