"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { slug } = useParams();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const title = slug ? slug.toString().replace(/-/g, " ").toUpperCase() : "PROJECT DETAIL";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallaxImg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".reveal", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    }, [headerRef]);

    return () => ctx.revert();
  }, [headerRef]);

  return (
    <div className="bg-black min-h-screen">
      <section ref={headerRef} className="h-[90vh] w-full overflow-hidden relative">
        <div className="parallaxImg h-[120%] w-full bg-slate-dark flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/40 z-[1]" />
          <h1 className="text-[10vw] font-black text-white z-10 leading-none italic uppercase">{title}</h1>
        </div>
      </section>

      <section ref={contentRef} className="container mx-auto px-8 md:px-16 pt-40 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
          <div className="reveal">
            <span className="text-[10px] text-grey tracking-[0.2rem] block mb-4 uppercase">ROLE</span>
            <p className="text-xl text-white font-medium uppercase tracking-tight">DESIGN & DEVELOPMENT</p>
          </div>
          <div className="reveal">
            <span className="text-[10px] text-grey tracking-[0.2rem] block mb-4 uppercase">CLIENT</span>
            <p className="text-xl text-white font-medium uppercase tracking-tight">TECH COLLECTIVE</p>
          </div>
          <div className="reveal">
            <span className="text-[10px] text-grey tracking-[0.2rem] block mb-4 uppercase">YEAR</span>
            <p className="text-xl text-white font-medium uppercase tracking-tight">2024</p>
          </div>
        </div>

        <div className="reveal max-w-[800px] space-y-24">
          <div className="space-y-8">
            <h2 className="text-xs text-grey tracking-[0.3rem] uppercase font-bold">THE CHALLENGE</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 leading-tight">
              This project required a high-performance solution that maintained technical elegance
              across all device viewports. We focused on delivering a minimalist aesthetic that
              doesn't compromise on visual power or smooth animations.
            </p>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-xs text-grey tracking-[0.3rem] uppercase font-bold">THE SOLUTION</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 leading-tight">
              By leveraging Next.js and high-performance animation engines like GSAP and Lenis,
              we created a seamless momentum-based experience. The monochrome palette enforces
              the brand's commitment to minimalist sophistication.
            </p>
          </div>
        </div>

        <div className="reveal mt-40">
          <Link href="/" className="group text-sm tracking-[0.2rem] text-white flex items-center gap-4 hover:opacity-70 transition-all">
            <span className="inline-block transform transition-transform group-hover:-translate-x-2">←</span>
            BACK TO ALL WORK
          </Link>
        </div>
      </section>
    </div>
  );
}
