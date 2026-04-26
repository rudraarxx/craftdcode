# Craftdcode Portfolio

## What This Is

Craftdcode is a premium portfolio for a collective of three experts (one designer and two developers) designed to showcase their freelance capabilities to high-end clients. It uses a modern Next.js stack with advanced animations to demonstrate a "Design · Develop · Deliver" workflow.

## Core Value

To win high-value freelance projects by demonstrating a seamless integration of premium design and high-performance engineering.

## Requirements

### Validated

- ✓ **High-End Hero Section** — Bold typography with reveal animations (GSAP).
- ✓ **Multi-Page Architecture** — Navigation for Work, About, and Contact.
- ✓ **Smooth Scroll Implementation** — Lenis integration for unified interaction feel.
- ✓ **Horizontal Work Gallery** — Dynamic project display on the Work page.

### Active

- [ ] **Team Identity** — Incorporate names and specific roles for Devanshu, Jitendrakumar, and Rupesh.
- [ ] **Case Study Pages** — Detail the process from Figma design to high-performance code.
- [ ] **Premium Positioning** — Enhance animation and performance to justify freelance rates.
- [ ] **Admin Dashboard** — Future integration with Supabase for content management.
- [ ] **SEO & Metadata** — Implementation of per-page meta tags for discoverability.

### Out of Scope

- **E-commerce Functionality** — No direct product sales needed.
- **Complex Project Management** — External tools will be used for client collaboration.

## Context

The project is currently in a "brownfield" state with a solid UI foundation. The three-person team consists of:
- **Devanshu Shrivastav**: Sr. UI/UX Designer, WP developer.
- **Jitendrakumar Gahaload**: Sr. WP developer, Front-end developer.
- **Rupesh Sontakke**: Front-end developer.

The team values high-end animations (Framer Motion, GSAP) and smooth scrolling (Lenis).

## Constraints

- **Tech Stack**: Next.js 16 (App Router), Tailwind CSS, GSAP, Framer Motion, Lenis.
- **Future Integration**: Supabase planned for the admin dashboard/backend.
- **Performance**: High animation overhead must be balanced with fast load times.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Multi-page | Transitioned from single-page to allow better SEO and distinct case study routes. | ✓ Good |
| Supabase | Selected for future admin dashboard due to easy Next.js integration. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-26 after initialization*
