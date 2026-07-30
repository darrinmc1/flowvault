import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { siteConfig } from "@/config/site.config"
import { WaitlistPopup } from "@/components/waitlist-popup"
import Link from "next/link"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `https://${siteConfig.domain}`

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL(siteUrl),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased ${siteConfig.theme.bgClass} ${siteConfig.theme.textClass}`}
      >
        <ClerkProvider>
          {children}
          <footer className="border-t border-white/10 mt-16 py-8 text-center text-xs text-muted-foreground">
            <div className="flex justify-center gap-6">
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
            </div>
            <p className="mt-3">&copy; {new Date().getFullYear()} {siteConfig.name}</p>
          </footer>
          <WaitlistPopup />
        </ClerkProvider>
      </body>
    </html>
  )
}
