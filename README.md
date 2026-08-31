# BirPOS Marketing Website

Marketing/landing site for **BirPOS** — an offline-first desktop POS, inventory & GST billing
app for Indian retailers and wholesalers. Built by Birtik Tech.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations / scroll reveals)
- Web3Forms (contact & newsletter form submissions — no backend required)

## Getting started

```bash
npm install
cp .env.example .env.local   # then paste your Web3Forms access key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup (Web3Forms)

1. Go to https://web3forms.com and create an access key using **connect@birtiktech.com**.
2. Copy the key into `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Restart the dev server. Submissions from the Contact page and the footer newsletter form
   will now arrive at connect@birtiktech.com. Until this key is set, forms will show a
   friendly "not configured yet" error instead of failing silently.

## Project structure

```
src/
  app/                 Routes (home, features, features/[slug], pricing, faq, about, contact, legal pages)
  components/
    ui/                Buttons, badges, logo, section heading, FAQ accordion, feature icons
    layout/             Navbar, footer, newsletter form
    home/               Home page sections (hero, comparison, workflow, etc.)
    motion/             Framer Motion reveal/stagger primitives
    contact/            Contact form
    shared/             Reusable page hero + legal page shell
  data/                 Feature content, pricing tiers, FAQ content (single source of truth)
  lib/                  Site config (name/contact/nav), Web3Forms client helper
```

## Editing brand details

All contact info, nav links, and site metadata live in `src/lib/site-config.ts` — update once,
it propagates to the navbar, footer, contact page, and structured metadata.

The logo is currently a placeholder letter-mark (`src/components/ui/logo.tsx`) — swap in the
real BirPOS logo when it's ready.

## Deployment

Any Next.js host works (Vercel recommended). Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` as an
environment variable on the host, and update `metadataBase`/`siteConfig.url` in
`src/lib/site-config.ts` once the production domain is finalized.
