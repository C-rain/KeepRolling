import { MessageCircleMore } from "lucide-react";

import { siteContent } from "@/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LineCTASection() {
  return (
    <section className="rounded-[2.5rem] border border-[#d7ff3f]/30 bg-[#d7ff3f] px-6 py-10 text-black sm:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/72">
            LINE 報名與洽詢
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            台中滑板課程諮詢、程度判斷與報名，都先從 LINE 開始
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base">
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
            "border-black/15 bg-black text-white hover:bg-black/85",
          )}
        >
          <MessageCircleMore className="size-5" aria-hidden="true" />
          加入 LINE 官方帳號
        </a>
      </div>
    </section>
  );
}
