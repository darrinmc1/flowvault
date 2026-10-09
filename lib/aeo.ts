// =============================================================================
// FLOWVAULT — AEO (Answer Engine Optimization)
// Generates /llms.txt + /llm.txt so AI assistants can read what the site is,
// what it does, its key pages, pricing, and FAQs.
// Reference pattern: Intel Academy / CertSprint lib/aeo.ts (verified live).
// =============================================================================

import { siteConfig } from "@/config/site.config"
import { ALL_MODULES } from "@/data/modules"
import { ALL_PRODUCTS } from "@/data/products"
import { ALL_UPDATES } from "@/data/updates"

const siteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `https://${siteConfig.domain}`

export const flowVaultFaqs = [
  {
    question: "What is FlowVault?",
    answer:
      "FlowVault is a library of done-for-you n8n business automations. Download the workflow JSON, import into n8n, and run — content drafting, Telegram capture, QA review, and more.",
  },
  {
    question: "What is n8n?",
    answer:
      "n8n is a workflow automation platform that connects apps and services without code. FlowVault provides pre-built n8n workflows so you don't have to build automations from scratch.",
  },
  {
    question: "Do I need technical skills to use FlowVault workflows?",
    answer:
      "You need a basic familiarity with n8n to import and configure a workflow (API keys, credentials, triggers). FlowVault includes lessons explaining how each workflow works and how to adapt it.",
  },
  {
    question: "How much do FlowVault workflows cost?",
    answer:
      "Paid workflow packs are not on sale yet. Join the list on the pricing page to hear when they are available.",
  },
  {
    question: "What does the FlowVault Complete Bundle include?",
    answer:
      "The bundle includes the AI Content Drafter, Telegram Capture Bot, and Reviewer / QA Agent packs, so the full content-pipeline pattern (capture → draft → QA) runs out of the box. Paid packs are not on sale yet.",
  },
]

export function buildLlmTxt(): string {
  const base = siteUrl()
  const productBlock = ALL_PRODUCTS.map(
    (p) => `- ${p.name} — ${p.description} — ${base}/products/${p.id}`,
  ).join("\n")
  const moduleBlock = ALL_MODULES.filter((m) => m.status === "published")
    .map((m) => `- ${m.title} — ${m.description} — ${base}/lessons/${m.id}`)
    .join("\n")
  const updateBlock = ALL_UPDATES.map(
    (u) => `- ${u.title} — ${base}/updates/${u.id}`,
  ).join("\n")
  const faqBlock = flowVaultFaqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n")

  return `# ${siteConfig.name}

> ${siteConfig.description}

Site: ${base}
Job: Done-for-you n8n workflow packs (content drafting, Telegram capture, QA review) — download JSON, import, run.
Not: an n8n hosting provider; not a managed automation service; workflows require your own n8n instance and API keys.

## Products

${productBlock}

## Lessons (study guides)

${moduleBlock}

## Updates

${updateBlock}

## Availability

Paid workflow packs and membership plans are not on sale yet. Join the list: ${base}/pricing

## FAQs

${faqBlock}
`
}
