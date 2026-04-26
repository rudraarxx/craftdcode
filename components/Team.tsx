"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface TeamMember {
  id?: string;
  initials: string;
  name: string;
  role: string;
  superpower: string;
}

function TeamMemberItem({ member, index }: { member: TeamMember, index: number }) {
  const container = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const powerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const onMouseEnter = contextSafe(() => {
    gsap.to(nameRef.current, {
      y: -10,
      opacity: 0.3,
      duration: 0.6,
      ease: "power4.out",
    });
    gsap.to(powerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
      delay: 0.05,
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(nameRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
    });
    gsap.to(powerRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
    });
  });

  return (
    <div
      ref={container}
      className="group relative py-12 border-b border-white/10 cursor-default"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
        {/* ID */}
        <span className="font-mono text-[10px] text-grey tracking-widest opacity-40">
          0{index + 1}
        </span>

        {/* Name & Superpower Wrapper */}
        <div className="relative flex-1 overflow-hidden h-24 md:h-16 flex flex-col justify-center">
          {/* Name */}
          <div ref={nameRef} className="absolute inset-0 flex items-center">
            <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter transition-colors duration-500 group-hover:text-white/40">
              {member.name}
            </h3>
          </div>

          {/* Superpower (Revealed on hover) */}
          <div
            ref={powerRef}
            className="absolute inset-0 flex items-center translate-y-8 opacity-0 pointer-events-none"
          >
            <p className="text-lg md:text-xl text-white font-medium leading-tight max-w-2xl">
              {member.superpower}
            </p>
          </div>
        </div>

        {/* Role */}
        <div className="md:text-right flex flex-col items-start md:items-end">
          <span className="text-[10px] text-grey tracking-[0.3em] uppercase font-bold mb-1">
            Role
          </span>
          <span className="text-xs text-white/60 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {member.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Team({ team }: { team: TeamMember[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".team-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding bg-black overflow-hidden">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="team-header section-header">
          <h2 className="section-label">
            The Collective
          </h2>
          <h3 className="text-5xl md:text-7xl text-white font-black leading-[0.9] italic uppercase tracking-tighter">
            Design · Develop <br /> Deliver
          </h3>
        </div>

        {/* Interactive List */}
        <div className="mt-20 border-t border-white/10">
          {team?.map((member, i) => (
            <TeamMemberItem key={i} index={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
