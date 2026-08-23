import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Learn n8n | ${siteConfig.name}`,
}

const lessons = [
  {
    id: "n8n-fundamentals",
    title: "n8n Fundamentals: Your First Workflow",
    description: "Learn the core concepts of n8n automation. Build your first workflow from scratch and download a ready-to-import JSON template.",
    duration: "18 min",
    free: true,
    sampleJson: "/samples/fundamentals-workflow.json",
    topics: ["What is n8n?", "Nodes & connections", "Triggers explained", "Your first HTTP request", "Importing JSON workflows"],
  },
  {
    id: "webhook-automation",
    title: "Webhook Automation Deep Dive",
    description: "Master webhooks in n8n. Learn how to receive, process, and respond to webhook events from any service.",
    duration: "24 min",
    free: false,
    sampleJson: null,
    topics: ["Webhook triggers", "Payload parsing", "Response nodes", "Security headers", "Real-world examples"],
  },
  {
    id: "api-integrations",
    title: "Connecting External APIs",
    description: "Integrate any REST API into your n8n workflows. Authentication, pagination, error handling and more.",
    duration: "31 min",
    free: false,
    sampleJson: null,
    topics: ["HTTP Request node", "OAuth2 setup", "API key auth", "Pagination handling", "Error workflows"],
  },
  {
    id: "data-transformation",
    title: "Data Transformation with Code Node",
    description: "Use JavaScript in n8n to transform, filter, and reshape data between nodes.",
    duration: "27 min",
    free: false,
    sampleJson: null,
    topics: ["Code node basics", "$json & $items", "Array manipulation", "String formatting", "Conditional logic"],
  },
  {
    id: "error-handling",
    title: "Error Handling & Retry Logic",
    description: "Build resilient workflows that handle failures gracefully with retry logic and error notifications.",
    duration: "22 min",
    free: false,
    sampleJson: null,
    topics: ["Error trigger node", "Try/catch patterns", "Retry on fail", "Slack alerts", "Workflow logging"],
  },
  {
    id: "ai-workflows",
    title: "AI & LLM Workflows with n8n",
    description: "Connect OpenAI, Anthropic, and other LLMs to build intelligent automation pipelines.",
    duration: "35 min",
    free: false,
    sampleJson: null,
    topics: ["OpenAI node", "Prompt engineering", "Chaining LLM calls", "Structured output", "AI agents"],
  },
]

export default function LearnPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white mb-4">Learn n8n Automation</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Free and premium lessons to master n8n workflow automation. Start with the free fundamentals lesson — includes a downloadable JSON workflow.
          </p>
        </div>

        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`relative bg-gray-900 border rounded-2xl p-6 ${
                lesson.free
                  ? "border-green-700/60 hover:border-green-600 transition-colors"
                  : "border-gray-800 hover:border-gray-700 transition-colors"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                  lesson.free ? "bg-green-900/50 text-green-400" : "bg-gray-800 text-gray-500"
                }`}>
                  {lesson.free ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
                    {lesson.free ? (
                      <span className="bg-green-900/50 text-green-400 border border-green-700/50 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        FREE
                      </span>
                    ) : (
                      <span className="bg-gray-800 text-gray-500 border border-gray-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        PREVIEW
                      </span>
                    )}
                    <span className="text-gray-500 text-xs ml-auto">{lesson.duration}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">{lesson.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {lesson.topics.map((topic, i) => (
                      <span key={i} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-lg">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    {lesson.free ? (
                      <>
                        <Link
                          href={`/learn/${lesson.id}`}
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Start Free Lesson
                        </Link>
                        {lesson.sampleJson && (
                          <a
                            href={lesson.sampleJson}
                            download
                            className="inline-flex items-center gap-2 border border-purple-700 text-purple-400 hover:bg-purple-900/30 rounded-xl px-4 py-2 text-sm font-medium transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Sample JSON
                          </a>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Available with pack purchase</span>
                        <Link href="/products" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                          View packs →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-900/20 border border-purple-700/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to automate everything?</h2>
          <p className="text-gray-400 mb-6">
            Get instant access to 60+ production-ready n8n workflow JSON files across all our packs.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-6 py-3 font-semibold transition-colors"
          >
            Browse Workflow Packs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
