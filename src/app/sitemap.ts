import type { MetadataRoute } from "next";
import { newsItems, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/coffee",
    "/sourcing-process",
    "/sustainability",
    "/clientele",
    "/export",
    "/news",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const newsRoutes = newsItems.map((item) => ({
    url: `${siteConfig.url}/news/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
