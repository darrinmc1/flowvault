import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import posts from "@/lib/blog"
import HumorBreak from "@/components/humor-break"
import { siteConfig } from "@/config/site.config"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.s }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.s === slug)
  if (!post) return { title: `Not Found | ${siteConfig.name}` }
  return {
    title: `${post.t} | ${siteConfig.name}`,
    description: post.e,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.s === slug)
  if (!post) return notFound()

  const related = posts.filter((p) => p.s !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.d}
            </span>
            <span>{post.r} read</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">{post.t}</h1>
          <p className="text-lg text-slate-400">{post.e}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          {renderBody(slug)}
        </article>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 mt-10">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Keep reading
          </h3>
          <div className="flex flex-wrap gap-2">
            {related.map((p) => (
              <Link
                key={p.s}
                href={`/blog/${p.s}`}
                className="rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                {p.t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function renderBody(slug: string) {
  if (slug === "five-n8n-workflows-every-solopreneur-should-steal") {
    return (
      <>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          There are two kinds of solopreneurs: those who spend their evenings copy-pasting data
          between tabs, and those who have convinced a robot to do it for them. This article is
          about becoming the second kind. n8n is free to self-host, and the workflows below are
          deliberately boring — boring is exactly what you want from automation. The thrill wears
          off fast when your invoice spreadsheet is wrong.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Every workflow here follows the same shape: a trigger, a few nodes, and a payoff. If you
          have never imported a workflow into n8n, the option you want is &quot;Import from File&quot; in
          the workflow list, or paste the JSON into a new workflow. Then connect your credentials,
          hit &quot;Test workflow&quot;, and watch the executions panel light up like a slot machine that
          pays out in data.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">1. The receipts workflow (the one that pays for itself)</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Trigger: a &quot;Gmail Trigger&quot; node watching for emails from your payment processor. From
          there, a &quot;Set&quot; node tidies the invoice data, an &quot;Extract from File&quot; node pulls the PDF
          attachment apart, and a &quot;Google Sheets&quot; node appends the row to a ledger. Your accountant
          will never believe you. You will never believe you either, when you file taxes in April
          and every receipt is exactly where you left it.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The sneaky bit: the Gmail Trigger remembers the last email it processed, so re-runs do
          not create duplicates. If you do end up with duplicates anyway, that is not the
          workflow&apos;s fault — it is a rite of passage. Delete the extra rows and move on with your
          life.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">2. The lead follow-up</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Trigger: a &quot;Webhook&quot; node receiving a POST from your landing page form. Most form
          builders can send one — it is usually a checkbox buried in the settings, next to the
          setting you have been meaning to understand for a year. The workflow formats a reply
          with an &quot;If&quot; node — something different for people who asked about pricing versus people
          who asked about your cat — then hands off to a &quot;Send Email&quot; node or a Slack message.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Speed matters more than wording. A lead that hears from you within five minutes feels
          chosen. A lead that hears from you within five days feels like a witness.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">3. The content repurposer</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Trigger: an &quot;RSS Feed Read&quot; node pointed at your blog. A &quot;Code&quot; node — or an OpenAI
          node, if you are feeling fancy — turns each post into a LinkedIn blurb, a thread outline,
          and a newsletter teaser. Output lands in a &quot;Google Docs&quot; node as drafts. Not published.
          Just drafted. The human still decides what goes out.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          This is the workflow that makes people at parties ask how you &quot;do content&quot; without
          breaking a sweat. The answer is: I don&apos;t. The workflow does.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">4. The weekly metrics report</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Trigger: a &quot;Schedule Trigger&quot; node set to run every week on Friday at 4pm. A few
          &quot;HTTP Request&quot; nodes pull numbers from your analytics and payment dashboards, an AI
          node writes a two-sentence summary in the tone of a disappointed but supportive coach,
          and a &quot;Send Email&quot; node delivers the whole thing to your inbox.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The report is for you, not your board, because you do not have a board. The point is
          that you look at the numbers before the weekend instead of squinting at them on Sunday
          night in a panic.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">5. The inbox bouncer</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Trigger: a &quot;Gmail Trigger&quot; on incoming mail. &quot;If&quot; nodes sort everything: invoices
          forward to your bookkeeping address, newsletter noise gets the &quot;Mark as Read&quot; treatment,
          and anything from an actual human with an actual question lands at the top of your inbox
          with a flag on it.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          A closing word on stealing: download these, import them, and take them apart until they
          fit you. n8n workflows are meant to be dismantled — that is the whole point of nodes.
          The only unforgivable crime is importing something, running it once, and never looking
          at the executions tab again.
        </p>
      </>
    )
  }

  if (slug === "telegram-to-notion-capture-flow") {
    return (
      <>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          You have had the idea. You are in line for coffee, or mid-walk, or — most likely — in
          bed at 11:47pm. The idea is excellent, and you are certain you will remember it. You
          will not. This is where a Telegram-to-Notion capture flow comes in: message a bot, and
          the idea is in Notion before your thumb leaves the screen.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Total build time is about twenty minutes, and that includes the ten minutes you will
          spend naming the bot something you will regret later.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">What you&apos;ll need</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Three things: a Telegram account, a Notion workspace, and an n8n instance. If you use
          n8n Cloud, you can skip the port-forwarding section of life entirely. Self-hosted? Your
          n8n instance needs to be reachable from the internet, because Telegram will call it.
          Yes, that is a real sentence you now have to deal with.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Step 1: Create the bot</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Open a chat with @BotFather in Telegram and send /newbot. Pick a name and username, and
          BotFather hands you a token that looks like a cat walked across the keyboard. That token
          is your credential. In n8n, open the Credentials section, choose Telegram, paste the
          token, and let n8n run its handshake test. If the test fails, check for a stray space —
          the token has no spaces, and neither does your dignity.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Step 2: Set up Notion</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Create a database in Notion with columns you actually want: Title, Type, Status, and
          maybe Link. Then create a Notion integration at notion.so/my-integrations, grab the
          secret, and share your database with the integration via the database menu — Connections
          — Add. This step confuses everyone. If you skip it, your workflow will fail with an
          error that looks like Notion is being rude. It is not being rude. It just cannot see
          you.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Step 3: Wire it up in n8n</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Start a new workflow and add a &quot;Telegram Trigger&quot; node. Select &quot;message&quot; as the
          trigger type, connect your Telegram credential, and activate the workflow. n8n shows you
          a webhook URL — send your bot any message and the trigger should fire, which you can
          verify in the executions panel.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Next, add a &quot;Notion&quot; node with the operation &quot;Create Page&quot;. In the parent page field,
          paste the ID of the page that contains your database. Map the title to the incoming
          message — the message text lives in the trigger&apos;s output under message.text. Then map
          Status to something like &quot;Inbox&quot;, so future-you knows where to start.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Step 4: Test it, then break it</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Save, activate, and send yourself a test message. The execution should show green dots
          on both nodes. Now send a message with no text — an image, say. Your workflow will
          error, because message.text is missing and you mapped it to a required field. That is
          not a bug; it is the workflow correctly complaining about your life choices. Add an
          &quot;If&quot; node to route anything without text to a dead end, and you are done.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Twenty minutes, roughly. From now on, every 11:47pm idea has a paper trail. The bot
          does not judge you for the quantity. It only judges you for never reviewing the
          database.
        </p>
      </>
    )
  }

  if (slug === "n8n-vs-zapier-when-to-switch") {
    return (
      <>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Zapier is the automation tool you recommend to your parents, and that is not an insult.
          It is easy, it is reliable, and it will happily charge you per task until the monthly
          bill looks like a typo. n8n is the automation tool you recommend to yourself, once the
          bill stops looking like a typo and starts looking like a personality trait.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Both tools connect apps. The question is not which is &quot;better&quot; — it is when n8n&apos;s
          steeper learning curve stops being a cost and starts being a refund.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">What Zapier does well</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Zapier&apos;s superpower is being boring in the best way. Triggers and actions are curated,
          the UI holds your hand, and a two-step zap is genuinely two steps. For a handful of
          simple automations, it is the right tool. There is no shame in it. There is also no
          self-hosted mode, no custom code without a paid plan, and no way to see inside the
          black box when something fails — you get an error email and a vague sense of dread.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Where Zapier starts to hurt</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The pain arrives in two forms: price and complexity. Task-based pricing means your
          cheapest zap, running hourly, quietly bills you every month forever. And when an
          automation needs a loop, a conditional branch, or any logic beyond &quot;if this then that&quot;,
          you start stacking zaps and paying per hop.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The classic sign you have outgrown Zapier: you have five zaps that all start with the
          same trigger, and you have given up trying to keep their names straight.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">What n8n does differently</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          n8n is a visual workflow editor where nodes connect like a diagram. Loops, &quot;If&quot;
          branches, &quot;Code&quot; nodes, and error handling are first-class citizens, not features you
          squint at on a pricing page. Self-hosted n8n has no per-task fee — you pay for the
          server and your own mistakes, which are free. There is also a fair-code license that
          lets you modify the source, if that is the kind of weekend you enjoy.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The trade-off is real: n8n expects you to understand triggers, credentials, and the
          difference between the workflow editor and the executions panel. The UI is good, but it
          is good like a workshop, not good like a vending machine.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">The honest cost of switching</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Switching means re-building. n8n has no magic &quot;import from Zapier&quot; button, and anyone
          who tells you otherwise is selling something. Budget an afternoon for your five most
          important automations. The good news: n8n&apos;s &quot;Import from File&quot; and &quot;Import from URL&quot;
          options make sharing workflows trivial, so you are rarely starting from a blank canvas.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">How to switch without breaking everything</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Run both in parallel for a week. Keep Zapier active, rebuild your top automations in
          n8n, and compare results. When an n8n execution errors — and it will — the executions
          tab shows you exactly which node failed and why, which is more than Zapier ever told
          you. Once your n8n versions are stable, cancel the Zapier plan with the calm
          satisfaction of someone who has stopped renting a car they now own.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The switch is not for everyone. If you have three zaps and a full-time job that is not
          automation, stay put. If you have fifteen zaps and a bill you read twice, the climb is
          worth it.
        </p>
      </>
    )
  }

  if (slug === "webhooks-101-making-n8n-talk-to-anything") {
    return (
      <>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Every time two software services talk to each other, somebody has to knock on the door.
          Webhooks are the knocking. This article explains what they are, how n8n uses them, and
          why your first webhook will almost certainly fail — and why that is fine.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">What a webhook actually is</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          A webhook is just an HTTP request sent to a URL when something happens. Your payment
          processor sends one when a sale lands. GitHub sends one when someone opens an issue. It
          is the opposite of polling, where you keep asking &quot;anything new?&quot; every five minutes.
          Webhooks are the app calling you, instead of you calling the app and hanging up when it
          does not answer.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          That URL is the address where the event shows up. In n8n, the &quot;Webhook&quot; node gives you
          one: a long, unguessable URL with a path that ends in something like
          /webhook/your-workflow-id. Anyone with that URL can knock, which is why you should treat
          it like a key, not a doorbell.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">The Webhook node in n8n</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Drag a &quot;Webhook&quot; node onto the canvas. The important settings are the HTTP Method — GET
          is fine for testing, POST for real life — and the &quot;Respond&quot; setting, which controls what
          n8n sends back to the caller. If the caller expects a 200 and gets a 404, it will
          assume you are dead and behave accordingly.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Here is the part that trips everyone up: n8n only serves the production webhook URL
          once the workflow is activated. Test webhooks only respond while the &quot;Listen for test
          event&quot; toggle is on. If you send data to a URL that is not listening, you get silence,
          and silence is the hardest error message to debug.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Sending data back out</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Webhooks are not just for receiving. The &quot;HTTP Request&quot; node lets your workflow call
          other services — POST a new customer to your CRM, PUT an updated status to a project
          board, or GET a URL and parse the JSON that comes back. The response lands in the
          node&apos;s output, and downstream nodes can reference it by name.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          A useful pattern: capture the incoming webhook&apos;s body with a &quot;Set&quot; node, reshape it into
          the format the target app expects, and only then send it. Reshaping data is eighty
          percent of automation work, and nobody puts that on the poster.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Debugging like a grown-up</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          When a webhook fails, check three things in order. One: is the workflow activated? Two:
          is the URL exactly right, including the trailing path? Three: what does the executions
          panel say? n8n records every execution, including the ones that errored, and the node
          that failed gets a red badge with the error message attached. That message is not an
          accusation. It is a map.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Also remember: n8n will retry webhook deliveries for a while, and the caller may have
          retries of its own. If you see a duplicate row in your database, the workflow probably
          ran twice, not once. The dedupe pattern — storing a fingerprint of each payload so you
          can spot repeats — is your friend.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Webhooks look intimidating until you realize they are just HTTP requests with better
          manners. Set one up, break it on purpose, read the error, fix it, and you have leveled
          up from automation user to automation plumber. The pay is the same, but you get to wear
          the belt.
        </p>
      </>
    )
  }

  if (slug === "ai-content-pipeline-prompt-draft-review-publish") {
    return (
      <>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The worst way to use AI for content is to ask it for a finished article and publish
          whatever comes out. The second worst is to never use it at all. Somewhere between those
          two lies a pipeline that treats AI like an over-caffeinated junior writer: great at
          drafts, terrible at judgment, and in desperate need of a human at the end.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          This is a four-stage n8n workflow: prompt, draft, review, publish. It is not a magic
          button. It is a conveyor belt with a human standing at the inspection point, which is
          exactly where a human should stand.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">The pipeline at a glance</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Each stage is a small cluster of nodes, connected in a line, triggered by a &quot;Schedule
          Trigger&quot; or a &quot;Manual Trigger&quot; — or, if you are fancy, a form submission. The output of
          each stage is the input of the next, which is how n8n workflows are supposed to work:
          data flows through nodes like water through pipes, and your job is to make sure nothing
          leaks.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Stage one: prompt</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The prompt stage is a &quot;Set&quot; node holding your brief: topic, audience, tone, and
          constraints. Storing the brief as workflow data instead of typing it into a chat box
          means the same pipeline can produce a blog post on Monday and a newsletter on Friday —
          you just change the values.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          A good brief is specific. &quot;Write about n8n&quot; produces garbage. &quot;Write 800 words on
          webhooks for a solopreneur audience, plain English, one joke per section, no hype&quot;
          produces something you can work with.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Stage two: draft</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          The draft stage is an &quot;OpenAI&quot; node — or Anthropic, or whichever model node you have
          credentials for. The prompt combines your brief with a system message describing the
          format. Set the node to output plain text, not JSON, unless you enjoy debugging
          serialization errors at 9pm. Save the draft to a &quot;Google Docs&quot; node or a &quot;Notion&quot; node
          so the human can read it outside the workflow.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          This is also where you resist the urge to add a publish node right now. You will be
          tempted. The workflow will feel incomplete. It is not incomplete — it is safe.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Stage three: review</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Review is where n8n earns its keep, because review is just more automation. A second
          model node checks the draft against a checklist: factual claims present, headline under
          sixty characters, at least one sentence that does not start with &quot;In today&apos;s
          fast-paced world&quot;. An &quot;If&quot; node compares the score to a threshold. Pass, and the draft
          moves on. Fail, and it bounces back to a &quot;Send Email&quot; node with notes, addressed to you.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          This human-in-the-loop gate is the difference between a pipeline and a liability. The
          workflow does not publish anything on its own, because the workflow does not have to
          live with the consequences. You do.
        </p>

        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Stage four: publish</h2>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Only after a human approves does the draft reach the publish stage: a &quot;WordPress&quot; node,
          or Ghost, or an &quot;HTTP Request&quot; node pointed at whatever CMS you use. Keep the approval
          manual — a &quot;Wait&quot; node, or a simple checkbox via a form — and the pipeline stays
          honest.
        </p>
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          Set the whole thing on a schedule and you have a content operation that runs itself,
          except for the part that matters. That part is still you, and that is the point.
        </p>
        <HumorBreak tag="general" />
      </>
    )
  }

  return null
}
