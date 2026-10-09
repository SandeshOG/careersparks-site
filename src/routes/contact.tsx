import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      {
        name: "description",
        content:
          "Write to CareerSparks at founders@careersparksco.in, on Instagram @careersparks.hub, or on the WhatsApp channel. Nagpur only.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
    note: "The founders read this address.",
  },
  {
    label: "Instagram",
    value: `@${site.instagramHandle}`,
    href: site.instagram,
    external: true,
    note: "careersparks.hub",
  },
  {
    label: "WhatsApp",
    value: "Channel",
    href: site.whatsapp,
    external: true,
    note: "Listings will be posted here when they pass review.",
  },
] as const;

function ContactPage() {
  return (
    <div className="page">
      <PageHeader
        kicker={`${site.city}, ${site.country}`}
        title="Write to the founders."
        lede="Email, Instagram, and the WhatsApp channel. No phone number and no street address are published."
      />

      <ul className="mt-12 border-t border-line">
        {channels.map((channel) => (
          <li key={channel.label} className="border-b border-line">
            <a
              href={channel.href}
              className="dir-link"
              {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="kicker">{channel.label}</span>
              <span className="dir-value">{channel.value}</span>
              <span className="text-muted">{channel.note}</span>
              <ArrowUpRight className="size-5 shrink-0 text-navy" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
