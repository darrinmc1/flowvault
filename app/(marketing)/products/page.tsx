import Link from "next/link"
import { ALL_PRODUCTS } from "@/data/products"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Products | ${siteConfig.name}`,
  description: "Browse our digital products and bundles.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Products</span>
          </h1>
          <p className="text-lg text-slate-400">
            Digital resources to accelerate your progress.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="glass-card p-6 rounded-2xl transition-all hover:scale-[1.02] flex flex-col"
            >
              <div className="text-4xl mb-3">{product.emoji}</div>
              <h2 className="text-lg font-bold text-white mb-1">{product.name}</h2>
              <p className="text-sm text-slate-400 mb-4 flex-1">{product.description}</p>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-extrabold text-white">${product.price}</span>
                <span className="text-xs text-cyan-400 font-medium">{product.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
