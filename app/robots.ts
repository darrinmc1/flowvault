import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site.config"

// HYBRID AI-SEO POLICY:
// - Training/scraping crawlers (bulk ingest for model weights): BLOCKED
// - Search engines + on-demand AI browsing (fetch on user question, cite/link): ALLOWED
// - Private user areas (dashboard/account/api): blocked for everyone
// - llms.txt serves the curated informational summary separately
export default function robots(): MetadataRoute.Robots {
  const base =
    process.env.NEXT_PUBLIC_SITE_DOMAIN
      ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
      : process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : `https://${siteConfig.domain}`

  return {
    rules: [
      // Search engines (Google AI Overviews + Bing Copilot ride on these)
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // On-demand AI browsing — answers/citations when a user asks
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      // Training/scraping crawlers — blocked
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      // Everyone else: private areas only
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/account/", "/sign-in/", "/sign-up/", "/_next/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
