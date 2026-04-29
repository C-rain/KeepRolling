import { SiteLink } from "@/components/site/site-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="rounded-[2rem] border border-dashed border-[var(--border)] bg-white/76 p-8 text-center shadow-[0_24px_60px_rgba(90,67,42,0.1)]">
      <h2 className="text-2xl font-black text-[var(--ink)]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
      {actionHref && actionLabel ? (
        <SiteLink
          href={actionHref}
          className={cn(buttonVariants(), "mt-5 inline-flex")}
        >
          {actionLabel}
        </SiteLink>
      ) : null}
    </div>
  );
}
