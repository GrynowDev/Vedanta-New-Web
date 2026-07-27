# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Next.js 15 (App Router) marketing site for Vedanta by Vaishno Group — a luxury villa/hospitality brand in Kufri, Himachal Pradesh. Content-heavy, SEO-focused, statically rendered. No backend/database; all content lives in one data file and forms submit to a third-party service.

## Commands

```bash
yarn dev          # local dev server (http://localhost:3000)
yarn build        # next build, then runs scripts/fix-gtm-body.js as a postbuild step
yarn start         # serve the production build
yarn lint          # next lint
```

There is no test suite configured in this repo.

Package manager is Yarn (yarn.lock is authoritative) — don't introduce npm/pnpm lockfiles.

## Environment

Copy `.env.example` to `.env.local`. Variables (all `NEXT_PUBLIC_*`, so they're inlined at build time):
- `NEXT_PUBLIC_SITE_URL` — used as `metadataBase` and for sitemap/robots URL generation
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container id
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — Web3Forms key used by the enquiry form (falls back to a hardcoded key in `EnquiryForm.jsx` if unset)

## Architecture

**Routing is App Router, but pages are thin.** Every route in `src/app/**/page.js` does only two things: define `generateMetadata`/`metadata` (title, description, OpenAlpha, canonical) and render a single component from `src/views/`. All actual markup, layout, and logic for a route lives in `src/views/<Name>.jsx`, not in the `page.js` file. When changing a page's content or behavior, go straight to its view — the route file is just SEO wiring.

**Every page opts into static rendering.** `export const dynamic = "force-static"` appears in `layout.js` and every `page.js`. This is a deliberate SEO choice (see comment in `layout.js`) — preserve it when adding new routes.

**Content lives in `src/data.js`, not in components/views.** This single ~1850-line file exports all copy, image paths, and structured content as named constants (`BROCHURE`, `MEDIA`, `LUXURY_VILLAS`, `VILLA_FAQS`, `BLOGS`, `TESTIMONIALS`, `GALLERY`, `TRUST_STATS`, etc.). Views and components import from here rather than hardcoding text/data. When adding or editing site copy, villa inventory, blog posts, FAQs, etc., edit `src/data.js` — don't scatter content into JSX. `getBlogBySlug(slug)` and `formatBlogDate(iso)` are the helper exports for blog content.

**Blog posts are one static route per post.** Each post lives at `src/app/blogs/<slug>/page.js` (19 of them, ~34 lines each) — a small wrapper that pulls the post via `getBlogBySlug(SLUG)` and renders `src/views/BlogPost.jsx`. `BLOGS` array in `data.js` is the source of truth for slugs/dates, and `src/app/sitemap.js` derives sitemap entries directly from it. Adding a new blog post means: add an entry to `BLOGS` in `data.js`, then add a matching `src/app/blogs/<slug>/page.js` file following the existing pattern (see e.g. `src/app/blogs/best-time-to-visit-kufri/page.js`).

**Legacy URL redirects are handled in two places that must stay in sync**: `next.config.js` (`redirects()`) does the actual permanent redirect (e.g. `/villas` → `/luxury-villas-in-kufri`), and the corresponding `page.js` (e.g. `src/app/villas/page.js`) also calls `redirect()` client-side as a fallback safety net. Keep both if adding a new legacy-URL redirect.

**The GTM/body postbuild fix.** Next's App Router injects an empty RSC placeholder div as the first child of `<body>`, which breaks Google Tag Manager/Search Console verification (GTM's `<noscript>` must be the literal first child of `<body>`). `scripts/fix-gtm-body.js` runs after every `next build` and patches the generated static HTML in `.next/server/app` to strip that placeholder and hoist the GTM `<noscript>` to the top of `<body>`. If you change how GTM is embedded in `layout.js`, check this script still matches.

**Enquiry form is one shared component, mounted in multiple places.** `src/components/EnquiryForm.jsx` (`"use client"`) is used by the homepage contact section, the `/contact` page, and `EnquiryPopup.jsx`. It submits directly to the Web3Forms API from the client and redirects to `/thank-you` on success — there is no internal API route. If you need to change the enquiry flow (fields, validation, submission target), this is the single place to do it.

**Styling**: Tailwind, with brand design tokens (colors like `forest`, `ivory`, `brass`, `ink`, `sage`, `parchment`; fonts `serif`/`display` = Cormorant Garamond, `accent` = Playfair Display, `body`/`sans` = Outfit) defined in `tailwind.config.js`. Prefer these semantic token names over raw hex/arbitrary values when styling new UI to stay visually consistent. `src/components/ui/` holds shadcn-style primitives (button, select, popover, calendar, sonner) built on Radix; `src/lib/utils.js` exports the `cn()` classname helper (clsx + tailwind-merge) used throughout.

**Images**: `next.config.js` only whitelists `images.unsplash.com` and `framerusercontent.com` as remote image hosts — add new hosts there if referencing external images. Most real content images are local, served from `public/` (e.g. `public/brochure/...`, `public/Homepage/...`) and referenced via helper functions (`B()`, `A()`) at the top of `data.js`.
