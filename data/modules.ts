// =============================================================================
// FLOWVAULT — LESSON MODULES
// =============================================================================

export type ModuleLevel = "beginner" | "intermediate" | "advanced"

export interface Module {
  id: string
  title: string
  description: string
  category: string
  level: ModuleLevel
  content: string
  duration: string
  durationMinutes: number
  learningOutcomes: string[]
  tags: string[]
  dateAdded: string
  lastUpdated: string
  status: "published" | "draft"
}

// ---------------------------------------------------------------------------
// Seed Lessons
// ---------------------------------------------------------------------------

const howTheDrafterWorks: Module = {
  id: "how-the-drafter-works",
  title: "How the AI Content Drafter Works",
  description:
    "A visual walkthrough of the Content Drafter workflow — every node, every connection, and why it's wired that way.",
  category: "content",
  level: "beginner",
  content: `## How the AI Content Drafter Works

This lesson breaks down the Content Drafter workflow node by node so you understand exactly what's happening before you import the JSON.

### The Big Picture

The workflow has four stages: **Trigger → Generate → Split → Deliver**. A single topic prompt enters at the top and three formatted outputs exit at the bottom.

### Node-by-Node Breakdown

**1. Trigger (Webhook / Cron / Telegram)**
The entry point. You choose which trigger fits your routine — a scheduled cron job for daily drafts, a webhook you call from Zapier or a shortcut, or a Telegram command for on-the-go prompts.

**2. LLM Generate Node**
Receives the topic and a system prompt template. The template controls tone and structure. Five pre-built templates are included; swap them by changing a single variable.

**3. Output Splitter (Switch Node)**
The raw LLM output is a single JSON blob with three keys: blog, social, newsletter. The switch node routes each key to its own branch.

**4. Formatter Nodes (Set / Code)**
Each branch has a formatter that converts the raw text into the destination's expected format — Markdown for files, block JSON for Notion, or HTML for Google Docs.

**5. Delivery Nodes**
Each branch ends at a delivery node: Notion Create Page, Google Docs Append, or Write Binary File. Configure whichever you use and disable the rest.

### Copy This JSON

Import the workflow into n8n: **Settings → Import from File → select drafter.json**. All nodes appear pre-wired; you just fill in your API keys.

### Setup Steps

1. Import the JSON into your n8n instance
2. Add your OpenAI API key to the credentials store
3. Pick a trigger type and configure it
4. Choose your delivery destination and add those credentials
5. Run a test with a sample topic to verify output`,
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Understand the four-stage architecture of the Drafter workflow",
    "Know what each node does and how data flows between them",
    "Import and configure the workflow in your own n8n instance",
  ],
  tags: ["drafter", "content", "walkthrough", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const telegramBotBreakdown: Module = {
  id: "telegram-bot-breakdown",
  title: "Telegram Capture Bot Breakdown",
  description:
    "Step-by-step tour of the Telegram Capture workflow — from BotFather setup to auto-tagged saves in your database.",
  category: "capture",
  level: "beginner",
  content: `## Telegram Capture Bot Breakdown

This lesson walks through every piece of the Telegram Capture workflow so you can confidently set it up and customize it.

### Creating Your Telegram Bot

Before touching n8n you need a bot token from BotFather:

1. Open Telegram, search for **@BotFather**
2. Send /newbot and follow the prompts
3. Copy the API token — you'll paste it into n8n's Telegram credentials

### Workflow Architecture

The workflow is a straight pipeline: **Receive → Parse → Tag → Save → Confirm**.

**1. Telegram Trigger Node**
Listens for any message sent to your bot. Supports text, images, links, and forwarded messages.

**2. Parser (Code Node)**
Extracts the message type, text content, any URLs, and image file IDs. Normalizes everything into a consistent capture object.

**3. Auto-Tagger (Switch + Set Nodes)**
Scans the capture text for keywords or hashtags you define. Matches are added as tags. No match? It gets a default "inbox" tag.

**4. Save Node (Supabase / Notion / Sheets)**
Writes the tagged capture to your chosen destination. The workflow includes pre-configured nodes for all three — enable the one you use.

**5. Confirmation Node (Telegram Send)**
Sends a reply back to your chat confirming the capture was saved, including the tags applied.

### Copy This JSON

Import via **Settings → Import from File → select telegram-capture.json**. Wire your bot token and database credentials, then send a test message.

### Setup Steps

1. Create a Telegram bot via BotFather
2. Import the JSON into n8n
3. Add the bot token to Telegram credentials
4. Configure your storage destination (Supabase, Notion, or Sheets)
5. Customize the tag rules in the Switch node
6. Send a test message to your bot`,
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Create a Telegram bot via BotFather",
    "Understand the capture → parse → tag → save pipeline",
    "Configure auto-tagging rules for your workflow",
  ],
  tags: ["telegram", "capture", "bot", "walkthrough", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const reviewerAgentExplained: Module = {
  id: "reviewer-agent-explained",
  title: "Reviewer / QA Agent Explained",
  description:
    "Inside the QA Agent workflow — how it proofreads, checks links, validates structure, and produces a pass/fail report.",
  category: "review",
  level: "beginner",
  content: `## Reviewer / QA Agent Explained

This lesson dissects the QA Agent so you know exactly how each check works and how to tune severity levels.

### What the Agent Checks

The QA Agent runs five checks in parallel:

- **Spelling & Grammar** — LLM-powered proofreading that returns specific suggestions
- **Broken Links** — HTTP HEAD requests to every URL in the draft
- **Image Alt Text** — verifies every image reference has alt text
- **Heading Hierarchy** — ensures headings follow a logical H1 → H2 → H3 order
- **Word Count** — flags drafts that are too short or too long based on your thresholds

### Workflow Architecture

**Trigger → Fetch → Fan-Out → Checks → Merge → Report → Deliver**

**1. Trigger**
Fires on a Notion status change, webhook, or cron schedule.

**2. Fetch Node**
Pulls the draft content from its source (Notion API, Google Docs API, or a file path).

**3. Fan-Out (Split In Batches)**
Sends the same content to all five check branches simultaneously.

**4. Check Nodes**
Each branch runs its check and returns a result object: { check, status: pass|warn|fail, details }.

**5. Merge Node**
Collects all five results into a single array.

**6. Report Formatter**
Builds a readable report with a summary line and per-check details.

**7. Delivery**
Sends the report to Slack, email, or writes it as a Notion comment.

### Copy This JSON

Import via **Settings → Import from File → select reviewer-qa.json**.

### Setup Steps

1. Import the JSON into n8n
2. Add your OpenAI key for the proofreading check
3. Configure the trigger for your content source
4. Set word count thresholds in the Code node
5. Choose your report delivery destination
6. Mark a draft as "Ready for Review" and watch it run`,
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Know what each of the five QA checks does",
    "Understand the fan-out/merge pattern for parallel checks",
    "Configure severity thresholds and delivery destinations",
  ],
  tags: ["qa", "reviewer", "walkthrough", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const n8nFundamentals: Module = {
  id: "n8n-fundamentals",
  title: "n8n Fundamentals for FlowVault Users",
  description:
    "Never used n8n before? This crash course covers installation, the editor UI, credentials, and importing your first workflow JSON.",
  category: "content",
  level: "beginner",
  content: `## n8n Fundamentals for FlowVault Users

If you've never opened n8n, start here. This lesson gets you from zero to importing and running your first FlowVault workflow.

### What Is n8n?

n8n is an open-source workflow automation tool. Think Zapier, but self-hosted (or cloud) with a visual node editor and much more flexibility. Every FlowVault product is an n8n workflow JSON that you import and run.

### Installation Options

- **n8n Cloud** — sign up at n8n.io, no server needed, free tier available
- **Self-hosted (Docker)** — run n8n on your own VPS for full control
- **Desktop app** — available for Mac and Windows for local testing

### The Editor UI

The canvas is where you build workflows. Key areas:

- **Node panel (left)** — search and drag nodes onto the canvas
- **Canvas (center)** — connect nodes by dragging from output to input
- **Execution panel (bottom)** — shows the data flowing through each node after a test run

### Credentials

Most nodes need API keys or tokens. Go to **Settings → Credentials → Add New** and select the service. n8n stores credentials encrypted.

### Importing a Workflow JSON

1. Click the three-dot menu in the top right
2. Select **Import from File**
3. Choose the .json file from your FlowVault download
4. All nodes appear on the canvas, pre-wired
5. Add your credentials to each node that shows a warning icon
6. Click **Test Workflow** to run it once

### Common Gotchas

- Credentials must match the exact node version — if a node updates, re-add the credential
- Webhook triggers need your n8n instance URL to be publicly reachable (use n8n Cloud or a tunnel for local dev)
- Always test with a small input before enabling production triggers`,
  duration: "8 min",
  durationMinutes: 8,
  learningOutcomes: [
    "Install or sign up for n8n",
    "Navigate the editor UI confidently",
    "Import a FlowVault workflow JSON and configure credentials",
  ],
  tags: ["n8n", "fundamentals", "setup", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const promptEngineering: Module = {
  id: "prompt-engineering-for-workflows",
  title: "Prompt Engineering for n8n Workflows",
  description:
    "How to write and iterate on LLM prompts inside n8n — system prompts, temperature, output schemas, and testing strategies.",
  category: "content",
  level: "intermediate",
  content: `## Prompt Engineering for n8n Workflows

The AI nodes in FlowVault workflows are only as good as their prompts. This lesson teaches you how to write, test, and iterate on prompts inside n8n.

### System Prompt vs User Prompt

In n8n's OpenAI node, you set two prompts:

- **System prompt** — defines the role, tone, and output format. This stays constant across runs.
- **User prompt** — the variable input (e.g., the topic or draft text). This changes every execution.

### Writing Effective System Prompts

Keep system prompts structured:

1. **Role** — "You are a professional content writer for a tech blog."
2. **Task** — "Write a 500-word blog post about the given topic."
3. **Format** — "Return JSON with keys: title, body, summary."
4. **Constraints** — "Use active voice. No jargon. Max 3 sentences per paragraph."

### Temperature and Model Selection

- **Temperature 0.3** — factual, consistent output (good for QA reports)
- **Temperature 0.7** — creative, varied output (good for first drafts)
- **Model** — gpt-4o for quality, gpt-4o-mini for speed and cost

### Output Schemas

Force structured output by describing the JSON schema in your system prompt and setting the response format to JSON mode. This prevents the LLM from returning free-text when you need parseable data.

### Testing in n8n

1. Use the **Manual Trigger** node during development
2. Pin example inputs to nodes so you can re-run without external triggers
3. Check the output panel after each run — click a node to see its data
4. Iterate: tweak the prompt, re-run, compare output

### The FlowVault Prompt Templates

The Content Drafter includes five templates. Each one modifies the system prompt's Role and Constraints sections while keeping the Task and Format identical. Study these to see the pattern, then create your own.`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Structure system prompts with role, task, format, and constraints",
    "Choose the right temperature and model for each use case",
    "Test and iterate on prompts inside the n8n editor",
  ],
  tags: ["prompts", "ai", "llm", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const chainingWorkflows: Module = {
  id: "chaining-workflows",
  title: "Chaining Workflows: The Pipeline Pattern",
  description:
    "How the Bundle's pipeline connector links Capture → Draft → Review into a single automated flow using n8n sub-workflows.",
  category: "content",
  level: "intermediate",
  content: `## Chaining Workflows: The Pipeline Pattern

The FlowVault Bundle includes a connector workflow that chains all three products into a single pipeline. This lesson explains the sub-workflow pattern that makes it possible.

### Why Chain Workflows?

Each FlowVault workflow is designed to run standalone. But the real power comes when they talk to each other:

1. You capture an idea via Telegram
2. That idea automatically becomes a content draft
3. The draft automatically goes through QA review
4. You get a polished draft + report without touching n8n

### The Sub-Workflow Pattern

n8n has an **Execute Workflow** node that calls another workflow and waits for its result. This is how the connector works:

- **Connector Workflow** is the orchestrator
- It calls each product workflow as a sub-workflow
- Data flows from one sub-workflow's output to the next's input

### How the Connector Is Wired

1. **Telegram Trigger** — receives the capture (same as standalone)
2. **Execute Workflow: Capture Bot** — processes and tags the capture, returns the structured capture object
3. **Transform Node** — extracts the capture text and formats it as a topic prompt
4. **Execute Workflow: Content Drafter** — generates the draft from the topic
5. **Execute Workflow: QA Agent** — reviews the draft and returns the report
6. **Delivery Node** — sends the draft + report to your chosen destination

### Copy This JSON

The connector JSON is included in the Bundle download. Import it after importing the three standalone workflows, then link the Execute Workflow nodes to the correct workflow IDs.

### Setup Steps

1. Import all three standalone workflows first
2. Import the connector workflow
3. In each Execute Workflow node, select the matching standalone workflow
4. Test with a Telegram message and trace the execution through all four workflows`,
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Understand the sub-workflow pattern in n8n",
    "Wire the pipeline connector to chain three standalone workflows",
    "Debug data flow across chained workflows",
  ],
  tags: ["pipeline", "chaining", "sub-workflow", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const autoTaggingStrategies: Module = {
  id: "auto-tagging-strategies",
  title: "Auto-Tagging Strategies for Captured Content",
  description:
    "Three approaches to auto-tagging in the Capture Bot — keyword matching, LLM classification, and regex patterns.",
  category: "capture",
  level: "intermediate",
  content: `## Auto-Tagging Strategies for Captured Content

The Capture Bot ships with simple keyword matching, but there are better approaches depending on your volume and accuracy needs.

### Strategy 1: Keyword Matching (Default)

The simplest approach. Define a map of keywords to tags:

- "blog" or "post" → tag: writing
- "idea" or "brainstorm" → tag: ideas
- "bug" or "fix" → tag: dev

**Pros:** Fast, deterministic, zero cost.
**Cons:** Misses nuance, requires manual keyword list maintenance.

### Strategy 2: LLM Classification

Send the capture text to an LLM with a system prompt that returns one or more tags from a fixed list.

System prompt example: "Classify the following text into one or more categories: [writing, ideas, dev, marketing, personal]. Return only the category names as a JSON array."

**Pros:** Handles nuance, no keyword list to maintain.
**Cons:** Slower, costs per call, occasional hallucinated tags.

### Strategy 3: Regex Patterns

Use regex to detect structured patterns:

- URLs → tag: links
- #hashtags → extract the hashtag as a tag
- @mentions → tag: people
- Code blocks → tag: dev

**Pros:** Very fast, precise for structural patterns.
**Cons:** Only works for formatted content, not semantic meaning.

### Combining Strategies

The best setup uses regex first (for structural tags), then keyword matching (for known terms), then falls back to LLM classification (for everything else). The FlowVault workflow supports this — each strategy is a separate branch in the Switch node. Enable or disable branches based on your needs.

### Customizing in the Workflow

Open the Switch node labeled "Auto-Tagger" and you'll see three branches. Each has a comment explaining which strategy it implements. Edit the Code node inside each branch to customize rules.`,
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Compare keyword, LLM, and regex tagging strategies",
    "Combine strategies in a priority chain",
    "Customize the Capture Bot's auto-tagger nodes",
  ],
  tags: ["tagging", "capture", "strategy", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const customQaChecks: Module = {
  id: "custom-qa-checks",
  title: "Writing Custom QA Checks",
  description:
    "Add your own checks to the QA Agent — brand voice scoring, SEO keyword density, readability grade, and more.",
  category: "review",
  level: "advanced",
  content: `## Writing Custom QA Checks

The QA Agent ships with five checks, but the fan-out architecture makes it trivial to add your own. This lesson shows you how.

### The Check Interface

Every check branch returns the same shape:

- **check** — name of the check (e.g., "Brand Voice")
- **status** — "pass", "warn", or "fail"
- **details** — human-readable explanation

As long as your custom check returns this shape, the merge and report nodes handle it automatically.

### Example: Brand Voice Check

1. Duplicate one of the existing check branches
2. Replace the Code/LLM node with a new LLM node
3. System prompt: "Score the following text for brand voice consistency on a scale of 1-10. Our brand voice is: [casual, confident, technical]. Return JSON: { score, issues: string[] }"
4. Add a Code node that maps score ≥ 7 → pass, 4-6 → warn, <4 → fail
5. Connect to the Merge node

### Example: SEO Keyword Density

1. Duplicate a check branch
2. Use a Code node (no LLM needed)
3. Count occurrences of your target keyword divided by total word count
4. Map: 1-3% → pass, 0.5-1% or 3-5% → warn, else → fail

### Example: Readability Grade

1. Duplicate a check branch
2. Use a Code node that calculates Flesch-Kincaid grade level
3. Map: grade 6-10 → pass, 10-14 → warn, >14 → fail

### Adding to the Workflow

After building your check branch, connect its output to the same Merge node the other checks feed into. The report formatter automatically includes it — no changes needed downstream.

### Performance Considerations

Each check runs in parallel, so adding checks increases total execution time only as much as the slowest check. LLM-based checks are typically the bottleneck; Code-only checks add negligible time.`,
  duration: "18 min",
  durationMinutes: 18,
  learningOutcomes: [
    "Understand the check interface contract",
    "Build a custom LLM-based check (brand voice)",
    "Build a custom code-based check (SEO density, readability)",
  ],
  tags: ["qa", "custom-checks", "advanced"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const errorHandling: Module = {
  id: "error-handling-in-workflows",
  title: "Error Handling & Retry Logic in n8n",
  description:
    "How to make your workflows resilient — error triggers, retry on failure, fallback branches, and Slack/email alerting.",
  category: "content",
  level: "advanced",
  content: `## Error Handling & Retry Logic in n8n

Production workflows fail. APIs go down, rate limits hit, and LLMs return garbage. This lesson shows you how to build resilient workflows that recover gracefully.

### n8n's Built-In Retry

Every node has a retry setting in its options:

- **Retry on Fail** — enable and set max retries (default: 0)
- **Wait Between Retries** — milliseconds to wait before retrying
- **Retry on Specific Status Codes** — only retry on 429 (rate limit) or 5xx (server error), not 4xx (client error)

For LLM nodes, set 2 retries with 5000ms wait. For HTTP nodes, set 3 retries with 2000ms wait.

### Error Trigger Workflow

n8n has a special **Error Trigger** node that fires whenever any workflow fails. Create a separate "error handler" workflow:

1. Add an Error Trigger node
2. Connect it to a Slack/Email node
3. The trigger provides: workflow name, node that failed, error message, execution ID

This gives you instant alerts for any production failure.

### Fallback Branches

For non-critical steps, use an **IF** node after the risky node to check for success:

1. Risky Node → IF Node
2. IF success → continue normally
3. IF error → fallback branch (log the error, use a default value, or skip)

### Timeout Protection

Long-running LLM calls can hang. Set the **Timeout** option on the node (e.g., 30 seconds). If it times out, the retry logic kicks in.

### FlowVault Workflows and Errors

All FlowVault workflows include error handling on critical nodes (LLM calls, API writes). The setup guide documents which nodes have retries and what the fallback behavior is.`,
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Configure retry logic on individual nodes",
    "Build an error trigger workflow for alerts",
    "Use fallback branches for non-critical failures",
  ],
  tags: ["errors", "retry", "resilience", "advanced"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const schedulingAndTriggers: Module = {
  id: "scheduling-and-triggers",
  title: "Scheduling & Trigger Patterns",
  description:
    "When and how to fire your workflows — cron schedules, webhooks, Telegram commands, Notion status changes, and manual triggers.",
  category: "content",
  level: "beginner",
  content: `## Scheduling & Trigger Patterns

Every workflow starts with a trigger. Choosing the right one determines how and when your automation runs.

### Cron / Schedule Trigger

Best for recurring tasks on a fixed schedule.

- **Daily content draft** — trigger at 7 AM to have a draft ready when you start work
- **Weekly QA sweep** — trigger Monday morning to review last week's drafts
- **Hourly capture digest** — trigger every hour to batch-process captures

In n8n, use the **Schedule Trigger** node. Set the cron expression or use the visual scheduler.

### Webhook Trigger

Best for on-demand execution from external tools.

- Call from Zapier, Make, or a custom script
- Use as a Slack slash command endpoint
- Trigger from a GitHub Action or CI pipeline

The webhook URL is auto-generated by n8n. Copy it from the node settings.

### Telegram Trigger

Best for mobile-first, conversational input.

- Send a message to your bot to trigger a capture or draft
- Use bot commands (/draft, /capture, /review) to trigger specific workflows
- Works from any device with Telegram installed

### Notion Database Trigger

Best for status-based workflows.

- Trigger when a page's status changes to "Ready for Review"
- Trigger when a new page is created in a specific database
- Requires the Notion API integration

### Manual Trigger

Best for development and testing.

- Click "Test Workflow" in the n8n editor
- Pin sample data to simulate real inputs
- No external setup needed

### Which Trigger for Which Workflow?

- **Content Drafter** — Cron (daily) or Telegram (on-demand)
- **Telegram Capture** — Telegram (always)
- **QA Agent** — Notion status change (ideal) or Cron (fallback)
- **Pipeline Connector** — Telegram (captures trigger the full chain)`,
  duration: "8 min",
  durationMinutes: 8,
  learningOutcomes: [
    "Choose the right trigger type for each workflow",
    "Configure cron, webhook, Telegram, and Notion triggers",
    "Use manual triggers for development and testing",
  ],
  tags: ["triggers", "scheduling", "cron", "webhook", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_MODULES: Module[] = [
  n8nFundamentals,
  howTheDrafterWorks,
  telegramBotBreakdown,
  reviewerAgentExplained,
  schedulingAndTriggers,
  promptEngineering,
  chainingWorkflows,
  autoTaggingStrategies,
  customQaChecks,
  errorHandling,
]

export const MODULE_MAP = Object.fromEntries(
  ALL_MODULES.map((m) => [m.id, m])
) as Record<string, Module>

export function getModuleById(id: string): Module | undefined {
  return MODULE_MAP[id]
}
