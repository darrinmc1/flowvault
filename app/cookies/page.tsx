import type { Metadata } from "next"
import { CookiesPage } from "@/components/legal/cookies-content"
import { getSupportEmail } from "@/lib/support-email"

export const metadata: Metadata = {
  alternates: { canonical: "/cookies" },
}

export default function Page() {
  return (
    <CookiesPage
      siteName="Flow Vault"
      domain="flowvault.com"
      supportEmail={getSupportEmail()}
    />
  )
}
