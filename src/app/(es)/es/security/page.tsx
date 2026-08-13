import type { Metadata } from "next";
import { SecuritySignal } from "@/components/v4/SecuritySignal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import "@/components/v4/security-signal.css";

export const metadata: Metadata = {
  title: "Visión general de seguridad — SealMetrics",
  description: "Revisa la seguridad de SealMetrics: sin cookies ni IP persistida, TLS 1.2+, AES-256, aislamiento, retención automática y hosting en Dublín.",
  openGraph: { title: "Visión general de seguridad — SealMetrics", description: "Inspecciona la minimización, cifrado, aislamiento, retención y perímetro operativo de Dublín de SealMetrics.", type: "website", images: ["https://sealmetrics.com/og-image.png"], url: "https://sealmetrics.com/es/security/", siteName: "SealMetrics", locale: "es_ES" },
  twitter: { card: "summary_large_image", site: "@sealmetrics", title: "Visión general de seguridad — SealMetrics", description: "Inspecciona la minimización, cifrado, aislamiento, retención y perímetro operativo de Dublín de SealMetrics.", images: ["https://sealmetrics.com/og-image.png"] },
  alternates: { canonical: "https://sealmetrics.com/es/security/", languages: getAlternatesEs("/security") },
};

export default function SecurityPageEs() {
  return <><JsonLd data={breadcrumbSchema([{ name: "Seguridad", url: "/es/security" }])} /><JsonLd data={speakableWebPageSchema({ url: "/es/security", name: "Visión general de seguridad — SealMetrics" })} /><SecuritySignal locale="es" /></>;
}
