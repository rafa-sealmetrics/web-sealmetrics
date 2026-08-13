import type { Metadata } from "next";
import { JetBrains_Mono, Onest } from "next/font/google";
import { SealMetricsTracker } from "./components/sealmetrics-tracker";
import "./globals.css";

const geistSans = Onest({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sealmetrics-signal.sealmetrics.chatgpt.site"),
  title: "SealMetrics — The analytics of reality",
  description: "Nice dashboard. Check the inputs. Measure eligible aggregate traffic without analytics cookies, then compare reported revenue with your backend.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Nice dashboard. Shame about the inputs it never saw.",
    description: "Consentless analytics for defensible revenue decisions.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SealMetrics — See what GA4 can't" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nice dashboard. Shame about the inputs it never saw.",
    description: "Consentless analytics for defensible revenue decisions.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SealMetricsTracker />
        {children}
      </body>
    </html>
  );
}
