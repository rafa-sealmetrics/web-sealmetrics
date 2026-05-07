import { PRICING } from "./content/pricing";
import blogModifiedRaw from "./content/blog-modified.json";

const BLOG_MODIFIED: Record<string, string> = blogModifiedRaw;

const SITE_URL = "https://sealmetrics.com";
const ORG_NAME = "SealMetrics";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: ORG_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
          width: 160,
          height: 32,
        },
        description:
          "Complete analytics for eCommerce: captures 100% of traffic, powers revenue decisions with LENS AI, and is GDPR-compliant by architecture. Enterprise-grade alternative to GA360, Adobe Analytics and Piwik PRO.",
        foundingDate: "2020",
        founders: [
          {
            "@type": "Person",
            name: "Rafa Jimenez",
            jobTitle: "Founder",
            url: `${SITE_URL}/about`,
          },
        ],
        address: { "@type": "PostalAddress", addressCountry: "ES" },
        sameAs: [
          "https://www.linkedin.com/company/sealmetrics",
          "https://x.com/sealmetrics",
          "https://www.youtube.com/@sealmetrics",
          "https://www.reddit.com/user/sealmetrics",
          "https://www.g2.com/products/sealmetrics",
          "https://www.capterra.com/p/sealmetrics",
          "https://www.crunchbase.com/organization/sealmetrics",
          "https://www.producthunt.com/products/sealmetrics",
          "https://github.com/sealmetrics",
        ],
        knowsAbout: [
          "Web Analytics",
          "GDPR Compliance",
          "Cookieless Tracking",
          "Privacy-First Analytics",
          "eCommerce Analytics",
          "Server-Side Tracking",
          "Revenue Attribution",
          "Schrems II Compliance",
          "MCP Protocol",
          "AI Agent Analytics",
        ],
        areaServed: [
          { "@type": "Place", name: "European Union" },
          { "@type": "Place", name: "United Kingdom" },
          { "@type": "Place", name: "Spain" },
          { "@type": "Place", name: "Germany" },
          { "@type": "Place", name: "France" },
          { "@type": "Place", name: "Italy" },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            url: `${SITE_URL}/demo`,
            availableLanguage: ["English", "Spanish"],
            areaServed: "EU",
          },
          {
            "@type": "ContactPoint",
            contactType: "technical support",
            url: `${SITE_URL}/security`,
            availableLanguage: ["English", "Spanish"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: ORG_NAME,
        url: SITE_URL,
        inLanguage: ["en", "es"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function faqPageSchema(items: { question: string; answer: string }[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { url: `${SITE_URL}${pageUrl}` } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
  explicitLocale?: "en" | "es"
) {
  const inferredLocale: "en" | "es" =
    explicitLocale ??
    (items.some((i) => i.url.startsWith("/es/") || i.url === "/es")
      ? "es"
      : "en");
  const rootLabel = inferredLocale === "es" ? "Inicio" : "Home";
  const rootUrl = inferredLocale === "es" ? `${SITE_URL}/es` : SITE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: rootLabel, item: rootUrl },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    ],
  };
}

export function verticalSoftwareApplicationSchema(props: {
  vertical: string;
  audienceType: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${ORG_NAME} for ${props.vertical}`,
    applicationCategory: "AnalyticsApplication",
    applicationSubCategory: `Analytics for ${props.vertical}`,
    operatingSystem: "Web",
    url: `${SITE_URL}${props.url}`,
    image: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
    description: props.description,
    audience: {
      "@type": "BusinessAudience",
      audienceType: props.audienceType,
      name: `${props.vertical} teams in the European Union`,
    },
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    featureList: [
      `Cookieless analytics for ${props.vertical}`,
      "100% traffic capture (no consent gap)",
      "GDPR-compliant by architecture",
      "Last-click revenue attribution on complete data",
      "EU-hosted in Dublin, Ireland",
    ],
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: ORG_NAME,
    applicationCategory: "AnalyticsApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    image: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
    description:
      "Enterprise analytics for eCommerce. Captures 100% of traffic, powers revenue decisions with LENS AI, and is GDPR-compliant by architecture. Alternative to GA360 and Adobe Analytics.",
    featureList: [
      "Cookieless tracking (no consent banner required)",
      "100% traffic data capture",
      "GDPR/ePrivacy compliant by design",
      "Revenue attribution",
      "LENS AI anomaly detection",
      "AI Agent Analytics",
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Growth",
        price: String(PRICING.growth.monthly),
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: `${PRICING.growth.eventsMillions}M human events/month`,
        url: `${SITE_URL}/pricing`,
      },
      {
        "@type": "Offer",
        name: "Scale",
        price: String(PRICING.scale.monthly),
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: `${PRICING.scale.eventsMillions}M human events/month`,
        url: `${SITE_URL}/pricing`,
      },
    ],
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
  };
}

export function articleSchema(props: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  category?: string;
  image?: string;
  author?: { name: string; url?: string; jobTitle?: string };
}) {
  const blogSlugMatch = props.url.match(/^\/(?:es\/)?blog\/([^/]+)/);
  const autoModified = blogSlugMatch ? BLOG_MODIFIED[blogSlugMatch[1]] : undefined;
  const autoBlogOg = blogSlugMatch ? `${SITE_URL}/og/blog/${blogSlugMatch[1]}.png` : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    datePublished: props.datePublished,
    dateModified: props.dateModified || autoModified || props.datePublished,
    url: `${SITE_URL}${props.url}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${props.url}`,
    },
    image: props.image || autoBlogOg || `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
    author: props.author
      ? {
          "@type": "Person",
          name: props.author.name,
          ...(props.author.url
            ? { url: `${SITE_URL}${props.author.url}` }
            : {}),
          ...(props.author.jobTitle
            ? { jobTitle: props.author.jobTitle }
            : {}),
          ...(props.author.name.toLowerCase().includes("rafa")
            ? {
                sameAs: ["https://www.linkedin.com/in/rafajimenez/"],
                worksFor: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
              }
            : {}),
        }
      : { "@type": "Organization", name: ORG_NAME },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
      },
    },
    ...(props.category ? { articleSection: props.category } : {}),
  };
}

