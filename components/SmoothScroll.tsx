"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Drives Lenis via the GSAP ticker and keeps ScrollTrigger in sync.
// Must live inside <ReactLenis> so useLenis can reach the context.
function GSAPSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onFrame = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onFrame);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onFrame);
    };
  }, [lenis]);

  // Notify ScrollTrigger on every Lenis scroll tick
  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        anchors: true,
        autoRaf: false,
      }}
    >
      <GSAPSync />
      {children}
    </ReactLenis>
  );
}
