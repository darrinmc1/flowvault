import Link from "next/link"
import { ALL_MODULES } from "@/data/modules"
import {
  LESSON_COUNT,
  SAMPLE_JSON_COUNT,
  SAMPLE_BY_LESSON,
  PAID_DOWNLOADS_READY,
} from "@/data/inventory"
import { siteConfig } from "@/config/site.config"
import HumorBreak from "@/components/humor-break"

export const metadata = {
  title: `Learn n8n | ${siteConfig.name}`,
  description: `${LESSON_COUNT} free written n8n lessons. Same curriculum as /lessons. No fake preview locks.`,
}

const published = ALL_MODULES.filter((m) => m.status === "published")

export default function LearnPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white mb-4">Learn n8n Automation</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {LESSON_COUNT} written lessons. All readable. No video. {SAMPLE_JSON_COUNT} free
            sample JSON files on disk. Paid pack zips are{" "}
            {PAID_DOWNLOADS_READY ? "available" : "Coming Soon"} — there is no 60-workflow
            library hiding behind a lock icon.
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Same curriculum as{" "}
            <Link href="/lessons" className="text-cyan-400 hover:underline">
              /lessons
            </Link>
            . Old preview cards (webhooks, APIs, Code node, AI workflows) are real pages now.
          </p>
        </div>

        <div className="space-y-4">
          {published.map((lesson) => {
            const sampleJson = SAMPLE_BY_LESSON[lesson.id]
            return (
              <div
                key={lesson.id}
                className="relative bg-gray-900 border border-green-700/60 hover:border-green-600 transition-colors rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold bg-green-900/50 text-green-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
                      <span className="bg-green-900/50 text-green-400 border border-green-700/50 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Free
                      </span>
                      <span className="text-gray-500 text-xs ml-auto">{lesson.duration}</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">{lesson.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {lesson.tags.slice(0, 5).map((topic) => (
                        <span key={topic} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-lg">
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <Link
                        href={`/learn/${lesson.id}`}
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
                      >
                        Read lesson
                      </Link>
                      {sampleJson ? (
                        <a
                          href={sampleJson}
                          download
                          className="inline-flex items-center gap-2 border border-purple-700 text-purple-400 hover:bg-purple-900/30 rounded-xl px-4 py-2 text-sm font-medium transition-colors"
                        >
                          Download Sample JSON
                        </a>
                      ) : (
                        <span className="text-gray-500 text-sm">
                          Pack JSON: Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <HumorBreak tag="automation" />

        <div className="mt-12 bg-purple-900/20 border border-purple-700/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Packs, not a fictional warehouse</h2>
          <p className="text-gray-400 mb-6">
            Three workflow packs plus one bundle are listed on Products. Checkout and zip
            downloads are Coming Soon. No new prices. No Stripe on this page.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-6 py-3 font-semibold transition-colors"
          >
            See the real catalog
          </Link>
        </div>
      </div>
    </main>
  )
}
