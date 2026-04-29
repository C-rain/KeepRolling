import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--sun)] px-5 py-3 text-sm text-[var(--ink)] shadow-[0_14px_32px_rgba(90,67,42,0.16)] hover:-translate-y-0.5 hover:bg-[#ffe48a]",
        secondary:
          "border border-[var(--border)] bg-white/70 px-5 py-3 text-sm text-[var(--ink)] hover:-translate-y-0.5 hover:bg-white",
        ghost: "px-3 py-2 text-sm text-[var(--ink)] hover:bg-black/5",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
