"use client"

import { useState } from "react"

export function NewsletterForm({ source = "homepage" }: { source?: string }) {
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("") // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (website !== "") return // bot
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website }),
      })
      setStatus(res.ok ? "done" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <p className="text-emerald-400 font-semibold">
        You&apos;re in — check your inbox for a welcome email.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-5000px]"
        aria-hidden="true"
      />
      <input
        type="email"
        required
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "loading" ? "Joining…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2 w-full text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
