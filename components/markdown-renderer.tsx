import React from "react"

function inlineFormat(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="rounded bg-slate-800/80 px-1.5 py-0.5 text-[0.85em] text-cyan-200">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-cyan-300">$1</em>')
}

export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split(/\r?\n/)
  const elements: React.ReactNode[] = []
  let listBuffer: string[] = []
  let orderedBuffer: string[] = []

  function flushList() {
    if (listBuffer.length > 0) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="list-disc list-inside space-y-1 text-slate-300 mb-4 ml-4"
        >
          {listBuffer.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      )
      listBuffer = []
    }
  }

  function flushOrdered() {
    if (orderedBuffer.length > 0) {
      elements.push(
        <ol
          key={`ol-${elements.length}`}
          className="list-decimal list-inside space-y-1 text-slate-300 mb-4 ml-4"
        >
          {orderedBuffer.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      )
      orderedBuffer = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    if (trimmed === "") {
      flushList()
      flushOrdered()
      continue
    }

    if (trimmed.startsWith("> ")) {
      flushList()
      flushOrdered()
      elements.push(
        <blockquote
          key={`bq-${i}`}
          className="border-l-2 border-violet-500/50 bg-violet-950/20 px-4 py-3 mb-4 text-slate-300 italic"
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(2)) }}
        />
      )
      continue
    }

    if (trimmed.startsWith("### ")) {
      flushList()
      flushOrdered()
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl font-bold text-white mt-8 mb-3"
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(4)) }}
        />
      )
      continue
    }
    if (trimmed.startsWith("## ")) {
      flushList()
      flushOrdered()
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10"
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(3)) }}
        />
      )
      continue
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushOrdered()
      listBuffer.push(trimmed.slice(2))
      continue
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/)
    if (orderedMatch) {
      flushList()
      orderedBuffer.push(orderedMatch[1])
      continue
    }

    flushList()
    flushOrdered()
    elements.push(
      <p
        key={`p-${i}`}
        className="text-slate-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }}
      />
    )
  }

  flushList()
  flushOrdered()
  return <div>{elements}</div>
}
