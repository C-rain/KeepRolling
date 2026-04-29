import { cn } from "@/lib/utils";

export function KeepWordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("leading-none text-[var(--ink)]", className)}>
      <div
        className={cn(
          "font-serif font-black tracking-[-0.08em]",
          compact ? "text-4xl" : "text-6xl sm:text-7xl lg:text-8xl",
        )}
      >
        Keep
      </div>
      <div
        className={cn(
          "-mt-1 pl-2 tracking-[0.04em]",
          compact ? "text-sm" : "text-2xl sm:text-3xl",
        )}
        style={{
          fontFamily:
            '"Segoe Script", "Bradley Hand ITC", "Comic Sans MS", cursive',
        }}
      >
        Skateboarding
      </div>
    </div>
  );
}
