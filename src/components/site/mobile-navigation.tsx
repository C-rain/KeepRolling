"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import type { NavigationItem } from "@/content/site-content";
import { SiteLink } from "@/components/site/site-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNavigation({
  items,
  lineHref,
}: {
  items: NavigationItem[];
  lineHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        aria-expanded={open}
        aria-label={open ? "關閉選單" : "開啟選單"}
        variant="ghost"
        size="sm"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {open ? (
        <div className="absolute inset-x-4 top-[calc(100%+0.75rem)] z-30 rounded-[2rem] border border-[var(--border)] bg-[#fffdf7] p-5 shadow-[0_24px_80px_rgba(24,19,15,0.18)]">
          <nav aria-label="行動版主選單" className="flex flex-col gap-2">
            {items.map((item) => (
              <SiteLink
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-bold text-[var(--ink)] transition hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </SiteLink>
            ))}
          </nav>
          <a
            href={lineHref}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "mt-4 w-full")}
            onClick={() => setOpen(false)}
          >
            LINE 洽詢
          </a>
        </div>
      ) : null}
    </div>
  );
}
