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

/** Old /learn card IDs that should resolve to a real module. */
export const LESSON_ALIASES: Record<string, string> = {
  "error-handling": "error-handling-in-workflows",
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

This lesson is a walkthrough, not a sales page. You will leave knowing the four-stage graph, what each node is allowed to decide, and what you still have to do by hand. The packaged Drafter zip is **Coming Soon** — you can rebuild the graph from these notes today, or wait for the import file.

> Intel bar: a workflow that writes three formats from one prompt is not magic. It is one LLM call and a polite argument about JSON keys.

### The Big Picture

The workflow has four stages: **Trigger → Generate → Split → Deliver**. A single topic prompt enters at the top and three formatted outputs exit at the bottom. If any stage is vague, the next stage will be confidently wrong.

Think of it as a newsroom with one reporter and three desks. The reporter (the LLM node) writes once. The desks (blog, social, newsletter) only reformat. They do not get a second opinion unless you add one.

### Node-by-Node Breakdown

**1. Trigger (Webhook / Cron / Telegram)**
The entry point. Pick the one that matches how you actually work, not the one that looks impressive on a canvas:

- **Schedule** — daily draft at a fixed hour. Best if you already have a topic list.
- **Webhook** — call it from a form, a shortcut, or another workflow.
- **Telegram** — type a topic on your phone. High friction to *start*, low friction to *use*.

The trigger's only job is to produce a string called \`topic\`. If your trigger also dumps a file, a chat history, and your grocery list into the same payload, the LLM will try to write all of it.

**2. LLM Generate Node**
Receives the topic and a system prompt template. The template controls tone and structure. Five templates are planned for the pack (professional, casual, educational, persuasive, storytelling). Until the zip ships, write one system prompt with four blocks: Role, Task, Format, Constraints.

The Format block is not optional. Ask for JSON with three keys: \`blog\`, \`social\`, \`newsletter\`. If you ask for "a nice writeup," you will get a nice writeup you cannot route.

Temperature: **0.7** for first drafts. Save **0.3** for the QA agent. Mixing those two numbers is how you get a boring draft and a creative spellcheck.

**3. Output Splitter (Switch or Code)**
The raw LLM output is one JSON object. Split it. Do not ask the model to "just send the blog to Notion and the rest somewhere." Models do not have a Notion login. Nodes do.

A small Code node is enough:

- Read \`blog\`, \`social\`, \`newsletter\`
- Emit three items, or fan out to three branches
- If a key is missing, fail loud. Silent empty pages are how drafts go missing for a week.

**4. Formatter Nodes (Set / Code)**
Each branch converts raw text into the destination's expected shape:

- **Markdown file** — title as H1, body as-is
- **Notion** — blocks, not a blob. If you paste a 1,200-word string into one paragraph block, Notion will accept it and you will hate yourself later
- **Google Docs** — HTML or plain text, depending on the node version you actually installed

**5. Delivery Nodes**
Each branch ends at a delivery node: Notion Create Page, Google Docs Append, or Write Binary File. Enable the one you use. Disable the rest. A disabled node is a decision. An enabled node with empty credentials is a 3 a.m. error.

### What You Can Do Today (No Zip Required)

1. Create a new workflow. Add a Manual Trigger.
2. Add a Set node with \`topic\` = "Why solopreneurs should stop rewriting the same status email."
3. Add an OpenAI (or compatible) node. System prompt: role + task + JSON format + constraints.
4. Add a Code node that reads the three keys and returns them as separate fields.
5. Write the blog branch to a file. Ignore social and newsletter until the file looks like something you would edit.

That is the Drafter. The pack is a pre-wired version of this, plus templates. It is not a different species.

### Setup Steps (When the Pack Ships)

1. Import the JSON into your n8n instance
2. Add your LLM credentials
3. Pick a trigger type and configure it
4. Choose one delivery destination and add those credentials
5. Run a test with a sample topic and read the output *before* you schedule it

### Common Failures

- **Pretty prose, broken JSON.** Turn on JSON mode or add "Return only JSON" and mean it.
- **Three identical outputs.** Your prompt asked for "a post" three times instead of three formats.
- **The blog is 90 words.** You did not set a floor. The model will take the cheapest path.
- **Notion page titled \`undefined\`.** You mapped \`title\` from the wrong path. Click the node. Look at the actual output. Do not guess.

### Honest Inventory

This lesson is written and free. The Drafter walkthrough matches the product page for **AI Content Drafter Pack** ($69, Coming Soon). There is no \`drafter.json\` in the public downloads folder today. The free sample on disk is the Fundamentals HTTP workflow, not this graph.

### Peel this

If you cannot explain which node is allowed to invent sentences, you do not have a content pipeline. You have a button that surprises you.`,
  duration: "18 min",
  durationMinutes: 18,
  learningOutcomes: [
    "Understand the four-stage architecture of the Drafter workflow",
    "Know what each node does and how data flows between them",
    "Rebuild the graph by hand, or import the pack when it ships",
  ],
  tags: ["drafter", "content", "walkthrough", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

Capture is the least glamorous workflow in FlowVault and the one people actually run every day. You send a thought to a bot. The thought lands in a database with a tag. You do not open seven apps to "file it later." Later is where ideas go to die.

The packaged Telegram zip is **Coming Soon**. The setup below is the real procedure. You can build it now.

> Intel bar: if your capture system requires a laptop, it is not a capture system. It is a homework assignment you assigned yourself.

### Creating Your Telegram Bot

Do this before you open n8n. A workflow with no token is a drawing.

1. Open Telegram. Search for **@BotFather** — the official one, not a cousin.
2. Send \`/newbot\` and follow the prompts. Pick a name you will not be embarrassed to see in a chat list.
3. Copy the API token. Treat it like a password. Anyone with it can read what you send the bot.
4. Send your bot a message so the chat exists. Bots cannot text you first.

Optional but useful: \`/setprivacy\` — disable privacy mode if you want the bot to see group messages. For a personal inbox, leave privacy on and talk to it in a private chat.

### Workflow Architecture

The workflow is a straight pipeline: **Receive → Parse → Tag → Save → Confirm**.

**1. Telegram Trigger Node**
Listens for messages to your bot. Text is the easy case. Also decide, on purpose, whether you care about:

- Images (you will get a \`file_id\`, not a URL)
- Links (often buried in entities)
- Forwards (the interesting text is sometimes in \`forward_origin\`, not \`text\`)
- Voice notes (a file, not a transcript, unless you add a transcription step)

Start with text only. You can add vanity formats after the boring path works.

**2. Parser (Code Node)**
Normalize everything into one object you control:

- \`type\` — text | image | link | other
- \`text\` — the string you will tag and store
- \`urls\` — extracted links
- \`fileId\` — Telegram file id if present
- \`receivedAt\` — ISO timestamp from the message, not from "now" on the server

If you skip this node and map raw Telegram JSON into Notion, you will spend a Saturday reverse-engineering field names. That Saturday will not make you interesting.

**3. Auto-Tagger (Switch + Set)**
Scan \`text\` for keywords or hashtags you actually use. Examples:

- \`blog\`, \`post\`, \`draft\` → \`writing\`
- \`idea\`, \`brainstorm\` → \`ideas\`
- \`bug\`, \`fix\`, \`todo\` → \`dev\`

No match? Tag \`inbox\`. \`inbox\` is a real tag. It means "you have not decided." That is more honest than \`misc\`.

**4. Save Node (Supabase / Notion / Sheets)**
Write the tagged capture to one destination. Enable one node. Disable the others. Dual-writing to Notion *and* Sheets because you "might need both" is how you get two slightly different truths.

Minimum columns: text, tags, created_at, source=telegram. You can add mood later.

**5. Confirmation Node (Telegram Send)**
Reply in the same chat: "Saved. Tags: inbox, ideas." If the save failed, say it failed. A cheerful "Got it!" after a 500 is how you lose a week of notes.

### What You Can Do Today

1. Create the bot. Save the token in n8n credentials.
2. Telegram Trigger → Code parser → Set tags → Notion (or Sheets).
3. Send "blog idea: write about webhook signatures." Confirm the row exists.
4. Only then add image handling.

### Setup Steps (When the Pack Ships)

1. Create a Telegram bot via BotFather
2. Import the JSON into n8n
3. Add the bot token to Telegram credentials
4. Configure one storage destination
5. Customize the tag rules in the Switch node
6. Send a test message and read the confirmation

### Common Failures

- **Trigger never fires.** Workflow is inactive, or you pasted the token into the wrong credential.
- **Empty text.** You forwarded a photo with a caption and mapped \`text\` instead of \`caption\`.
- **Duplicate rows.** Telegram retries. Upsert on \`update_id\` or accept that "hello" may appear twice and move on.
- **Bot replies in the wrong chat.** You hardcoded a chat id from a test. Use the incoming \`chat.id\`.

### Honest Inventory

This lesson is written and free. The matching product is **Telegram Capture Bot** ($39, Coming Soon). There is no \`telegram-capture.json\` in public downloads. Do not click around looking for a secret zip. There isn't one yet.

### Peel this

If you will not send the bot a real thought today, do not build a tagging taxonomy for 40 categories. You do not have a library. You have a form you are avoiding.`,
  duration: "16 min",
  durationMinutes: 16,
  learningOutcomes: [
    "Create a Telegram bot via BotFather",
    "Understand the capture → parse → tag → save pipeline",
    "Configure auto-tagging rules you will actually maintain",
  ],
  tags: ["telegram", "capture", "bot", "walkthrough", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

The QA agent is a bouncer, not a ghostwriter. It does not make the draft good. It tells you, specifically, why you should not hit publish yet. If you want it to "just fix everything," you want a different tool, and you will not like the surprises.

The packaged Reviewer zip is **Coming Soon**. The check list below is the spec. You can wire it by hand.

> Intel bar: a pass/fail report you ignore is a diary. A report that blocks publish is a gate. Pick one.

### What the Agent Checks

Five checks in parallel. Each returns the same shape: \`check\`, \`status\` (pass | warn | fail), \`details\`.

- **Spelling & Grammar** — LLM-powered. Ask for a list of issues, not a rewritten article. If you let it rewrite, you have two authors and no owner.
- **Broken Links** — HTTP HEAD (or GET if the host is rude about HEAD) for every URL. Follow redirects once. Time out at 8 seconds. A timeout is a warn, not a pass.
- **Image Alt Text** — every image reference needs alt text. Decorative images can be marked decorative. "Image1.png" is not alt text.
- **Heading Hierarchy** — one H1, then H2s, then H3s. An H4 after an H1 means someone pasted from a doc and left.
- **Word Count** — your floors and ceilings, not the model's. A "thought leadership" post that is 180 words is a note.

None of these require a personality. They require thresholds.

### Workflow Architecture

**Trigger → Fetch → Fan-Out → Checks → Merge → Report → Deliver**

**1. Trigger**
Notion status = "Ready for Review" is the grown-up version. Cron is the fallback for people who will not add a status column. Webhook is for when another workflow finished a draft.

**2. Fetch Node**
Pull the draft. Notion API, Google Docs, or a file path. Fetch the *current* version. Caching a draft from Tuesday is how you approve Wednesday's typo.

**3. Fan-Out**
Send the same content to all five branches. Split In Batches, or just wire five connections from one node. Parallel is the point. Serial QA is a to-do list.

**4. Check Nodes**
Each branch returns one result object. If a check throws, catch it and return \`status: fail\` with the error message. An exploded branch that kills the whole workflow is how you ship with zero checks because "QA was down."

**5. Merge**
Collect the five objects into one array. Do not average them into a score out of 100. A 92 with one broken payment link is not a 92.

**6. Report Formatter**
One summary line: \`2 fail, 1 warn, 2 pass\`. Then the details. Humans read the summary. The details are for the fail.

**7. Delivery**
Slack, email, or a Notion comment on the same page. Put the report where the writer already is. A QA email folder is a graveyard.

### Severity You Can Defend

Write the rules down in the Code node so you are not arguing with a vibe:

- Link 404 → fail
- Link 403 or timeout → warn
- Grammar suggestions → warn (unless you asked for fail on any issue, which you will regret)
- No H1 → fail
- Word count 10% outside the band → warn; 40% outside → fail

### What You Can Do Today

1. Manual Trigger with a pinned Markdown sample that includes one broken link and one missing alt.
2. Code node that extracts URLs and HEADs them.
3. LLM node that returns JSON issues only.
4. Merge + a Slack message.

That is enough to distrust your drafts in a useful way.

### Setup Steps (When the Pack Ships)

1. Import the JSON into n8n
2. Add your LLM key for the proofreading check
3. Point the trigger at your content source
4. Set word-count thresholds
5. Choose report delivery
6. Mark one draft "Ready for Review" and read the report like you mean it

### Honest Inventory

This lesson is written and free. The matching product is **Reviewer / QA Agent** ($49, Coming Soon). There is no \`reviewer-qa.json\` in public downloads. Custom-check patterns live in the advanced lesson on this site.

### Peel this

If every check is a warn, you have built a shrug. Fail the things that would embarrass you in public. Warn the rest.`,
  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Know what each of the five QA checks does",
    "Understand the fan-out/merge pattern for parallel checks",
    "Set severity rules you can defend to a future tired version of yourself",
  ],
  tags: ["qa", "reviewer", "walkthrough", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

If you have never opened n8n, start here. This is the only lesson with a **real downloadable sample JSON** on this site today. Import it, run it, then come back. The paid packs are Coming Soon. This sample is not.

> Intel bar: n8n is a graph of stubborn little boxes. The boxes do exactly what you configured, including the part you configured by accident.

### What Is n8n?

n8n is an open-source workflow automation tool. Think Zapier, but you can self-host it, inspect every payload, and write a Code node when a vendor's "no-code" ceiling shows up. Every FlowVault product is an n8n workflow JSON. We do not host your automations. We do not hold your API keys. You import, you run.

If you need a hosted button that "just works" with no editor, you are in the wrong shop. That is fine. It is also honest.

### Installation Options

- **n8n Cloud** — sign up at n8n.io. Fastest path. Free tier exists; read the current limits yourself.
- **Self-hosted (Docker)** — full control, you own the backups and the upgrades.
- **Desktop / local** — good for learning. Webhook triggers will need a tunnel if the other side must reach you.

Pick one. Switching mid-lesson is how you spend an hour comparing plans instead of clicking Test Workflow.

### The Editor UI

- **Node panel (left)** — search, drag, drop. If you cannot find a node, you are spelling it like a human and the search wants the vendor name.
- **Canvas (center)** — connections are the product. A node with no incoming wire is modern art.
- **Execution panel** — after a run, click a node. The JSON you see is the truth. The mapping you *meant* is a rumor.

Pin data on a node while you learn. Pinned data means you can re-run without waiting for Telegram, cron, or your own attention span.

### Credentials

Settings → Credentials → Add. Pick the service. Paste the key. n8n encrypts it at rest. You still should not commit it to Git, Slack it to yourself, or put it in a Code node "just for now."

When a node shows a warning icon, it is usually credentials or an empty required field. It is rarely a conspiracy.

### Import the Free Sample

The file is \`/samples/fundamentals-workflow.json\`. It is a small graph: **Start → HTTP Request → IF → Set**. It hits a public placeholder API and labels a todo complete or pending. That is the whole trick.

1. In n8n, open the three-dot menu → **Import from File**
2. Choose \`fundamentals-workflow.json\`
3. Click **Test Workflow** (or execute the Start node)
4. Open the HTTP Request node. Confirm you got a todo object
5. Open the IF node. See which branch ran
6. Change nothing else until you can predict the branch before you run it

If import fails, you grabbed a random JSON from the internet. Use the file from this site.

### Expressions (The Part Everyone Skips)

n8n expressions use \`{{ }}\`. Example: \`{{ $json.title }}\` means "the title field from the item that just arrived."

- \`$json\` — current item
- \`$items\` — all items from a node
- \`$now\` — current time, useful until it is not (timezones exist)

If the UI shows a red expression, you typed a field that is not there. Click the previous node. Copy the real key. Do not invent \`Title\` because it looks nicer than \`title\`.

### Common Gotchas

- Credentials must match the node type. A generic Header Auth is not an OpenAI credential.
- Webhook URLs must be reachable. Localhost is not a destination for Telegram.
- Always test with a small input before you enable a production trigger.
- "It worked once" is not a deployment plan. Check the executions list after you walk away.

### Honest Inventory

Written lessons on this site: see the Lessons index for the live count. Free sample JSON files on disk: **5**, including this one. Paid workflow zips: **0** (Coming Soon). No Stripe on this page. No 60-pack.

### Peel this

If you cannot import this sample and explain the IF branch, do not buy a bundle later. Buy an afternoon. This one.`,
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Install or sign up for n8n",
    "Import the free Fundamentals sample JSON and read a payload",
    "Use $json expressions without guessing field names",
  ],
  tags: ["n8n", "fundamentals", "setup", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

The AI nodes in FlowVault workflows are only as good as their prompts. This lesson is about writing prompts that a *workflow* can trust — not prompts that win a screenshot.

> Intel bar: a clever prompt that returns different shapes on Tuesdays is not clever. It is a flaky unit test with an invoice.

### System Prompt vs User Prompt

In n8n's OpenAI-style nodes you usually set two layers:

- **System prompt** — role, tone, output contract. Same every run.
- **User prompt** — the variable. Topic, draft, capture text.

If you put the output schema in the user prompt, the next person (you, in a month) will overwrite it with a topic and wonder why the splitter exploded.

### A System Prompt You Can Steal

Keep four blocks, in this order:

1. **Role** — "You are a staff writer for a technical newsletter. You are not a brand voice intern."
2. **Task** — "Write from the given topic. Do not invent customers, metrics, or quotes."
3. **Format** — "Return JSON with keys blog (markdown string), social (array of 5 strings), newsletter (string, max 90 words)."
4. **Constraints** — "Active voice. No 'delve,' 'landscape,' or 'in today's fast-paced world.' If you lack a fact, say you lack it."

That is the whole methodology. People who sell you a 12-page "prompt framework" are selling you a 12-page framework.

### Temperature and Models

- **0.2–0.3** — QA, classification, extraction. You want the same answer twice.
- **0.6–0.8** — first drafts. You want a sentence you can edit, not a legal filing.
- **1.0+** — party tricks. Do not put this on a cron.

Model choice: use the cheap model for tagging and the expensive one for prose if you must. Do not use the expensive one for "is this a URL." Regex is still allowed.

### Output Schemas

JSON mode (or a schema field, depending on the node) is how you stop the model from wrapping the answer in a short essay about JSON. If your node cannot force JSON, end the system prompt with: "Return only the JSON object. No markdown fences." Then validate in a Code node. If parse fails, retry once, then fail the execution. Infinite retries are how you buy a vacation for the API vendor.

### Testing in n8n

1. Manual Trigger. Always, until you are bored of being right.
2. Pin two topics: one boring, one messy (a topic that is actually three topics).
3. Run. Open the LLM node. Read the raw output, not just the mapped fields.
4. Change **one** line of the prompt. Run again. If you change six lines, you are conducting folklore.

Save a "known good" output as pinned data on the splitter so you can work on delivery without spending tokens.

### Templates vs Vibes

The Drafter pack is supposed to ship five tone templates. They should change Role and Constraints, not Format. If a "storytelling" template drops a JSON key, it is a broken template, not a creative choice.

Until the pack ships, duplicate your system prompt and edit the Role line. That is a template. You do not need a CMS for five strings.

### Failure Modes

- **The model apologizes.** Your user prompt was empty or the safety layer flinched. Log it; do not publish the apology.
- **Keys appear in Title Case.** Your schema said \`blog\` and the model said \`Blog\`. Normalize in Code. Do not add a second LLM call to "fix the keys."
- **Social thread is one long paragraph.** You asked for "a thread" instead of "an array of 5 strings, each ≤ 240 characters."

### Honest Inventory

This lesson is written and free. It does not include a secret prompt pack download. The five Drafter templates are part of a Coming Soon product, not a hidden folder.

### Peel this

If you cannot parse the output with \`JSON.parse\`, you do not have an automation. You have a chat you scheduled.`,
  duration: "18 min",
  durationMinutes: 18,
  learningOutcomes: [
    "Structure system prompts with role, task, format, and constraints",
    "Choose temperature and model like an adult with a bill",
    "Test prompts with pinned data instead of folklore",
  ],
  tags: ["prompts", "ai", "llm", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

Each FlowVault workflow is designed to run alone. The bundle's connector is the piece that makes them talk: capture an idea, draft from it, review the draft. That connector JSON is **Coming Soon**, same as the three packs. This lesson is the wiring diagram so you do not invent a fourth god-workflow that cannot be tested.

> Intel bar: a 60-node canvas is not a pipeline. It is a place where hope goes to need a scrollbar.

### Why Chain at All?

Standalone is easier to debug. Chain only when the output of A is *actually* the input of B:

1. Telegram capture produces a tagged text
2. Drafter wants a topic string
3. QA wants a draft string
4. You want one confirmation, not three chats

If you are chaining because it looks like a product diagram, stop. Run them separately for a week. Then chain the two you actually wait on.

### The Sub-Workflow Pattern

n8n's **Execute Workflow** node calls another workflow and can wait for the result. The connector is an orchestrator. It should be thin.

- Orchestrator: trigger, map fields, call children, deliver
- Children: one job each. No child should know the others exist

When a child fails, the orchestrator should say which child failed. "Workflow error" is not a diagnosis.

### How the Connector Is Wired

1. **Telegram Trigger** — same as the capture bot
2. **Execute Workflow: Capture** — returns the structured capture object
3. **Transform** — map \`capture.text\` → \`topic\`. If the text is 800 words, summarize first or do not draft from a novel
4. **Execute Workflow: Drafter** — returns blog / social / newsletter
5. **Execute Workflow: QA** — returns the report for the blog body (QA the thing you might publish, not the tweet)
6. **Delivery** — draft + report to one place

Notice what is missing: a node that "improves" the draft in a loop until QA passes. That loop is how you burn $40 overnight teaching a model to please another model.

### Data Contracts

Write the contract on a sticky note. Literally:

- Capture out: \`{ text, tags, receivedAt }\`
- Drafter in: \`{ topic }\`
- Drafter out: \`{ blog, social, newsletter }\`
- QA in: \`{ draft, urlList? }\`
- QA out: \`{ results: [{ check, status, details }], summary }\`

If a child changes a key name, the orchestrator breaks on purpose. That is good. Silent \`undefined\` titles are how pipelines rot.

### Setup Steps (When the Bundle Ships)

1. Import the three standalone workflows first. Test each with pinned data.
2. Import the connector.
3. Point each Execute Workflow node at the correct workflow id (names change; ids are worse; check twice).
4. Send one Telegram message. Open executions for all four workflows. If you only look at the parent, you will miss the child's real error.

### Debugging Across Workflows

- Run children alone with the exact JSON the parent will send.
- Add a Set node in the parent that logs the payload you are about to send. Future you will thank present you, briefly.
- Do not enable the Telegram trigger on both the child and the parent. You will process the same idea twice and call it engagement.

### Honest Inventory

This lesson is written and free. The **Complete Bundle** ($129) and its connector are Coming Soon. There is no pipeline zip in public downloads. You can still build the orchestrator with Execute Workflow nodes today if you built the children.

### Peel this

If a child cannot run with a Manual Trigger and pinned JSON, it is not ready to be a child. You do not get to hide a mess behind Execute Workflow.`,
  duration: "16 min",
  durationMinutes: 16,
  learningOutcomes: [
    "Understand the sub-workflow pattern in n8n",
    "Define a data contract between capture, draft, and QA",
    "Debug a parent execution by reading the child executions",
  ],
  tags: ["pipeline", "chaining", "sub-workflow", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

The Capture Bot ships (when it ships) with keyword matching. That is correct for week one. This lesson covers when to stay there, when to add regex, and when an LLM is worth the latency and the bill.

> Intel bar: a taxonomy with 30 tags and 4 notes is not a taxonomy. It is a museum.

### Strategy 1: Keyword Matching (Default)

A map. Nothing else.

- "blog" or "post" → \`writing\`
- "idea" or "brainstorm" → \`ideas\`
- "bug" or "fix" → \`dev\`

**Pros:** Fast, deterministic, $0, you can explain it.
**Cons:** Misses "we should write something about the launch" if you never added those words.

Maintain the list when you notice a miss. Do not maintain it in anticipation of a fictional high-volume future.

### Strategy 2: Regex (Structure, Not Meaning)

Use regex for shapes, not vibes:

- URLs → \`links\`
- \`#hashtags\` → the hashtag itself
- \`@mentions\` → \`people\`
- fenced code or \`function \` → \`dev\`

**Pros:** Precise, cheap, instant.
**Cons:** Will not know that "that thing Steve said" is a meeting note.

### Strategy 3: LLM Classification

Send \`text\` plus a **closed list** of tags. Ask for a JSON array. Reject any tag not on the list.

Example instruction: "Choose zero or more of: writing, ideas, dev, marketing, personal. Return a JSON array of strings. If nothing fits, return [\\"inbox\\"]."

**Pros:** Handles phrasing you did not predict.
**Cons:** Slower, costs money, will occasionally invent \`synergy\` if you did not close the list.

Temperature 0.2. Retry once on invalid JSON. Never let the model create new tags in production. That is how you get \`Idea\`, \`ideas\`, and \`IDEAS\` as three religions.

### Combine Them in a Fixed Order

1. Regex for structure
2. Keywords for your dialect
3. LLM only if still \`inbox\` *and* the text is longer than, say, 40 characters
4. Always keep \`inbox\` if you are not sure

The Switch node in the Capture workflow is the right place. Each branch is a strategy. Disable the LLM branch until the first two bore you.

### What Not To Do

- Do not embed a 2,000-word "brand ontology."
- Do not auto-file into 12 Notion databases on day one.
- Do not train a classifier on 11 examples and call it machine learning.

### Customizing in the Workflow

When the pack exists, open the node labeled Auto-Tagger. Until then: Code node, a plain object, \`includes()\`. You are not behind. You are unfashionable, which is cheaper.

### Honest Inventory

This lesson is written and free. It does not add a paid "tagging pack." The Capture Bot product remains Coming Soon. Your tag list is your own and should stay small enough to remember in a grocery line.

### Peel this

If you cannot name your tags without opening the workflow, you have too many tags. Peel it. Keep five. Eat the rest.`,
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Compare keyword, LLM, and regex tagging without mysticism",
    "Combine strategies in a priority chain",
    "Keep a closed tag list the model cannot 'improve'",
  ],
  tags: ["tagging", "capture", "strategy", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

The QA Agent's five stock checks are a start. The fan-out architecture is the product: if your branch returns the contract, the merge node does not care that you invented the check. This lesson is how to add one without turning QA into a second Drafter.

The pack is **Coming Soon**. The contract is not.

> Intel bar: a check you cannot explain to a tired editor will be disabled by that editor. Forever.

### The Check Interface

Every branch returns:

- **check** — short name ("Brand Voice", "Keyword Density")
- **status** — \`pass\`, \`warn\`, or \`fail\`
- **details** — a sentence a human can use

Optional extras (\`score\`, \`spans\`) are fine if the formatter ignores unknown keys. Do not make extras required or the stock report breaks.

### Example: Brand Voice (LLM)

1. Duplicate an existing check branch
2. LLM node. System prompt: "Score 1-10 for voice: casual, specific, no corporate sludge. List issues. Return JSON: { score, issues: string[] }. Do not rewrite the draft."
3. Code node: score ≥ 7 pass, 4–6 warn, else fail
4. Wire to Merge

If the LLM rewrites the article, you have a rogue author. Delete that prompt line.

### Example: Keyword Density (Code Only)

1. Duplicate a branch
2. Count the target keyword / total words
3. 1–3% pass, 0.5–1% or 3–5% warn, else fail

No model. No invoice. The target keyword comes from the trigger payload, not from a hard-coded "synergy."

### Example: Readability (Code Only)

Flesch-Kincaid is a formula, not a personality test. Grade 6–10 pass for a general audience, 10–14 warn, above that fail *if* you asked for general audience. If you write for compilers, change the band. Do not ship a fail that calls your API reference "too smart."

### Adding It to the Graph

Connect the new branch to the same Merge as the others. If Merge expects a fixed number of inputs, add an input. If you forget, your check will run and vanish. That is the worst kind of green.

### Performance

Checks run in parallel. Total time ≈ the slowest check. LLM checks are the slow ones. Two LLM checks is a choice. Five LLM checks is a hobby.

### What Not To Add

- "Is this viral?" — not a check
- "Would a VC like this?" — especially not a check
- Auto-rewrite on fail — that is a different workflow with a human still in front of publish

### Honest Inventory

This lesson is written and free. It does not ship extra check nodes as a download. The Reviewer pack, when it exists, will include the five stock checks. Your custom branches live in your n8n instance.

### Peel this

If a check cannot produce pass/warn/fail without a paragraph of philosophy, it is a meeting. Do not automate meetings.`,
  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Keep the check interface contract intact",
    "Add one LLM check and one Code check",
    "Avoid QA that rewrites instead of reports",
  ],
  tags: ["qa", "custom-checks", "advanced"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

Production workflows fail. APIs nap, rate limits land, models return poetry when you asked for JSON. This lesson is how to fail in a way you can hear.

> Intel bar: retrying a 400 is optimism. Retrying a 429 is manners. Retrying a 500 is survival. Retrying "I forgot the credential" is a loop.

### n8n's Built-In Retry

Every node has options:

- **Retry on Fail** — set a max. Default 0 means you like surprises.
- **Wait Between Retries** — milliseconds. For 429s, wait longer than your pride wants.
- **Continue On Fail** — only if the next node can stand an empty or error item. Otherwise you will write \`undefined\` to Notion and call it shipping.

Suggested starting points:

- LLM nodes: 2 retries, 5000 ms
- HTTP nodes: 3 retries, 2000 ms, and only if you can distinguish 429/5xx from 404

A 404 should not retry. The page is not coming back because you asked again.

### Error Trigger Workflow

Create a separate workflow with an **Error Trigger**. It fires when another workflow dies.

1. Error Trigger
2. Slack or email
3. Body: workflow name, node name, error message, execution id

One handler for all production workflows. Do not paste a Slack node onto every graph "for now." You will miss one. It will be the important one.

### Fallback Branches

For steps that are nice-to-have (a tweet, a nice-to-have notification):

1. Risky node → IF (success?)
2. Yes → continue
3. No → log + skip

For steps that are the point (save the capture, write the draft), do not fallback to "just continue." Fail. Alert. Fix.

### Timeouts

LLM calls hang. Set a timeout (30s is a sane adult). Timeout should trip retry, then the error handler. Infinite hang is how you discover the problem on Monday.

### Idempotency (The Word You Need)

If Telegram retries a webhook and you insert a row each time, you have duplicates. Use \`update_id\` or a hash of the message as a unique key. If you cannot upsert, you will de-dupe by hand and lie that you will automate it next sprint.

### FlowVault Workflows

When the packs ship, critical nodes (LLM, writes) should already have retries. Until then, anything you build from these lessons should get retries before you enable a cron. A daily workflow that fails silently is an expensive calendar event.

### Honest Inventory

This lesson is written and free. The /learn card used to call this a locked "preview." It is not locked. There is no paid error-handling DLC. There is also no downloadable "error pack."

### Peel this

If nobody is watching the error workflow, you do not have error handling. You have a log in a room you do not enter.`,
  duration: "16 min",
  durationMinutes: 16,
  learningOutcomes: [
    "Configure retry logic that respects status codes",
    "Build one error-trigger workflow for alerts",
    "Use fallbacks only for non-critical steps",
  ],
  tags: ["errors", "retry", "resilience", "advanced"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
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

Every workflow starts with a trigger. The wrong trigger makes a good graph feel haunted. The right one is boring. Boring is the goal.

> Intel bar: if you need four triggers because you could not pick one, you need a decision, not more nodes.

### Cron / Schedule

Best for work that should happen even if you forget.

- Daily draft at 07:00 in *your* timezone (check the instance timezone; UTC has ruined nicer people)
- Weekly QA sweep on Monday
- Hourly digest only if the digest is actually read

Cron that fires every 5 minutes "just in case" is how you invent a rate limit problem and a Slack mutiny.

### Webhook

Best for on-demand runs from something else: a form, another workflow, a button you actually click.

- Copy the production URL from the node, not a screenshot from a tutorial
- Require a secret header. A public GET that drafts content is a prank waiting for a crawler
- Return a short 200 JSON. Do not return the full draft to the open internet unless you meant to

See the Webhook Automation lesson for signatures and payload hygiene.

### Telegram

Best when the input is a thought you have while not at a desk.

- One bot, one job, or use commands (\`/draft\`, \`/capture\`) and a Switch
- Private chat first. Groups are how you capture other people's jokes into your CMS

### Notion Status

Best when the human decision is already in Notion. Status → "Ready for Review" is a trigger. Creating a page is usually too early. You will QA titles like "asdf."

### Manual

Best for development. Always. Pin data. Click Test. If your only trigger is cron, you will wait an hour to learn you mapped \`Title\` wrong.

### Which Trigger for Which FlowVault Graph?

- **Content Drafter** — Schedule if you have a topic list; Telegram or webhook if you do not
- **Telegram Capture** — Telegram. If you are capturing from email instead, that is a different workflow. Do not force BotFather into it
- **QA Agent** — Notion status. Cron is a backup for people who will not add a status
- **Pipeline connector** — Telegram or webhook, not cron, unless you enjoy empty drafts at 07:00

### Timezones and "It Did Not Run"

Check: workflow active, instance time, cron expression, and whether you are looking at the correct environment. Looking at a local instance for a cloud cron is a rite of passage. It is also preventable.

### Honest Inventory

This lesson is written and free. It does not sell a "trigger pack." Webhook deep-dive is a separate written lesson. No download required.

### Peel this

Pick the trigger you will still understand in six months. If that is Manual plus a calendar reminder, start there. You can always add cron after the graph is true.`,
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Choose a trigger for how you actually work",
    "Avoid public webhooks without a secret",
    "Use Manual + pinned data before any schedule",
  ],
  tags: ["triggers", "scheduling", "cron", "webhook", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-09-04",
  status: "published",
}

const webhookAutomation: Module = {
  id: "webhook-automation",
  title: "Webhook Automation Deep Dive",
  description:
    "Master webhooks in n8n. Learn how to receive, process, and respond to webhook events from any service.",
  category: "content",
  level: "intermediate",
  content: `## Webhook Automation Deep Dive

This used to be a locked "preview" card on /learn. There is no paywall. There is no accompanying zip. There is a written lesson, which is what you are reading.

A webhook is someone else's workflow calling yours. You publish a URL. They POST. You have a few hundred milliseconds to be polite and a few seconds to be correct.

> Intel bar: if your webhook URL is in a public screenshot, it is not a secret. It is a guestbook.

### What You Actually Receive

Most vendors POST JSON. Some send form-encoded. A few send a string and call it an API. In n8n, open the Webhook node after a test and read \`body\`. Map from that, not from the vendor's happy-path docs.

Also read headers. Signatures live there. So do content types that explain why \`body\` looks like a string.

### Responding Like a Grown-Up

- Return **200** quickly with a small JSON ack if the work is slow. Do the slow work after, or in a second workflow.
- Return **400** if the payload is missing a required field. Do not 200 and then fail silently.
- Return **401/403** if the secret is wrong. Do not process "anyway" to be nice.

The Webhook node can respond immediately or at the end. Immediate + queue is how you stop Stripe-style retries from doubling your side effects — once you have side effects worth doubling.

### Signatures (Minimum Viable Paranoia)

If the vendor signs requests (GitHub, Stripe, many others):

1. Read the signature header
2. HMAC the raw body with your secret
3. Compare. If no match, stop.

If the vendor does not sign, require a header like \`x-flowvault-secret\` and a long random value. It is not elegant. It is better than an open URL that drafts blog posts for scrapers.

### Payload Parsing

- Prefer a Set or Code node immediately after the webhook to normalize into *your* shape
- Arrays of events: split, then process. Do not assume one event per call
- Time stamps: store the vendor's id. You will need it when they retry

### Security Headers You Should Care About

- Secret header or signature — required
- IP allowlists — optional, often painful, useful for a known vendor
- HTTPS — not optional on anything that is not localhost

You do not need a WAF essay. You need to not leave a firehose on the lawn.

### Real-World Patterns

- **Form → webhook → Notion.** Ack 200. Write the row. Email yourself only if the write fails.
- **Another n8n → webhook.** Pass a correlation id. Log it. Future you will grep it.
- **Vendor → webhook → your pipeline.** Verify signature. Normalize. Execute Workflow.

### Common Failures

- Testing the test URL in production, or the reverse
- Mapping \`query\` when the data is in \`body\`
- Double processing because you returned 500 after you already inserted a row
- Logging the entire payload including tokens. Stop that.

### Honest Inventory

Written lesson: yes. Interactive webhook debugger tool: **Coming Soon** (there is no /tools route). Pack download: none. This is not "available with pack purchase." It is available.

### Peel this

If you cannot explain who is allowed to call the URL, do not put the URL in a no-code tool with 800 templates. Peel the audience first.`,
  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Read a real webhook payload instead of a diagram",
    "Return the right status codes and verify a secret",
    "Normalize vendor JSON into a shape your workflow owns",
  ],
  tags: ["webhooks", "http", "security", "intermediate"],
  dateAdded: "2026-09-04",
  lastUpdated: "2026-09-04",
  status: "published",
}

const apiIntegrations: Module = {
  id: "api-integrations",
  title: "Connecting External APIs",
  description:
    "Integrate any REST API into your n8n workflows. Authentication, pagination, error handling and more.",
  category: "content",
  level: "intermediate",
  content: `## Connecting External APIs

Another former "preview" card. No pack required. The HTTP Request node is the whole sport.

FlowVault's branded nodes (Notion, Telegram, OpenAI) are conveniences. When a vendor is not on the list, you are not blocked. You are in HTTP country.

> Intel bar: "We have an API" means "we have a URL and opinions." The opinions are in the pagination.

### HTTP Request Node, Without Folklore

- **Method** — GET to read, POST to create, PATCH to update, DELETE to delete. PUT if the vendor is old and proud.
- **URL** — full, including the version prefix the docs swear you must not forget
- **Query** vs **body** — do not put a filter in the body of a GET and then blame n8n
- **Auth** — Header Auth, OAuth2, or the vendor's node. Pick one. Do not also paste the key into the URL "for testing"

### Authentication

**API key.** Usually \`Authorization: Bearer …\` or \`X-Api-Key\`. Store it in credentials.

**OAuth2.** Painful once, then quiet. Use n8n's OAuth2 credential if the vendor is standard. If they invented a "simple OAuth," budget an afternoon and a sense of humor.

**No auth.** Public placeholder APIs are for lessons. Do not point a production cron at a public toy API and call it a data warehouse.

### Pagination

The unglamorous core of "I integrated the CRM."

Common patterns:

- \`?page=2\` until an empty list
- \`?cursor=abc\` until the cursor is null
- Link headers (\`rel=next\`)

In n8n: HTTP Request → IF (has next) → loop, or the node's built-in pagination if your version has it. Cap the loop. An unbounded loop is how you page through 40,000 contacts and a surprising bill.

Merge pages in a Code node only after you know the item shape. Do not merge and then discover each page wrapped the data differently.

### Errors

- 401: credential. Fix it. Do not retry in a tight loop.
- 403: permission. The key works; the key is not allowed.
- 404: your id is wrong or the thing is gone
- 429: back off
- 5xx: retry with a wait

Map these in the error lesson's handler. The HTTP node should not swallow them into an empty success.

### What You Can Do Today

Use the Fundamentals sample (public todos API), then point the same shape at a real vendor in a dev environment. One resource. One method. Then pagination. Then writes.

### Honest Inventory

Written lesson: yes. There is no "API pack" of 25 CRM workflows on disk. The old products page claimed that. It was a placeholder count. Paid zips: Coming Soon. Sample JSON files: 5, and they are samples.

### Peel this

If you cannot GET one record with curl (or the HTTP node) and explain the JSON, you are not ready to paginate. Peel it until one record is boring.`,
  duration: "22 min",
  durationMinutes: 22,
  learningOutcomes: [
    "Use the HTTP Request node without hiding the URL in folklore",
    "Pick an auth method and keep the key out of the canvas",
    "Paginate with a cap and map status codes on purpose",
  ],
  tags: ["http", "api", "pagination", "intermediate"],
  dateAdded: "2026-09-04",
  lastUpdated: "2026-09-04",
  status: "published",
}

const dataTransformation: Module = {
  id: "data-transformation",
  title: "Data Transformation with Code Node",
  description:
    "Use JavaScript in n8n to transform, filter, and reshape data between nodes.",
  category: "content",
  level: "intermediate",
  content: `## Data Transformation with Code Node

The Code node is how you stop asking an LLM to rename keys. This card was a locked preview. It is a written lesson. There is no downloadable "transformation pack."

> Intel bar: if your Code node is 200 lines, you do not have a transform. You have an application that is late for a repo.

### The Only Objects You Need at First

- \`$json\` — this item
- \`$items("Node Name")\` — items from another node
- \`return [{ json: { ... } }]\` — what you send next (n8n Code node style)

If you \`return\` a bare object, or a string, you will get an error that feels personal. Return items.

### Jobs a Code Node Deserves

- Rename keys to your contract
- Filter items you do not want
- Flatten \`data.items[]\` into items
- Parse a model string into JSON and fail if it is not
- Build a single Slack string from many checks

### Jobs a Code Node Does Not Deserve

- HTML scraping of a whole site
- Your billing system
- A second LLM
- "Just this once" credential handling

### Patterns That Stay Small

**Filter.** Keep items where \`status === "open"\`. Drop the rest. Do not send empties downstream and hope.

**Map.** \`title: $json.Title || $json.title\`. Normalize once.

**Reduce.** Join QA \`details\` with newlines. One message. One human.

**Parse.** \`JSON.parse\` in try/catch. On failure, return a fail item with the raw snippet, not a thrown exception that kills the batch unless you want that.

### $json vs $items

Use \`$json\` when you are in item-by-item mode. Use \`$items\` when you need the whole previous array (merge, count, "first trigger field"). If you grab \`$items\` inside a loop you did not intend, you will duplicate work and call it a bug in n8n.

### Conditional Logic

Prefer an IF node when the branch is a workflow decision (send vs skip). Prefer Code when the decision is a field (\`tag = text.includes("bug") ? "dev" : "inbox"\`). If you build a nested if-else of 12 vendor special cases, write a table and a lookup. Future you cannot debug a novel.

### Testing

Pin a messy payload: missing keys, extra keys, an empty array. Run. If you only test the happy item, you have a demo.

### Honest Inventory

Written lesson: yes. Interactive playground tool: **Coming Soon** — there is no /tools/code-playground. Sample JSON: use the Fundamentals file and reshape its todo object. That is enough.

### Peel this

If a Set node can do it, use a Set node. Code is a privilege you earn by making Set look silly.`,
  duration: "18 min",
  durationMinutes: 18,
  learningOutcomes: [
    "Return items in the shape n8n expects",
    "Filter, map, and parse without an LLM",
    "Keep Code nodes short enough to read on a phone",
  ],
  tags: ["code", "javascript", "transform", "intermediate"],
  dateAdded: "2026-09-04",
  lastUpdated: "2026-09-04",
  status: "published",
}

const aiWorkflows: Module = {
  id: "ai-workflows",
  title: "AI & LLM Workflows with n8n",
  description:
    "Connect OpenAI, Anthropic, and other LLMs to build intelligent automation pipelines.",
  category: "content",
  level: "intermediate",
  content: `## AI & LLM Workflows with n8n

Last of the old locked /learn cards. No agent runtime ships with FlowVault. No hosted LLM. You bring a key. We bring a graph.

This lesson sits next to Prompt Engineering. That one is about the text. This one is about the wiring: one call, structured output, optional second call, a human still owns publish.

> Intel bar: an "AI agent" with no stop condition is a junior employee with your credit card and no slack channel.

### One Call Is a Workflow

You do not need an agent loop to be legitimate.

1. Trigger with a topic or a draft
2. LLM node with a contract (JSON)
3. Code node validates
4. Deliver

That is the Drafter minus the pretty branches. If this does not work, a multi-agent diagram will not save you. It will multiply the failure.

### Structured Output

Ask for JSON. Validate JSON. Route on keys. If you need tools (search, HTTP), prefer an explicit HTTP node you configured over a model that "decides to browse." Model-chosen tools are Coming Soon as a productized pack — they are not hiding in /public.

### Chaining LLM Calls (When It Is Worth It)

Allowed chain:

1. Outline (cheap model, low temperature)
2. Draft (better model)
3. QA report (cheap model, JSON issues only)

Forbidden chain:

1. Draft
2. "Make it better"
3. "Make it better"
4. "Make it better"
5. Your bill

Cap steps. Store each step's output. If step 2 is worse, you can go back. If you overwrote step 1, you have folklore.

### Agents, Honestly

n8n has agent-style nodes depending on version. They are useful when the next action is truly unknown (a support inbox with 40 possible tools). They are not useful for "write my newsletter." A newsletter has a known next action: write, then stop.

If you enable an agent, give it:

- A closed tool list
- A max iteration count
- A timeout
- Logging of every tool call

If you cannot read the tool log, you cannot debug the agent. You can only restart it and hope, which is not operations.

### Cost and Logging

Log model, tokens if provided, and a hash of the prompt. Do not log secrets. Set a monthly budget you actually look at. A workflow that is "free" except the tokens is not free.

### Honest Inventory

Written lesson: yes. Hosted agents: no. Pack of "AI & LLM workflows" as a 60-file bundle: **not on disk**. The Drafter / QA products are the AI-related packs, and their zips are Coming Soon. This page does not charge extra.

### Peel this

If the model can spend money or publish, a human is still in the loop. That is not a lack of ambition. That is how you still have a brand in the morning.`,
  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Ship a one-call LLM workflow with a JSON contract",
    "Chain outline → draft → QA without an unbounded loop",
    "Treat agents as optional, logged, and capped",
  ],
  tags: ["ai", "llm", "agents", "intermediate"],
  dateAdded: "2026-09-04",
  lastUpdated: "2026-09-04",
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
  webhookAutomation,
  apiIntegrations,
  dataTransformation,
  promptEngineering,
  aiWorkflows,
  chainingWorkflows,
  autoTaggingStrategies,
  customQaChecks,
  errorHandling,
]

export const MODULE_MAP = Object.fromEntries(
  ALL_MODULES.map((m) => [m.id, m])
) as Record<string, Module>

export function getModuleById(id: string): Module | undefined {
  return MODULE_MAP[id] ?? MODULE_MAP[LESSON_ALIASES[id]]
}
