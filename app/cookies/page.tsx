import { CookiesPage } from "@/components/legal/cookies-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <CookiesPage
      siteName="Flow Vault"
      domain="flowvault.com"
      supportEmail={getSupportEmail()}
    />
  )
}
