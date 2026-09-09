"use client"

import { useState } from "react"

type WaitlistCtaProps = {
  source: string
  heading?: string
  submitLabel?: string
  anchorId?: string
}

export function WaitlistCta({
  source,
  heading = "Checkout isn’t live yet. Join the waitlist.",
  submitLabel = "Join waitlist",
  anchorId,
}: WaitlistCtaProps) {
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  )

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (website !== "") return
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
      <p className="text-sm font-medium text-emerald-400">
        You’re on the list. We’ll email when checkout opens.
      </p>
    )
  }

  return (
    <div id={anchorId} className="w-full max-w-md">
      <p className="mb-3 text-sm text-slate-400">{heading}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
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
          placeholder="Email for launch notice"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:from-orange-400 hover:to-amber-500 disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : submitLabel}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}
