import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Products | ${siteConfig.name}`,
}

const products = [
  {
    id: "starter-pack",
    name: "n8n Starter Pack",
    price: 39,
    description: "Essential workflows to get you started with n8n automation. Perfect for beginners.",
    workflows: 10,
    badge: "POPULAR",
    previewAvailable: true,
    sampleFile: "/samples/starter-sample.json",
    features: ["10 ready-to-use workflows", "Email automation", "Slack integrations", "Basic HTTP requests", "Documentation included"],
  },
  {
    id: "business-pack",
    name: "n8n Business Pack",
    price: 69,
    description: "Advanced workflows for business automation. CRM, invoicing, and team collaboration.",
    workflows: 25,
    badge: "BEST VALUE",
    previewAvailable: true,
    sampleFile: "/samples/business-sample.json",
    features: ["25 ready-to-use workflows", "CRM integrations", "Invoice automation", "Team notifications", "Priority support"],
  },
  {
    id: "ecommerce-pack",
    name: "n8n E-Commerce Pack",
    price: 49,
    description: "Streamline your online store with automated order processing, inventory, and customer workflows.",
    workflows: 15,
    badge: null,
    previewAvailable: true,
    sampleFile: "/samples/ecommerce-sample.json",
    features: ["15 ready-to-use workflows", "Order processing", "Inventory sync", "Customer emails", "Shopify & WooCommerce"],
  },
  {
    id: "ultimate-pack",
    name: "n8n Ultimate Bundle",
    price: 129,
    description: "Everything you need. All packs combined plus exclusive enterprise-grade workflows.",
    workflows: 60,
    badge: "ALL INCLUSIVE",
    previewAvailable: true,
    sampleFile: "/samples/ultimate-sample.json",
    features: ["60+ ready-to-use workflows", "All pack contents", "Enterprise integrations", "AI & LLM workflows", "Lifetime updates"],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white mb-4">n8n Workflow JSON Packs</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download ready-to-import n8n workflow JSON files. Each pack includes fully documented workflows you can use immediately.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-900/30 border border-green-700/50 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-green-400 text-sm font-medium">Free sample JSON included with every pack preview</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col hover:border-purple-700/60 transition-colors"
            >
              {product.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-white">${product.price}</span>
                <span className="text-gray-500 text-sm">one-time</span>
                <span className="ml-auto text-purple-400 text-sm font-medium">{product.workflows} workflows</span>
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href={product.sampleFile}
                  download
                  className="flex items-center justify-center gap-2 w-full border border-purple-700 text-purple-400 hover:bg-purple-900/30 rounded-xl py-3 text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Free Sample JSON
                </a>
                <button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 text-sm font-semibold transition-colors cursor-not-allowed opacity-75"
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

        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want to see a workflow before buying?</h2>
          <p className="text-gray-400 mb-6">
            Check out our free fundamentals lesson — it includes a complete downloadable n8n workflow JSON you can import right now.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Free Lesson with Sample JSON
          </Link>
        </div>
      </div>
    </main>
  )
}
