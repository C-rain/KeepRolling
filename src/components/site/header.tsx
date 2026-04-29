import type { Route } from "next";
import Link from "next/link";

import { siteContent } from "@/content/site-content";
import { MobileNavigation } from "@/components/site/mobile-navigation";
import { SiteLink } from "@/components/site/site-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050505]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={"/" as Route} className="min-w-0">
          <div className="text-[0.7rem] font-black uppercase tracking-[0.32em] text-[var(--accent)]">
            Keep Skate Class
          </div>
          <div className="truncate text-lg font-black text-white sm:text-xl">
            Keep 滑板教室
          </div>
        </Link>

        <nav
          aria-label="主選單"
          className="hidden items-center gap-1 lg:flex"
        >
          {siteContent.navigation.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition hover:bg-white/7 hover:text-white"
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteContent.site.lineUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants(), "shrink-0")}
          >
            立即加入 LINE
          </a>
        </div>

        <MobileNavigation
          items={siteContent.navigation}
          lineHref={siteContent.site.lineUrl}
        />
      </div>
    </header>
  );
}
