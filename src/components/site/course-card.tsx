/* eslint-disable @next/next/no-img-element */
import { ArrowRight, MapPin, Timer } from "lucide-react";

import type { CourseContent } from "@/content/site-content";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CourseCard({ course }: { course: CourseContent }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <img
        src={course.coverImage}
        alt={course.name}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-5 p-5">
        <div className="flex flex-wrap gap-2">
          <Badge>{course.category}</Badge>
          <Badge className="text-[var(--accent)]">{course.difficulty}</Badge>
        </div>

        <div>
          <h3 className="text-xl font-black text-white">{course.name}</h3>
          <p className="mt-2 text-sm leading-7 text-white/68">{course.excerpt}</p>
        </div>

        <dl className="grid gap-3 text-sm text-white/76">
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
          <a
            href={`/courses/${course.slug}`}
            className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
          >
            查看課程介紹
          </a>
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
