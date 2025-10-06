import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { listContent } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const staticRoutes = ["/", "/about", "/team", "/events", "/blog", "/docs", "/join", "/contact"].map(
    (path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 })
  );
  const blog = await listContent("content/blog");
  const events = await listContent("content/events");
  const blogRoutes = blog.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 }));
  const eventRoutes = events.map((e) => ({ url: `${base}/events/${e.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 }));
  return [...staticRoutes, ...blogRoutes, ...eventRoutes];
}


