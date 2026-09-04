import { notFound } from "next/navigation"
import { ALL_MODULES, getModuleById, LESSON_ALIASES } from "@/data/modules"
import { siteConfig } from "@/config/site.config"
import { LessonView } from "@/components/lesson-view"

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
    title: `${mod.title} | ${siteConfig.name}`,
    description: mod.description,
  }
}

export default function LearnLessonPage({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) notFound()
  return <LessonView mod={mod} backHref="/learn" backLabel="Back to Learn" />
}
