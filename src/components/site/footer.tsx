import { siteContent } from "@/content/site-content";
import { SiteLink } from "@/components/site/site-link";

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
            Keep Skate Class
          </div>
          <h2 className="text-2xl font-black text-white">
            台中滑板教學，從第一步開始滑出自己的風格
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/68">
            Keep 滑板教室專注台中滑板教學、兒童滑板課程、成人滑板課、
            親子共學與一對一滑板教練課程。課程諮詢與報名請透過 LINE 聯繫。
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            站內導覽
          </h3>
          <ul className="space-y-3 text-sm text-white/68">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <SiteLink href={item.href} className="transition hover:text-[var(--sun)]">
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            聯絡資訊
          </h3>
          <ul className="space-y-3 text-sm text-white/68">
            <li>電話：{siteContent.site.phone}</li>
            <li>Email：{siteContent.site.email}</li>
            <li>地址：{siteContent.site.address}</li>
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
        </div>
      </div>
      <div className="border-t border-white/8 px-4 py-4 text-center text-xs text-white/42 sm:px-6">
        © 2026 Keep 滑板教室. All rights reserved.
      </div>
    </footer>
  );
}
