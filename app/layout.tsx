import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Craftdcode | Design · Develop · Deliver",
  description: "Boutique design studio crafting high-performance, minimalist digital experiences. Specializing in Next.js, Creative Development, and UI/UX Design Systems.",
  keywords: ["Design Studio", "Creative Development", "Next.js", "Web Performance", "UI/UX Design", "Craftdcode"],
  authors: [{ name: "Crafted Developer Collective" }],
  openGraph: {
    title: "Craftdcode | Design · Develop · Deliver",
    description: "Boutique design studio crafting high-performance, minimalist digital experiences.",
    url: "https://craftdcode.com",
    siteName: "Craftdcode",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craftdcode | Design · Develop · Deliver",
    description: "Boutique design studio crafting high-performance, minimalist digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Aura from "@/components/Aura";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${bodoni.variable}`}>
      <body className="bg-black">
        <Preloader />
        <SmoothScroll>
          <Aura />
          <div className="grid-bg" />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
