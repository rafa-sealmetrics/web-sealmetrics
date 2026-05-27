export interface TOCItem {
  id: string;
  label: string;
}

export function OpenChapterTOC({ items }: { items: TOCItem[] }) {
  if (items.length === 0) return null;
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-text-tertiary mb-4">
          On this page
        </span>
        <ul className="flex flex-col gap-2 border-l border-warm-100 pl-4">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block text-[0.82rem] leading-snug text-text-secondary hover:text-ink no-underline transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
