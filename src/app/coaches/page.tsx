import { CoachCard } from "@/components/site/coach-card";
import { SectionHeading } from "@/components/site/section-heading";
import { StructuredData } from "@/components/ui/structured-data";
import { focusKeywords, siteContent } from "@/content/site-content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "台中滑板教練",
  description:
    "認識 Keep 滑板教室的台中滑板教練、教學經驗與專長，了解不同教練適合的台中滑板課程方向。",
  path: "/coaches",
  keywords: ["台中滑板教練", "台中滑板教學", "台中滑板教室", ...focusKeywords],
});

export default function CoachesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <StructuredData
        data={buildBreadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "教練團隊", path: "/coaches" },
        ])}
      />
      <SectionHeading
        kicker="台中滑板教練"
        title="陪你把第一步練穩，也陪孩子建立運動自信"
        description="Keep 的教練介紹以實際教學風格、專長與適合課程為主。想了解上課安排，請透過 LINE 洽詢。"
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {siteContent.coaches.map((coach) => (
          <CoachCard key={coach.slug} coach={coach} />
        ))}
      </div>
    </main>
  );
}
