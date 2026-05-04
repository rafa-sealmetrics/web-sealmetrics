import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { DiagnosticResultClient } from "./DiagnosticResultClient";

export const metadata: Metadata = {
  title: "Diagnostic Results — SealMetrics",
  description:
    "View your analytics diagnostic result and see how much data your current setup may be missing.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sealmetrics.com/diagnostic-result" },
  openGraph: {
    title: "Diagnostic Results — SealMetrics",
    description:
      "View your analytics diagnostic result and see how much data your current setup may be missing.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
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
