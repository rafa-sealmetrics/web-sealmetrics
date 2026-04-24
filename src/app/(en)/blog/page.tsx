import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schema";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Blog — SealMetrics",
  description: "Insights on web analytics, data quality, attribution, and privacy-first measurement.",
  alternates: { canonical: "https://sealmetrics.com/blog" },
};

export default function Page() {
  const posts = blogPosts.filter((p) => !p.draft);
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <JsonLd data={collectionPageSchema({ name: "Blog", description: "Insights on web analytics, data quality, and privacy-first measurement.", url: "/blog" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: posts.map((post, i) => ({
          "@type": "ListItem", position: i + 1, url: `https://sealmetrics.com/blog/${post.slug}`, name: post.title,
        })),
      }} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Blog</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Thinking about analytics, <em>done properly.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Data quality, attribution, privacy regulation, and the future of measurement. Written for marketing and analytics leaders.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="space-y-0">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-8 border-b border-warm-100 first:border-t no-underline group transition-colors hover:bg-warm-50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-4 items-start px-0 lg:px-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="font-mono text-[11px] font-semibold text-brand uppercase tracking-[0.1em]">
                        {post.category}
                      </span>
                      <span className="font-mono text-[11px] text-ink-soft">{post.readTime}</span>
                    </div>
                    <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink mb-2 leading-[1.25] group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[15px] leading-[1.6] text-ink-soft max-w-[60ch]">
                      {post.description}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <time className="font-mono text-[12px] text-ink-soft tracking-[0.04em]">
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Read more. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Or skip ahead.</em></>}
        titleEs={<>Lee más. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>O salta al final.</em></>}
        ledeEn="The blog posts make the case. The demo proves it. 30 minutes with the founder on your own traffic."
        ledeEs="Los posts hacen el caso. La demo lo prueba. 30 min con el founder sobre tu propio tráfico."
      />
    </>
  );
}
