"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  thumbnail: any;
  role: string;
  services: string[];
  year: string;
  stats?: { label: string; value: string }[];
  challenge: string;
  solution: string;
  methodology?: { label: string; description: string }[];
  process?: { label: string; description: string }[];
}

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Hero
    gsap.to(".parallaxImg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Content reveals
    gsap.from(".reveal", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 80%",
      },
    });

    // Stats counting or staggered reveal
    gsap.from(".stat-item", {
      opacity: 0,
      x: -20,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  const imageUrl = project.thumbnail?.asset 
    ? urlFor(project.thumbnail).url() 
    : project.thumbnail;

  const methodologySteps = project.methodology || project.process;

  return (
    <div ref={containerRef} className="bg-black min-h-screen">
      {/* Premium Hero */}
      <section ref={headerRef} className="h-[90vh] w-full overflow-hidden relative">
        <div className="parallaxImg absolute inset-0 w-full h-[120%]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60 z-[1]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10 px-8">
          <div className="text-center">
            <span className="text-[10px] text-white/50 tracking-[0.5em] uppercase font-medium mb-6 block">
              {project.category}
            </span>
            <h1 className="text-[12vw] md:text-[10vw] font-black text-white leading-none italic uppercase tracking-tighter">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Meta & Stats */}
      <section className="container mx-auto px-8 md:px-16 pt-32 pb-40 border-b border-white/5 content-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-32">
          <div className="reveal">
            <span className="text-[10px] text-grey tracking-[0.2rem] block mb-4 uppercase font-bold">Role</span>
            <p className="text-lg text-white font-medium uppercase tracking-tight">{project.role}</p>
          </div>
          <div className="reveal">
            <span className="text-[10px] text-grey tracking-[0.2rem] block mb-4 uppercase font-bold">Services</span>
            <div className="flex flex-wrap gap-2">
              {project.services?.map(s => (
                <span key={s} className="text-xs text-white/60 block">{s}</span>
              ))}
            </div>
          </div>
          <div className="reveal">
            <span className="text-[10px] text-grey tracking-[0.2rem] block mb-4 uppercase font-bold">Year</span>
            <p className="text-lg text-white font-medium uppercase tracking-tight">{project.year}</p>
          </div>
          <div className="reveal stats-grid">
             <span className="text-[10px] text-grey tracking-[0.2rem] block mb-4 uppercase font-bold">Performance</span>
             <div className="flex gap-8">
               {project.stats?.map(stat => (
                 <div key={stat.label} className="stat-item">
                    <p className="text-2xl font-black text-white italic leading-none mb-1">{stat.value}</p>
                    <p className="text-[9px] text-grey uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-start">
          <div className="reveal space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs text-grey tracking-[0.3rem] uppercase font-bold">The Challenge</h2>
              <p className="text-2xl md:text-3xl text-white/90 leading-[1.3] font-medium italic">
                {project.challenge}
              </p>
            </div>
          </div>
          <div className="reveal space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs text-grey tracking-[0.3rem] uppercase font-bold">The Solution</h2>
              <p className="text-xl md:text-2xl text-grey leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {methodologySteps && (
        <section className="py-40 bg-white/2">
          <div className="container mx-auto px-8 md:px-16">
            <div className="mb-24">
              <h2 className="text-[10px] text-grey tracking-[0.5em] mb-6 uppercase">Methodology</h2>
              <h3 className="text-4xl md:text-6xl text-white font-black italic uppercase tracking-tighter">Deconstruction & Build</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {methodologySteps.map((step, i) => (
                <div key={i} className="bg-black p-12 group hover:bg-white/5 transition-colors duration-500">
                  <span className="font-mono text-[10px] text-grey mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <h4 className="text-xl font-black text-white mb-4 uppercase italic tracking-tight">{step.label}</h4>
                  <p className="text-sm text-grey leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Navigation */}
      <section className="container mx-auto px-8 md:px-16 py-40">
        <div className="reveal flex justify-center">
          <Link href="/" className="group flex flex-col items-center gap-6">
            <div className="w-px h-24 bg-white/20 group-hover:h-32 transition-all duration-700 ease-out" />
            <span className="text-[10px] tracking-[0.4rem] text-white uppercase font-bold group-hover:tracking-[0.6rem] transition-all duration-700">
              Back to all work
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
