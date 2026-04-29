export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
