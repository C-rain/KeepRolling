import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection({
  kicker,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  kicker: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,255,63,0.15),rgba(255,255,255,0.02))] px-6 py-10 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">
          {kicker}
        </p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={primaryHref} className={cn(buttonVariants(), "w-full sm:w-auto")}>
          {primaryLabel}
        </a>
        {secondaryHref && secondaryLabel ? (
          <a
            href={secondaryHref}
            className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
          >
            {secondaryLabel}
          </a>
        ) : null}
      </div>
    </section>
  );
}
