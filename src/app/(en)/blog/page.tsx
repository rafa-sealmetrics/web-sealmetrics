import type { Metadata } from "next";
import { blogPosts } from "@/lib/content/blog";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { BlogIndexSignal } from "@/components/v4/BlogIndexSignal";

export const metadata: Metadata = {
  title: "Blog — SealMetrics",
  description: "Insights on web analytics, data quality, attribution, and privacy-first measurement.",
  openGraph: {
    title: "Blog — SealMetrics",
    description: "Insights on web analytics, data quality, attribution, and privacy-first measurement.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/blog/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Blog — SealMetrics",
    description: "Insights on web analytics, data quality, attribution, and privacy-first measurement.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/",
    languages: getAlternates("/blog"),
  },
};

export default function Page() {
  const posts = blogPosts.filter((p) => !p.draft);
  return (
    <>
      <JsonLd data={collectionPageSchema({ name: "Blog", description: "Insights on web analytics, data quality, and privacy-first measurement.", url: "/blog" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: posts.map((post, i) => ({
          "@type": "ListItem", position: i + 1, url: `https://sealmetrics.com/blog/${post.slug}/`, name: post.title,
        })),
      }} />

      <BlogIndexSignal locale="en" posts={posts} />
    </>
  );
}
