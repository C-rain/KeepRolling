/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";

import type { BlogPostContent } from "@/content/site-content";
import { Badge } from "@/components/ui/badge";
import { SiteLink } from "@/components/site/site-link";

export function BlogCard({ post }: { post: BlogPostContent }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/76 shadow-[0_24px_60px_rgba(90,67,42,0.1)] transition duration-300 hover:-translate-y-1">
      <img
        src={post.coverImage}
        alt={post.title}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <Badge>{post.category}</Badge>
          <span>{post.readTime}</span>
        </div>

        <div>
          <h3 className="text-xl font-black text-[var(--ink)]">{post.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
        </div>

        <SiteLink
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
        >
          閱讀全文
          <ArrowRight className="size-4" aria-hidden="true" />
        </SiteLink>
      </div>
    </article>
  );
}
