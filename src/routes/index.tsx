import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { kinds, pipeline, site, team } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Nagpur staffing and job desk` },
      {
        name: "description",
        content:
          "CareerSparks finds jobs, internships, and scholarships in the market. Claude drafts the listing. A person reviews it before it is published.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker rise">
              {site.city} · Founded {site.founded} · Bootstrapped
            </p>
            <h1 className="hero-title rise rise-2">
              Nothing goes live until a person has read it.
            </h1>
            <p className="hero-deck rise rise-3">
              CareerSparks is a Nagpur staffing firm and job desk. We find jobs, internships, and
              scholarships already in the market. Claude drafts each listing. A person approves it.
              Then it is posted here and on WhatsApp.
            </p>
            <div className="hero-actions rise rise-4">
              <Link to="/how-it-works" className="btn btn-primary">
                How it works
              </Link>
              <Link to="/jobs" className="btn btn-line">
                Jobs board
              </Link>
            </div>
          </div>

          <div className="desk rise rise-3">
            <p className="desk-label">The desk</p>
            <div className="desk-track">
              <div className="desk-bar" aria-hidden="true" />
              <ol>
                {pipeline.map((step) => (
                  <li key={step.id}>
                    <Link to="/how-it-works" hash={step.id} className="desk-link">
                      <span className="desk-num">{step.n}</span>
                      <span>
                        <strong>{step.title}</strong>
                        <span className="desk-rail">{step.rail}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section-block">
          <p className="kicker">What we publish</p>
          <h2 className="mt-3 max-w-2xl font-display text-section text-navy">
            Three kinds of openings. Nothing filled in.
          </h2>
          <div className="kind-grid mt-8">
            {kinds.map((kind, index) => (
              <article className="kind" key={kind.title}>
                <p className="kicker">0{index + 1}</p>
                <h3>{kind.title}</h3>
                <p>{kind.text}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-block flush">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Team</p>
              <h2 className="mt-3 font-display text-section text-navy">Three people. That is the company.</h2>
            </div>
            <Link to="/team" className="btn btn-secondary">
              Team page
            </Link>
          </div>
          <ul className="roster">
            {team.map((person) => (
              <li key={person.name}>
                <Link to="/team" className="roster-link">
                  <span className="roster-initials" aria-hidden="true">
                    {person.initials}
                  </span>
                  <span className="roster-name">{person.name}</span>
                  <span className="roster-role">{person.role}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <section className="band bg-navy text-ivory">
        <div className="band-inner">
          <div className="max-w-xl">
            <p className="kicker">Board status</p>
            <h2 className="mt-3 font-display text-section text-ivory">The board is not open yet.</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ivory">
              No listings, no samples. The jobs page stays empty until a person has approved one.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">
              Contact
            </Link>
            <Link to="/company" className="btn btn-line">
              Company
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
