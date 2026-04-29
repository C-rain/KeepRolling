/* eslint-disable @next/next/no-img-element */

import { getCourseBySlug, type CoachContent } from "@/content/site-content";
import { Badge } from "@/components/ui/badge";
import { SiteLink } from "@/components/site/site-link";

export function CoachCard({ coach }: { coach: CoachContent }) {
  return (
    <article className="rounded-[2rem] border border-[var(--border)] bg-white/76 p-5 shadow-[0_24px_60px_rgba(90,67,42,0.1)] transition duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <img
          src={coach.image}
          alt={coach.name}
          className="size-20 rounded-3xl object-cover"
        />
        <div>
          <h3 className="text-xl font-black text-[var(--ink)]">{coach.name}</h3>
          <p className="text-sm text-[var(--accent)]">{coach.role}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{coach.experience}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{coach.bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {coach.specialties.map((specialty) => (
          <Badge key={specialty}>{specialty}</Badge>
        ))}
      </div>

      <div className="mt-5 text-sm text-[var(--muted)]">
        可教授課程：
        {coach.teachesCourseSlugs.map((slug, index) => (
          <span key={slug}>
            {index === 0 ? " " : "、"}
            <SiteLink href={`/courses/${slug}`} className="font-bold text-[var(--ink)] hover:text-[var(--accent)]">
              {getCourseBySlug(slug)?.name ?? slug}
            </SiteLink>
          </span>
        ))}
      </div>
    </article>
  );
}
