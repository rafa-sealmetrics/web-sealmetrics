import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[820px]">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Web Analytics
          </span>
          <h1 className="headline-hero mb-8">
            Your marketing data is missing{" "}
            <em className="italic text-red-alert">most</em> of the picture.
          </h1>
          <p className="text-[1.2rem] leading-[1.75] text-text-secondary max-w-[640px] mb-10">
            Consent banners, ad blockers, and cookie restrictions have made
            traditional analytics unreliable. Most European businesses are making
            decisions on 13% of their actual traffic. SealMetrics captures
            100%&nbsp;&mdash; without cookies, without consent prompts, without
            guesswork.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] text-text-secondary bg-transparent border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-5 text-[0.8rem] text-text-tertiary">
            No cookies. No consent banners. Full GDPR compliance.
          </p>
        </div>
      </div>
    </section>
  );
}
