import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog — SealMetrics",
  description:
    "Insights on web analytics, data quality, attribution, and privacy-first measurement. From the SealMetrics team.",
  openGraph: {
    title: "Blog — SealMetrics",
    description:
      "Insights on analytics, data quality, attribution, and privacy-first measurement.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Blog
            </span>
            <h1 className="headline-hero mb-8">
              Thinking about analytics, done properly.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Data quality, attribution, privacy regulation, and the future of
              measurement. Written for marketing and analytics leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="space-y-0">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-10 border-b border-warm-100 first:border-t no-underline group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-4 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[0.75rem] font-medium text-text-tertiary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[0.75rem] text-text-tertiary">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mb-3 group-hover:text-text-body transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[0.95rem] leading-[1.7] text-text-secondary max-w-[600px]">
                      {post.description}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <time className="text-[0.8rem] text-text-tertiary font-mono">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
