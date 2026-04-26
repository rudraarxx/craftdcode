# Phase 04: Dynamic Content Engine - Research

**Date:** 2026-04-26

## Sanity.io + Next.js 15/16 Integration

### Package Requirements
- `sanity`: The core Studio package.
- `next-sanity`: Next.js specific tools for fetching and Studio mounting.
- `@sanity/image-url`: Helper for CDN-optimized image URLs.
- `@sanity/vision`: Optional but recommended for testing GROQ queries in the dashboard.

### Mounting the Studio
- **Path**: `app/studio/[[...index]]/page.tsx`.
- **Component**: `NextStudio` from `next-sanity/studio`.
- **Configuration**: `sanity.config.ts` in the root.

### Data Fetching (GROQ)
- **GROQ**: The query language for Sanity.
- **Pattern**: 
  ```typescript
  const projects = await client.fetch(`*[_type == "project"]{...}`);
  ```
- **Caching**: Use `revalidate` tags or `stale-while-revalidate` patterns in Next.js Server Components.

### Image Strategy
- Sanity provides a powerful image CDN.
- Use `urlFor(image).url()` to generate dynamic src for Next.js `<Image />`.

## Schema Design (Sanity Studio v3)

- **Definition**: Define schemas in `sanity/schemaTypes/`.
- **Types**: 
    - `document`: Top-level entities (Projects, Posts).
    - `object`: Reusable blocks (Methodology steps, Stats).

## Best Practices & Gotchas

- **Environment Variables**: `NEXT_PUBLIC_SANITY_PROJECT_ID` must be prefixed with `NEXT_PUBLIC` to be accessible on the client.
- **CORS**: The Sanity project must have `http://localhost:3000` added to the "Allowed Hosts" in the Sanity Manage dashboard.
- **Dataset**: Ensure it matches the one created in the dashboard (usually "production").

---

*Phase: 04-dynamic-content-engine*
*Research completed: 2026-04-26*
