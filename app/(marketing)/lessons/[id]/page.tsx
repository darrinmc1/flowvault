import { notFound } from "next/navigation"
import { ALL_MODULES, getModuleById } from "@/data/modules"
import { siteConfig } from "@/config/site.config"
import { LessonView } from "@/components/lesson-view"

export function generateStaticParams() {
  return ALL_MODULES.map((mod) => ({ id: mod.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) return { title: "Not Found" }
  return {
    title: `${mod.title} | ${siteConfig.name}`,
    description: mod.description,
  }
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) notFound()
  return <LessonView mod={mod} backHref="/lessons" backLabel="Back to Lessons" />
}
