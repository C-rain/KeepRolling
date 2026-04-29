import { BlogCard } from "@/components/site/blog-card";
import { SectionHeading } from "@/components/site/section-heading";
import { StructuredData } from "@/components/ui/structured-data";
import { focusKeywords, siteContent } from "@/content/site-content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "台中滑板教學推薦專欄",
  description:
    "閱讀 Keep 滑板教室的台中滑板教學推薦、台中滑板課程選擇、兒童滑板課與台中滑板教練相關文章。",
  path: "/blog",
  keywords: ["台中滑板教學推薦", "滑板教學推薦", "台中滑板課程推薦", ...focusKeywords],
});

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <StructuredData
        data={buildBreadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "滑板專欄", path: "/blog" },
        ])}
      />
      <SectionHeading
        kicker="滑板專欄"
        title="找台中滑板教學推薦前，先把課程觀念弄清楚"
        description="文章聚焦台中滑板課程、台中滑板教室推薦、兒童滑板安全與滑板教練選擇。"
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {siteContent.blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
