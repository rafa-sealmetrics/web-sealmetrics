import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — SealMetrics",
  description:
    "Understand how SealMetrics captures 100% of your traffic without cookies. First-party server-side collection explained simply.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              How It Works
            </span>
            <h1 className="headline-hero mb-8">
              A different approach to measurement.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Traditional analytics lose most of your data before it is even
              recorded. SealMetrics was built from scratch to solve this
              problem&nbsp;&mdash; without cookies, without consent dependency,
              and without compromising privacy.
            </p>
          </div>
        </div>
      </section>

      {/* The problem visual */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[800px]">
            <h2 className="headline-section mb-8">
              Where your data disappears
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
              Your website has real visitors. But between consent banners, ad
              blockers, cookie expiration, and browser restrictions, only a
              fraction of them are recorded by traditional tools.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "70,000",
                  label: "Real visitors land on your site",
                  width: "100%",
                  color: "bg-text-primary",
                },
                {
                  step: "45,500",
                  label: "After consent banner (35% decline in EU)",
                  width: "65%",
                  color: "bg-text-body",
                },
                {
                  step: "27,300",
                  label: "After ad blockers strip tracking (40%)",
                  width: "39%",
                  color: "bg-text-secondary",
                },
                {
                  step: "16,400",
                  label: "After Safari ITP & Firefox ETP cookie limits",
                  width: "23%",
                  color: "bg-text-tertiary",
                },
                {
                  step: "10,000",
                  label: "What GA4 reports as your total traffic",
                  width: "14%",
                  color: "bg-red-alert",
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="flex justify-between text-[0.85rem] mb-2">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="font-mono text-text-primary font-medium">
                      {item.step}
                    </span>
                  </div>
                  <div className="h-6 bg-warm-100 rounded-[2px]">
                    <div
                      className={`h-full ${item.color} rounded-[2px] transition-all`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
              <div className="flex justify-between text-[0.85rem] mb-2">
                <span className="text-text-secondary">
                  What SealMetrics captures
                </span>
                <span className="font-mono text-green-muted font-medium">
                  70,000
                </span>
              </div>
              <div className="h-6 bg-warm-100 rounded-[2px]">
                <div className="h-full bg-green-muted rounded-[2px] w-full" />
              </div>
              <p className="text-[0.8rem] text-text-tertiary mt-3">
                100% capture. No consent dependency. No data loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="headline-section mb-16">How SealMetrics works</h2>
          <div className="space-y-20">
            {[
              {
                number: "01",
                title: "First-party data collection",
                desc: "A lightweight 1.2KB script runs on your domain. It collects behavioral data through first-party server-side methods — meaning the data travels directly from your visitor's browser to your server, never through a third party.",
                details: [
                  "No third-party cookies or external requests",
                  "Invisible to ad blockers (first-party infrastructure)",
                  "Works regardless of consent banner status",
                  "Zero impact on page load speed (<50ms)",
                  "One line of code to install",
                ],
              },
              {
                number: "02",
                title: "Full-resolution processing",
                desc: "Every session is recorded individually. We do not model, sample, or estimate. When you see 72,847 visitors in your dashboard, that number represents 72,847 actual sessions — not a statistical projection.",
                details: [
                  "100% of sessions captured, not a sample",
                  "Real-time data processing",
                  "No data thresholds that trigger sampling",
                  "Session-level granularity for every visitor",
                  "EU-only infrastructure for all processing",
                ],
              },
              {
                number: "03",
                title: "Actionable intelligence",
                desc: "Complete data enables complete intelligence. Nine specialized reports, multi-touch revenue attribution, and AI-powered anomaly detection — all built on the full picture, not approximations.",
                details: [
                  "9 report types covering the full funnel",
                  "Multi-touch attribution with complete journey data",
                  "LENS AI: 60+ anomaly detection rules, running continuously",
                  "Revenue attribution by channel, campaign, and creative",
                  "Alerts in plain language, not data tables",
                ],
              },
            ].map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8"
              >
                <div className="font-serif text-[4rem] font-light text-warm-200 leading-none">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-[1.5rem] font-medium text-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-6 max-w-[600px]">
                    {step.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {step.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-[0.9rem] text-text-body"
                      >
                        <span className="text-text-tertiary shrink-0">
                          &mdash;
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 bg-dark-bg text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,127,0.05), transparent 70%)" }}
        />
        <div className="relative z-10 max-w-[500px] mx-auto px-8">
          <h2 className="headline-section mb-4">
            See it with your own data.
          </h2>
          <p className="text-[1rem] leading-[1.7] text-dark-text-secondary mb-8">
            Run SealMetrics alongside your current setup. Compare the numbers.
            Then decide.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-dark-bg bg-green rounded-[4px] no-underline hover:shadow-[0_0_50px_-5px_rgba(0,255,127,0.4)] transition-shadow"
            style={{ boxShadow: "0 0 40px -10px rgba(0,255,127,0.3)" }}
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
