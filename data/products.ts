// =============================================================================
// FLOWVAULT — DIGITAL PRODUCTS
// =============================================================================

export interface Product {
  id: string
  name: string
  description: string
  content: string
  price: number
  stripePriceId: string
  features: string[]
  category: string
  downloadPath: string
  emoji: string
  tags: string[]
  dateAdded: string
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

const aiContentDrafter: Product = {
  id: "ai-content-drafter",
  name: "AI Content Drafter Pack",
  description:
    "End-to-end n8n workflow that turns a topic prompt into a full blog draft, social thread, and newsletter snippet — ready for review.",
  content: `## AI Content Drafter Pack

This workflow connects an incoming trigger (webhook, schedule, or Telegram message) to an LLM node that generates a structured blog post draft, a condensed social media thread, and a newsletter blurb — all from a single topic prompt.

### What You Get

- **Workflow JSON** — import directly into n8n
- **Setup guide (PDF)** — step-by-step screenshots for connecting your OpenAI key, configuring the webhook trigger, and routing output to Notion, Google Docs, or Markdown files
- **Prompt templates** — five tested system prompts tuned for different content tones (professional, casual, educational, persuasive, storytelling)

### How It Works

1. A trigger fires (cron, webhook, or Telegram command)
2. The LLM node receives your topic + selected prompt template
3. Output is split into three branches: blog draft, social thread, newsletter snippet
4. Each branch formats and delivers to your chosen destination (Notion page, Google Doc, or local file via n8n's Write Binary File node)

### Who It's For

Solo creators, indie hackers, and one-person marketing teams who need a first draft fast so they can spend their time editing, not staring at a blank page.

### Status

Price stays **$69** one-time. Checkout and the zip at `products/ai-content-drafter.zip` are **Coming Soon**. The written walkthrough is live: How the AI Content Drafter Works. No new SKU. No live Stripe button.`,
  price: 69,
  stripePriceId: "price_1U4Jt1PVyAgWnzPryxPUEIYK",
  features: [
    "Complete n8n workflow JSON",
    "Blog + social + newsletter in one run",
    "5 tested prompt templates",
    "Notion, Google Docs, & Markdown output",
    "Step-by-step setup guide (PDF)",
    "Lifetime updates",
  ],
  category: "Content Automation",
  downloadPath: "products/ai-content-drafter.zip",
  emoji: "✍️",
  tags: ["content", "ai", "blog", "social", "newsletter"],
  dateAdded: "2026-07-01",
}

const telegramCaptureBot: Product = {
  id: "telegram-capture-bot",
  name: "Telegram Capture Bot",
  description:
    "n8n workflow that listens to a Telegram bot, captures messages + images, tags them, and saves to your CMS or database automatically.",
  content: `## Telegram Capture Bot

Turn your Telegram chat into a frictionless capture inbox. Send a text, voice note, link, or image to your bot and it lands in your CMS — tagged, timestamped, and ready to use.

### What You Get

- **Workflow JSON** — import directly into n8n
- **Setup guide (PDF)** — creating the Telegram bot via BotFather, connecting it to n8n, and configuring your storage destination
- **Tag-routing rules** — example logic for auto-categorizing captures by keyword or hashtag

### How It Works

1. You send a message to your private Telegram bot
2. n8n receives the webhook, extracts text/media/links
3. An auto-tagger node applies categories based on keywords or hashtags you define
4. The tagged capture is saved to Supabase, Notion, Airtable, or Google Sheets (your choice)
5. Optional: a confirmation message is sent back to Telegram

### Who It's For

Solopreneurs who capture ideas on the go and want them organized without switching apps or copy-pasting later.

### Status

Price stays **$39** one-time. The zip at `products/telegram-capture-bot.zip` is **Coming Soon**. Build the graph from the Telegram Capture Bot Breakdown lesson in the meantime.`,
  price: 39,
  stripePriceId: "price_1U4Jt2PVyAgWnzPrZTn95WWp",
  features: [
    "Complete n8n workflow JSON",
    "Telegram Bot setup walkthrough",
    "Auto-tagging by keyword/hashtag",
    "Supabase, Notion, Airtable, or Sheets output",
    "Image & link extraction",
    "Setup guide (PDF)",
  ],
  category: "Data Capture",
  downloadPath: "products/telegram-capture-bot.zip",
  emoji: "\u{1F4E5}",
  tags: ["telegram", "capture", "bot", "cms", "notion"],
  dateAdded: "2026-07-01",
}

const reviewerQaAgent: Product = {
  id: "reviewer-qa-agent",
  name: "Reviewer / QA Agent",
  description:
    "n8n workflow that proofreads drafts, checks links, validates formatting, and returns a pass/fail report before you hit publish.",
  content: `## Reviewer / QA Agent

Ship fewer typos and broken links. This workflow takes a draft (Markdown, Notion page, or Google Doc), runs it through automated checks, and gives you a structured QA report.

### What You Get

- **Workflow JSON** — import directly into n8n
- **Setup guide (PDF)** — connecting your content source, configuring check severity levels, and routing the report
- **Check library** — pre-built checks for spelling, grammar, broken links, image alt text, heading hierarchy, and word count

### How It Works

1. A trigger fires when a draft is marked "Ready for Review" (via webhook, Notion status change, or scheduled scan)
2. The workflow fetches the draft content
3. Parallel branches run each check: LLM proofreading, HTTP link validation, structural analysis
4. Results are merged into a single QA report with pass/warn/fail for each check
5. The report is delivered to Slack, email, or written back as a comment on the draft

### Who It's For

Content creators and small teams who want a consistent quality gate without hiring an editor for every post.

### Status

Price stays **$49** one-time. The zip at `products/reviewer-qa-agent.zip` is **Coming Soon**. The Reviewer / QA Agent Explained lesson is the spec you can wire by hand.`,
  price: 49,
  stripePriceId: "price_1U4Jt3PVyAgWnzPrkR0GdkSd",
  features: [
    "Complete n8n workflow JSON",
    "LLM-powered proofreading",
    "Automated link checking",
    "Heading & structure validation",
    "Pass/warn/fail QA report",
    "Slack, email, or inline delivery",
    "Setup guide (PDF)",
  ],
  category: "QA & Review",
  downloadPath: "products/reviewer-qa-agent.zip",
  emoji: "\u{1F50D}",
  tags: ["qa", "review", "proofreading", "links", "publishing"],
  dateAdded: "2026-07-01",
}

const flowvaultBundle: Product = {
  id: "flowvault-bundle",
  name: "FlowVault Complete Bundle",
  description:
    "All three workflows in one package — Content Drafter, Telegram Capture Bot, and Reviewer/QA Agent — plus a bonus inter-workflow connector.",
  content: `## FlowVault Complete Bundle

Get every FlowVault workflow at a discount, plus a bonus connector workflow that chains them together: capture an idea via Telegram, draft content from it, and run QA — all automatically.

### What You Get

- **AI Content Drafter Pack** (normally $69)
- **Telegram Capture Bot** (normally $39)
- **Reviewer / QA Agent** (normally $49)
- **Bonus: Pipeline Connector Workflow** — chains capture → draft → review into a single automated pipeline
- **All setup guides (PDF)**
- **Priority email support for 90 days**

### The Pipeline

1. Capture an idea via Telegram
2. The connector triggers the Drafter with that idea as input
3. The Drafter's output is routed to the Reviewer
4. You get a polished draft + QA report — from idea to publish-ready in one flow

### Who It's For

Solopreneurs who want the complete content automation stack from day one. Save $28 vs. buying individually.

### Status

Price stays **$129** one-time. The bundle zip and the connector JSON are **Coming Soon**. The chaining lesson is the wiring diagram. No extra tier invented for this page.`,
  price: 129,
  stripePriceId: "price_1U4Jt4PVyAgWnzPrLdQLTFEI",
  features: [
    "All 3 workflow JSONs",
    "Bonus pipeline connector workflow",
    "All setup guides (PDF)",
    "Capture → Draft → Review in one flow",
    "90-day priority email support",
    "Lifetime updates",
    "Save $28 vs. individual purchase",
  ],
  category: "Bundle",
  downloadPath: "products/flowvault-bundle.zip",
  emoji: "\u{1F4E6}",
  tags: ["bundle", "content", "capture", "qa", "pipeline"],
  dateAdded: "2026-07-01",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_PRODUCTS: Product[] = [
  aiContentDrafter,
  telegramCaptureBot,
  reviewerQaAgent,
  flowvaultBundle,
]

export const PRODUCT_MAP = Object.fromEntries(
  ALL_PRODUCTS.map((p) => [p.id, p])
) as Record<string, Product>

export function getProductById(id: string): Product | undefined {
  return PRODUCT_MAP[id]
}
