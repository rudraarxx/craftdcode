# Phase 03: Performance & Discoverability - Research

**Date:** 2026-04-26

## Next.js 15/16 Metadata Best Practices

### Dynamic OpenGraph Images (`opengraph-image.tsx`)
- **Concept**: Instead of a static PNG, use the `ImageResponse` API to generate a high-quality share image on the fly.
- **Benefit**: Can include the project title and `logo.svg` dynamically.
- **Implementation**: Create `app/work/[slug]/opengraph-image.tsx`.

### Sitemap Generation (`sitemap.ts`)
- **Concept**: Export a default function from `app/sitemap.ts` that returns an array of URLs.
- **Source**: Must import `projects` from `lib/data.ts` to include all case study paths.

### Favicon Logic
- **App Router**: Simply placing `icon.svg` in the `app/` directory is the modern way. It handles different sizes and formats automatically.

## Performance Optimization

### GSAP Performance (ScrollTrigger)
- **Concept**: Use `will-change: transform` on animated elements.
- **Audit**: Ensure `ScrollTrigger.refresh()` is called if layout changes occur, but avoid over-calling it.
- **Optimization**: Use `gsap.ticker` for any continuous frame-based updates if needed (though `ScrollTrigger` is usually enough).

### Semantic HTML Audit
- **Checklist**:
    - [ ] Root `main` tag.
    - [ ] Unique `h1` per page.
    - [ ] `section` tags with `aria-labelledby`.
    - [ ] `footer` and `header` roles.

## Best Practices & Gotchas

- **Image Sizing**: Using `priority` on Hero images prevents LCP (Largest Contentful Paint) delays.
- **Robots.txt**: Must be in `public/robots.txt` or generated via `app/robots.ts`.
- **Favicon Cache**: Browser favicon caching is aggressive; always verify with a hard refresh or incognito mode.

---

*Phase: 03-performance-discoverability*
*Research completed: 2026-04-26*
