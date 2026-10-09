import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { listingFields, site } from "@/lib/site";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: `Jobs — ${site.name}` },
      {
        name: "description",
        content:
          "The CareerSparks job board is not live yet. There are no listings. Reviewed jobs, internships, and scholarships will appear here.",
      },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  return (
    <div className="page">
      <PageHeader
        kicker="Jobs"
        title="The board is not open yet."
        lede="Jobs, internships, and scholarships will be written here only after a person reviews them. There are no sample listings."
      />

      <div className="ledger">
        <div className="ledger-cols">
          {listingFields.map((field) => (
            <p key={field} className="kicker">
              {field}
            </p>
          ))}
        </div>
        <p className="ledger-empty">Nothing has been approved.</p>
        <div className="ledger-rules" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="max-w-xl pb-2 text-muted">
          The column names are the fields a future listing will carry. They are not openings. The
          first reviewed post replaces this empty sheet.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp channel
        </a>
        <a className="btn btn-secondary" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </div>
  );
}
