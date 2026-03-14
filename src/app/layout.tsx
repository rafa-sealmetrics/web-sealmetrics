import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SealMetricsTracker } from "@/components/analytics/SealMetricsTracker";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="llms-txt" href="https://sealmetrics.com/llms.txt" />
        {/* Sealmetrics Analytics */}
        <script
          async
          src="https://pixel-pre.sealmetrics.com/t.js?id=sealmetrics2"
        />
        {/* End Sealmetrics Analytics */}
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SealMetricsTracker />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
