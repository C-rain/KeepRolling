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
    <div className="rounded-[2rem] border border-dashed border-white/14 bg-white/[0.02] p-8 text-center">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/68">{description}</p>
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
