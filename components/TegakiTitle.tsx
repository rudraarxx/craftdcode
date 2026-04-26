"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TegakiTitleProps {
  text: string;
  className?: string;
}

export default function TegakiTitle({ text, className }: TegakiTitleProps) {
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.8 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex flex-wrap items-center justify-center font-handwriting", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
          className="relative"
        >
          {char === " " ? "\u00A0" : char}
          {/* Subtle "scribble" underline effect for specific characters */}
          {char !== " " && index % 3 === 0 && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white opacity-20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5 + (index * 0.1), duration: 0.5 }}
            />
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}
