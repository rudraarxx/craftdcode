"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";

interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  thumbnail: any;
  description: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalWork({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!projects || projects.length === 0) return;

    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: `-${(projects.length - 1) * 100}vw`,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${projects.length * 600}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => pin.kill();
    }, triggerRef);

    return () => ctx.revert();
  }, [projects]);

  if (!projects || projects.length === 0) return null;

  return (
    <section ref={triggerRef} className="overflow-hidden bg-black relative">
      {/* Label */}
      <div className="absolute top-12 left-0 right-0 z-10">
        <div className="container mx-auto px-8 md:px-16">
          <h2 className="section-label mb-0">
            Selected Work
          </h2>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={sectionRef}
        className="flex h-screen items-center pl-8 md:pl-16"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project, index) => {
          const imageUrl = project.thumbnail?.asset 
            ? urlFor(project.thumbnail).url() 
            : project.thumbnail;

          return (
            <div
              key={project.slug}
              className="w-screen h-screen flex items-center justify-center gap-12 lg:gap-20 flex-shrink-0 px-8 md:px-16"
            >
              {/* Image card */}
              <Link
                href={`/work/${project.slug}`}
                className="w-[80vw] lg:w-[44vw] aspect-[4/3] relative overflow-hidden bg-slate-dark border border-white/10 group flex-shrink-0 block"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 1024px) 80vw, 44vw"
                  />
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase font-medium">
                    {project.category}
                  </span>
                </div>
              </Link>

              {/* Text info */}
              <div className="w-[80vw] lg:w-[28vw] flex-shrink-0">
                <span className="font-mono text-[10px] text-grey mb-6 block tracking-widest">
                  0{index + 1} — {project.year}
                </span>
                <h3 className="text-4xl lg:text-6xl font-black mb-6 text-white leading-none italic tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-grey leading-relaxed mb-8 max-w-[32ch]">
                  {project.description}
                </p>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-3 text-[10px] text-white tracking-[0.3em] font-medium uppercase border-b border-white/20 pb-1 hover:border-white transition-colors duration-300"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
