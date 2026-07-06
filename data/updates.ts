// =============================================================================
// FLOWVAULT — WEEKLY UPDATES
// =============================================================================

export interface WeeklyUpdate {
  id: string
  title: string
  description: string
  content: string
  date: string
  tags: string[]
  category: string
}

const launchAnnouncement: WeeklyUpdate = {
  id: "flowvault-launch",
  title: "FlowVault Is Live",
  description: "Introducing FlowVault — pre-built n8n workflows for solopreneurs who'd rather ship than tinker.",
  content: `## FlowVault Is Live

We built FlowVault because we spent too many weekends debugging n8n nodes instead of publishing content. Every workflow here has been tested in production on real content pipelines.

### What's Available at Launch

- **AI Content Drafter Pack** ($69) — topic → blog + social + newsletter in one run
- **Telegram Capture Bot** ($39) — send ideas to Telegram, get them tagged and saved automatically
- **Reviewer / QA Agent** ($49) — proofreading, link checking, and structure validation before you hit publish
- **Complete Bundle** ($129) — all three plus a pipeline connector that chains them together

### 10 Free Lessons

Every product comes with detailed walkthrough lessons explaining the workflow node by node. Plus foundational lessons on n8n basics, prompt engineering, trigger patterns, and error handling.

### Coming Soon

- More workflow templates (SEO audit, social scheduler, analytics digest)
- Video walkthroughs for each product
- Community Discord for sharing custom workflows

Thanks for being here from the start.`,
  date: "2026-07-06",
  tags: ["launch", "announcement"],
  category: "Announcement",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_UPDATES: WeeklyUpdate[] = [launchAnnouncement]

export const UPDATE_MAP = Object.fromEntries(
  ALL_UPDATES.map((u) => [u.id, u])
) as Record<string, WeeklyUpdate>

export function getUpdateById(id: string): WeeklyUpdate | undefined {
  return UPDATE_MAP[id]
}
