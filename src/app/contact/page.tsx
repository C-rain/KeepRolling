import { FAQAccordion } from "@/components/site/faq-accordion";
import { LineCTASection } from "@/components/site/line-cta-section";
import { SectionHeading } from "@/components/site/section-heading";
import { StructuredData } from "@/components/ui/structured-data";
import { focusKeywords, siteContent } from "@/content/site-content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "聯絡 Keep 滑板教室",
  description:
    "想詢問台中滑板教學、台中滑板課程、兒童滑板課、成人滑板課或一對一滑板教練，請透過 LINE 聯絡 Keep 滑板教室。",
  path: "/contact",
  keywords: ["台中滑板教學", "台中滑板教室", "台中滑板教練", ...focusKeywords],
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <StructuredData
        data={buildBreadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "聯絡我們", path: "/contact" },
        ])}
      />
      <SectionHeading
        kicker="聯絡我們"
        title="想詢問台中滑板課程，請先加入 LINE"
        description="請告訴我們學員年齡、是否有滑板經驗、想學的方向與方便上課的區域，Keep 會回覆適合的課程與教練建議。"
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="space-y-6">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-black text-white">聯絡資訊</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
              <li>電話：{siteContent.site.phone}</li>
              <li>Email：{siteContent.site.email}</li>
              <li>上課地點：{siteContent.site.address}</li>
              <li>
                <a
                  href={siteContent.site.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent)]"
                >
                  加入 LINE 官方帳號
                </a>
              </li>
            </ul>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <iframe
              title="Keep 滑板教室地圖"
              src={siteContent.site.mapEmbedUrl}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        </div>

        <article className="rounded-[2rem] border border-[var(--accent)]/25 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-black text-white">LINE 詢問時可以先提供</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-white/72">
            <li>• 學員年齡與是否有滑板經驗</li>
            <li>• 想詢問的課程：初學、兒童、成人、親子、一對一或進階技巧</li>
            <li>• 方便上課的台中區域與大概時段</li>
            <li>• 是否有自己的滑板與護具</li>
          </ul>
          <a
            href={siteContent.site.lineUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-black"
          >
            加入 LINE 詢問課程
          </a>
        </article>
      </section>

      <section className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-2xl font-black text-white">常見問題</h2>
        <div className="mt-5">
          <FAQAccordion items={siteContent.faqs} />
        </div>
      </section>

      <section className="mt-12">
        <LineCTASection />
      </section>
    </main>
  );
}
