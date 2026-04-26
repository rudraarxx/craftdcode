"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const mainMenuItems = [
  { id: 1, title: "About", url: "/about" },
  { id: 2, title: "Work", url: "/work" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Blog", url: "/blog" },
  { id: 5, title: "Contact", url: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    closed: { y: 10, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <>
      {/* Top Navbar - visible when not scrolled */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[1000] py-8 bg-transparent"
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Craftdcode Logo"
              width={120}
              height={24}
              className="invert"
              style={{ height: "auto" }}
            />
          </Link>

          <div className="hidden md:flex gap-12">
            {mainMenuItems.slice(1).map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-grey hover:text-white transition-all uppercase"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Floating Hamburger - visible when scrolled */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isScrolled ? 1 : 0,
          opacity: isScrolled ? 1 : 0,
        }}
        className="fixed top-8 right-8 md:right-16 z-[1000]"
      >
        <button
          onClick={toggleMenu}
          className="w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <Menu className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </motion.div>

      {/* Floating Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with heavy blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[1001]"
              onClick={toggleMenu}
            />

            {/* Menu Container Wrapper (Ensures perfect centering) */}
            <div className="fixed inset-0 z-[1002] flex items-center justify-center pointer-events-none">
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="w-full max-w-[90%] md:max-w-[450px] pointer-events-auto"
              >
                <div className="relative bg-[#0a0a0a] border border-white/5 shadow-2xl p-10 md:p-14 flex flex-col items-start overflow-hidden">
                  {/* Menu Label */}
                  <span className="text-[9px] text-grey/60 tracking-[0.4em] uppercase mb-10 font-medium">
                    Menu
                  </span>

                  {/* Main Links */}
                  <div className="flex flex-col gap-4 mb-16">
                    {mainMenuItems.map((item) => (
                      <motion.div key={item.id} variants={itemVariants}>
                        <Link
                          href={item.url}
                          onClick={toggleMenu}
                          className="text-4xl md:text-5xl text-white font-medium hover:text-grey transition-colors tracking-tight"
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Close Button (X) */}
                  <button
                    onClick={toggleMenu}
                    className="absolute top-8 right-8 text-grey hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
