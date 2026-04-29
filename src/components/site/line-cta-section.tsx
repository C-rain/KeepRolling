import { MessageCircleMore } from "lucide-react";

import { siteContent } from "@/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LineCTASection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[var(--ink)] px-6 py-10 text-white shadow-[0_28px_90px_rgba(24,19,15,0.22)] sm:px-8">
      <div className="absolute left-[-4rem] top-[-5rem] h-40 w-40 rounded-full bg-[var(--accent)]/50 blur-3xl" />
      <div className="absolute bottom-[-5rem] right-[-3rem] h-44 w-44 rounded-full bg-[var(--sage)]/50 blur-3xl" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--sun)]">
            LINE 報名與洽詢
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            台中滑板課程諮詢、程度判斷與報名，都先從 LINE 開始
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
            你可以先透過 LINE 說明學員年齡、程度、想學的方向與方便上課區域，
            Keep 會回覆適合的台中滑板課程與教練建議。
          </p>
        </div>

        <a
          href={siteContent.site.lineUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "relative border-white/15 bg-white text-[var(--ink)] hover:bg-[#fff4e6]",
          )}
        >
          <MessageCircleMore className="size-5" aria-hidden="true" />
          加入 LINE 官方帳號
        </a>
      </div>
    </section>
  );
}
