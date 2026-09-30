import { notFound } from "next/navigation"
import Link from "next/link"
import { products } from "@/data/products"
import { siteConfig } from "@/config/site.config"

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  if (!product) return {}
  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  if (!product) notFound()

  const faqs = [
    {
      q: "How do I import the JSON workflow into n8n?",
      a: "It's a single click. In your n8n canvas, go to the top-right menu and select \"Import from file\" (or \"Import from clipboard\"). Choose the JSON file you downloaded, and the entire workflow appears instantly — nodes, connections, and all settings included.",
    },
    {
      q: "Do I need prior n8n experience to use this?",
      a: "No. Each workflow comes with a step-by-step setup guide written for beginners. If you can copy-paste an API key, you can get this running. Most customers are up and running in under 15 minutes.",
    },
    {
      q: "What if something breaks or stops working?",
      a: "Every purchase includes lifetime access to updates. If an API changes or a node breaks, we push a fixed version and you get it free. You can also reach us directly via the support link in your dashboard — we respond within 24 hours.",
    },
    {
      q: "Does this work with n8n Cloud and self-hosted n8n?",
      a: "Yes — the JSON format is identical for both. Whether you run n8n on your own server, a VPS, or use n8n Cloud, you import the file the same way and it works out of the box.",
    },
    {
      q: "What if I want a refund?",
      a: "We offer a 7-day no-questions-asked refund. If the workflow doesn't work for your use case, just email us within 7 days of purchase and we'll process a full refund.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/products" className="text-sm text-slate-400 hover:text-white mb-8 inline-block">
        &larr; All Workflows
      </Link>

      <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
      <p className="text-slate-400 mb-8">{product.description}</p>

      <div className="glass-card p-6 rounded-2xl mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-white">${product.price}</span>
          <Link
            href={`/api/checkout?productId=${product.id}`}
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
          >
            Buy Now
          </Link>
        </div>
        {product.features && (
          <ul className="space-y-2">
            {product.features.map((f: string) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-violet-400 mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400 mb-8">Everything you need to know before buying — no technical background required.</p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="glass-card p-6 rounded-2xl">
              <h3 className="font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
