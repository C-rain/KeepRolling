import { SiteLink } from "@/components/site/site-link";
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
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fffdf7_0%,#ffe0d4_48%,#e3f0df_100%)] px-6 py-10 shadow-[0_26px_80px_rgba(90,67,42,0.12)] sm:px-8 lg:px-10">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--sun)]/60 blur-2xl" />
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">
          {kicker}
        </p>
        <h2 className="mt-3 text-3xl font-black text-[var(--ink)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
          {description}
        </p>
      </div>

      <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
        <SiteLink
          href={primaryHref}
          target={primaryHref.startsWith("http") ? "_blank" : undefined}
          rel={primaryHref.startsWith("http") ? "noreferrer" : undefined}
          className={cn(buttonVariants(), "w-full sm:w-auto")}
        >
          {primaryLabel}
        </SiteLink>
        {secondaryHref && secondaryLabel ? (
          <SiteLink
            href={secondaryHref}
            target={secondaryHref.startsWith("http") ? "_blank" : undefined}
            rel={secondaryHref.startsWith("http") ? "noreferrer" : undefined}
            className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
          >
            {secondaryLabel}
          </SiteLink>
        ) : null}
      </div>
    </section>
  );
}
