import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SealMetricsTracker } from "@/components/analytics/SealMetricsTracker";
import type { Locale } from "@/lib/i18n/types";

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

export function SharedLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
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
          {locale === "es" ? "Ir al contenido" : "Skip to content"}
        </a>
        <SealMetricsTracker />
        <Header locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
