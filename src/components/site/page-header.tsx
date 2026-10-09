export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="kicker">{kicker}</p>
      <h1 className="mt-3 font-display text-title text-navy">{title}</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">{lede}</p>
    </header>
  );
}
