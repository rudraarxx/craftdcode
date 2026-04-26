# Phase 01: Team & Brand Foundation - Research

**Date:** 2026-04-26

## Objective
Research high-end interactive typography patterns and Next.js data centralization best practices for Phase 1.

## Interactive Typography Patterns (Team List)

### Core Technique: Text Masking
To achieve a "premium" feel as requested, we will use an **overflow-hidden masking** pattern.
- **HTML Structure**: A parent container with `overflow: hidden` and a child `div` containing the name and superpower.
- **Interaction**: On hover, the name slides up (or changes color) while the "Superpower" text reveals from below/above.
- **Library**: **GSAP** with the `@gsap/react` hook (`useGSAP`) for robust lifecycle management.

### Recommended Animation Values
- **Ease**: `power4.out` (very smooth, rapid deceleration).
- **Duration**: `0.5s` to `0.7s` for a sophisticated, non-hurried feel.
- **Stagger**: If reveal involves multiple lines or characters, a small stagger (`0.02s`) adds quality.

## Data Centralization Pattern (Next.js 16)

### Location: `lib/data.ts`
- **Pattern**: Exporting static arrays/objects that represent our "database" for now.
- **Server/Client Boundary**: Data should be defined as plain serializable objects so they can be fetched in Server Components (`page.tsx`) and passed to Client Components (like the interactive team list).

### Schema Idea
```typescript
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  superpower: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Creative Development" | "Next.js & Web Apps" | "UI/UX & Design Systems";
  description: string;
  slug: string;
}
```

## Best Practices & Gotchas

- **Lenis Conflict**: Ensure animations don't interfere with the smooth scroll position. GSAP `scrollTrigger` should be used if reveal depends on scroll, but for hover, standard event listeners are better.
- **Performance**: Centralizing data in `lib/data.ts` allows us to eventually switch to Supabase just by changing the data-fetching functions, without touching the UI components.
- **SEO**: Ensure that even with animations, the text is present in the DOM (not just canvas or hidden via `display: none`) so search engines can read the team names and roles.

---

*Phase: 01-team-brand-foundation*
*Research completed: 2026-04-26*
