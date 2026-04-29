import type { Metadata } from "next";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { StructuredData } from "@/components/ui/structured-data";
import { siteContent } from "@/content/site-content";
import { buildLocalBusinessJsonLd } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_BASE_URL ?? "http://localhost:3000"),
  title: {
    default: `${siteContent.site.name}｜台中滑板教學・台中滑板教室`,
    template: `%s｜${siteContent.site.name}`,
  },
  description:
    "Keep 滑板教室提供台中滑板教學、台中滑板課程、兒童滑板課、成人滑板課、親子滑板課與一對一滑板教練課程。",
  keywords: [
    "台中滑板教學",
    "台中滑板教室",
    "台中滑板課程",
    "台中滑板教學推薦",
    "滑板教學推薦",
    "台中滑板課程推薦",
    "台中滑板教室推薦",
    "台中滑板教練",
  ],
  openGraph: {
    title: `${siteContent.site.name}｜台中滑板教學・台中滑板教室`,
    description:
      "安全、系統化、適合兒童、成人與親子的台中滑板教學品牌。",
    locale: "zh_TW",
    type: "website",
    images: [{ url: siteContent.site.heroImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.site.name}｜台中滑板教學・台中滑板教室`,
    description:
      "台中滑板教學、兒童滑板課、成人滑板課與一對一滑板教練課程介紹。",
    images: [siteContent.site.heroImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <StructuredData data={buildLocalBusinessJsonLd()} />
        <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_4%,rgba(255,216,107,0.36),transparent_26%),radial-gradient(circle_at_88%_2%,rgba(169,199,162,0.42),transparent_24%),linear-gradient(180deg,#fff9ef_0%,#fff4e6_42%,#f8eadb_100%)] text-[var(--foreground)]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
