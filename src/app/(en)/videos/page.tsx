import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, videoObjectSchema, itemListSchema } from "@/lib/schema";
import { VideoGrid } from "./VideoGrid";

const videosForSchema = [
  {
    name: "SealMetrics Platform Overview",
    description:
      "A complete tour of the SealMetrics dashboard — from traffic overview to AI insights.",
    thumbnailUrl: "/og-image.png",
    uploadDate: "2025-09-01",
    duration: "PT3M24S",
    embedUrl: "https://iframe.mediadelivery.net/embed/609541/e616aab7-d8cf-47d1-b250-517df6a8c593",
    inLanguage: "es",
    url: "/videos",
  },
  {
    name: "Getting Started with SealMetrics",
    description:
      "How to create your account, add your site, and install the 846-byte tracking script in 5 minutes.",
    thumbnailUrl: "/og-image.png",
    uploadDate: "2025-09-15",
    duration: "PT2M15S",
    embedUrl: "https://iframe.mediadelivery.net/embed/609541/c39d3844-8ef3-4362-8579-d71a6b832b0f",
    inLanguage: "es",
    url: "/videos",
  },
];

export const metadata: Metadata = {
  title: "Videos — SealMetrics",
  description:
    "Watch product demos and step-by-step tutorials. See how SealMetrics captures 100% of your traffic without cookies.",
  openGraph: {
    title: "Videos — SealMetrics",
    description:
      "Product demos and tutorials to help you get the most out of SealMetrics.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/videos",
  },
};

export default function VideosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Videos" }]} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Videos", url: "/videos" }])}
      />
      <JsonLd
        data={itemListSchema({
          name: "SealMetrics video library",
          description: "Product demos and tutorials for the SealMetrics analytics platform.",
          url: "/videos",
          items: videosForSchema.map((v, i) => ({
            name: v.name,
            url: `https://sealmetrics.com/videos#${v.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
            position: i + 1,
          })),
        })}
      />
      {videosForSchema.map((v) => (
        <JsonLd key={v.name} data={videoObjectSchema(v)} />
      ))}

      {/* Hero */}
      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <div className="max-w-[640px] mx-auto">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Video Library
            </span>
            <h1 className="headline-hero mb-6">
              See it. Understand it. Start tracking.
            </h1>
            <p className="text-[1.15rem] leading-[1.75] text-text-secondary">
              Product demos and step-by-step tutorials to help you get the
              most out of SealMetrics.
            </p>
          </div>
        </div>
      </section>

      {/* Video sections */}
      <VideoGrid />

      {/* CTA */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="headline-section mb-4">
            Start tracking without cookies today
          </h2>
          <p className="text-[1.05rem] text-text-secondary mb-8 max-w-[480px] mx-auto leading-relaxed">
            No credit card. No cookies. No consent banners. Just clear,
            accurate analytics that respects your visitors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://my.sealmetrics.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Start Now
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-text-primary border border-warm-200 rounded-[4px] no-underline hover:bg-warm-50 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
