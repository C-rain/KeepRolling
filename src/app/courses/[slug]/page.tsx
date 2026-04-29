/* eslint-disable @next/next/no-img-element */

import { notFound } from "next/navigation";

import { CTASection } from "@/components/site/cta-section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { SiteLink } from "@/components/site/site-link";
import { StructuredData } from "@/components/ui/structured-data";
import { getCourseBySlug, siteContent } from "@/content/site-content";
import {
  buildBreadcrumbJsonLd,
  buildCourseJsonLd,
  buildFaqJsonLd,
  buildMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
  return siteContent.courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return buildMetadata({
      title: "課程不存在",
      description: "找不到這門課程介紹。",
      path: `/courses/${slug}`,
    });
  }

  return buildMetadata({
    title: `${course.name}｜${course.primaryKeyword}`,
    description: course.excerpt,
    path: `/courses/${course.slug}`,
    keywords: [course.primaryKeyword, course.category, "台中滑板教學", "Keep 滑板教室"],
    image: course.coverImage,
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <StructuredData
        data={buildBreadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "課程介紹", path: "/courses" },
          { name: course.name, path: `/courses/${course.slug}` },
        ])}
      />
      <StructuredData
        data={buildCourseJsonLd({
          name: course.name,
          description: course.description,
          image: course.coverImage,
          urlPath: `/courses/${course.slug}`,
        })}
      />
      <StructuredData data={buildFaqJsonLd(course.faqItems)} />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">
            {course.category} / {course.primaryKeyword}
          </p>
          <h1 className="mt-3 text-4xl font-black text-[var(--ink)] sm:text-5xl">
            {course.name}
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            {course.description}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/76 p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">適合對象</dt>
              <dd className="mt-2 text-sm leading-7 text-[var(--ink)]">{course.audience}</dd>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/76 p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">上課地點</dt>
              <dd className="mt-2 text-sm leading-7 text-[var(--ink)]">{course.location}</dd>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/76 p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">課程長度</dt>
              <dd className="mt-2 text-sm leading-7 text-[var(--ink)]">{course.duration}</dd>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/76 p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">難度</dt>
              <dd className="mt-2 text-sm leading-7 text-[var(--ink)]">{course.difficulty}</dd>
            </div>
          </dl>
        </div>

        <div className="overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-[0_30px_70px_rgba(90,67,42,0.16)]">
          <img
            src={course.coverImage}
            alt={course.name}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white/76 p-6 shadow-[0_24px_60px_rgba(90,67,42,0.1)] lg:col-span-2">
          <h2 className="text-2xl font-black text-[var(--ink)]">學習目標</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {course.learningGoals.map((goal) => (
              <li key={goal}>• {goal}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-2xl font-black text-[var(--ink)]">課程內容</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {course.contentOutline.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-2xl font-black text-[var(--ink)]">教練建議</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {course.coachNotes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-2xl font-black text-[var(--ink)]">注意事項</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {course.precautions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <aside className="rounded-[2rem] border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-6 shadow-[0_24px_60px_rgba(90,67,42,0.1)]">
          <h2 className="text-2xl font-black text-[var(--ink)]">課程諮詢方式</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Keep 目前不提供線上購買或時段預約。想了解這門課是否適合，
            請透過 LINE 說明年齡、程度與目標，教室會回覆建議。
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href={course.lineCtaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--sun)] px-5 py-3 text-sm font-bold text-[var(--ink)]"
            >
              {course.lineCtaLabel}
            </a>
            <SiteLink
              href={course.contactCtaHref}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/80 px-5 py-3 text-sm font-bold text-[var(--ink)]"
            >
              查看聯絡資訊
            </SiteLink>
          </div>
        </aside>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black text-[var(--ink)]">常見問題</h2>
        <div className="mt-6">
          <FAQAccordion items={course.faqItems} />
        </div>
      </section>

      <section className="mt-12">
        <CTASection
          kicker="聯絡 Keep"
          title="如果你不確定這門課適不適合，先把你的狀況傳給我們"
          description="初學、兒童、成人、親子或進階技巧都可以先透過 LINE 問，Keep 會依照你的程度建議課程。"
          primaryHref={course.lineCtaHref}
          primaryLabel="LINE 詢問這門課"
          secondaryHref="/courses"
          secondaryLabel="回課程列表"
        />
      </section>
    </main>
  );
}