export function definedTermSchema(props: {
  name: string;
  description: string;
  url: string;
  related?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Web Analytics Glossary",
      url: `${SITE_URL}/glossary`,
    },
    ...(props.related?.length
      ? {
          subjectOf: props.related.map((r) => ({
            "@type": "DefinedTerm",
            name: r.name,
            url: `${SITE_URL}${r.url}`,
          })),
        }
      : {}),
  };
}

export function comparisonPageSchema(props: {
  name: string;
  description: string;
  url: string;
  competitor?: { name: string; url: string };
  datePublished?: string;
  dateModified?: string;
  author?: { name: string; url: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    ...(props.datePublished ? { datePublished: props.datePublished } : {}),
    ...(props.dateModified ? { dateModified: props.dateModified } : {}),
    ...(props.author
      ? {
          author: {
            "@type": "Person",
            name: props.author.name,
            url: `${SITE_URL}${props.author.url}`,
          },
          reviewedBy: {
            "@type": "Person",
            name: props.author.name,
            url: `${SITE_URL}${props.author.url}`,
          },
        }
      : {}),
    about: [
      {
        "@type": "SoftwareApplication",
        name: ORG_NAME,
        applicationCategory: "AnalyticsApplication",
        url: SITE_URL,
      },
      ...(props.competitor
        ? [
            {
              "@type": "SoftwareApplication",
              name: props.competitor.name,
              applicationCategory: "AnalyticsApplication",
              url: props.competitor.url,
            },
          ]
        : []),
    ],
    mainEntity: {
      "@type": "Table",
      about: `Feature-by-feature comparison of ${ORG_NAME} vs ${props.competitor?.name ?? "competing analytics platforms"}`,
    },
  };
}

export function collectionPageSchema(props: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
  };
}

