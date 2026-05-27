export type OpenPartNumber = 1 | 2 | 3 | 4;

export interface OpenPart {
  number: OpenPartNumber;
  title: string;
  subtitle: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface OpenChapter {
  number: number;
  slug: string;
  title: string;
  titleHtml?: string;
  part: OpenPartNumber;
  eyebrow: string;
  summary: string;
  readMinutes: number;
  status: "draft" | "ready";
  toc: TocItem[];
}

export const openParts: OpenPart[] = [
  { number: 1, title: "Why", subtitle: "Origin and mission" },
  { number: 2, title: "How we measure", subtitle: "Method and architecture" },
  { number: 3, title: "How we operate", subtitle: "Compliance, pricing, customers" },
  { number: 4, title: "Where we go", subtitle: "Future and reference" },
];

export const openChapters: OpenChapter[] = [
  {
    number: 1,
    slug: "why-we-exist",
    title: "Why SealMetrics exists",
    titleHtml: "Why SealMetrics <em>exists</em>",
    part: 1,
    eyebrow: "Manifesto",
    summary:
      "Most enterprise eCommerce companies in Europe optimize advertising investment on top of 13% of their traffic. This is what happens when that gets normalized.",
    readMinutes: 8,
    status: "ready",
    toc: [
      { id: "the-problem", label: "The problem we see" },
      { id: "what-breaks", label: "What breaks in decision-making" },
      { id: "our-position", label: "Our position" },
      { id: "who-we-dont-serve", label: "Who we don't serve" },
    ],
  },
  {
    number: 2,
    slug: "who-we-build-for",
    title: "Who we build for",
    part: 1,
    eyebrow: "Audience",
    summary:
      "Not for everyone. For CMOs and measurement leads inside European eCommerce companies above 10M€ revenue.",
    readMinutes: 4,
    status: "draft",
    toc: [
      { id: "ideal-profile", label: "Ideal customer profile" },
      { id: "the-10m-threshold", label: "Why the 10M€ threshold" },
      { id: "industries", label: "Industries where we fit" },
      { id: "when-we-dont-fit", label: "When we don't fit" },
    ],
  },
  {
    number: 3,
    slug: "what-complete-data-means",
    title: "What complete data means",
    titleHtml: "What <em>complete data</em> means",
    part: 2,
    eyebrow: "Definition",
    summary:
      "The technical difference between what GA4 measures (≈13% in the EU) and what you need to make sound decisions.",
    readMinutes: 7,
    status: "draft",
    toc: [
      { id: "what-ga4-loses", label: "What GA4 loses and why" },
      { id: "sampling-vs-complete", label: "Sampling vs complete measurement" },
      { id: "modeling-vs-measuring", label: "Modeling vs measuring" },
      { id: "the-13-percent", label: "Where the 13% comes from" },
    ],
  },
  {
    number: 4,
    slug: "how-the-pixel-works",
    title: "How the pixel works",
    part: 2,
    eyebrow: "Method",
    summary:
      "No cookies, no fingerprinting, no localStorage. 60+ server-side validation rules and last-click attribution over 100% of events.",
    readMinutes: 10,
    status: "draft",
    toc: [
      { id: "what-it-captures", label: "What the pixel captures" },
      { id: "server-validation", label: "Server-side validation · 60+ rules" },
      { id: "last-click-attribution", label: "Last-click attribution on 100%" },
      { id: "what-it-doesnt-capture", label: "What it doesn't capture by design" },
    ],
  },
  {
    number: 5,
    slug: "architecture-and-performance",
    title: "Architecture and performance",
    titleHtml: "Architecture and <em>performance</em>",
    part: 2,
    eyebrow: "Infrastructure",
    summary:
      "Where the pixel runs, what latency it adds, how it scales. No promises — verifiable numbers.",
    readMinutes: 6,
    status: "ready",
    toc: [
      { id: "where-it-runs", label: "Where the pixel runs" },
      { id: "latency", label: "Latency and client footprint" },
      { id: "scale", label: "Capacity and scaling" },
      { id: "availability", label: "Availability and SLAs" },
      { id: "what-we-dont-measure", label: "What we don't measure" },
    ],
  },
  {
    number: 6,
    slug: "gdpr-by-architecture",
    title: "GDPR by architecture",
    part: 3,
    eyebrow: "Compliance",
    summary:
      "How we meet GDPR, ePrivacy and Schrems II without resorting to creative legal interpretations.",
    readMinutes: 9,
    status: "draft",
    toc: [
      { id: "gdpr-architecture", label: "GDPR by architecture, not by permission" },
      { id: "eprivacy", label: "ePrivacy and the cookie question" },
      { id: "schrems-ii", label: "Schrems II and data transfers" },
      { id: "dpa-tpsr", label: "DPA and TPSR package" },
      { id: "what-we-dont-claim", label: "What we don't claim (ISO/SOC 2)" },
    ],
  },
  {
    number: 7,
    slug: "how-we-price",
    title: "How we price",
    part: 3,
    eyebrow: "Commercial",
    summary:
      "Why Scale+ exists, what it includes, and why we stay a fraction of GA360 or Adobe.",
    readMinutes: 5,
    status: "draft",
    toc: [
      { id: "what-we-charge-for", label: "What we charge for and what we don't" },
      { id: "scale-plus", label: "Why Scale+ exists" },
      { id: "enterprise-compare", label: "Comparing against GA360 and Adobe" },
      { id: "billing-transparency", label: "What you see on the invoice" },
    ],
  },
  {
    number: 8,
    slug: "how-we-work-with-customers",
    title: "How we work with customers",
    part: 3,
    eyebrow: "Operation",
    summary:
      "Onboarding, support, and partners: Product Hackers, 3dids, Ayesa. How we come in and how we stay.",
    readMinutes: 6,
    status: "draft",
    toc: [
      { id: "onboarding", label: "Onboarding in four phases" },
      { id: "support", label: "How we support customers" },
      { id: "partners", label: "Implementation partners" },
      { id: "founder-access", label: "Direct access to the founder" },
    ],
  },
  {
    number: 9,
    slug: "what-we-wont-do",
    title: "What we won't do",
    titleHtml: "What we <em>won't</em> do",
    part: 3,
    eyebrow: "Limits",
    summary:
      "No multi-touch attribution. No session reconstruction. No individual identification. Why this is a position, not a limitation.",
    readMinutes: 6,
    status: "draft",
    toc: [
      { id: "no-multi-touch", label: "We won't do multi-touch attribution" },
      { id: "no-sessions", label: "We won't reconstruct sessions" },
      { id: "no-individuals", label: "We won't identify individuals" },
      { id: "no-fingerprint", label: "We won't fingerprint" },
      { id: "why", label: "Why this is a position" },
    ],
  },
  {
    number: 10,
    slug: "where-were-going",
    title: "Where we're going",
    part: 4,
    eyebrow: "Roadmap",
    summary:
      "LENS AI, native MCP, and the direction we're betting on for the next 18 months.",
    readMinutes: 5,
    status: "draft",
    toc: [
      { id: "lens-ai", label: "LENS AI" },
      { id: "mcp", label: "Native MCP server" },
      { id: "next-18-months", label: "Next 18 months" },
      { id: "what-wont-ship", label: "What we won't ship" },
    ],
  },
  {
    number: 11,
    slug: "glossary",
    title: "Glossary",
    part: 4,
    eyebrow: "Reference",
    summary:
      "Canonical definitions of the terms used throughout Open.",
    readMinutes: 4,
    status: "draft",
    toc: [
      { id: "method", label: "Method and measurement" },
      { id: "compliance", label: "Legal compliance" },
      { id: "architecture", label: "Technical architecture" },
      { id: "commercial", label: "Commercial vocabulary" },
    ],
  },
];

export function getChapterBySlug(slug: string): OpenChapter | undefined {
  return openChapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug: string): {
  prev?: OpenChapter;
  next?: OpenChapter;
} {
  const idx = openChapters.findIndex((c) => c.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? openChapters[idx - 1] : undefined,
    next: idx < openChapters.length - 1 ? openChapters[idx + 1] : undefined,
  };
}

export function chaptersByPart(part: OpenPartNumber): OpenChapter[] {
  return openChapters.filter((c) => c.part === part);
}

export const OPEN_BASE_PATH = "/open";
export const OPEN_TOTAL_MINUTES = openChapters.reduce(
  (sum, c) => sum + c.readMinutes,
  0,
);
