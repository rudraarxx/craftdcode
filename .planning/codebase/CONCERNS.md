# Technical Concerns

**Analysis Date:** 2026-04-26

## High Priority

**1. Performance & Bundle Size:**
- Simultaneous use of GSAP, Framer Motion, and Lenis creates a significant JavaScript bundle.
- Need to monitor "Time to Interactive" (TTI) and ensure animations don't block the main thread.

**2. Mobile Typography:**
- Extensive use of `vw` units for typography (e.g., `text-[16vw]` in `Hero.tsx`) may lead to illegibility on very small screens or excessive size on ultra-wide monitors.
- Action: Audit all viewport-based sizes across breakpoints.

## Medium Priority

**3. Project Identity:**
- `package.json` identifies the project as "tmp_app". This should be updated to "craftdcode" or similar for professionalism and correct build naming.

**4. SEO & Metadata:**
- Current metadata in `layout.tsx` is minimal. Page-specific metadata (titles, descriptions, OG images) is missing for the newly created routes (`/work`, `/about`, `/contact`).

## Technical Debt

**5. Hardcoded Content:**
- Projects and studio info are hardcoded in components. Consider moving these to a central `data/` directory or a CMS for easier management.

**6. Testing Debt:**
- Only sanity tests exist. Core interactive components lack unit and integration tests.

---

*Concerns audit: 2026-04-26*
*Update as issues are resolved or discovered*
