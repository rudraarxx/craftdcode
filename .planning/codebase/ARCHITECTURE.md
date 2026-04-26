# Architecture

**Analysis Date:** 2026-04-26

## System Overview

The project is a high-performance, minimalist portfolio built with **Next.js 16** using the **App Router**. It prioritizes visual excellence through complex animations and smooth interactions.

## Key Patterns

**1. App Router & Page-Based Routing:**
- The application recently transitioned from a single-page anchor-based layout to a multi-page structure.
- Routes: `/`, `/work`, `/about`, `/contact`.

**2. Component-Based UI:**
- Reusable components reside in `components/`.
- UI primitives (shadcn-style) are in `components/ui/`.

**3. Animation Layering:**
- **GSAP**: Used for complex, coordinated timelines (e.g., in `Hero.tsx` and `Services.tsx`).
- **Framer Motion**: Used for character-level or spring-based animations (e.g., in `TegakiTitle.tsx`).
- **Lenis**: Provides smooth scrolling across the entire application, integrated via `SmoothScroll.tsx`.

**4. Utility-First Styling:**
- Extensive use of Tailwind CSS for styling and layout.
- Use of `vw` (viewport width) units for responsive typography and spacing.

## Data Flow

- **Static Content**: Most project and studio information is currently hardcoded in components or defined as constants (e.g., `projects` in `HorizontalWork.tsx`).
- **Form State**: Managed via `react-hook-form` and validated with `zod` in `Contact.tsx`.

## Key Files & Entry Points

- `app/layout.tsx`: Root layout providing font variables, smooth scroll wrapper, and global components (Header, Footer, Preloader).
- `app/page.tsx`: Home page entry point.
- `lib/utils.ts`: Shared utility functions (e.g., `cn`).

---

*Architecture analysis: 2026-04-26*
*Update after major architectural shifts*
