import Link from "next/link"
import { ALL_PRODUCTS } from "@/data/products"
import {
  FREE_SAMPLES,
  LESSON_COUNT,
  PAID_DOWNLOADS_READY,
  PRODUCT_COUNT,
  SAMPLE_JSON_COUNT,
  WORKFLOW_PACK_COUNT,
} from "@/data/inventory"
import { siteConfig } from "@/config/site.config"
import HumorBreak from "@/components/humor-break"

export const metadata = {
  title: `Products | ${siteConfig.name}`,
  description: `${WORKFLOW_PACK_COUNT} workflow packs and one bundle. Downloads Coming Soon. ${SAMPLE_JSON_COUNT} free sample JSON files.`,
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white mb-4">n8n Workflow Packs</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honest shelf: {WORKFLOW_PACK_COUNT} workflow packs + 1 bundle ({PRODUCT_COUNT}{" "}
            products). Checkout is Coming Soon — no Stripe from this page, no new prices.
            Pack zip files are not on disk yet.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-900/30 border border-amber-700/50 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-amber-300 text-sm font-medium">
              {SAMPLE_JSON_COUNT} free sample JSON files · {LESSON_COUNT} written lessons ·
              paid zips {PAID_DOWNLOADS_READY ? "ready" : "Coming Soon"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALL_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col hover:border-purple-700/60 transition-colors"
            >
              <div className="mb-6">
                <Link href={`/products/${product.id}`} className="group">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400">
                    {product.emoji} {product.name}
                  </h2>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-white">${product.price}</span>
                <span className="text-gray-500 text-sm">one-time</span>
                <span className="ml-auto text-purple-400 text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link
                  href={`/products/${product.id}`}
                  className="flex items-center justify-center gap-2 w-full border border-purple-700 text-purple-400 hover:bg-purple-900/30 rounded-xl py-3 text-sm font-medium transition-colors"
                >
                  Read the pack notes
                </Link>
                <button
                  className="w-full bg-purple-600 text-white rounded-xl py-3 text-sm font-semibold cursor-not-allowed opacity-75"
                  disabled
                  title="Checkout coming soon"
                >
                  Buy Now — ${product.price}
                  <span className="ml-2 text-xs opacity-70">(Coming Soon)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Free sample JSON (import these now)</h2>
          <p className="text-gray-400 mb-6">
            These are single sample workflows — not 10-, 25-, or 60-file packs. The old
            starter / business / e-commerce / ultimate pack counts were placeholders.
          </p>
          <ul className="space-y-3">
            {FREE_SAMPLES.map((sample) => (
              <li
                key={sample.id}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border border-white/10 px-4 py-3"
              >
                <a
                  href={sample.href}
                  download
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  {sample.name}
                </a>
                <span className="text-gray-500 text-sm">{sample.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <HumorBreak tag="automation" />

        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want the walkthrough, not a 404?</h2>
          <p className="text-gray-400 mb-6">
            {LESSON_COUNT} written lessons. The Fundamentals lesson includes the one sample
            JSON that matches a lesson step-by-step.
          </p>
          <Link
            href="/lessons/n8n-fundamentals"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3 font-semibold transition-colors"
          >
            Start the free Fundamentals lesson
          </Link>
        </div>
      </div>
    </main>
  )
}
