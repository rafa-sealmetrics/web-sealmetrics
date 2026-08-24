import Link from "next/link";
import "./editorial-section-nav.css";

type EditorialSection = "open" | "growth" | "blog";

const sections: Array<{
  id: EditorialSection;
  href: string;
  label: string;
  description: string;
}> = [
  { id: "open", href: "/open/", label: "Open", description: "How we work" },
  { id: "growth", href: "/growth/", label: "Growth", description: "How to grow" },
  { id: "blog", href: "/blog/", label: "Blog", description: "What we learn" },
];

export function EditorialSectionNav({ current }: { current: EditorialSection }) {
  return (
    <div className="sig-editorial-nav">
      <div className="sig-editorial-nav-inner">
        <span className="sig-editorial-nav-label">Sealmetrics / public knowledge</span>
        <nav aria-label="Editorial sections" className="sig-editorial-nav-links">
          {sections.map((section) => {
            const active = section.id === current;
            return (
              <Link
                key={section.id}
                href={section.href}
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : undefined}
              >
                <span>{section.label}</span>
                <small>{section.description}</small>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
