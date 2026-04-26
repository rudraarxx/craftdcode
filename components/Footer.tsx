"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 pb-20 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Craftdcode Logo"
                width={120}
                height={24}
                className="invert"
                style={{ height: "auto" }}
              />
            </Link>
            <p className="text-[10px] text-grey tracking-[0.2em] uppercase leading-loose max-w-[24ch]">
              A minimal design studio crafting high-performance digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-[9px] text-grey/50 tracking-[0.4em] uppercase font-medium mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/work" className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">Work</Link>
              <Link href="/blog" className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">Blog</Link>
              <Link href="/about" className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">About</Link>
              <Link
                href="/contact"
                className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-[9px] text-grey/50 tracking-[0.4em] uppercase font-medium mb-6">
              Connect
            </h4>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">Twitter</a>
              <a href="#" className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">LinkedIn</a>
              <a href="#" className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">Dribbble</a>
              <a href="#" className="text-xs text-grey hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">GitHub</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[10px] text-grey/50 tracking-[0.2em] uppercase">
            © {currentYear} Craftdcode · All Rights Reserved
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-grey/30 tracking-[0.3em] uppercase">Technical Elegance</span>
            <div className="grid grid-cols-3 gap-[2px] opacity-15">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-[4px] h-[4px] border border-white" />
              ))}
            </div>
            <span className="text-[10px] text-grey/30 tracking-[0.3em] uppercase">High Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
