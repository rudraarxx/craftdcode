"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const squaresRef = useRef<(HTMLDivElement | null)[]>([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (complete) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => setComplete(true),
          });
        },
      });

      // Entry: squares pop in from center
      tl.from(squaresRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        stagger: {
          amount: 0.4,
          grid: [3, 3],
          from: "center",
        },
        ease: "elastic.out(1, 0.6)",
      });

      // Flash fill white
      tl.to(
        squaresRef.current,
        {
          backgroundColor: "white",
          duration: 0.25,
          stagger: {
            amount: 0.5,
            grid: [3, 3],
            from: "edges",
          },
          repeat: 1,
          yoyo: true,
        },
        "+=0.15"
      );

      // Rotate + shrink exit
      tl.to(
        gridRef.current,
        {
          rotation: 90,
          scale: 0.6,
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "+=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [complete]);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] gap-8"
    >
      <div
        ref={gridRef}
        className="grid grid-cols-3 grid-rows-3 gap-[5px] w-[110px] h-[110px] md:w-[140px] md:h-[140px]"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              squaresRef.current[i] = el;
            }}
            className="w-full h-full border border-white bg-transparent"
          />
        ))}
      </div>
      <div className="flex gap-3 md:gap-6 text-[8px] md:text-[10px] font-medium tracking-[0.35em] text-grey uppercase">
        <span>Design</span>
        <span className="opacity-30">·</span>
        <span>Develop</span>
        <span className="opacity-30">·</span>
        <span>Deliver</span>
      </div>
    </div>
  );
}
