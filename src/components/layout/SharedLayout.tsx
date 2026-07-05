import { Onest, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar, AnnouncementBarOffset } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { SealMetricsTracker } from "@/components/analytics/SealMetricsTracker";
import { ChatWidget } from "@/components/homepage/ChatWidget";
import type { Locale } from "@/lib/i18n/types";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
      className={`${onest.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="llms-txt" href="https://sealmetrics.com/llms.txt" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          {locale === "es" ? "Ir al contenido" : "Skip to content"}
        </a>
        <SealMetricsTracker />
        <AnnouncementBarOffset />
        <AnnouncementBar />
        <Header locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
        <ChatWidget />
      </body>
    </html>
  );
}
