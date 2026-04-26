# Phase 02: Premium Experience & Case Studies - Research

**Date:** 2026-04-26

## Dynamic Hero Masking (Architectural Cuts)

### Technique: CSS Clip-Path + GSAP
- **Concept**: Duplicate the Hero title (CRAFT DCODE) into 2-3 layers.
- **Masking**: Apply different `clip-path: polygon(...)` to each layer to "cut" the text into pieces.
- **Animation**: Animate the `x` or `y` of these layers independently using GSAP. This creates the "shifting architectural deconstruction" effect.
- **Performance**: `clip-path` is GPU-accelerated and much more performant than SVG filters for real-time animation.

### Code Sample Pattern
```javascript
gsap.to(".cut-layer-1", {
  x: 20,
  y: -10,
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});
```

## Interactive Aura (Atmospheric Glow)

### Technique: GSAP QuickTo + Radial Gradient
- **Concept**: A large `div` (e.g., 600px) with a soft `radial-gradient` and heavy blur.
- **Follow Logic**: Use GSAP `quickTo` for the mouse coordinates. This is more efficient than a standard `useEffect` listener as it minimizes overhead by updating only the necessary values.
- **Positioning**: Fixed or absolute background with `z-index: -1`.
- **Aesthetic**: The "Grounded Ethereal" look is achieved by keeping the opacity low (~0.1 to 0.2) and the blur high (80px+).

## Dynamic Routing & Data Fetching

### Pattern: Next.js Server Components
- **File**: `app/work/[slug]/page.tsx`.
- **Logic**: 
  1. Receive `slug` from params.
  2. Find project in `lib/data.ts`: `projects.find(p => p.slug === slug)`.
  3. Pass data to client components for animation.
- **Renaming**: Correcting `%5Bslug%5D` to `[slug]` ensures standard Next.js routing works as expected.

## Best Practices & Gotchas

- **Layout Shifts**: Ensure masked layers are absolutely positioned within a relative container so they don't break the document flow.
- **Accessibility**: Ensure the "base" text layer is accessible to screen readers, while the animated "cut" layers are hidden (`aria-hidden="true"`).
- **Z-Index**: Keep the Aura behind all content to avoid blocking interaction with buttons/links.

---

*Phase: 02-premium-experience-case-studies*
*Research completed: 2026-04-26*
