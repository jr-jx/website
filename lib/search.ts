import Fuse from "fuse.js";
import { listContent, loadContentBySlug, type ContentMeta } from "@/lib/mdx";

export type SearchItem = ContentMeta & {
  type: "blog" | "event";
};

let cache: {
  index: Fuse<SearchItem> | null;
  items: SearchItem[];
} = { index: null, items: [] };

export async function buildIndex(): Promise<void> {
  const blogs = await listContent("content/blog");
  const events = await listContent("content/events");
  const items: SearchItem[] = [
    ...blogs.map((b) => ({ ...b, type: "blog" as const })),
    ...events.map((e) => ({ ...e, type: "event" as const })),
  ];
  cache.items = items;
  cache.index = new Fuse(items, {
    keys: ["title", "excerpt", "slug"],
    includeScore: true,
    threshold: 0.35,
  });
}

export async function search(query: string): Promise<Array<SearchItem & { url: string; score?: number }>> {
  if (!cache.index) await buildIndex();
  if (!cache.index) return [];
  const q = query.trim();
  if (!q) return [];
  const results = cache.index.search(q);
  return results.map((r) => ({
    ...r.item,
    score: r.score ?? undefined,
    url: r.item.type === "blog" ? `/blog/${r.item.slug}` : `/events/${r.item.slug}`,
  }));
}


