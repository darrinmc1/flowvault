// app/api/feedback/route.ts - feedback endpoint used by <FeedbackWidget/>.
// Persists to the shared Empire Supabase `feedback` table (status: "new") via the
// existing supabaseAdmin client. The "Empire — Feedback to GitHub Issue" workflow
// then files a GitHub issue, routing by the full page URL's domain.

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const SITE_KEY = process.env.SITE_KEY ?? "unknown";
const VALID_CATEGORIES = ["Bug", "Suggestion", "Content Request", "Other"];
const FEEDBACK_TYPE: Record<string, string> = {
  Bug: "bug",
  Suggestion: "suggestion",
  "Content Request": "content_request",
  Other: "general",
};

const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
function rateLimited(ip: string) {
  const now = Date.now();
  const e = rateLimit.get(ip);
  if (!e || now > e.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  e.count += 1;
  return e.count > MAX_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const { rating, category, message, email, page, website } = body as {
    rating?: number;
    category?: string;
    message?: string;
    email?: string;
    page?: string;
    website?: string;
  };

  // Honeypot - reject silently if filled.
  if (website && website !== "") {
    return NextResponse.json({ message: "Thank you for your feedback." });
  }

  if (!rating || !category || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });
  }
  if (!VALID_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  // Resolve the full page URL (widget sends window.location.href; fall back to host).
  const origin =
    req.headers.get("origin") ??
    (req.headers.get("host") ? `https://${req.headers.get("host")}` : null);
  const pageUrl =
    page && page.startsWith("http")
      ? page
      : origin && page
      ? `${origin}${page.startsWith("/") ? page : `/${page}`}`
      : origin ?? null;

  if (!supabaseAdmin) {
    console.error("[feedback] supabaseAdmin unavailable - env not set");
    return NextResponse.json(
      { error: "Feedback is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const { error } = await supabaseAdmin.from("feedback").insert({
    site: SITE_KEY,
    category,
    rating,
    message: String(message).trim(),
    page: page ?? null,
    page_url: pageUrl,
    email: email ?? null,
    ip_address: ip,
    feedback_type: FEEDBACK_TYPE[category] ?? "general",
    status: "new",
  });

  if (error) {
    console.error("[feedback] supabase insert error", error);
    return NextResponse.json({ error: "Failed to submit feedback." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thank you for your feedback. We read every note!" });
}
