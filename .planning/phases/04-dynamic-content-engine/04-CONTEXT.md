# Phase 04: Dynamic Content Engine - Context

**Gathered:** 2026-04-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Integrate Sanity.io as a Headless CMS to manage all site content (Projects, Team, Blog, Testimonials, Services) through a unified Admin Dashboard at `/studio`.

</domain>

<decisions>
## Implementation Decisions

### Sanity Infrastructure
- **Project ID**: `utbonnz3`
- **Dataset**: `production`
- **Dashboard Path**: `/studio`
- **Tooling**: Use `next-sanity` for client-side and server-side fetching.

### Schema Definitions
- **Project**: Title, Slug, Category, Year, Thumbnail, Role, Services, Challenge, Solution, Methodology (Array), Stats (Array).
- **Team**: Name, Initials, Role, Superpower.
- **Post (Blog)**: Title, Slug, Body (Portable Text), Main Image, PublishedAt.
- **Testimonial**: Quote, Author, Company/Role.
- **Service**: Title, Description, Icon Name.

### Data Flow
- **Fetching**: Refactor `app/page.tsx` and `app/work/[slug]/page.tsx` to fetch from Sanity instead of `lib/data.ts`.
- **Migration**: Seed Sanity with the concept data currently in `lib/data.ts`.
- **Image Handling**: Use `@sanity/image-url` for optimized CDN-served images.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project ID
- `utbonnz3`

### Targets
- `app/studio/[[...index]]/page.tsx` — Dashboard mounting point.
- `sanity/schemaTypes/` — Schema definition directory.
- `lib/sanity.client.ts` — Shared Sanity client.
- `app/work/[slug]/page.tsx` — Data fetching refactor.

</canonical_refs>

---

*Phase: 04-dynamic-content-engine*
*Context gathered: 2026-04-26 after discussion*
