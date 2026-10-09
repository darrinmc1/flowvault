import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ComingSoonSignup } from "@/components/coming-soon-signup"
import { siteConfig } from "@/config/site.config"

export const metadata: Metadata = {
  title: `Coming soon | ${siteConfig.name}`,
  description: "Paid FlowVault workflows are not available yet. Join the list to hear when they are.",
  alternates: { canonical: "/pricing" },
  robots: { index: false, follow: true },
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-xl">
          <ComingSoonSignup />
        </div>
      </main>
    </>
  )
}
