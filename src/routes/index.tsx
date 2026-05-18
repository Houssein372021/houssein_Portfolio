import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/App";
import { seo, structuredData } from "@/data/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      {
        name: "description",
        content: seo.description,
      },
      { name: "robots", content: seo.robots },
      { name: "googlebot", content: seo.robots },
      { name: "author", content: seo.author },
      { name: "keywords", content: seo.keywords.join(", ") },
      { name: "application-name", content: seo.siteName },
      { property: "og:title", content: seo.title },
      {
        property: "og:description",
        content: seo.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: seo.url },
      { property: "og:site_name", content: seo.siteName },
      { property: "og:locale", content: seo.locale },
      { property: "og:image", content: seo.image },
      { property: "og:image:alt", content: "Portrait de Houssein GHANNOUM" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: seo.image },
      { name: "twitter:image:alt", content: "Portrait de Houssein GHANNOUM" },
      { "script:ld+json": structuredData },
    ],
    links: [
      { rel: "canonical", href: seo.url },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "apple-touch-icon", href: "/hg-logo-192.png" },
    ],
  }),
  component: App,
});
