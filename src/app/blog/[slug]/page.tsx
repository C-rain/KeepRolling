/* eslint-disable @next/next/no-img-element */

import { notFound } from "next/navigation";

import { BlogCard } from "@/components/site/blog-card";
import { CTASection } from "@/components/site/cta-section";
import { StructuredData } from "@/components/ui/structured-data";
import { getBlogPostBySlug, siteContent } from "@/content/site-content";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
  return siteContent.blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "文章不存在",
      description: "找不到這篇文章。",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.coverImage,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => getBlogPostBySlug(relatedSlug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <StructuredData
        data={buildBreadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "滑板專欄", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <StructuredData
        data={buildArticleJsonLd({
          title: post.title,
          description: post.metaDescription,
          image: post.coverImage,
          publishedAt: post.publishedAt,
          urlPath: `/blog/${post.slug}`,
        })}
      />

      <article className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="h-fit rounded-[2rem] border border-[var(--border)] bg-white/76 p-5 shadow-[0_24px_60px_rgba(90,67,42,0.1)] lg:sticky lg:top-24">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">
            文章目錄
          </p>
          <nav className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            {post.sections.map((section, index) => (
              <a
                key={section.heading}
                href={`#section-${index}`}
                className="transition hover:text-[var(--ink)]"
              >
                {section.heading}
              </a>
            ))}
          </nav>
        </aside>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">
            {post.category}
          </p>
          <h1 className="mt-3 text-4xl font-black text-[var(--ink)] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-[var(--muted)]">
            {post.publishedAt} / {post.readTime}
          </p>
          <img
            src={post.coverImage}
            alt={post.title}
            className="mt-8 h-[340px] w-full rounded-[2rem] border-[10px] border-white object-cover shadow-[0_24px_60px_rgba(90,67,42,0.12)]"
          />
          <div className="mt-8 space-y-10">
            {post.sections.map((section, index) => (
              <section key={section.heading} id={`section-${index}`}>
                <h2 className="text-2xl font-black text-[var(--ink)]">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-8 text-[var(--muted)] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="mt-12">
        <CTASection
          kicker="課程諮詢"
          title="看完觀念後，最有效的下一步是讓教練看你的程度"
          description="如果你正在找台中滑板教學推薦，可以先透過 LINE 說明年齡、程度與想學方向，Keep 會協助建議課程。"
          primaryHref={siteContent.site.lineUrl}
          primaryLabel="加入 LINE 詢問課程"
          secondaryHref="/courses"
          secondaryLabel="查看課程介紹"
        />
      </section>

      {relatedPosts.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-3xl font-black text-[var(--ink)]">相關文章</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
