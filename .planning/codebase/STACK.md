# Technology Stack

**Analysis Date:** 2026-04-26

## Languages

**Primary:**
- TypeScript 5.x - All application code and configurations.

**Secondary:**
- JavaScript - Build scripts and legacy configurations (`tailwind.config.js`, `postcss.config.js`).

## Runtime

**Environment:**
- Node.js 20.x (Current environment)
- Browser runtime (Next.js client-side)

**Package Manager:**
- yarn / npm (yarn.lock present)
- Lockfile: `yarn.lock` present

## Frameworks

**Core:**
- Next.js 16.2.4 - React-based fullstack framework with App Router.
- React 19.2.4 - UI library.

**Styling:**
- Tailwind CSS 3.4.19 - Utility-first CSS framework.

**Animation:**
- GSAP 3.15.0 - Professional-grade animation library for complex timelines.
- Framer Motion 12.38.0 - React-native animation library for UI transitions.
- Lenis 1.3.23 - Smooth scrolling engine.

**Testing:**
- Vitest 4.1.5 - Fast unit test runner.
- React Testing Library 16.3.2 - UI testing.

**Build/Dev:**
- TypeScript 5.x - Static typing.
- PostCSS 8.5.10 - CSS transformation.
- ESLint 9.x - Linting.

## Key Dependencies

**Critical:**
- `lucide-react` 1.8.0 - Icon set.
- `zod` 4.3.6 - Schema validation for forms and data.
- `react-hook-form` 7.73.1 - Form state management.
- `clsx` & `tailwind-merge` - Dynamic class management.

## Configuration

**Environment:**
- Environment variables via `.env` (not yet found, but likely used for production).

**Build:**
- `next.config.ts` - Next.js configuration.
- `tailwind.config.js` - Tailwind theme and plugins.
- `tsconfig.json` - TypeScript rules.
- `vitest.config.ts` - Test runner setup.

## Platform Requirements

**Development:**
- macOS/Linux/Windows (any platform with Node.js 20+).

**Production:**
- Optimized for Vercel deployment (standard Next.js target).

---

*Stack analysis: 2026-04-26*
*Update after major dependency changes*
