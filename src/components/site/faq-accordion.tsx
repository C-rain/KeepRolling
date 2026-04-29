export function FAQAccordion({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[1.5rem] border border-[var(--border)] bg-white/70 px-5 py-4 shadow-[0_18px_44px_rgba(24,19,15,0.06)] transition hover:-translate-y-0.5 hover:bg-white"
        >
          <summary className="cursor-pointer list-none text-left text-base font-bold text-[var(--ink)]">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-[var(--accent)] transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
