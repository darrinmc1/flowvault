import { siteConfig } from "@/config/site.config"
import { ALL_MODULES } from "@/data/modules"
import { ALL_UPDATES } from "@/data/updates"
import { ALL_PRODUCTS } from "@/data/products"

export default function sitemap() {
  const base =
    process.env.NEXT_PUBLIC_SITE_DOMAIN
      ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
      : process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : `https://${siteConfig.domain}`

  const staticPages = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/lessons`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/updates`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/products`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), priority: 0.3 },
  ]

  const lessonPages = ALL_MODULES.map((mod) => ({
    url: `${base}/lessons/${mod.id}`,
    lastModified: new Date(mod.lastUpdated),
    priority: 0.8,
  }))

  const updatePages = ALL_UPDATES.map((update) => ({
    url: `${base}/updates/${update.id}`,
    lastModified: new Date(update.date),
    priority: 0.7,
  }))

  const productPages = ALL_PRODUCTS.map((product) => ({
    url: `${base}/products/${product.id}`,
    lastModified: new Date(product.dateAdded),
    priority: 0.7,
  }))

  return [...staticPages, ...lessonPages, ...updatePages, ...productPages]
}
