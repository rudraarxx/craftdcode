import { client } from "@/lib/sanity.client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

export const revalidate = 60;

const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt
}`;

// Hardcoded Manifesto if no posts found
const MANIFESTO = {
  title: "The Deconstruction of Digital: Why Craftdcode Exists",
  slug: "the-deconstruction-of-digital",
  excerpt: "In an era of template-driven web, we are returning to architectural foundations. Here is the manifesto of Technical Elegance.",
  publishedAt: new Date().toISOString(),
  mainImage: "/work/aura.jpg", // Fallback to an existing image
};

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);
  const displayPosts = posts?.length > 0 ? posts : [MANIFESTO];

  return (
    <main className="bg-black min-h-screen pt-40 pb-60">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-24 md:mb-40">
          <h1 className="text-[10px] text-grey tracking-[0.5em] mb-6 uppercase">Perspective</h1>
          <h2 className="text-5xl md:text-8xl text-white font-black italic uppercase tracking-tighter leading-none">
            THOUGHTS & <br /> MANIFESTOS
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {displayPosts.map((post: any, i: number) => {
            const imageUrl = post.mainImage?.asset 
              ? urlFor(post.mainImage).url() 
              : post.mainImage;

            return (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="bg-black p-12 md:p-20 group hover:bg-white/5 transition-colors duration-700"
              >
                <span className="font-mono text-[10px] text-grey mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1} — {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
                
                <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-tight mb-8 group-hover:translate-x-2 transition-transform duration-700">
                  {post.title}
                </h3>
                
                <p className="text-grey text-lg leading-relaxed mb-12 max-w-xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-[10px] text-white tracking-[0.4em] uppercase font-bold">
                  Read Article
                  <div className="w-8 h-px bg-white/30 group-hover:w-16 transition-all duration-700" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
