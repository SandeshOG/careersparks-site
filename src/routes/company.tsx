import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { disclaimer, site, team } from "@/lib/site";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: `Company — ${site.name}` },
      {
        name: "description",
        content:
          "CareerSparks was founded in 2026 in Nagpur. Bootstrapped staffing firm and automated job desk. Not affiliated with any other CareerSpark brand.",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <div className="page">
      <PageHeader
        kicker="Company"
        title="An early desk in Nagpur."
        lede="CareerSparks finds real jobs, internships, and scholarships in the market and publishes them after a person has read the draft."
      />

      <dl className="facts mt-12">
        <div>
          <dt className="kicker">Founded</dt>
          <dd>{site.founded}</dd>
        </div>
        <div>
          <dt className="kicker">City</dt>
          <dd>{site.city}</dd>
        </div>
        <div>
          <dt className="kicker">Backing</dt>
          <dd>Bootstrapped</dd>
        </div>
      </dl>

      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <div className="max-w-xl space-y-5 text-lg text-muted md:col-span-7">
          <p>
            The company is a staffing firm and an automated job desk. Automation ingests public
            posts. Claude parses them on a first-party API. A human reviews the draft before
            anything is published to the site or the WhatsApp channel.
          </p>
          <p>
            It is early. We do not publish client names, headcount, office details, or performance
            figures. There is no outside funding round to report.
          </p>
          <p>{disclaimer}</p>
        </div>
        <aside className="md:col-span-5">
          <p className="kicker">People</p>
          <ul className="mt-4 border-t border-line">
            {team.map((person) => (
              <li key={person.name} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                <span className="text-navy">{person.name}</span>
                <span className="shrink-0 text-sm text-muted">{person.role}</span>
              </li>
            ))}
          </ul>
          <Link to="/team" className="btn btn-secondary mt-5">
            Team page
          </Link>
        </aside>
      </div>
    </div>
  );
}
