export interface Project {
  id: number;
  slug: string;
  title: string;
  category: "Creative Development" | "Next.js & Web Apps" | "UI/UX & Design Systems";
  year: string;
  description: string;
  thumbnail: string;
  role: string;
  services: string[];
  challenge: string;
  solution: string;
  process?: {
    label: string;
    description: string;
  }[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  superpower: string;
}

export const team: TeamMember[] = [
  {
    id: "01",
    initials: "DS",
    name: "Devanshu Shrivastav",
    role: "Sr. UI/UX Designer & WP Developer",
    superpower: "Bridging the gap between aesthetic vision and technical reality.",
  },
  {
    id: "02",
    initials: "JG",
    name: "Jitendrakumar Gahaload",
    role: "Sr. WP Developer & Front-end Developer",
    superpower: "Architecting high-performance web experiences with technical precision.",
  },
  {
    id: "03",
    initials: "RS",
    name: "Rupesh Sontakke",
    role: "Front-end Developer",
    superpower: "Bringing designs to life with fluid, motion-rich code and seamless interaction.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "aura-immersive-experience",
    title: "AURA",
    category: "Creative Development",
    year: "2024",
    description: "Immersive brand experience utilizing advanced WebGL and fluid typography reveals.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=900&fit=crop",
    role: "Lead Development",
    services: ["WebGL", "GSAP Animation", "Next.js"],
    challenge: "Creating a high-fidelity visual experience that remains fluid and performant on mobile devices without sacrificing the 'ethereal' aesthetic.",
    solution: "We implemented a custom shader-based background and optimized GSAP timelines, resulting in 60FPS performance across all viewports.",
    process: [
      { label: "Concept", description: "Architectural deconstruction of brand values into visual metaphors." },
      { label: "Design", description: "High-contrast minimalist layout with fluid motion paths." },
      { label: "Build", description: "Next.js 15 integration with custom GLSL shaders." },
    ],
    stats: [
      { label: "Performance", value: "98/100" },
      { label: "Load Time", value: "0.8s" },
    ]
  },
  {
    id: 2,
    slug: "vortex-saas-dashboard",
    title: "VORTEX",
    category: "Next.js & Web Apps",
    year: "2024",
    description: "High-performance SaaS dashboard focusing on atmospheric interactions and real-time data.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=900&fit=crop",
    role: "Architecture & Frontend",
    services: ["UI/UX", "Next.js Apps", "Supabase"],
    challenge: "Handling complex real-time data visualizations while maintaining a clean, architecturally precise interface.",
    solution: "By utilizing React Server Components and Supabase real-time subscriptions, we reduced client-side bundle size by 40%.",
    process: [
      { label: "Wireframe", description: "Deconstructing data into intuitive, modular grid structures." },
      { label: "UI Kit", description: "Development of a custom glassmorphic component library." },
      { label: "Integration", description: "Scalable backend architecture with Supabase." },
    ],
    stats: [
      { label: "Bundle Size", value: "-40%" },
      { label: "Real-time", value: "<50ms" },
    ]
  },
  {
    id: 3,
    slug: "momentum-design-system",
    title: "MOMENTUM",
    category: "UI/UX & Design Systems",
    year: "2023",
    description: "Gesture-based design system concept for spatial computing and next-gen interfaces.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=900&fit=crop",
    role: "Design Systems",
    services: ["Design Strategy", "Figma to Code", "Interaction"],
    challenge: "Translating complex spatial gestures into a 2D web environment that feels intuitive and premium.",
    solution: "We developed a custom motion-engine that bridges Figma prototypes and production-ready React components.",
    process: [
      { label: "Strategy", description: "Defining the core principles of gesture-based momentum." },
      { label: "Prototype", description: "High-fidelity motion testing in Figma and Rive." },
      { label: "Documentation", description: "Auto-generating code tokens from design tokens." },
    ],
    stats: [
      { label: "Token Accuracy", value: "100%" },
      { label: "Handoff Time", value: "-60%" },
    ]
  },
];
