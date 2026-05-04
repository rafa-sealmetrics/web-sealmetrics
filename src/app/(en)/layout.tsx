import type { Metadata, Viewport } from "next";
import { SharedLayout } from "@/components/layout/SharedLayout";
import { getAlternates } from "@/lib/i18n/navigation";

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
  title: "SealMetrics — Complete Analytics for eCommerce",
  description:
    "Web analytics that captures 100% of your traffic. No cookies, no consent banners, no data loss. Enterprise-grade complete data from €499/mo.",
  openGraph: {
    title: "SealMetrics — Complete Analytics for eCommerce",
    description:
      "GA4 captures ~13% of EU traffic. SealMetrics captures 100% — no cookies, no consent walls, no sampling. Enterprise analytics from €499/mo.",
    url: "https://sealmetrics.com",
    siteName: "SealMetrics",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://sealmetrics.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SealMetrics — Complete Analytics for eCommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "SealMetrics — Complete Analytics for eCommerce",
    description:
      "GA4 captures ~13% of EU traffic. SealMetrics captures 100% — no cookies, no consent walls, no sampling.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com",
    languages: getAlternates("/"),
  },
  other: {
    "llms-txt": "https://sealmetrics.com/llms.txt",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedLayout locale="en">
      {children}
    </SharedLayout>
  );
}
