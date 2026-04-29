import { CourseCard } from "@/components/site/course-card";
import { CTASection } from "@/components/site/cta-section";
import { SectionHeading } from "@/components/site/section-heading";
import { StructuredData } from "@/components/ui/structured-data";
import { focusKeywords, siteContent } from "@/content/site-content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "台中滑板課程推薦",
  description:
    "查看 Keep 滑板教室的台中滑板課程：初學體驗、兒童滑板、成人滑板、親子共學、一對一、一對二、團體班與進階技巧課。",
  path: "/courses",
  keywords: ["台中滑板課程", "台中滑板課程推薦", "台中滑板教室推薦", ...focusKeywords],
});

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <StructuredData
        data={buildBreadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "課程介紹", path: "/courses" },
        ])}
      />
      <SectionHeading
        kicker="台中滑板課程"
        title="從初學體驗到進階技巧，選一門適合你現在程度的課"
        description="Keep 滑板教室的課程介紹頁只呈現學習方向、適合對象與教練建議。實際報名與安排透過 LINE 完成。"
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {siteContent.courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
      <section className="mt-12">
        <CTASection
          kicker="課程諮詢"
          title="不知道哪一門台中滑板課程適合你，先傳訊息讓教練判斷"
          description="請告訴我們學員年齡、是否有滑板經驗、想學的方向與方便上課的區域，Keep 會回覆建議課程。"
          primaryHref={siteContent.site.lineUrl}
          primaryLabel="加入 LINE 詢問課程"
          secondaryHref="/contact"
          secondaryLabel="查看聯絡資訊"
        />
      </section>
    </main>
  );
}
