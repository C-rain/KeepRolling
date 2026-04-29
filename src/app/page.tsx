/* eslint-disable @next/next/no-img-element */
import type { Route } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/site/blog-card";
import { CoachCard } from "@/components/site/coach-card";
import { CourseCard } from "@/components/site/course-card";
import { CTASection } from "@/components/site/cta-section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { KeepWordmark } from "@/components/site/keep-wordmark";
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

      <section className="relative overflow-hidden py-10 lg:py-16">
        <div
          className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-5rem] top-8 h-80 w-80 rounded-full bg-[var(--sage-soft)] blur-3xl"
          aria-hidden="true"
        />
        <div className="page-shell relative grid min-w-0 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="w-full max-w-full min-w-0 overflow-hidden animate-keep-pop rounded-[2.1rem] border border-[var(--border)] bg-white/72 p-5 shadow-[0_28px_90px_rgba(90,67,42,0.12)] backdrop-blur sm:rounded-[2.6rem] sm:p-8 lg:p-10">
            <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--sage-soft)] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--ink)]">
              Taichung Skateboarding Class
            </div>
            <div className="mt-7">
              <KeepWordmark />
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-black leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              溫柔陪伴初學者，
              <br />
              滑出自己的節奏
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Keep 滑板教室提供台中滑板教學、兒童滑板、成人初學與親子共學。
              課程節奏安全清楚，適合第一次上板的孩子、家長與女性學員。
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["親子友善", "女性初學安心", "台中滑板教練", "零基礎可"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] bg-[#fff8ec] px-4 py-2 text-sm font-bold text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteContent.site.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--sun)] px-6 py-3 text-sm font-bold text-[var(--ink)] shadow-[0_18px_36px_rgba(90,67,42,0.16)] transition hover:-translate-y-0.5 hover:bg-[#ffe48a] sm:w-auto"
              >
                加入 LINE 詢問課程
              </a>
              <Link
                href={"/courses" as Route}
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white/80 px-6 py-3 text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                查看台中滑板課程
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] min-w-0 sm:block">
            <div className="absolute inset-x-4 top-10 h-24 overflow-hidden rounded-full border border-black/10 bg-white/70">
              <div className="animate-keep-glide mt-11 h-1 w-40 rounded-full bg-[var(--ink)] shadow-[32px_0_0_var(--accent),72px_0_0_var(--sage)]" />
            </div>
            <div className="animate-keep-drift absolute right-4 top-0 rounded-[2rem] border border-[var(--border)] bg-[var(--sun)] px-5 py-4 text-sm font-black text-[var(--ink)] shadow-[0_18px_45px_rgba(90,67,42,0.14)]">
              Safe, warm, cool.
            </div>
            <div className="absolute left-0 top-24 w-[58%] overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-white shadow-[0_30px_70px_rgba(90,67,42,0.18)]">
              <img
                src={siteContent.site.heroImage}
                alt="親子與女性友善的台中滑板教學"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="absolute bottom-12 right-0 w-[62%] rounded-[2.5rem] border-[10px] border-white bg-[linear-gradient(135deg,#e3f0df,#ffe0d4)] p-5 shadow-[0_30px_70px_rgba(90,67,42,0.2)] sm:w-[58%] sm:p-7">
              <div className="text-xs font-black uppercase tracking-[0.24em] text-[var(--accent)]">
                Parent friendly
              </div>
              <h2 className="mt-3 text-2xl font-black leading-tight text-[var(--ink)] sm:text-3xl">
                不用很酷才開始，
                <br />
                開始就很酷
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                給孩子、家長與女性初學者的安全節奏：先站穩、再滑遠。
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="size-10 rounded-full border-[10px] border-[var(--ink)] bg-white" />
                <span className="h-1 flex-1 rounded-full bg-[var(--ink)]" />
                <span className="size-10 rounded-full border-[10px] border-[var(--ink)] bg-white" />
              </div>
            </div>
            <div className="animate-keep-wobble absolute bottom-0 left-8 rounded-[1.7rem] bg-[var(--ink)] px-5 py-4 text-white shadow-[0_18px_44px_rgba(24,19,15,0.22)]">
              <div className="text-xs font-black uppercase tracking-[0.24em] text-[var(--sun)]">
                Keep Rolling
              </div>
              <div className="mt-1 text-2xl font-black">親子一起滑</div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        {siteContent.homeHighlights.map((highlight, index) => (
          <article
            key={highlight.title}
            className={`min-w-0 rounded-[1.8rem] border p-5 shadow-[0_18px_46px_rgba(90,67,42,0.08)] transition hover:-translate-y-1 ${
              index === 0
                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--ink)]"
                : "border-[var(--border)] bg-white/70 text-[var(--ink)]"
            }`}
          >
            <h2 className="text-lg font-black">{highlight.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {highlight.description}
            </p>
          </article>
        ))}
      </section>

      <section className="page-shell py-12">
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

      <section className="page-shell py-12">
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

      <section className="page-shell py-12">
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

      <section className="page-shell py-12">
        <SectionHeading
          kicker="常見問題"
          title="找台中滑板教室前，先釐清這幾件事"
        />
        <div className="mt-8">
          <FAQAccordion items={siteContent.faqs} />
        </div>
      </section>

      <section className="page-shell py-12">
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

      <section className="page-shell py-12">
        <LineCTASection />
      </section>
    </main>
  );
}
