import Link from "next/link";
import { openParts, publishedChaptersByPart } from "@/lib/content/open";

export function OpenChapterSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
        <Link
          href="/open"
          className="block text-[0.78rem] font-mono uppercase tracking-[0.1em] text-text-tertiary hover:text-ink transition-colors no-underline mb-6"
        >
          ← Open
        </Link>

        <nav aria-label="Chapters">
          {openParts.map((part) => {
            const chapters = publishedChaptersByPart(part.number);
            if (chapters.length === 0) return null;
            return (
              <div key={part.number} className="mb-7">
                <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-text-tertiary mb-3">
                  Part {String(part.number).padStart(2, "0")} · {part.title}
                </span>
                <ul className="flex flex-col gap-px">
                  {chapters.map((c) => {
                    const isActive = c.slug === currentSlug;
                    return (
                      <li key={c.slug}>
                        <Link
                          href={`/open/${c.slug}`}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-baseline gap-3 py-1.5 pl-3 pr-2 -ml-3 border-l-2 no-underline text-[0.85rem] leading-snug transition-colors ${
                            isActive
                              ? "border-brand text-ink font-medium bg-warm-50"
                              : "border-transparent text-text-secondary hover:text-ink hover:border-warm-200"
                          }`}
                        >
                          <span className="shrink-0 font-mono text-[0.7rem] text-text-tertiary w-5">
                            {String(c.number).padStart(2, "0")}
                          </span>
                          <span>{c.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
