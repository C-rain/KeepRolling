import type { Metadata } from "next";

import { siteContent } from "@/content/site-content";

const metadataBase = new URL(process.env.APP_BASE_URL ?? "http://localhost:3000");

export function absoluteUrl(path = "/") {
  return new URL(path, metadataBase).toString();
}

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}) {
  const image = input.image ?? siteContent.site.heroImage;
  const socialTitle = `${input.title}｜${siteContent.site.name}`;

  return {
    metadataBase,
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: {
      canonical: absoluteUrl(input.path),
    },
    openGraph: {
      title: socialTitle,
      description: input.description,
      url: absoluteUrl(input.path),
      siteName: siteContent.site.name,
      locale: "zh_TW",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: input.description,
      images: [image],
    },
  } satisfies Metadata;
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/SportsActivityLocation",
    name: siteContent.site.name,
    url: absoluteUrl("/"),
    telephone: siteContent.site.phone,
    email: siteContent.site.email,
    image: siteContent.site.heroImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.site.address,
      addressCountry: "TW",
      addressRegion: "台中市",
    },
    openingHours: "Mo-Su 10:00-21:00",
    sameAs: [siteContent.site.instagramUrl, siteContent.site.lineUrl],
    areaServed: siteContent.site.areaServed,
    priceRange: "TWD",
    description: siteContent.site.description,
  };
}

export function buildCourseJsonLd(input: {
  name: string;
  description: string;
  image?: string;
  urlPath: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: siteContent.site.name,
      sameAs: absoluteUrl("/"),
    },
    image: input.image,
    url: absoluteUrl(input.urlPath),
  };
}

export function buildArticleJsonLd(input: {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  urlPath: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    image: input.image ? [input.image] : undefined,
    author: {
      "@type": "Organization",
      name: siteContent.site.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteContent.site.name,
    },
    mainEntityOfPage: absoluteUrl(input.urlPath),
  };
}

export function buildFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
