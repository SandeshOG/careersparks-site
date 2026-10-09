import { Mark } from "@/components/site/mark";
import { team } from "@/lib/site";

type Person = (typeof team)[number];

export function PersonPlate({ person, index }: { person: Person; index: number }) {
  return (
    <article className="plate">
      <div className="plate-face">
        <span className="plate-index">{String(index + 1).padStart(2, "0")}</span>
        <Mark className="plate-mark" />
        <p className="plate-initials" aria-hidden="true">
          {person.initials}
        </p>
      </div>
      <p className="plate-name">{person.name}</p>
      <p className="kicker mt-2">{person.role}</p>
    </article>
  );
}
