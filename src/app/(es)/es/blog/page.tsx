import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Blog — SealMetrics",
  description: "Insights sobre analítica web, calidad de datos, atribución y medición privacy-first.",
  alternates: {
    canonical: "https://sealmetrics.com/es/blog",
    languages: getAlternatesEs("/blog"),
  },
};

export default function Page() {
  const posts = blogPosts.filter((p) => !p.draft);
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} locale="es" />
      <JsonLd data={collectionPageSchema({ name: "Blog", description: "Insights sobre analítica web, calidad de datos y medición privacy-first.", url: "/es/blog" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/es/blog" }])} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
            Blog
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Pensar la analítica, <em>hecha bien.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Calidad de datos, atribución, regulación de privacidad y el futuro de la medición. Escrito para líderes de marketing y analítica.
          </p>
          <p className="mt-6 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
            Artículos disponibles solo en inglés por ahora · traducciones en curso
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
                      {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={<>Read more. Or skip ahead.</>}
        titleEs={<>Lee más. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>O salta al final.</em></>}
        ledeEn="Book a demo."
        ledeEs="Los posts hacen el caso. La demo lo prueba. 30 min con el founder sobre tu propio tráfico."
      />
    </>
  );
}
