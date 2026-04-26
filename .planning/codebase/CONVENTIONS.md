# Coding Conventions

**Analysis Date:** 2026-04-26

## General Principles

- **Minimalism**: Clean code, focused components, and high-performance logic.
- **Visual Excellence**: Animations must be smooth and well-timed.
- **Type Safety**: Strictly typed TypeScript across the codebase.

## Frontend Standards

**1. Components:**
- Use Functional Components with React Hooks.
- Use `"use client"` for all components that use state, effects, or animation libraries.
- Standard imports: `import { cn } from "@/lib/utils"` for class merging.

**2. Animation:**
- Prefer **GSAP** for complex timelines involving multiple elements.
- Use `gsap.context()` within `useEffect` to ensure proper cleanup.
- Use **Framer Motion** for simple entry/exit animations or spring-based motion.

**3. Styling:**
- Use **Tailwind CSS** utility classes.
- Avoid inline styles unless calculating values dynamically (e.g., in `TegakiTitle.tsx`).
- Typography uses `vw` (viewport width) for responsive scaling in display headers.

## Data & Logic

- **Schema Validation**: Use **Zod** for defining data structures and validating inputs.
- **Forms**: Use **React Hook Form** for managing form state and validation logic.

## Error Handling

- Basic validation in forms via Zod.
- Planned: More robust error boundaries and global error handling for API routes.

---

*Conventions analysis: 2026-04-26*
*Update when establishing new patterns*
