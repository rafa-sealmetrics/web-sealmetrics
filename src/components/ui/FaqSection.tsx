/**
 * Visible FAQ block for article pages.
 *
 * Exists because 34 blog posts emitted `FAQPage` JSON-LD whose questions and
 * answers appeared nowhere in the rendered HTML. Google's structured data
 * policy requires FAQ content to be visible to the user on the page, and an
 * AI engine cannot cite a passage it can only see in a script tag.
 *
 * Deliberately NOT an accordion: the answers are the most citable passages on
 * these pages, so they stay in the flow as plain text rather than behind a
 * disclosure widget. `data-speakable` and `.faq-answer` match the selectors
 * declared by `speakableWebPageSchema`.
 */
export function FaqSection({
  items,
  locale = "en",
  heading,
}: {
  items: { question: string; answer: string }[];
  locale?: "en" | "es";
  heading?: string;
}) {
  if (!items?.length) return null;
  const title =
    heading ?? (locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions");

  return (
    <section className="mt-16 pt-10 border-t border-warm-100" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-serif text-[1.5rem] font-medium text-text-primary mb-8"
      >
        {title}
      </h2>
      {/* Questions are h3, not <dt>: AI engines and AI Overviews lift
          question-shaped headings with the paragraph that follows them, and
          this keeps the h2 → h3 hierarchy intact. */}
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.question}>
            <h3 className="text-[1.05rem] font-semibold text-text-primary leading-[1.45] mb-2">
              {item.question}
            </h3>
            <p
              data-speakable
              className="faq-answer text-[1rem] leading-[1.75] text-text-body"
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
