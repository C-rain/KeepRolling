import type { Route } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/site/blog-card";
import { CoachCard } from "@/components/site/coach-card";
import { CourseCard } from "@/components/site/course-card";
import { CTASection } from "@/components/site/cta-section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { LineCTASection } from "@/components/site/line-cta-section";
import { SectionHeading } from "@/components/site/section-heading";
import { StructuredData } from "@/components/ui/structured-data";
import { focusKeywords, siteContent } from "@/content/site-content";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "台中滑板教學與台中滑板教室推薦",
  description:
    "Keep 滑板教室提供台中滑板教學、台中滑板課程、兒童滑板課、成人滑板課、親子滑板課與一對一滑板教練課程。",
  path: "/",
  keywords: focusKeywords,
  image: siteContent.site.heroImage,
});

export default function Home() {
  const featuredCourses = siteContent.courses.slice(0, 4);
  const featuredPosts = siteContent.blogPosts.slice(0, 3);

  return (
    <main>
      <StructuredData data={buildBreadcrumbJsonLd([{ name: "首頁", path: "/" }])} />
      <StructuredData data={buildFaqJsonLd(siteContent.faqs)} />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${siteContent.site.heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.58),rgba(0,0,0,0.22))]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:pb-20 lg:pt-24">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[var(--accent)]">
            Keep Skate Class Taichung
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            台中滑板教學，從第一步開始滑出自己的風格
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Keep 滑板教室專注台中滑板課程、兒童滑板、成人初學、
            親子共學與一對一滑板教練課，讓新手用安全、清楚、有節奏的方式開始。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteContent.site.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#efff78]"
            >
              加入 LINE 詢問課程
            </a>
            <Link
              href={"/courses" as Route}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/14"
            >
              查看台中滑板課程
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {siteContent.homeHighlights.map((highlight, index) => (
          <article
            key={highlight.title}
            className={`rounded-[1.5rem] border p-5 ${
              index === 0
                ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                : "border-white/10 bg-white/[0.03] text-white"
            }`}
          >
            <h2 className="text-lg font-black">{highlight.title}</h2>
            <p
              className={`mt-3 text-sm leading-7 ${
                index === 0 ? "text-black/72" : "text-white/68"
              }`}
            >
              {highlight.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHeading
          kicker="台中滑板課程"
          title="初學、兒童、成人、親子與私人課，都先看適合對象"
          description="Keep 的課程頁不做線上購買，也不做時段預約。每門課都以介紹、學習目標與 LINE 諮詢為主。"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHeading
          kicker="台中滑板教練"
          title="教練會把重心、腳位與節奏拆成新手聽得懂的步驟"
          description="好的滑板教學不只是示範動作，而是能看出你卡在哪裡，再把下一步練習講清楚。"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {siteContent.coaches.map((coach) => (
            <CoachCard key={coach.slug} coach={coach} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CTASection
          kicker="滑板教學推薦"
          title="不知道該選哪一門課，先把年齡、程度與目標傳給我們"
          description="第一次學滑板、孩子想嘗試、成人想從零開始，或想找台中滑板教練修正動作，都可以先透過 LINE 詢問。"
          primaryHref={siteContent.site.lineUrl}
          primaryLabel="加入 LINE 詢問課程"
          secondaryHref="/courses"
          secondaryLabel="查看課程介紹"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHeading
          kicker="常見問題"
          title="找台中滑板教室前，先釐清這幾件事"
        />
        <div className="mt-8">
          <FAQAccordion items={siteContent.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHeading
          kicker="滑板專欄"
          title="從台中滑板教學推薦到兒童滑板安全，先把觀念弄清楚"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <LineCTASection />
      </section>
    </main>
  );
}
