import Link from "next/link"
import { products } from "@/data/products"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Workflows | ${siteConfig.name}`,
  description: "Browse ready-to-import n8n workflow templates. Buy once, import in one click, automate forever.",
}

export default function ProductsPage() {
  const faqs = [
    {
      q: "How do I import a workflow into n8n?",
      a: "After purchase, download the JSON file. In n8n, open the canvas menu and choose \"Import from file\". Select your file and the workflow loads instantly — no manual node setup needed.",
    },
    {
      q: "Do I need n8n experience to use these workflows?",
      a: "Not at all. Every workflow includes a plain-English setup guide. If you can paste an API key, you can get it running. Most customers are live in under 15 minutes.",
    },
    {
      q: "What if a workflow breaks after an API update?",
      a: "All purchases include lifetime free updates. When something changes upstream, we ship a fix and you get it automatically at no extra cost.",
    },
    {
      q: "Do these work on self-hosted n8n and n8n Cloud?",
      a: "Yes — the JSON import process is identical on both. Buy once and use it wherever you run n8n.",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">n8n Workflow Templates</h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Ready-to-import automation workflows. Buy, download, import in one click — no coding required.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all block"
          >
            <h2 className="text-lg font-bold text-white mb-2">{product.name}</h2>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-violet-400 font-bold">${product.price}</span>
              <span className="text-xs text-slate-500">View details &rarr;</span>
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Common Questions</h2>
        <p className="text-slate-400 text-center mb-8">Worried about setup? Here's what every new customer asks.</p>
        <div className="space-y-4 max-w-2xl mx-auto">
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
