# Empire Site Template

Reusable Next.js 14 template for content + commerce sites. Dark glassmorphism theme, Clerk auth, Stripe payments, Supabase entitlements, Mailchimp waitlist, Resend transactional email.

## Stamp-Out Checklist

Copy this template directory, rename it, then work through this list:

### 1. Branding & Config

- [ ] Search for `TODO(SITE_NAME)` — replace every marker with your site's actual values
- [ ] Edit `config/site.config.ts`:
  - `name`, `domain`, `tagline`, `description`
  - `theme.emoji`, `theme.primaryColor`, `theme.gradientFrom/Via/To`
  - `nav.links` — add/remove navigation items
  - `pricing` tiers — update names, prices, features, `stripePriceId`
  - `copy` — hero title, subtitle, CTA text
  - `contact` — support email, social links
  - `badges` — tier thresholds and names
- [ ] Replace `app/favicon.ico` with your site's favicon
- [ ] Update `app/layout.tsx` metadata (title, description, openGraph)

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in all values:

- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY`
- [ ] `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET`
- [ ] `MAILCHIMP_API_KEY` / `MAILCHIMP_LIST_ID` / `MAILCHIMP_DC`
- [ ] `RESEND_API_KEY` / `FROM_EMAIL` / `ADMIN_EMAIL`
- [ ] `SITE_KEY` (unique identifier for this site in shared tables)
- [ ] `NEXT_PUBLIC_SITE_URL`

### 3. Supabase Setup

- [ ] Create `entitlements` table:
  ```sql
  create table entitlements (
    id uuid default gen_random_uuid() primary key,
    user_id text not null,
    product_id text not null,
    granted_at timestamptz default now(),
    unique(user_id, product_id)
  );
  ```
- [ ] Create `subscribers` table:
  ```sql
  create table subscribers (
    id uuid default gen_random_uuid() primary key,
    site text not null,
    email text not null,
    name text,
    source text,
    created_at timestamptz default now(),
    unique(site, email)
  );
  ```
- [ ] Create a `downloads` storage bucket (private) for product files

### 4. Stripe Setup

- [ ] Create products and prices in Stripe Dashboard
- [ ] Copy price IDs into `data/products.ts` (`stripePriceId` field) and `config/site.config.ts` (pricing tiers)
- [ ] Set up webhook endpoint pointing to `https://yourdomain.com/api/stripe/webhook`
- [ ] Subscribe to `checkout.session.completed` event

### 5. Mailchimp / Waitlist Popup

- [ ] In `components/waitlist-popup.tsx`:
  - Replace `MAILCHIMP_ACTION_URL` placeholder with your Mailchimp form action URL
  - Replace `HONEYPOT_FIELD_NAME` placeholder with your audience's honeypot field name
  - Both values come from Mailchimp > Audience > Signup forms > Embedded forms

### 6. Content

- [ ] Add lessons in `data/modules.ts`
- [ ] Add updates in `data/updates.ts`
- [ ] Add products in `data/products.ts`
- [ ] Upload downloadable files to Supabase storage `downloads` bucket
- [ ] Update `data/products.ts` `downloadPath` to match storage paths

### 7. Pages

- [ ] Update `app/(marketing)/about/page.tsx` with real content
- [ ] Update `app/(marketing)/privacy/page.tsx` with real privacy policy
- [ ] Update `app/(marketing)/terms/page.tsx` with real terms of service

### 8. Deploy

- [ ] `pnpm install && pnpm build` — must pass clean
- [ ] Deploy to Vercel (or preferred host)
- [ ] Set all env vars in hosting dashboard
- [ ] Verify Stripe webhook endpoint is live
- [ ] Test full purchase flow: browse → checkout → webhook → entitlement → download

## Development

```bash
pnpm install
pnpm dev
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Auth**: Clerk
- **Database**: Supabase (entitlements + subscribers)
- **Payments**: Stripe Checkout
- **Email**: Resend (transactional), Mailchimp (list management)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Fonts**: Inter + Outfit
