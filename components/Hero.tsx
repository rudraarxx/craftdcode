"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Initial reveal
    tl.from(".line-reveal", {
      y: "110%",
      duration: 1.4,
      stagger: 0.1,
      ease: "power4.out",
    });

    tl.from(
      ".hero-sub",
      {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Architectural Cut Animation (Scroll-based)
    // Slice 1 (Top)
    gsap.to(".cut-top", {
      x: -20,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Slice 2 (Middle) - static or opposite
    gsap.to(".cut-middle", {
      x: 10,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Slice 3 (Bottom)
    gsap.to(".cut-bottom", {
      x: -40,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  const renderHeadline = (text: string, className: string, isItalic = false) => (
    <div className={`relative ${className}`}>
      {/* Base Layer (for screen readers) */}
      <h1 className="line-reveal opacity-0 select-none">
        {text}
      </h1>

      {/* Cut Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Slice */}
        <h1 
          className={`line-reveal cut-top absolute inset-0 ${isItalic ? 'italic' : ''}`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)' }}
        >
          {text}
        </h1>
        {/* Middle Slice */}
        <h1 
          className={`line-reveal cut-middle absolute inset-0 ${isItalic ? 'italic' : ''}`}
          style={{ clipPath: 'polygon(0 35%, 100% 35%, 100% 70%, 0 70%)' }}
        >
          {text}
        </h1>
        {/* Bottom Slice */}
        <h1 
          className={`line-reveal cut-bottom absolute inset-0 ${isItalic ? 'italic' : ''}`}
          style={{ clipPath: 'polygon(0 70%, 100% 70%, 100% 100%, 0 100%)' }}
        >
          {text}
        </h1>
      </div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-16 h-full flex flex-col justify-between pt-36 pb-20">
        {/* Top meta */}
        <div className="flex justify-between items-center">
          <span className="hero-sub text-[10px] text-grey tracking-[0.4em] font-medium uppercase">
            Design Studio
          </span>
          <div className="hero-sub flex items-center gap-8">
            <span className="text-[10px] text-grey tracking-[0.4em] font-medium uppercase">
              Est. 2024
            </span>
            <div className="grid grid-cols-3 gap-[3px] opacity-30">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] border border-white" />
              ))}
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div ref={headlineRef} className="flex-1 flex flex-col justify-center select-none">
          {renderHeadline(
            "CRAFT", 
            "text-[16vw] md:text-[12vw] font-black leading-[0.95] text-white uppercase tracking-tighter"
          )}
          <div className="flex ml-[38vw]">
            {renderHeadline(
              "DCODE", 
              "text-[16vw] md:text-[12vw] font-black leading-[0.95] text-white/20 uppercase tracking-tighter",
              true
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-end gap-8">
          <div>
            <p className="hero-sub text-[10px] md:text-xs text-grey tracking-[0.4em] font-medium uppercase mb-6">
              Design · Develop · Deliver
            </p>
            <Link
              href="/work"
              className="hero-sub inline-block text-[10px] text-white tracking-[0.3em] font-medium uppercase border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>

          <div className="hero-sub flex flex-col items-center gap-3 shrink-0">
            <span className="text-[9px] text-grey tracking-[0.3em] font-medium uppercase [writing-mode:vertical-rl] rotate-180">
              Scroll
            </span>
            <div className="w-[1px] h-16 bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
