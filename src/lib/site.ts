export const site = {
  name: "CareerSparks",
  url: "https://careersparksco.in",
  city: "Nagpur",
  country: "India",
  founded: "2026",
  email: "founders@careersparksco.in",
  instagram: "https://www.instagram.com/careersparks.hub",
  instagramHandle: "careersparks.hub",
  whatsapp: "https://whatsapp.com/channel/0029Vb88LwBInlqT5GpgoQ04",
} as const;

export const disclaimer =
  "CareerSparks at careersparksco.in is an independent company in Nagpur. It is not affiliated with any other CareerSpark brand.";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/jobs", label: "Jobs" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/company", label: "Company" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export type NavTo = (typeof nav)[number]["to"];

export const pipeline = [
  {
    id: "find",
    n: "01",
    title: "Find",
    rail: "Public posts in.",
    summary: "Automation ingests public posts about jobs, internships, and scholarships.",
    detail:
      "The desk looks for openings that are already public. Posts come in through automation. CareerSparks does not invent roles, and it does not claim a private feed of employers.",
  },
  {
    id: "parse",
    n: "02",
    title: "Parse",
    rail: "Claude drafts it.",
    summary:
      "Claude reads the role, city, pay or stipend, and eligibility, drops duplicates, and drafts the listing. First-party Claude API only.",
    detail:
      "A first-party Claude API reads each post for four things: the role, the city, the pay or stipend, and the eligibility. Duplicate posts are dropped. Claude drafts the listing. The draft is not published.",
  },
  {
    id: "review",
    n: "03",
    title: "Review",
    rail: "A person checks.",
    summary: "A person checks the draft. Nothing goes live without that review.",
    detail:
      "A person reads the draft against the source. If it is unclear, duplicated, or not ready, it stays off the board. Human review is the gate, not a footnote.",
  },
  {
    id: "post",
    n: "04",
    title: "Post",
    rail: "Site and WhatsApp.",
    summary: "Approved listings go on this site and on the WhatsApp channel.",
    detail:
      "After review, a listing is published on this website and on the CareerSparks WhatsApp channel. The public board has not opened yet, so there is nothing to read there today.",
  },
] as const;

export const kinds = [
  {
    title: "Jobs",
    text: "Roles already announced in public posts, with the city and pay when the source states them.",
  },
  {
    title: "Internships",
    text: "Openings with a stipend or a stated term, written from the post rather than filled in.",
  },
  {
    title: "Scholarships",
    text: "Awards whose eligibility can be read from the source, then checked by a person.",
  },
] as const;

export const team = [
  { initials: "TNS", name: "Tejas Naresh Shrirao", role: "Founder" },
  { initials: "SL", name: "Sandesh Lanjewar", role: "Software" },
  { initials: "D", name: "Dhariya", role: "Video Editor" },
] as const;

export const listingFields = ["Role", "City", "Pay or stipend", "Eligibility"] as const;
