import type { Metadata } from "next";
import { SecuritySignal } from "@/components/v4/SecuritySignal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import "@/components/v4/security-signal.css";

export const metadata: Metadata = {
  title: "Security Overview — SealMetrics",
  description: "Review SealMetrics security: no cookies or persisted IPs, TLS 1.2+, AES-256, account isolation, automatic retention and Dublin hosting.",
  openGraph: { title: "Security Overview — SealMetrics", description: "Inspect the data minimisation, encryption, isolation, retention and Dublin operating boundary behind SealMetrics.", type: "website", images: ["https://sealmetrics.com/og-image.png"], url: "https://sealmetrics.com/security/", siteName: "SealMetrics", locale: "en_US" },
  twitter: { card: "summary_large_image", site: "@sealmetrics", title: "Security Overview — SealMetrics", description: "Inspect the data minimisation, encryption, isolation, retention and Dublin operating boundary behind SealMetrics.", images: ["https://sealmetrics.com/og-image.png"] },
  alternates: { canonical: "https://sealmetrics.com/security/", languages: getAlternates("/security") },
};

export default function SecurityPage() {
  return <><JsonLd data={breadcrumbSchema([{ name: "Security", url: "/security" }])} /><JsonLd data={speakableWebPageSchema({ url: "/security", name: "Security Overview — SealMetrics" })} /><SecuritySignal locale="en" /></>;
}
