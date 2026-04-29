import type { Route } from "next";
import Link from "next/link";

import { siteContent } from "@/content/site-content";
import { KeepWordmark } from "@/components/site/keep-wordmark";
import { MobileNavigation } from "@/components/site/mobile-navigation";
import { SiteLink } from "@/components/site/site-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-[#fff9ef]/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={"/" as Route} className="min-w-0">
          <KeepWordmark compact />
        </Link>

        <nav
          aria-label="主選單"
          className="hidden items-center gap-1 lg:flex"
        >
          {siteContent.navigation.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--ink)]"
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
