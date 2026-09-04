import type { MetadataRoute } from "next"
import { ALL_MODULES } from "@/data/modules"
import { ALL_PRODUCTS } from "@/data/products"
import posts from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const lessonEntries: MetadataRoute.Sitemap = ALL_MODULES.filter((m) => m.status === "published").map(
    (mod) => ({
      url: `https://flowvault.com/lessons/${mod.id}`,
      lastModified: new Date(mod.lastUpdated),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  )

  const productEntries: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `https://flowvault.com/products/${product.id}`,
    lastModified: new Date(product.dateAdded),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://flowvault.com/blog/${post.s}`,
    lastModified: new Date(post.d),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [
    { url: "https://flowvault.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://flowvault.com/lessons", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://flowvault.com/learn", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://flowvault.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://flowvault.com/products", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://flowvault.com/tools", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: "https://flowvault.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://flowvault.com/terms", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: "https://flowvault.com/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...lessonEntries,
    ...productEntries,
    ...blogEntries,
  ]
}
