import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}.`,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-5xl mb-4">{siteConfig.theme.emoji}</div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">About {siteConfig.name}</span>
          </h1>
          <p className="text-lg text-slate-400">{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <p className="text-slate-300 leading-relaxed mb-4">
            FlowVault exists because we got tired of spending weekends debugging
            n8n nodes instead of shipping content. Every workflow template here
            has been battle-tested on real content pipelines — not thrown together
            as a demo.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            We build pre-packaged n8n workflows for solopreneurs and small teams
            who want automation without the agency price tag. Download the JSON,
            import into n8n, plug in your API keys, and you&apos;re running.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Each product comes with a detailed setup guide, prompt templates where
            applicable, and free walkthrough lessons that explain the workflow
            node by node — so you actually understand what&apos;s happening and can
            customize it.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Questions or workflow requests? Reach out at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-cyan-400 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  )
}
