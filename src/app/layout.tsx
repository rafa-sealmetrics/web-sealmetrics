import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SealMetricsTracker } from "@/components/analytics/SealMetricsTracker";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
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
  title: "SealMetrics — Cookieless Analytics for Ecommerce",
  description:
    "Cookieless web analytics that captures 100% of your traffic. No consent banners, no data loss, full GDPR compliance. Enterprise-grade analytics from €599/mo.",
  openGraph: {
    title: "SealMetrics — Cookieless Analytics for Ecommerce",
    description:
      "GA4 captures ~13% of EU traffic. SealMetrics captures 100% — no cookies, no consent walls, no sampling. Enterprise analytics from €599/mo.",
    type: "website",
    images: [
      {
        url: "https://sealmetrics.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SealMetrics — Cookieless Analytics for Ecommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "SealMetrics — Cookieless Analytics for Ecommerce",
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
      className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
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
