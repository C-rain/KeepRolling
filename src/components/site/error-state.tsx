import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ErrorState({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-[2rem] border border-red-500/20 bg-white/76 p-8 text-center shadow-[0_24px_60px_rgba(90,67,42,0.1)]">
      <h2 className="text-2xl font-black text-[var(--ink)]">
        {title ?? "目前無法顯示這個頁面"}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
        {description ??
          "請稍後重新整理，或直接透過 LINE 與我們聯繫，我們會協助你取得需要的資訊。"}
      </p>
      <Link href="/" className={cn(buttonVariants(), "mt-5 inline-flex")}>
        回到首頁
      </Link>
    </div>
  );
}
