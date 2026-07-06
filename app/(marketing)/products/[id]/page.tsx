import { notFound } from "next/navigation"
import Link from "next/link"
import { ALL_PRODUCTS, getProductById } from "@/data/products"
import { siteConfig } from "@/config/site.config"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { Check } from "lucide-react"

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ id: p.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  if (!product) return { title: "Not Found" }
  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <span className="mr-1">&larr;</span> Back to Products
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{product.emoji}</span>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white">
                {product.name}
              </h1>
              <span className="inline-block mt-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
                {product.category}
              </span>
            </div>
          </div>

          <p className="text-lg text-slate-400 mb-6">{product.description}</p>

          <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
              What&apos;s Included
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <Check className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <MarkdownRenderer content={product.content} />
        </article>

        <div className="mt-8 flex items-center gap-6">
          <div>
            <span className="text-4xl font-extrabold text-white">${product.price}</span>
            <span className="text-slate-400 ml-1">one-time</span>
          </div>
          <form action="/api/checkout" method="POST">
            <input type="hidden" name="productId" value={product.id} />
            <button
              type="submit"
              className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              Buy Now
            </button>
          </form>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/products" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
            &larr; All Products
          </Link>
        </div>
      </div>
    </div>
  )
}
