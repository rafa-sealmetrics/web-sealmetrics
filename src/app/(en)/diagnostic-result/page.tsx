import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { DiagnosticResultClient } from "./DiagnosticResultClient";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Diagnostic Results — Sealmetrics",
  description:
    "View your analytics diagnostic result and see how much data your current setup may be missing.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sealmetrics.com/diagnostic-result/" },
  openGraph: {
    title: "Diagnostic Results — Sealmetrics",
    description:
      "View your analytics diagnostic result and see how much data your current setup may be missing.",
    type: "website",
    images: [ogImage("/diagnostic-result/")],
    url: "https://sealmetrics.com/diagnostic-result/",
    siteName: "Sealmetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Diagnostic Results — Sealmetrics",
    description: "View your analytics diagnostic result and see how much data your current setup may be missing.",
    images: [ogImage("/diagnostic-result/")],
  },
};

export default function DiagnosticResultPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Diagnostic Results" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Diagnostic Results", url: "/diagnostic-result" }])} />
      <DiagnosticResultClient />
    </>
  );
}
