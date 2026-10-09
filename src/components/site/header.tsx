import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Mark } from "@/components/site/mark";
import { nav, site, type NavTo } from "@/lib/site";

function Item({ to, label, className }: { to: NavTo; label: string; className: string }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ "data-active": "true" }}
      className={className}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-ivory">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-h-16 items-center gap-2.5 text-ivory no-underline">
          <Mark className="size-5 text-spark" />
          <span className="wordmark">{site.name}</span>
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Item key={item.to} to={item.to} label={item.label} className="nav-link" />
            ))}
          </nav>
          <Link to="/contact" className="btn btn-primary head-cta">
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="site-menu" className="border-t border-white/10 bg-navy px-5 lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Item key={item.to} to={item.to} label={item.label} className="menu-link" />
          ))}
        </nav>
      ) : null}
    </header>
  );
}
