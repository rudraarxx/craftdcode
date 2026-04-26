import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { client } from "@/lib/sanity.client";
import { teamQuery } from "@/lib/sanity.queries";
import { team as staticTeam } from "@/lib/data";

export const revalidate = 60;

export default async function AboutPage() {
  const sanityTeam = await client.fetch(teamQuery);
  const team = sanityTeam?.length > 0 ? sanityTeam : staticTeam;

  return (
    <div className="pt-20">
      <Stats />
      <Services />
      <Team team={team} />
    </div>
  );
}
