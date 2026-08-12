import type { MetadataRoute } from "next"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://flowvault.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://flowvault.com/learn", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://flowvault.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://flowvault.com/pricing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://flowvault.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://flowvault.com/terms", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: "https://flowvault.com/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ]
}
