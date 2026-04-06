
## Tech Stack

- Next.js 14 App Router + TypeScript
- TailwindCSS
- GSAP + ScrollTrigger
- Framer Motion
- Lenis smooth scroll
- React Query
- React Intersection Observer
- Three.js (ready to extend)
- next/image optimization
- SEO metadata + JSON-LD + sitemap + robots

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repo.
3. Framework preset: `Next.js`.
4. Build command: `npm run build`.
5. Output directory: `.next`.
6. Add production domain and update `SITE.siteUrl` in `lib/constants.ts`.

## Replace branding, text, images

1. Edit copy and contact details in `lib/constants.ts`.
2. Replace placeholder images under `public/images` with your project assets using same filenames, or update paths in `lib/constants.ts`.
3. For hero video, add `public/videos/hero.mp4` and update `components/Hero/Hero.tsx` if you want `<video>` instead of current cinematic gradient.
4. Update metadata defaults in `lib/seo.ts`.

## Lighthouse target checklist

- Use compressed real images (WebP/AVIF)
- Keep LCP hero asset under ~250KB
- Prefer static rendering for content pages
- Minimize third-party scripts
