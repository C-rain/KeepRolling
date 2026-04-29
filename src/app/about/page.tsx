import { CTASection } from "@/components/site/cta-section";
import { SectionHeading } from "@/components/site/section-heading";
import { StructuredData } from "@/components/ui/structured-data";
import { focusKeywords, siteContent } from "@/content/site-content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "關於 Keep 台中滑板教室",
  description:
    "認識 Keep 滑板教室的品牌故事、教學理念與安全重點，了解 Keep 如何提供台中滑板教學與初學者友善課程。",
  path: "/about",
  keywords: ["Keep 滑板教室", "台中滑板教室", "台中滑板教學", ...focusKeywords],
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <StructuredData
        data={buildBreadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "關於 Keep", path: "/about" },
        ])}
      />
      <SectionHeading
        kicker="關於 Keep"
        title="台中滑板教室，重點是讓新手安全開始"
        description="Keep 相信滑板不是只屬於厲害的人，而是任何願意開始的人都能慢慢建立起來的身體語言。"
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white/76 p-6 shadow-[0_24px_60px_rgba(90,67,42,0.1)] lg:col-span-2">
          <h2 className="text-2xl font-black text-[var(--ink)]">品牌故事</h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            Keep
            來自一個很簡單的觀察：很多人不是不想學滑板，而是不知道怎麼安全開始。有人怕跌倒，有人怕跟不上，有些家長則是不確定孩子適不適合。
            我們把這些不確定拆成可理解的步驟，讓學員知道第一堂課要做什麼，第二次練習要修什麼。
          </p>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            所以 Keep 的網站也延續同樣邏輯。先讓你看懂台中滑板課程差異、適合對象與教練建議，
            再透過 LINE 做真正的需求溝通，不把初學者丟進複雜流程裡。
          </p>
        </article>

        <article className="rounded-[2rem] border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-6 shadow-[0_24px_60px_rgba(90,67,42,0.1)]">
          <h2 className="text-2xl font-black text-[var(--ink)]">教學理念</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            <li>• 從安全觀念開始，不急著追技巧</li>
            <li>• 讓兒童、成人與親子都能找到自己的節奏</li>
            <li>• 每一堂課都要讓學員知道下一步怎麼練</li>
            <li>• 網站提供清楚介紹，實際安排由 LINE 回應</li>
          </ul>
        </article>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white/76 p-6 shadow-[0_24px_60px_rgba(90,67,42,0.1)]">
          <h2 className="text-2xl font-black text-[var(--ink)]">適合誰</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            <li>• 想找台中滑板教學的成人初學者</li>
            <li>• 想幫孩子找循序漸進兒童滑板課的家長</li>
            <li>• 想用滑板建立親子共同運動節奏的家庭</li>
          </ul>
        </article>
        <article className="rounded-[2rem] border border-[var(--border)] bg-white/76 p-6 shadow-[0_24px_60px_rgba(90,67,42,0.1)]">
          <h2 className="text-2xl font-black text-[var(--ink)]">安全重點</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            <li>• 先做護具與暖身確認</li>
            <li>• 用動作拆解降低初學壓力</li>
            <li>• 先穩再快，先理解再追求技巧</li>
          </ul>
        </article>
      </section>

      <section className="mt-12">
        <CTASection
          kicker="開始洽詢"
          title="如果你想知道哪種課最適合，先跟 Keep 聊聊"
          description="台中滑板教學、兒童課、成人課、親子課與一對一滑板教練，都可以先透過 LINE 詢問。"
          primaryHref={siteContent.site.lineUrl}
          primaryLabel="加入 LINE 詢問課程"
          secondaryHref="/contact"
          secondaryLabel="查看聯絡資訊"
        />
      </section>
    </main>
  );
}
