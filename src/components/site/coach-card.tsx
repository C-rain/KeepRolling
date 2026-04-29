/* eslint-disable @next/next/no-img-element */

import { getCourseBySlug, type CoachContent } from "@/content/site-content";
import { Badge } from "@/components/ui/badge";

export function CoachCard({ coach }: { coach: CoachContent }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-4">
        <img
          src={coach.image}
          alt={coach.name}
          className="size-20 rounded-3xl object-cover"
        />
        <div>
          <h3 className="text-xl font-black text-white">{coach.name}</h3>
          <p className="text-sm text-[var(--accent)]">{coach.role}</p>
          <p className="mt-1 text-sm text-white/58">{coach.experience}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-white/68">{coach.bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {coach.specialties.map((specialty) => (
          <Badge key={specialty}>{specialty}</Badge>
        ))}
      </div>

      <div className="mt-5 text-sm text-white/68">
        可教授課程：
        {coach.teachesCourseSlugs.map((slug, index) => (
          <span key={slug}>
            {index === 0 ? " " : "、"}
            <a href={`/courses/${slug}`} className="text-white hover:text-[var(--accent)]">
              {getCourseBySlug(slug)?.name ?? slug}
            </a>
          </span>
        ))}
      </div>
    </article>
  );
}
