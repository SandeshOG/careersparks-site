import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { PersonPlate } from "@/components/site/person-plate";
import { site, team } from "@/lib/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: `Team — ${site.name}` },
      {
        name: "description",
        content:
          "CareerSparks is Tejas Naresh Shrirao, Sandesh Lanjewar, and Dhariya. Founder, software, and video.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="page">
      <PageHeader
        kicker="Team"
        title="The people on the desk."
        lede="Founder, software, and video. Initials stand in for portraits. These three roles are the company."
      />
      <div className="plate-grid mt-12">
        {team.map((person, index) => (
          <PersonPlate key={person.name} person={person} index={index} />
        ))}
      </div>
    </div>
  );
}
