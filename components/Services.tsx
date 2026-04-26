"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  detail?: string;
  icon?: string;
  step?: string;
}

const DEFAULT_SERVICES = [
  {
    step: "01",
    title: "DESIGN",
    description:
      "Crafting minimalist interfaces that prioritize visual excellence and intuitive user flow. Technical elegance from the first pixel.",
    detail: "UI Design · UX Research · Motion Design · Brand Systems",
  },
  {
    step: "02",
    title: "DEVELOP",
    description:
      "Building high-performance, robust architectures using Next.js and premium animation engines. Code that moves as good as it looks.",
    detail: "Next.js · TypeScript · GSAP · Framer Motion",
  },
  {
    step: "03",
    title: "DELIVER",
    description:
      "Ensuring seamless deployment and continuous technical support. We turn vision into a production-ready digital experience.",
    detail: "Vercel · Performance · Analytics · Ongoing Support",
  },
];

function BrandGrid({ opacity = 0.15 }: { opacity?: number }) {
  return (
    <div className="grid grid-cols-3 gap-[3px]" style={{ opacity }}>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="w-[8px] h-[8px] border border-white" />
      ))}
    </div>
  );
}

export default function Services({ services = DEFAULT_SERVICES }: { services?: Service[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".serviceCard", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: "power3.out",
      });

      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black relative">
      <div className="container mx-auto px-8 md:px-16">
        {/* Section header */}
        <div className="services-header flex justify-between items-end section-header">
          <div>
            <h2 className="section-label">
              Our Workflow
            </h2>
            <h3 className="text-5xl md:text-7xl text-white font-black leading-none uppercase tracking-tighter">
              Design<br />Develop<br />Deliver
            </h3>
          </div>
          <BrandGrid opacity={0.2} />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-white/5">
          {services.map((service, i) => (
            <div key={i} className="serviceCard relative px-0 lg:px-12 first:pl-0 last:pr-0 py-8 lg:py-0 group">
              {/* Step number */}
              <span className="font-mono text-[10px] text-grey mb-10 block tracking-[0.3em]">
                {service.step || `0${i + 1}`}
              </span>

              {/* Title */}
              <h4 className="text-3xl text-white mb-6 font-black tracking-tight uppercase">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-grey leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Tech tags */}
              <p className="text-[10px] text-white/30 tracking-[0.2em] font-medium uppercase leading-loose">
                {service.detail}
              </p>

              {/* Hover line */}
              <div className="w-full h-[1px] bg-white/8 mt-12 origin-left group-hover:bg-white/30 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
