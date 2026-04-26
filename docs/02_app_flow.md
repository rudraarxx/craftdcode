# Application Flow - Craftdcode Portfolio

## 1. User Journey Map

### Stage 1: Preloader & Landing
- **Loader**: Entry begins with a 3x3 grid animation (Craftdcode logo squares).
- **Entry**: Hero section triggers with typography-heavy reveal of "Design · Develop · Deliver".
- **Visuals**: 3D parallax elements background.

### Stage 2: Hero Parallax
- **Experience**: Background elements move slower than foreground typography.
- **Narrative**: "Two Developers, One Designer. Crafted to perfection."

### Stage 3: Horizontal Work Gallery
- **Interaction**: Transition from vertical to horizontal scroll using GSAP ScrollTrigger.
- **Detail**: Project cards scroll horizontally with "next-level" parallax depth.
- **Designer Touch**: High-quality preview images with custom cursor effects.

### Stage 4: About the Team
- **Reveal**: Three distinct sections for the two devs and one designer.
- **Animation**: Staggered text reveals and profile image parallaxes.

### Stage 5: Minimalist Contact
- **Conversion**: Zod-validated form with sleek, technical elegance.
- **Experience**: Inline validation and animated submission states.

## 2. Site Structure (Sitemap)
- **Home (/)**: Single-page immersive experience (SPA).
    - Hero Section
    - Team Section
    - Projects Grid
    - Process / Workflow
    - Contact Footer
- **Project Detail (/[id])**: (Optional) Dedicated pages for deep dives into specific works.

## 3. Navigation
- **Header**: Minimalist, possibly a floating "pill" nav.
- **Links**: Home, Work, About, Contact.
- **Behavior**: Smooth anchor links powered by Lenis + GSAP ScrollToPlugin.
