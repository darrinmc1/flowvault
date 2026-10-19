// =============================================================================
// FLOWVAULT — HONEST INVENTORY
// Counts derived from live data. Do not invent pack sizes or downloadable zips.
// =============================================================================

import { ALL_MODULES } from "@/data/modules"
import { ALL_PRODUCTS } from "@/data/products"

export const publishedLessons = ALL_MODULES.filter((m) => m.status === "published")

export const LESSON_COUNT = publishedLessons.length

export const PRODUCT_COUNT = ALL_PRODUCTS.length

export const WORKFLOW_PACK_COUNT = ALL_PRODUCTS.filter((p) => p.id !== "flowvault-bundle").length

/** Free sample JSON files that actually exist under /public/samples. */
export const FREE_SAMPLES = [
  {
    id: "fundamentals",
    name: "n8n Fundamentals sample",
    href: "/samples/fundamentals-workflow.json",
    note: "HTTP request + IF + Set — the walkthrough in the Fundamentals lesson.",
  },
  {
    id: "starter",
    name: "Starter sample",
    href: "/samples/starter-sample.json",
    note: "Hourly schedule + fetch + set. One workflow, not a ten-pack.",
  },
  {
    id: "business",
    name: "Business sample",
    href: "/samples/business-sample.json",
    note: "A single sample graph. The 'Business Pack' zip is Coming Soon.",
  },
  {
    id: "ecommerce",
    name: "E-commerce sample",
    href: "/samples/ecommerce-sample.json",
    note: "A single sample graph. The store pack zip is Coming Soon.",
  },
  {
    id: "ultimate",
    name: "Ultimate sample",
    href: "/samples/ultimate-sample.json",
    note: "A single sample graph. There is no 60-workflow bundle on disk.",
  },
] as const

export const SAMPLE_JSON_COUNT = FREE_SAMPLES.length

/** Paid product zips are not in /public. Checkout stays Coming Soon. */
export const PAID_DOWNLOADS_READY = false

export const SAMPLE_BY_LESSON: Record<string, string> = {
  "n8n-fundamentals": "/samples/fundamentals-workflow.json",
}
