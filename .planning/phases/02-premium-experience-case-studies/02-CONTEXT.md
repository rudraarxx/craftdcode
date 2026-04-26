# Phase 02: Premium Experience & Case Studies - Context

**Gathered:** 2026-04-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Transform the homepage into a highly interactive premium experience and build out the detailed, process-oriented case study pages using dynamic routing.

</domain>

<decisions>
## Implementation Decisions

### Homepage Premium Refinement
- **Hero Masking**: Implement a dynamic "Architectural Cut" masking effect on the main title. The cuts should animate or shift (GSAP) to create a deconstructed aesthetic.
- **Interactive Aura**: Add a subtle, mouse-following background glow ("Atmospheric Aura") to the homepage to enhance the "Grounded Ethereal" theme.

### Case Study Architecture
- **Routing**: Use SEO-friendly slugs (`/work/[slug]`) instead of numeric IDs.
- **Structure**:
    - Large Parallax Hero Image.
    - Meta Grid (Role, Services, Year).
    - Content Sections (The Challenge, The Solution).
    - **Process/Technical Section**: A dedicated area showcasing technical specs (Performance, Tech Stack) or Design-to-Code fidelity.
- **Technical Fix**: Rename the incorrectly named `.app/work/%5Bslug%5D` directory to `.app/work/[slug]`.

### Data Enhancement
- **Location**: `lib/data.ts`.
- **Update**: Add `slug`, `role`, `challenge`, `solution`, and `process` fields to the project objects.

### the agent's Discretion
- Exact easing and speed for the mouse-aura.
- The specific visual style of the "Process" section (e.g., code-snippet aesthetic vs. clean grid).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context
- `.planning/PROJECT.md` — Core values and team roles.
- `.planning/phases/01-team-brand-foundation/01-01-SUMMARY.md` — Previous work on centralized data.

### Relevant Files
- `components/Hero.tsx` — Target for the dynamic masking.
- `app/work/%5Bslug%5D/page.tsx` — Target for the case study refactor and renaming.
- `lib/data.ts` — Target for data schema expansion.

</canonical_refs>

---

*Phase: 02-premium-experience-case-studies*
*Context gathered: 2026-04-26 after discussion*
