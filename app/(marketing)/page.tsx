import Link from "next/link"

const workflowSteps = [
  ["1", "Pick a workflow", "Browse the current library and choose a workflow that matches the job you want to automate."],
  ["2", "Inspect the JSON", "Review the nodes, integrations and required credentials before importing anything into your own n8n instance."],
  ["3", "Import into n8n", "Use n8n's import tools, then connect the credentials and services required by that workflow."],
  ["4", "Test before activating", "Run the workflow with test data, check outputs and adjust the steps for your environment before relying on it."],
]

const reasons = [
  ["🗂️", "Reusable starting points", "Use existing workflow structures instead of beginning every automation with a blank canvas."],
  ["📝", "Understand what you imported", "Where documentation is available, use it to understand the nodes, inputs and assumptions before switching a workflow on."],
  ["🧪", "Test in your environment", "Templates are starting points, not guarantees. APIs, credentials, n8n versions and business rules can change how a workflow behaves."],
]

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">n8n workflow library</p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
          Start with an n8n workflow you can inspect and adapt.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
          FlowVault is a growing library of n8n workflow templates designed to give you a useful starting point. Import them, connect your own services, test them, and change what does not fit.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/products" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-all hover:bg-indigo-500">Browse Workflows</Link>
          <Link href="/newsletter" className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition-all hover:border-indigo-500">Get New Workflow Updates</Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">How to use a workflow safely</h2>
          <p className="mx-auto max-w-xl text-lg text-slate-400">A template can save setup time, but it still needs to be checked against your n8n version, credentials and business rules.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map(([number, title, body]) => (
            <div key={number} className="glass-card flex flex-col rounded-2xl p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-600/20 text-xl font-bold text-indigo-400">{number}</div>
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">What FlowVault is for</p>
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">Useful templates without pretending they are magic.</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map(([icon, title, body]) => (
            <div key={title} className="glass-card rounded-2xl p-6">
              <div className="mb-4 text-3xl">{icon}</div>
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Early access</p>
        <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">Build the library first. Add paid access later.</h2>
        <p className="mb-8 text-lg text-slate-400">Checkout is not live, so FlowVault is not publishing paid plans yet. The immediate job is to make the workflow library useful, clear and testable.</p>
        <Link href="/products" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-indigo-500">Browse the current workflows</Link>
      </section>
    </main>
  )
}
