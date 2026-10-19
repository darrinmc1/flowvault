import { redirect } from "next/navigation"

/** Membership tiers are gone. One-off packs live on /products. */
export default function PricingPage() {
  redirect("/products")
}
