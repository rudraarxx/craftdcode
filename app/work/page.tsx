import HorizontalWork from "@/components/HorizontalWork";
import { client } from "@/lib/sanity.client";
import { projectsQuery } from "@/lib/sanity.queries";
import { projects as staticProjects } from "@/lib/data";

export default async function WorkPage() {
  const sanityProjects = await client.fetch(projectsQuery);
  const projects = sanityProjects?.length > 0 ? sanityProjects : staticProjects;

  return (
    <div className="pt-20">
      <HorizontalWork projects={projects} />
    </div>
  );
}
