import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Cookies Policy | ${siteConfig.name}`,
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-extrabold mb-8">Cookies Policy</h1>
        <article className="prose prose-invert prose-slate max-w-none">
          <p>
            This policy explains how {siteConfig.name} uses cookies and similar
            technologies when you visit our site.
          </p>
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device by your browser.
            They help sites remember your preferences and understand how
            visitors use the site.
          </p>
          <h2>How We Use Cookies</h2>
          <ul>
            <li>
              <strong>Essential cookies</strong> — required for signing in,
              keeping your session, and delivering purchased content. These
              cannot be disabled.
            </li>
            <li>
              <strong>Authentication cookies</strong> — set by our auth
              provider (Clerk) so you can stay signed in.
            </li>
            <li>
              <strong>Analytics cookies</strong> — help us understand which
              pages are useful so we can improve the site.
            </li>
          </ul>
          <h2>Third-Party Cookies</h2>
          <p>
            We use third-party services (such as our authentication and payment
            providers) that may set their own cookies. These are governed by the
            privacy policies of those providers.
          </p>
          <h2>Managing Cookies</h2>
          <p>
            You can control or delete cookies through your browser settings.
            Disabling essential cookies may prevent you from signing in or
            accessing purchased content.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </article>
      </div>
    </div>
  )
}
