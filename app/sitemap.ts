import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site.config"
import { ALL_MODULES } from "@/data/modules"
import { ALL_PRODUCTS } from "@/data/products"
import { ALL_UPDATES } from "@/data/updates"
import posts from "@/lib/blog"

const base = `https://${siteConfig.domain}`

type SitemapEntry = MetadataRoute.Sitemap[number]

function entry(
  path: string,
  options: {
    lastModified?: string
    changeFrequency: SitemapEntry["changeFrequency"]
    priority: number
  }
): SitemapEntry {
  return {
    url: path === "/" ? base : `${base}${path}`,
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    entry("/", { changeFrequency: "weekly", priority: 1 }),
    entry("/lessons", { changeFrequency: "weekly", priority: 0.9 }),
    entry("/blog", { changeFrequency: "weekly", priority: 0.8 }),
    entry("/products", { changeFrequency: "weekly", priority: 0.8 }),
    entry("/updates", { changeFrequency: "weekly", priority: 0.6 }),
    entry("/about", { changeFrequency: "monthly", priority: 0.5 }),
    entry("/terms", { changeFrequency: "yearly", priority: 0.3 }),
    entry("/privacy", { changeFrequency: "yearly", priority: 0.3 }),
    entry("/cookies", { changeFrequency: "yearly", priority: 0.2 }),
  ]

  const lessons = ALL_MODULES.filter((mod) => mod.status === "published").map((mod) =>
    entry(`/lessons/${mod.id}`, {
      lastModified: mod.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  )

  const blog = posts.map((post) =>
    entry(`/blog/${post.s}`, {
      lastModified: post.d,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  )

  const products = ALL_PRODUCTS.map((product) =>
    entry(`/products/${product.id}`, {
      lastModified: product.dateAdded,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  )

  const updates = ALL_UPDATES.map((update) =>
    entry(`/updates/${update.id}`, {
      lastModified: update.date,
      changeFrequency: "monthly",
      priority: 0.5,
    })
  )

  return [...staticPages, ...lessons, ...blog, ...products, ...updates]
}
