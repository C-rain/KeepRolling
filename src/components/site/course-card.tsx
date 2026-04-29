/* eslint-disable @next/next/no-img-element */
import { ArrowRight, MapPin, Timer } from "lucide-react";

import type { CourseContent } from "@/content/site-content";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SiteLink } from "@/components/site/site-link";
import { cn } from "@/lib/utils";

export function CourseCard({ course }: { course: CourseContent }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/76 shadow-[0_24px_60px_rgba(90,67,42,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(90,67,42,0.16)]">
      <img
        src={course.coverImage}
        alt={course.name}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-5 p-5">
        <div className="flex flex-wrap gap-2">
          <Badge>{course.category}</Badge>
          <Badge className="bg-[var(--sage-soft)] text-[var(--ink)]">{course.difficulty}</Badge>
        </div>

        <div>
          <h3 className="text-xl font-black text-[var(--ink)]">{course.name}</h3>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{course.excerpt}</p>
        </div>

        <dl className="grid gap-3 text-sm text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <Timer className="size-4 text-[var(--accent)]" aria-hidden="true" />
            <dd>{course.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-[var(--accent)]" aria-hidden="true" />
            <dd>{course.location}</dd>
          </div>
          <div>{course.audience}</div>
        </dl>

        <div className="flex flex-col gap-3 sm:flex-row">
          <SiteLink
            href={`/courses/${course.slug}`}
            className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
          >
            查看課程介紹
          </SiteLink>
          <a
            href={course.lineCtaHref}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants(), "w-full")}
          >
            {course.lineCtaLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
