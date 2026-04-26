"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Aura() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aura = auraRef.current;
    if (!aura) return;

    // GSAP quickTo for high-performance mouse following
    const xTo = gsap.quickTo(aura, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(aura, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      // Center the aura on the cursor
      const size = aura.offsetWidth / 2;
      xTo(e.clientX - size);
      yTo(e.clientY - size);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-[-1] opacity-20"
      style={{
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        filter: "blur(100px)",
        willChange: "transform",
      }}
    />
  );
}
