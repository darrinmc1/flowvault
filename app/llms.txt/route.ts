import { buildLlmTxt } from "@/lib/aeo"

/** Standard llms.txt route — machine-readable site summary for AI assistants. */
export function GET() {
  return new Response(buildLlmTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
