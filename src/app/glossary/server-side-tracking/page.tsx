import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Server-Side Tracking? — SealMetrics Glossary",
  description:
    "Server-side tracking processes analytics events on the server rather than in the browser, avoiding ad blocker blocking and client-side limitations.",
  openGraph: {
    title: "What Is Server-Side Tracking?",
    description: "Server-side tracking processes analytics on the server, avoiding ad blockers and client-side limitations.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/server-side-tracking" },
};

export default function ServerSideTrackingPage() {
  return (
    <article className="pt-40 pb-28 bg-white">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <nav className="flex items-center gap-2 text-[0.8rem] text-text-tertiary mb-10">
          <Link href="/glossary" className="no-underline hover:text-text-primary transition-colors">Glossary</Link>
          <span>/</span>
          <span className="text-text-secondary">Technology</span>
        </nav>
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Server-Side Tracking</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              Data collection method where analytics events are processed on the server rather than in the browser. Avoids client-side blocking by ad blockers and browser privacy features.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Client-side vs. server-side</h2>
          <p>Traditional analytics (GA4, Adobe) rely on client-side JavaScript to capture events. The script runs in the visitor&rsquo;s browser, collects data, and sends it to an external analytics server. This approach is vulnerable to ad blockers (which block the script or the outgoing request) and browser privacy features (which restrict cookie storage).</p>
          <p>Server-side tracking moves the processing to your server. A minimal script captures behavioral signals and sends them to your own domain, where server-side logic processes, enriches, and stores the data. The server handles session management, event processing, and data forwarding — none of which can be blocked by client-side tools.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Combined with first-party collection</h2>
          <p>Server-side tracking is most effective when combined with <Link href="/glossary/first-party-data-collection" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">first-party data collection</Link>. When the entire data path is first-party (your domain) and server-side (your server), the analytics infrastructure is invisible to blocking tools and immune to browser restrictions.</p>
        </div>
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/first-party-data-collection" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">First-Party Data Collection</Link>
            <Link href="/glossary/cookieless-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Cookieless Analytics</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/how-it-works" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">How SealMetrics Works</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
