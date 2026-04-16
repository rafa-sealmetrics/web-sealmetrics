import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { VideoGrid } from "./VideoGrid";

export const metadata: Metadata = {
  title: "Videos — SealMetrics",
  description:
    "Watch product demos and step-by-step tutorials. See how SealMetrics captures 100% of your traffic without cookies.",
  openGraph: {
    title: "Videos — SealMetrics",
    description:
      "Product demos and tutorials to help you get the most out of SealMetrics.",
    type: "website",
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
