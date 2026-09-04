import { notFound, redirect } from "next/navigation"
import { ALL_MODULES, getModuleById, LESSON_ALIASES } from "@/data/modules"

export function generateStaticParams() {
  const ids = new Set([
    ...ALL_MODULES.map((mod) => mod.id),
    ...Object.keys(LESSON_ALIASES),
  ])
  return Array.from(ids).map((id) => ({ id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) return { title: "Not Found" }
  return {
    title: `${mod.title} | FlowVault`,
    description: mod.description,
  }
}

export default function LearnLessonRedirect({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) notFound()
  redirect(`/lessons/${mod.id}`)
}
