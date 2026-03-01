"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const WEBHOOK_URL = "https://n8n.sealmetrics.com/webhook/webform-lead";

const inputClasses =
  "w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary focus:border-text-body focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-accent focus-visible:outline-offset-2 transition-colors";

export function DemoForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      pageviews: (form.elements.namedItem("pageviews") as HTMLSelectElement)
        .value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
      source: window.location.href,
    };

    try {
      // Fire SealMetrics conversion
      if (window.sealmetrics) {
        window.sealmetrics.conv("demo_request", 1, {
          email: data.email,
          company: data.company,
        });
      }

      // Send to webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Redirect to thank-you
      router.push("/demo/thank-you");
    } catch {
      setError(
        "Something went wrong. Please try again or email us directly."
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-warm-white border border-warm-100 rounded-[4px] p-10">
      <h2 className="font-serif text-[1.35rem] font-medium text-text-primary mb-2">
        Request a demo
      </h2>
      <p className="text-[0.85rem] text-text-secondary mb-8">
        Fill in your details and we will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Website URL
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="pageviews"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Monthly pageviews (estimate)
          </label>
          <select
            id="pageviews"
            name="pageviews"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select range
            </option>
            <option value="Under 100K">Under 100K</option>
            <option value="100K-500K">100K - 500K</option>
            <option value="500K-2M">500K - 2M</option>
            <option value="2M-10M">2M - 10M</option>
            <option value="10M+">10M+</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="notes"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Anything else we should know?
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* GDPR consent */}
        <div className="flex items-start gap-3">
          <input
            id="gdpr"
            name="gdpr"
            type="checkbox"
            required
            className="mt-1 w-4 h-4 rounded-[2px] border border-warm-200 accent-text-primary cursor-pointer flex-shrink-0"
          />
          <label htmlFor="gdpr" className="text-[0.75rem] text-text-secondary leading-relaxed cursor-pointer">
            I agree to the{" "}
            <a
              href="https://legal.sealmetrics.com/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-body underline hover:text-text-primary transition-colors"
            >
              Privacy Notice
            </a>{" "}
            and consent to SealMetrics processing my data to respond to my
            request.
          </label>
        </div>

        {error && (
          <p className="text-[0.8rem] text-red-alert">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] hover:bg-[#333] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Request Demo"}
        </button>
        <p className="text-[0.75rem] text-text-tertiary text-center">
          No commitment. We will respond within one business day.
        </p>
      </form>
    </div>
  );
}
