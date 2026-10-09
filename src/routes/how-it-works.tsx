import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { pipeline, site } from "@/lib/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: `How it works — ${site.name}` },
      {
        name: "description",
        content:
          "CareerSparks ingests public posts, Claude drafts the listing on a first-party API, a person approves it, then it is published to the site and WhatsApp.",
      },
    ],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <div className="page">
      <PageHeader
        kicker="How it works"
        title="Ingest, draft, approve, then publish."
        lede="This is the path a listing takes. The public board has not opened, so these steps describe the desk, not a catalog of openings."
      />

      <ol className="mt-12 border-b border-line">
        {pipeline.map((step) => (
          <li id={step.id} key={step.id} className="step">
            <div>
              <p className="step-num">{step.n}</p>
              <h2 className="mt-3 text-lg font-medium">{step.title}</h2>
            </div>
            <p className="max-w-xl text-lg text-muted">{step.detail}</p>
          </li>
        ))}
      </ol>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <article>
          <h2 className="font-display text-section text-navy">What Claude is allowed to do</h2>
          <p className="mt-4 text-muted">
            Parsing runs on a first-party Claude API only. It extracts the role, the city, the pay
            or stipend, and the eligibility. It drops duplicates. It drafts. It does not publish.
          </p>
        </article>
        <article>
          <h2 className="font-display text-section text-navy">Where a listing goes</h2>
          <p className="mt-4 text-muted">
            After a person approves it, the listing is posted on this site and on the WhatsApp
            channel. Until that review exists, the jobs page stays empty.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/jobs" className="btn btn-primary">
              See the empty board
            </Link>
            <a className="btn btn-secondary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp channel
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
