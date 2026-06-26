# Alexander Oburoh — Premium Portfolio Website

Personal brand and professional platform for Alexander Oburoh, Sustainability & Energy
Systems Analyst and Hydrogen & Net Zero Consultant. Built with Next.js (App Router),
TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

- **`src/content/*.ts`** — the single source of truth for all site copy and data (site
  metadata, navigation, expertise areas, services, projects, publications, blog posts,
  speaking, impact, credentials, social links). Update content here, not in component
  files, so pages stay easy to maintain as real content replaces placeholders.
- **`src/components/`** — reusable UI components (Header, Footer, Hero, card types, etc).
- **`src/app/`** — one folder per route, following Next.js App Router conventions.
  Dynamic routes (`projects/[slug]`, `insights/[slug]`) use `generateStaticParams` so every
  project/post gets its own statically-generated page at build time.
- **`src/app/globals.css`** — design tokens (colour palette, fonts) defined via Tailwind
  v4's CSS-first `@theme` block. There is no separate `tailwind.config.ts` — this is the
  single place to adjust the navy/emerald palette or typography.

## ⚠️ Outstanding items before this is genuinely production-ready

None of the following block the site from working — every gap below degrades gracefully
(clear placeholder text, disabled-but-not-broken states) rather than showing a fake value
or a broken link. But none of them are real yet either:

1. **Contact email** — `src/content/site.ts` has `email: "TODO-add-email@example.com"`.
   This renders directly in the UI (footer, contact page) until replaced.
2. **Social/research profile links** — LinkedIn, Google Scholar, ORCID, ResearchGate in
   `src/content/site.ts` (`socials` object) are all `TODO-` placeholder strings, not real
   URLs.
3. **Contact form has no real backend.** `src/lib/contact.ts` currently logs the
   submission to the console and simulates success so the UI/UX is reviewable — no email
   is actually sent anywhere. Wire this up to Formspree, Resend, or a real API route
   before launch. See the TODO comment at the top of that file.
4. **CV / résumé file doesn't exist.** `/cv` currently shows a "coming soon" message
   instead of a download link. Once a real PDF exists, drop it in `/public` and update
   `src/app/cv/page.tsx` per the TODO comment there.
5. **Publications and speaking engagements are placeholder data**, clearly marked with
   `isPlaceholder: true` in `src/content/publications.ts` and `src/content/speaking.ts`.
   The UI shows a "Placeholder" / "coming soon" indicator on these — replace the array
   contents and flip `isPlaceholder: false` once real data exists.
6. **Insights/blog posts are topic ideas, not written articles.** The 5 posts in
   `src/content/blog.ts` show their excerpt plus a "full article coming soon" notice on
   the detail page. Write the real article body and update accordingly.
7. **Project case-study detail (Problem/Approach/Insights) is inferred, not verified
   research data.** The PRD provided only one-line project descriptions; the fuller
   narrative in `src/content/projects.ts` was written to satisfy the case-study page
   structure the PRD itself requires, but should be reviewed and corrected against the
   real underlying research before this is presented as factual project detail.
8. **No professional headshot.** Per direct instruction, the hero and profile card use an
   abstract energy-network SVG visual (`src/components/EnergyNetworkVisual.tsx`) and an
   "AO" monogram (`src/components/ProfileCard.tsx`) instead of a stock or AI-generated
   photo. To add a real photo later, replace the monogram circle in `ProfileCard.tsx` with
   a `next/image` of the headshot, keeping the same card wrapper for visual consistency.
9. **OG/social-share image is a generated placeholder**, not a designed graphic — see
   `src/app/opengraph-image.tsx`.
10. **Privacy Policy is generic placeholder text**, not legally reviewed copy — see the
    TODO comment in `src/app/privacy/page.tsx`. Needs real review, especially once the
    contact form actually stores submitted data somewhere.
11. **Canonical domain is a `vercel.app` placeholder** (`site.url` in
    `src/content/site.ts`) until a real custom domain is purchased and connected.
12. **Favicon is still the default Next.js icon** (`src/app/favicon.ico`) — replace with a
    real branded favicon.

## Build & quality checks

```bash
npm run build   # production build, all routes statically generated
npx eslint .    # lint
npx tsc --noEmit  # typecheck
```

All three currently pass clean.
