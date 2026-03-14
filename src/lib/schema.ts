const SITE_URL = "https://sealmetrics.com";
const ORG_NAME = "SealMetrics";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: ORG_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
          width: 160,
          height: 32,
        },
        description:
          "Cookieless web analytics platform that captures 100% of website traffic. GDPR-compliant alternative to Google Analytics without cookie consent banners.",
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
        ],
        knowsAbout: [
          "Web Analytics",
          "GDPR Compliance",
          "Cookieless Tracking",
          "Privacy-First Analytics",
          "eCommerce Analytics",
        ],
      },
      {
        "@type": "WebSite",
        name: ORG_NAME,
        url: SITE_URL,
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
      })),
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
      "Cookieless web analytics platform that captures 100% of website traffic without cookies or consent banners. GDPR-compliant alternative to Google Analytics.",
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
        price: "599",
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "5M human events/month",
        url: `${SITE_URL}/pricing`,
      },
      {
        "@type": "Offer",
        name: "Scale",
        price: "1079",
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "15M human events/month",
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
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    url: `${SITE_URL}${props.url}`,
    image: props.image || `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
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
  };
}

export function comparisonPageSchema(props: {
  name: string;
  description: string;
  url: string;
  competitor?: { name: string; url: string };
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    ...(props.dateModified ? { dateModified: props.dateModified } : {}),
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

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function pricingSchema(
  plans: { name: string; price: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SealMetrics Analytics",
    description:
      "Cookieless web analytics with 100% data capture, GDPR compliant by design.",
    image: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
    brand: { "@type": "Brand", name: ORG_NAME },
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      description: plan.description,
      url: `${SITE_URL}/pricing`,
    })),
  };
}
