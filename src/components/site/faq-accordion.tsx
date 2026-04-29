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
          className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4"
        >
          <summary className="cursor-pointer list-none text-left text-base font-bold text-white">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-[var(--accent)] transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-white/68">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
