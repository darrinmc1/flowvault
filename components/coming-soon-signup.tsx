import { NewsletterForm } from "@/components/newsletter-form"

export function ComingSoonSignup({
  source = "pricing-coming-soon",
}: {
  source?: string
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Coming soon - join the list</h2>
      <p className="text-slate-400 mb-6">
        Paid workflows are not available yet. Leave your email and we will let you know when they are.
      </p>
      <NewsletterForm source={source} />
    </section>
  )
}
