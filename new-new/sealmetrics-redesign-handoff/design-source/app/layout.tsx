import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "sealmetrics.com";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "SealMetrics — The analytics of reality",
    description: "Nice dashboard. Shame about the missing half. Measure every eCommerce visit and sale without cookies or modeled fill-ins.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Nice dashboard. Shame about the missing half.",
      description: "SealMetrics — the analytics of reality.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "SealMetrics — See what GA4 can't" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nice dashboard. Shame about the missing half.",
      description: "SealMetrics — the analytics of reality.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
