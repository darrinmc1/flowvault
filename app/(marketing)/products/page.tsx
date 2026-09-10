"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Mail, Gift, ArrowRight, CheckCircle } from "lucide-react"

const PRODUCTS = [
  {
    id: 1,
    name: "AI Workflow Starter Kit",
    description: "Everything you need to automate your first workflow with AI. Includes templates, guides, and video walkthroughs.",
    price: "$49",
    badge: "Bestseller",
    href: "/products/ai-workflow-starter-kit",
  },
  {
    id: 2,
    name: "Prompt Engineering Masterclass",
    description: "Learn to write prompts that get consistent, high-quality results from any LLM. 40+ real-world examples included.",
    price: "$79",
    badge: "New",
    href: "/products/prompt-engineering-masterclass",
  },
  {
    id: 3,
    name: "Automation Blueprint Bundle",
    description: "A complete collection of automation blueprints for marketing, ops, and customer support teams.",
    price: "$129",
    badge: "Bundle",
    href: "/products/automation-blueprint-bundle",
  },
  {
    id: 4,
    name: "AI Tools Directory",
    description: "Curated, categorized, and reviewed. Find the right AI tool for every job without the research rabbit hole.",
    price: "$29",
    badge: null,
    href: "/products/ai-tools-directory",
  },
]

function EmailGateModal({ onUnlock }: { onUnlock: () => void }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.")
      return
    }
    setLoading(true)
    setError("")
    // Simulate API call
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => {
      onUnlock()
    }, 1800)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-300">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 mx-auto">
          <Gift className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            Get Early Access + a Free Guide
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            Drop your email to unlock our full product catalog and receive our free
            <span className="font-semibold text-indigo-600 dark:text-indigo-400"> &ldquo;AI Workflow Quick-Start Guide&rdquo;</span> instantly.
          </p>
        </div>

        {/* Benefits */}
        <ul className="flex flex-col gap-2">
          {[
            "Instant access to all products",
            "Free AI Workflow Quick-Start Guide (PDF)",
            "Early-bird pricing on new releases",
            "Weekly workflow tips & updates",
          ].map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9"
                  required
                  disabled={loading}
                />
              </div>
              <Button type="submit" disabled={loading} className="gap-1 whitespace-nowrap">
                {loading ? "Sending..." : "Unlock"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <p className="text-xs text-zinc-400 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-2 py-2">
            <CheckCircle className="w-10 h-10 text-green-500" />
            <p className="text-green-600 dark:text-green-400 font-semibold text-center">
              You&apos;re in! Opening the catalog&hellip;
            </p>
          </div>
        )}

        {/* Skip link */}
        {!submitted && (
          <button
            onClick={onUnlock}
            className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 underline underline-offset-2 text-center transition-colors"
          >
            No thanks, just browse
          </button>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [showGate, setShowGate] = useState(true)
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    const already = sessionStorage.getItem("products_unlocked")
    if (already === "true") {
      setShowGate(false)
      setUnlocked(true)
    }
  }, [])

  const handleUnlock = () => {
    sessionStorage.setItem("products_unlocked", "true")
    setShowGate(false)
    setUnlocked(true)
  }

  return (
    <>
      {showGate && <EmailGateModal onUnlock={handleUnlock} />}

      <main className={`min-h-screen py-16 px-4 transition-all duration-300 ${showGate ? "overflow-hidden max-h-screen" : ""}`}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Products
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto">
              Practical tools, templates, and guides to help you work smarter with AI.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {product.badge && (
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    {product.badge}
                  </Badge>
                )}
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                    {product.name}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    {product.price}
                  </span>
                  <Button asChild size="sm">
                    <Link href={product.href}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
