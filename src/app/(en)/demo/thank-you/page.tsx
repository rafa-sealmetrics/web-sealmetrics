import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Thank You — SealMetrics",
  description:
    "Your demo request has been received. Register now so we can prepare your demo with real data.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Book a Demo", href: "/demo" },
          { label: "Thank You" },
        ]}
      />
      <section className="pt-12 pb-28 bg-white min-h-[70vh]">
        <div className="max-w-[640px] mx-auto px-5 sm:px-8 text-center">
          {/* Confirmation */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-green-muted/10 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5BBFA0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="headline-section mb-4">
            Your demo request is confirmed
          </h1>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
            We will reach out within one business day to schedule your
            personalized 30-minute walkthrough.
          </p>

          {/* Register CTA */}
          <div className="p-8 sm:p-10 bg-warm-white border border-warm-100 rounded-[4px] text-left mb-10">
            <h2 className="font-serif text-[1.3rem] text-text-primary mb-3">
              Want to see your real data from day one?
            </h2>
            <p className="text-[0.9rem] text-text-secondary leading-relaxed mb-6">
              Create your SealMetrics account now and we will set up the demo
              with your actual traffic data. This way, during the call you
              will see your own visitors, your own conversions, and the exact
              gap between what GA4 reports and what is really happening.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://my.sealmetrics.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
              >
                Create Free Account
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[0.95rem] font-medium text-text-primary border border-warm-200 rounded-[4px] no-underline hover:bg-warm-50 transition-colors"
              >
                Back to Homepage
              </Link>
            </div>
            <p className="text-[0.75rem] text-text-tertiary mt-4">
              Free to set up. 5-minute installation. No credit card required.
            </p>
          </div>

          {/* What happens next */}
          <div className="text-left">
            <h3 className="font-serif text-[1.1rem] text-text-primary mb-4">
              What happens next
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "We confirm your demo slot",
                  desc: "Within one business day, you will receive an email with available times.",
                },
                {
                  step: "2",
                  title: "We prepare your data",
                  desc: "If you register now, we will install SealMetrics on your site and collect real data before the call.",
                },
                {
                  step: "3",
                  title: "30-minute live walkthrough",
                  desc: "Side-by-side comparison of GA4 vs SealMetrics using your actual traffic. No slides, just data.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 pb-4 border-b border-warm-100 last:border-0"
                >
                  <span className="font-mono text-[0.8rem] font-medium text-text-tertiary mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-[0.85rem] font-medium text-text-primary">
                      {item.title}
                    </p>
                    <p className="text-[0.8rem] text-text-secondary mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
