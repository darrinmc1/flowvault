import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const FROM = process.env.RESEND_FROM ?? "noreply@example.com"
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "FlowVault"

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type SendEmailBody = {
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
}

export async function POST(req: NextRequest) {
  // === Graceful fallback: skip Clerk auth if not configured ===
  const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (clerkEnabled) {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  // === Graceful fallback: skip Resend if not configured ===
  if (!resend) {
    console.warn("[send-email] RESEND_API_KEY not set — returning skippable response")
    return NextResponse.json({
      ok: true,
      note: "email_service_not_configured",
    })
  }

  const body: SendEmailBody = await req.json().catch(() => ({}))
  const { to, subject, html, replyTo } = body

  if (!to || !subject || !html) {
    return NextResponse.json(
      { error: "Missing required fields: to, subject, html" },
      { status: 400 },
    )
  }

  // Validate email addresses
  const recipients = Array.isArray(to) ? to : [to]
  for (const addr of recipients) {
    if (!emailRe.test(addr)) {
      return NextResponse.json(
        { error: `Invalid email address: ${addr}` },
        { status: 400 },
      )
    }
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: recipients,
    subject,
    html,
    replyTo: replyTo ?? undefined,
  })

  if (error) {
    console.error("[send-email] Resend error:", error)
    return NextResponse.json(
      { error: error.name ?? "send_error" },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
