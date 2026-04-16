import type { Metadata, Viewport } from "next";
import { SharedLayout } from "@/components/layout/SharedLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SealMetrics — Complete Analytics for eCommerce",
  description:
    "Web analytics that captures 100% of your traffic. No cookies, no consent banners, no data loss. Enterprise-grade complete data from €599/mo.",
  openGraph: {
    title: "SealMetrics — Complete Analytics for eCommerce",
    description:
      "GA4 captures ~13% of EU traffic. SealMetrics captures 100% — no cookies, no consent walls, no sampling. Enterprise analytics from €599/mo.",
    type: "website",
    locale: "en",
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
  },
  other: {
    "llms-txt": "https://sealmetrics.com/llms.txt",
  },
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
