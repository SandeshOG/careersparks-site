import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="kicker">404</p>
      <h1 className="mt-3 max-w-xl font-display text-title text-navy">This page is not on the site.</h1>
      <p className="mt-4 max-w-md text-muted">The board, the company, and contact are still here.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </div>
  );
}
