"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "15+", label: "Projects Shipped" },
  { value: "3", label: "Years of Craft" },
  { value: "3", label: "Core Specialists" },
  { value: "100%", label: "Remote-First" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black border-t border-b border-white/5 py-20">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item bg-black px-8 md:px-12 py-12 flex flex-col gap-4"
            >
              <span className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] text-grey tracking-[0.3em] font-medium uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
