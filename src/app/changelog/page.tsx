import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Changelog — SealMetrics",
  description:
    "Product updates and new features from SealMetrics. See what we have shipped recently.",
  openGraph: {
    title: "Changelog — SealMetrics",
    description: "Product updates and new features from SealMetrics.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/changelog",
  },
};

const entries = [
  {
    date: "February 2026",
    updates: [
      {
        title: "Agent Analytics: AI traffic identification",
        type: "Coming Soon",
        desc: "Identify and track visits from GPT, Claude, Perplexity, and Google AI Overviews as distinct sessions. See which pages AI agents visit, how long they stay, and whether AI-referred visitors convert.",
      },
      {
        title: "LENS AI: natural language queries",
        type: "New",
        desc: "Ask business questions in plain language and get answers from your complete data. LENS now supports conversational queries alongside its 60+ automated anomaly detection rules.",
      },
    ],
  },
  {
    date: "January 2026",
    updates: [
      {
        title: "Revenue Attribution report redesign",
        type: "Improved",
        desc: "Redesigned revenue attribution interface with clearer multi-touch journey visualization. See channel, campaign, and creative-level contribution to revenue with one-click drill-down.",
      },
      {
        title: "Webhook event forwarding",
        type: "New",
        desc: "Forward real-time analytics events to your own infrastructure via webhooks. Configure event filters and transformation rules in the dashboard.",
      },
      {
        title: "Dashboard performance improvements",
        type: "Improved",
        desc: "Reduced dashboard load times by 40% for accounts with more than 5M monthly events. Report rendering is now near-instant for standard date ranges.",
      },
    ],
  },
  {
    date: "December 2025",
    updates: [
      {
        title: "LENS AI: 12 new anomaly detection rules",
        type: "New",
        desc: "Added detection rules for sudden conversion rate drops, traffic source shifts, page load time degradation, and unusual geographic traffic patterns. Total rule count: 60+.",
      },
      {
        title: "Shopify integration v2",
        type: "Improved",
        desc: "Updated Shopify integration with support for checkout extensibility, subscription revenue tracking, and automatic product catalog synchronization.",
      },
    ],
  },
  {
    date: "November 2025",
    updates: [
      {
        title: "Custom report builder",
        type: "New",
        desc: "Build custom reports combining any metrics and dimensions. Save, share with team members, and schedule automated email delivery.",
      },
      {
        title: "Data retention controls",
        type: "New",
        desc: "Configure data retention periods per account. Set automatic data deletion schedules to match your organization's data governance policies.",
      },
    ],
  },
  {
    date: "October 2025",
    updates: [
      {
        title: "SealMetrics launch",
        type: "Launch",
        desc: "First public release of SealMetrics. Cookieless analytics with 100% traffic capture, 9 report types, LENS AI anomaly detection, and multi-touch revenue attribution. Starting at €599/month.",
      },
    ],
  },
];

function typeBadgeColor(type: string): string {
  switch (type) {
    case "New":
      return "text-green-muted";
    case "Improved":
      return "text-blue-accent";
    case "Launch":
      return "text-text-primary";
    default:
      return "text-text-tertiary";
  }
}

export default function ChangelogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Changelog" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Changelog", url: "/changelog" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Changelog
            </span>
            <h1 className="headline-hero mb-8">What we have shipped.</h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Product updates, new features, and improvements. We ship
              continuously and document everything.
            </p>
          </div>
        </div>
      </section>

      {/* Entries */}
      <section className="pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          {entries.map((entry) => (
            <div key={entry.date} className="mb-16 last:mb-0">
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-8 pb-3 border-b border-warm-200">
                {entry.date}
              </h2>
              <div className="space-y-8">
                {entry.updates.map((update) => (
                  <div key={update.title}>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className={`text-[0.7rem] font-medium uppercase tracking-wider ${typeBadgeColor(update.type)}`}
                      >
                        {update.type}
                      </span>
                      <h3 className="font-serif text-[1.1rem] font-medium text-text-primary">
                        {update.title}
                      </h3>
                    </div>
                    <p className="text-[0.9rem] leading-[1.7] text-text-secondary ml-0">
                      {update.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-warm-100 text-center">
          <p className="text-[0.9rem] text-text-secondary mb-4">
            Want to see these features in action?
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-7 py-3 text-[0.9rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            Or explore the{" "}
            <Link href="/product" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">full product</Link>
            {" "}and{" "}
            <Link href="/pricing" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">pricing</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
