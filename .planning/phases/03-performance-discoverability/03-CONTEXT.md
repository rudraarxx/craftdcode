# Phase 03: Performance & Discoverability - Context

**Gathered:** 2026-04-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Optimize the site for SEO, social shareability, and high performance. Establish branding consistency with favicons and OpenGraph assets.

</domain>

<decisions>
## Implementation Decisions

### SEO & Discoverability
- **Sitemap/Robots**: Implement `app/sitemap.ts` and `public/robots.txt`.
- **Metadata**: 
    - Audit `app/layout.tsx` for core metadata (title, description, keywords).
    - Implement `generateMetadata` in `app/work/[slug]/page.tsx` for project-specific social cards.
- **Semantic HTML**: Review all components (Header, Hero, Team, Work, Footer) for correct semantic tags (`<header>`, `<main>`, `<footer>`, `<section>`, `<h1>`-`<h3>`).

### Branding & Assets
- **Favicon**: Use `public/logo.svg` as the source for the site favicon.
- **OpenGraph**: Create `app/opengraph-image.png` (or dynamic OG) using the `logo.svg` to ensure beautiful social media shares.

### Performance & Quality
- **Animation Audit**: Verify that GSAP `ScrollTrigger` and the `Aura` component do not cause layout shifts or performance drops on mobile.
- **Image Optimization**: Ensure all project thumbnails in the case studies use Next.js `<Image>` with optimized `sizes` and `quality` settings.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Assets
- `public/logo.svg` — The source of truth for branding.

### Technical Targets
- `app/layout.tsx` — Global metadata and favicon integration.
- `app/work/[slug]/page.tsx` — Dynamic metadata and semantic structure.
- `lib/data.ts` — Metadata content source.

</canonical_refs>

---

*Phase: 03-performance-discoverability*
*Context gathered: 2026-04-26 after discussion*
