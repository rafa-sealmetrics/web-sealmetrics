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
        logo: `${SITE_URL}/logos/logo-sealmetrics-negro.png`,
        description:
          "Cookieless web analytics that captures 100% of your traffic. GDPR compliant by design.",
        foundingDate: "2020",
        address: { "@type": "PostalAddress", addressCountry: "ES" },
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
    description:
      "Cookieless web analytics platform that captures 100% of website traffic without cookies or consent banners.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  };
}

export function articleSchema(props: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    datePublished: props.datePublished,
    dateModified: props.datePublished,
    url: `${SITE_URL}${props.url}`,
    author: { "@type": "Organization", name: ORG_NAME },
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: props.name,
    description: props.description,
    url: `${SITE_URL}${props.url}`,
    about: {
      "@type": "SoftwareApplication",
      name: ORG_NAME,
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
    brand: { "@type": "Brand", name: ORG_NAME },
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      description: plan.description,
    })),
  };
}
