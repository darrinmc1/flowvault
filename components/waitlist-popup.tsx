"use client"

import { useEffect, useState } from "react"
import { Sparkles, Gift, X, Check } from "lucide-react"
import { HoneypotField } from "./HoneypotField"

// TODO: Replace with your Mailchimp action URL + honeypot field name
const MAILCHIMP_ACTION_URL = "https://gmail.us19.list-manage.com/subscribe/post?u=TODO&id=TODO"
const HONEYPOT_FIELD_NAME = "b_TODO_TODO"
const POPUP_STORAGE_KEY = "flowvault-waitlist-seen"

const SHOW_AFTER_MS = 5000
const SUPPRESS_DAYS = 30

export function WaitlistPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const lastSeen = localStorage.getItem(POPUP_STORAGE_KEY)
    if (lastSeen) {
      const daysSince =
        (Date.now() - parseInt(lastSeen, 10)) / (1000 * 60 * 60 * 24)
      if (daysSince < SUPPRESS_DAYS) return
    }
    const timer = setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => setIsAnimating(true), 50)
    }, SHOW_AFTER_MS)
    return () => clearTimeout(timer)
  }, [])

  const markSeen = () =>
    localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString())

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsOpen(false)
      markSeen()
    }, 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot !== '') return
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: honeypot })
      })
      if (res.ok) setSubmitted(true)
    } catch (error) {
      console.error(error)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className={`fixed inset-0 z-[9998] bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      <div
        className={`fixed left-1/2 top-1/2 z-[9999] w-[90%] max-w-[460px] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isAnimating
            ? "scale-100 opacity-100 translate-y-[-50%]"
            : "scale-95 opacity-0 translate-y-[-48%]"
        }`}
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-30 blur-xl" />

        <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl text-slate-100 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {!submitted ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <Gift className="h-5 w-5" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                  <Sparkles className="h-3 w-3 animate-pulse" /> Free Templates
                </div>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-white mb-2 font-display">
                Get <span className="gradient-text-cyan">Free Workflow Tips</span>
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                New n8n automation templates and tips every week. Join early and
                get founding member pricing when we launch premium workflows.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <HoneypotField />
                <input
                  type="hidden"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                />

                <div className="absolute left-[-5000px]" aria-hidden="true">
                  <input
                    type="text"
                    name={HONEYPOT_FIELD_NAME}
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm tracking-wide"
                >
                  Get Weekly Templates
                </button>

                <p className="text-slate-500 text-[11px] text-center mt-2 leading-relaxed">
                  No spam. Unsubscribe with one click.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-6 flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">
                You&apos;re In!
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-[320px]">
                Check your inbox for a welcome email. New workflows drop every week.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200"
              >
                Let&apos;s Go
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
