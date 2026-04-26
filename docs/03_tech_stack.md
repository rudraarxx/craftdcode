# Tech Stack Specifications - CDC Portfolio

## 1. Core Framework
- **Next.js 14+**: Utilizing App Router, Server Components (RSC), and Client Components for optimal performance and SEO.
- **React**: Functional components with Hooks (useEffect, useLayoutEffect for GSAP).

## 2. Animation & Interaction
- **GSAP (GreenSock Animation Platform)**:
    - **ScrollTrigger**: For horizontal gallery and reveal animations.
    - **ScrollToPlugin**: For smooth programmatic navigation.
- **Lenis**: Smooth scrolling engine.
- **React Hook Form + Zod**: For technical, typed form validation.

## 3. Styling
- **Vanilla CSS / CSS Modules**: To ensure maximum performance and avoid the overhead of heavy CSS frameworks. Use custom properties (CSS variables) for the design system.
- **Responsive Layouts**: Flexbox and Grid-centric design.

## 4. Assets & Media
- **SVGs**: Optimized SVG icons and the brand logo for resolution independence.
- **Images**: Next/Image for optimized loading (AVIF/WebP) and lazy loading.
- **Fonts**: Google Fonts (Inter/Outfit) via `next/font`.

## 5. Development Tools
- **TypeScript**: For type safety and better developer experience.
- **ESLint/Prettier**: To maintain code quality among the 2-dev team.
- **Vercel**: For CI/CD and edge-optimized hosting.
