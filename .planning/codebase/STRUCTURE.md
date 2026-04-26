# Directory Structure

**Analysis Date:** 2026-04-26

## Overview

```
.
├── .agent/              # GSD skills and configuration
├── .planning/           # GSD project management and codebase docs
├── app/                 # Next.js App Router (pages and layouts)
├── components/          # React components
│   ├── ui/              # Base UI primitives (shadcn/ui style)
├── lib/                 # Shared logic and utilities
├── public/              # Static assets (images, logo.svg)
├── __tests__/           # Unit and integration tests
├── hooks/               # Custom React hooks
└── utils/               # General utility functions
```

## Key Locations

**1. Pages (`app/`):**
- `/`: `app/page.tsx`
- `/work`: `app/work/page.tsx`
- `/about`: `app/about/page.tsx`
- `/contact`: `app/contact/page.tsx`

**2. Main Components (`components/`):**
- `Hero.tsx`: Main landing typography and visuals.
- `Header.tsx` & `Footer.tsx`: Global navigation.
- `HorizontalWork.tsx`: Horizontal scrolling project gallery.

**3. Styling:**
- `app/globals.css`: Global styles and Tailwind directives.
- `tailwind.config.js`: Theme configuration and design tokens.

## Naming Conventions

- **Components**: PascalCase (e.g., `HorizontalWork.tsx`).
- **Pages**: `page.tsx` within folders (standard Next.js).
- **Utilities**: camelCase (e.g., `utils.ts`).
- **CSS**: Utility classes via Tailwind.

---

*Structure analysis: 2026-04-26*
*Update after directory reorganizations*
