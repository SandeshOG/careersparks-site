import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/site/mark";
import { disclaimer, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 text-ivory">
            <Mark className="size-4 text-spark" />
            <span className="font-display text-xl leading-none">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ivory-dim">
            A {site.city} staffing firm and automated job desk. Founded {site.founded}. Bootstrapped.
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="kicker">Pages</p>
          <ul className="mt-3 space-y-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-11 items-center text-ivory no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="kicker">Reach</p>
          <ul className="mt-3 space-y-1">
            <li>
              <a className="inline-flex min-h-11 items-center text-ivory" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center text-ivory"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center text-ivory"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp channel
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="fineprint flex flex-col gap-2 text-sm text-ivory-dim">
          <p>
            © {site.founded} {site.name}. {site.city}, {site.country}.
          </p>
          <p className="max-w-3xl">{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
