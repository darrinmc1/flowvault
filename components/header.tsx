"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site.config"
import AuthNav from "@/components/auth-nav"

const navLinks = [
  { href: "/lessons", label: "Lessons" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-white">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            className="hidden md:inline-flex items-center bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
          >
            Get Pro
          </Link>
          <AuthNav />
        </div>
      </div>
    </header>
  )
}