export function speakableWebPageSchema(props: {
  url: string;
  name: string;
  selectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: props.name,
    url: `${SITE_URL}${props.url}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: props.selectors ?? [
        "[data-speakable]",
        ".tldr",
        "h1",
      ],
    },
  };
}

export function itemListSchema(props: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url?: string; position?: number }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    numberOfItems: props.items.length,
    itemListElement: props.items.map((item, i) => ({
      "@type": "ListItem",
      position: item.position || i + 1,
      name: item.name,
      ...(item.url ? { url: item.url } : {}),
    })),
  };
}

export function pricingSchema(
  plans: { name: string; price: string; description: string }[],
  opts?: { locale?: "en" | "es" }
) {
  const path = opts?.locale === "es" ? "/es/pricing" : "/pricing";
  // Range must span the full visible price spectrum across both billing modes.
  // Annual prices are passed in via `plans`; monthly comes from PRICING (the
  // "Custom" Enterprise plan returns NaN — filter it out).
  const planPrices = plans.map((p) => Number(p.price)).filter((n) => !Number.isNaN(n));
  const monthlyPrices = [PRICING.growth.monthly, PRICING.scale.monthly];
  const allPrices = [...planPrices, ...monthlyPrices];
  const lowPrice = allPrices.length ? Math.min(...allPrices).toString() : undefined;
  const highPrice = allPrices.length ? Math.max(...allPrices).toString() : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SealMetrics Analytics",
    description:
      "Cookieless web analytics with 100% data capture, GDPR-compliant by architecture. Enterprise alternative to GA360 and Adobe Analytics.",
    image: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
    brand: { "@type": "Brand", name: ORG_NAME },
    category: "SaaS / Web Analytics",
    offers: {
      "@type": "AggregateOffer",
      ...(lowPrice ? { lowPrice } : {}),
      ...(highPrice ? { highPrice } : {}),
      priceCurrency: "EUR",
      offerCount: plans.length,
      offers: plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price,
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: plan.description,
        url: `${SITE_URL}${path}`,
        category: "SaaS / Analytics",
        eligibleRegion: [
          { "@type": "Place", name: "European Union" },
          { "@type": "Place", name: "United Kingdom" },
        ],
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: plan.price,
          priceCurrency: "EUR",
          unitCode: "MON",
          unitText: "Per month, billed annually",
          billingIncrement: 1,
        },
        seller: {
          "@type": "Organization",
          name: ORG_NAME,
          url: SITE_URL,
        },
      })),
    },
  };
}

export function servicePageSchema(props: {
  name: string;
  description: string;
  url: string;
  audience?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    ...(props.audience
      ? { audience: { "@type": "Audience", audienceType: props.audience } }
      : {}),
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Statistic claim — replacement for the deprecated ClaimReview type
 * (Google retired ClaimReview rich results in June 2025). Emits a
 * `CreativeWork` whose body is the claim text, with `isBasedOn` pointing
 * to the verifiable source and an optional `QuantitativeValue` for the
 * numeric statistic. Citable by AI engines without the deprecated marker.
 */
export function statisticClaimSchema(props: {
  text: string;
  source: string;
  sourceAuthor: string;
  sourceDate: string;
  url: string;
  numericValue?: number;
  unit?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: props.text,
    text: props.text,
    url: `${SITE_URL}${props.url}`,
    isBasedOn: {
      "@type": "CreativeWork",
      name: props.source,
      author: { "@type": "Organization", name: props.sourceAuthor },
      datePublished: props.sourceDate,
    },
    publisher: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
    ...(props.numericValue !== undefined
      ? {
          mainEntity: {
            "@type": "QuantitativeValue",
            value: props.numericValue,
            ...(props.unit ? { unitText: props.unit } : {}),
          },
        }
      : {}),
  };
}

export function reviewSchema(props: {
  reviewBody: string;
  authorName: string;
  authorRole?: string;
  ratingValue?: number;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: props.reviewBody,
    author: {
      "@type": "Organization",
      name: props.authorName,
      ...(props.authorRole ? { description: props.authorRole } : {}),
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: ORG_NAME,
      applicationCategory: "AnalyticsApplication",
      url: SITE_URL,
    },
    ...(props.datePublished ? { datePublished: props.datePublished } : {}),
    reviewRating: {
      "@type": "Rating",
      ratingValue: props.ratingValue ?? 5,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/** Quotation — marks a testimonial quote as a structured entity citable by AI */
export function quotationSchema(props: {
  text: string;
  spokenBy: string;
  spokenByRole?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Quotation",
    text: props.text,
    spokenByCharacter: {
      "@type": "Person",
      name: props.spokenBy,
      ...(props.spokenByRole ? { jobTitle: props.spokenByRole } : {}),
    },
    url: `${SITE_URL}${props.url}`,
    citation: {
      "@type": "CreativeWork",
      author: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
    },
  };
}

export function videoObjectSchema(props: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string; // ISO 8601, e.g. "PT3M24S"
  embedUrl?: string;
  contentUrl?: string;
  inLanguage?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: props.name,
    description: props.description,
    thumbnailUrl: props.thumbnailUrl.startsWith("http")
      ? props.thumbnailUrl
      : `${SITE_URL}${props.thumbnailUrl}`,
    uploadDate: props.uploadDate,
    duration: props.duration,
    ...(props.embedUrl ? { embedUrl: props.embedUrl } : {}),
    ...(props.contentUrl ? { contentUrl: props.contentUrl } : {}),
    ...(props.inLanguage ? { inLanguage: props.inLanguage } : {}),
    url: `${SITE_URL}${props.url}`,
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
      },
    },
  };
}

/**
 * Lightweight Person schema for case-study quote sources. Pairs with
 * Quotation.spokenByCharacter to give AI engines a citable Person URI
 * for named customers (Toni Andújar, Eduardo Martin), without claiming
 * employment or sameAs we cannot verify.
 */
export function casePersonSchema(props: {
  name: string;
  jobTitle: string;
  worksForName: string;
  worksForUrl: string;
  caseUrl: string;
  caseName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: props.name,
    jobTitle: props.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: props.worksForName,
      url: props.worksForUrl,
    },
    url: `${SITE_URL}${props.caseUrl}`,
    subjectOf: {
      "@type": "CreativeWork",
      name: props.caseName,
      url: `${SITE_URL}${props.caseUrl}`,
    },
  };
}

export function personSchema(props: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  knowsAbout?: string[];
  sameAs?: string[];
  alumniOf?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: props.name,
    jobTitle: props.jobTitle,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    ...(props.image ? { image: `${SITE_URL}${props.image}` } : {}),
    ...(props.knowsAbout ? { knowsAbout: props.knowsAbout } : {}),
    ...(props.sameAs ? { sameAs: props.sameAs } : {}),
    ...(props.alumniOf
      ? {
          alumniOf: props.alumniOf.map((a) => ({
            "@type": "Organization",
            name: a,
          })),
        }
      : {}),
    worksFor: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
  };
}

export function webApplicationSchema(props: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    applicationCategory: "AnalyticsApplication",
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
}
