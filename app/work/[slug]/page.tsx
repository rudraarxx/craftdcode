import { client } from "@/lib/sanity.client";
import { projectBySlugQuery } from "@/lib/sanity.queries";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import Link from "next/link";
import { Metadata } from "next";
import { projects as staticProjects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug }) || staticProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Craftdcode",
    };
  }

  return {
    title: `${project.title} | ${project.category} | Craftdcode`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug }) || staticProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white italic uppercase mb-8 tracking-tighter">
            Project Not Found
          </h1>
          <Link
            href="/"
            className="text-grey hover:text-white transition-colors uppercase tracking-widest text-xs"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
