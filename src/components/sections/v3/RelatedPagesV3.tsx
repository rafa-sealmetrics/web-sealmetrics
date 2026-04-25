import Link from "next/link";

type Locale = "en" | "es";

interface RelatedPage {
  href: string;
  title: string;
  desc: string;
}

interface Props {
  locale?: Locale;
  eyebrow?: string;
  titleEn?: string;
  titleEs?: string;
  pages: RelatedPage[];
}

export function RelatedPagesV3({
  locale = "en",
  eyebrow,
  titleEn = "Related comparisons",
  titleEs = "Comparativas relacionadas",
  pages,
}: Props) {
  const title = locale === "es" ? titleEs : titleEn;
  const label = eyebrow || (locale === "es" ? "También podría interesarte" : "You might also want");

  return (
    <section className="py-20 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="mb-8">
          <span className="eyebrow mb-4">{label}</span>
          <h2
            className="font-semibold text-ink tracking-[-0.02em] leading-[1.2] mt-4"
            style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {pages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block bg-white border border-warm-100 rounded-xl p-6 no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
            >
              <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink mb-2 leading-[1.25] group-hover:text-brand transition-colors">
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-[1.55] text-ink-soft mb-3">{p.desc}</p>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-brand inline-flex items-center gap-1">
                {locale === "es" ? "Leer" : "Read"} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
