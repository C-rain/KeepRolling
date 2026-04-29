import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { focusKeywords, siteContent } from "@/content/site-content";
import { buildCourseJsonLd, buildLocalBusinessJsonLd } from "@/lib/seo";

const root = process.cwd();
const removedRouteDirs = [
  "src/app/shop",
  "src/app/cart",
  "src/app/checkout",
  "src/app/account",
  "src/app/login",
  "src/app/register",
  "src/app/payment",
  "src/app/admin",
  "src/app/api",
  "prisma",
];

async function listFiles(dir: string): Promise<string[]> {
  if (!existsSync(dir)) {
    return [];
  }

  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : Promise.resolve([fullPath]);
    }),
  );

  return nested.flat();
}

describe("pure SEO site architecture", () => {
  it("does not keep commerce, auth, payment, admin, or database routes", () => {
    for (const routeDir of removedRouteDirs) {
      expect(existsSync(path.join(root, routeDir))).toBe(false);
    }
  });

  it("keeps public SEO content for all focus keywords", () => {
    const contentText = JSON.stringify(siteContent);

    for (const keyword of focusKeywords) {
      expect(contentText).toContain(keyword);
    }

    expect(siteContent.navigation.map((item) => item.href)).toEqual([
      "/",
      "/courses",
      "/coaches",
      "/blog",
      "/about",
      "/contact",
    ]);
  });

  it("does not expose shopping or member wording in source content", async () => {
    const files = await listFiles(path.join(root, "src"));
    const source = (
      await Promise.all(
        files
          .filter((file) => /\.(ts|tsx)$/.test(file))
          .map((file) => readFile(file, "utf8")),
      )
    ).join("\n");

    expect(source).not.toContain("購物車");
    expect(source).not.toContain("結帳");
    expect(source).not.toContain("會員中心");
    expect(source).not.toContain("課程券");
    expect(source).not.toContain("金流");
    expect(source).not.toContain("商品庫存");
  });

  it("outputs LocalBusiness and Course structured data", () => {
    expect(buildLocalBusinessJsonLd()).toMatchObject({
      "@type": "LocalBusiness",
      name: siteContent.site.name,
    });

    const course = siteContent.courses[0];
    expect(
      buildCourseJsonLd({
        name: course.name,
        description: course.description,
        image: course.coverImage,
        urlPath: `/courses/${course.slug}`,
      }),
    ).toMatchObject({
      "@type": "Course",
      name: course.name,
    });
  });
});
