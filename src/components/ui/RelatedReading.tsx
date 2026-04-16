import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";

export function RelatedReading({ currentSlug }: { currentSlug: string }) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current?.related?.length) return null;

  const relatedPosts = current.related
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-warm-100">
      <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
        Related reading
      </h2>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <div key={post!.slug}>
            <Link
              href={`/blog/${post!.slug}`}
              className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              {post!.title}
            </Link>
            <p className="text-[0.8rem] text-text-tertiary mt-1">
              {post!.readTime} read
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
