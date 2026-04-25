import type { Metadata, Viewport } from "next";
import { SharedLayout } from "@/components/layout/SharedLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0C" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sealmetrics.com"),
  title: "SealMetrics — Analítica Completa para eCommerce",
  description:
    "Analítica web que captura el 100% de tu tráfico. Sin cookies, sin banners de consentimiento, sin pérdida de datos. Datos completos desde 499 EUR/mes.",
  openGraph: {
    title: "SealMetrics — Analítica Completa para eCommerce",
    description:
      "GA4 captura ~13% del tráfico europeo. SealMetrics captura el 100% — sin cookies, sin muros de consentimiento, sin muestreo.",
    url: "https://sealmetrics.com/es",
    siteName: "SealMetrics",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "https://sealmetrics.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SealMetrics — Analítica Completa para eCommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "SealMetrics — Analítica Completa para eCommerce",
    description:
      "GA4 captura ~13% del tráfico europeo. SealMetrics captura el 100% — sin cookies, sin muros de consentimiento.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logos/logo-sealmetrics-negro.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/logos/logo-sealmetrics-negro.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayoutEs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedLayout locale="es">
      {children}
    </SharedLayout>
  );
}
