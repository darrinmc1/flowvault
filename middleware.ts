import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// === Clerk auth: protect dashboard routes, redirect to sign-in ===
// Graceful fallback: if CLERK_SECRET_KEY isn't set, skip auth and let everything through
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/account(.*)", "/api/send-email(.*)"])

// Known AI crawlers and scrapers that ignore robots.txt
const BLOCKED_BOTS = [
  "GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web",
  "Diffbot", "Bytespider", "cohere-ai", "PerplexityBot", "Imagesift",
  "FacebookBot", "meta-externalagent", "DataForSeoBot", "DotBot",
  "Meltwater", "Applebot-Extended", "Google-Extended", "PetalBot",
  "Scrapy", "python-requests", "aiohttp", "httpx", "curl", "wget",
  "Go-http-client", "Java/", "okhttp",
]

// Paths that are safe from rate limiting (static assets)
const SAFE_PATHS = ["/_next/", "/favicon", "/og-image", "/opengraph", "/icon"]

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 60 // 60 requests per minute per IP

// Graceful fallback: if Clerk isn't configured, pass through
const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export default clerkMiddleware(
  async (auth, request: NextRequest) => {
    const url = request.nextUrl.pathname
    const userAgent = request.headers.get("user-agent") || ""
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown"

    const response = NextResponse.next()

    // === 1. Clerk auth protection (only if Clerk is configured) ===
    if (clerkEnabled && isProtectedRoute(request)) {
      await auth.protect()
    }

    // === 2. Security Headers ===
    response.headers.set("X-Robots-Tag", "noai, noimageai")
    response.headers.set("X-Content-Type-Options", "nosniff")
    response.headers.set("X-Frame-Options", "DENY")
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
    response.headers.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()",
    )

    // === 3. Block known AI crawlers / scrapers ===
    const uaLower = userAgent.toLowerCase()
    for (const bot of BLOCKED_BOTS) {
      if (uaLower.includes(bot.toLowerCase())) {
        if (url.startsWith("/api/") || url.startsWith("/admin/")) {
          return new NextResponse("Forbidden", { status: 403 })
        }
        response.headers.set(
          "X-Robots-Tag",
          "noindex, nofollow, noai, noimageai",
        )
      }
    }

    // === 4. Rate limiting (skip static assets) ===
    if (!SAFE_PATHS.some((p) => url.startsWith(p))) {
      const now = Date.now()
      const entry = rateLimit.get(ip)

      if (!entry || now > entry.resetAt) {
        rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
      } else {
        entry.count++
        if (entry.count > RATE_LIMIT_MAX) {
          return new NextResponse("Too Many Requests", {
            status: 429,
            headers: { "Retry-After": "60" },
          })
        }
      }

      // Cleanup old entries every 100 requests to prevent memory leaks
      if (rateLimit.size > 10000) {
        const cutoff = now - RATE_LIMIT_WINDOW
        rateLimit.forEach((val, key) => {
          if (val.resetAt < cutoff) rateLimit.delete(key)
        })
      }
    }

    return response
  },
)

export const config = {
  matcher: [
    // Match all routes except _next static files, images, etc.
    "/((?!_next/static|_next/image|images/|favicon.ico).*)",
  ],
}
