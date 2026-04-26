import Hero from "@/components/Hero";
import HorizontalWork from "@/components/HorizontalWork";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { client } from "@/lib/sanity.client";
import { projectsQuery, teamQuery, servicesQuery } from "@/lib/sanity.queries";
import { projects as staticProjects, team as staticTeam } from "@/lib/data";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const [sanityProjects, sanityTeam, sanityServices] = await Promise.all([
    client.fetch(projectsQuery),
    client.fetch(teamQuery),
    client.fetch(servicesQuery),
  ]);

  // Use Sanity data if available, otherwise fallback to static data for initial transition
  const projects = sanityProjects?.length > 0 ? sanityProjects : staticProjects;
  const team = sanityTeam?.length > 0 ? sanityTeam : staticTeam;
  const services = sanityServices?.length > 0 ? sanityServices : undefined;

  return (
    <main>
      <Hero />
      <HorizontalWork projects={projects} />
      <Services services={services} />
      <Team team={team} />
      <Contact />
    </main>
  );
}
