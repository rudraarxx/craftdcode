import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  body,
  excerpt
}`;

const MANIFESTO_BODY = [
  {
    _type: 'block',
    children: [{ _type: 'span', text: 'The modern web is suffering from a "sameness" epidemic. Everywhere we look, the same templates, the same patterns, and the same safe decisions are being made. At Craftdcode, we believe that high-performance engineering shouldn\'t be a trade-off for premium design. We call this Technical Elegance.' }],
    style: 'normal'
  },
  {
    _type: 'block',
    children: [{ _type: 'span', text: 'Technical Elegance is the point where a line of code becomes a design decision, and a visual "cut" becomes a performance optimization. It is the marriage of GSAP fluidity with Next.js speed. It is why we deconstruct typography and reconstruct experience.' }],
    style: 'normal'
  },
  {
    _type: 'block',
    children: [{ _type: 'span', text: 'This studio was founded on the idea that the best digital products are built by those who understand the grain of the medium. We don\'t just draw interfaces; we architect them.' }],
    style: 'normal'
  }
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = await client.fetch(postQuery, { slug });

  // Fallback for the first manifesto post
  if (!post && slug === "the-deconstruction-of-digital") {
    post = {
      title: "The Deconstruction of Digital: Why Craftdcode Exists",
      publishedAt: new Date().toISOString(),
      body: MANIFESTO_BODY,
      mainImage: "/work/aura.jpg",
    };
  }

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <h1 className="text-white uppercase tracking-widest">Article Not Found</h1>
      </div>
    );
  }

  const imageUrl = post.mainImage?.asset 
    ? urlFor(post.mainImage).url() 
    : post.mainImage;

  return (
    <article className="bg-black min-h-screen pb-40">
      {/* Hero Header */}
      <header className="pt-60 pb-32 border-b border-white/5">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl">
             <span className="font-mono text-[10px] text-grey tracking-widest uppercase mb-8 block">
               Published — {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
             </span>
             <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-12">
               {post.title}
             </h1>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="pt-32">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Sidebar / Info */}
            <div className="lg:col-span-3">
              <div className="sticky top-40 space-y-12">
                <div>
                   <h3 className="text-[10px] text-grey tracking-[0.3em] uppercase font-bold mb-4">Written By</h3>
                   <p className="text-white text-xs uppercase tracking-widest">Craftdcode Collective</p>
                </div>
                <div>
                   <h3 className="text-[10px] text-grey tracking-[0.3em] uppercase font-bold mb-4">Categories</h3>
                   <p className="text-white/60 text-xs uppercase tracking-widest">Manifesto · Architecture</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-5">
               <div className="prose prose-invert prose-lg max-w-none prose-p:text-grey prose-p:leading-relaxed prose-p:text-xl prose-p:mb-12 prose-headings:text-white prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter">
                  {post.body ? (
                    <PortableText value={post.body} />
                  ) : (
                    <p>Coming soon...</p>
                  )}
               </div>
               
               <div className="mt-40 pt-20 border-t border-white/10">
                 <Link href="/blog" className="group inline-flex flex-col gap-6">
                    <div className="w-px h-16 bg-white/20 group-hover:h-24 transition-all duration-700 ease-out" />
                    <span className="text-[10px] tracking-[0.4rem] text-white uppercase font-bold group-hover:tracking-[0.6rem] transition-all duration-700">
                      Back to perspective
                    </span>
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
