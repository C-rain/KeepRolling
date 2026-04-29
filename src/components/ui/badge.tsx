import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--border)] bg-white/68 px-3 py-1 text-xs font-bold text-[var(--muted)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
