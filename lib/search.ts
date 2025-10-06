import Fuse from "fuse.js";
import { listContent, type ContentMeta } from "@/lib/mdx";

export type SearchItem = ContentMeta & { type: "blog" | "event" };

export type SearchResult = SearchItem & {
  url: string;
  score?: number;
  matches?: Array<{
    key: "title" | "excerpt" | "slug";
    indices: Array<[number, number]>;
  }>;
};

let cache: { index: Fuse<SearchItem> | null; items: SearchItem[] } = {
  index: null,
  items: [],
};

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
    includeMatches: true,
    threshold: 0.35,
    minMatchCharLength: 2,
  });
}

export async function search(
  query: string,
  options?: { type?: "blog" | "event" | "all"; limit?: number }
): Promise<SearchResult[]> {
  if (!cache.index) await buildIndex();
  if (!cache.index) return [];
  const q = query.trim();
  if (!q) return [];
  const { type = "all", limit = 20 } = options || {};
  const results = cache.index
    .search(q)
    .filter((r) => (type === "all" ? true : r.item.type === type))
    .slice(0, Math.max(1, Math.min(50, limit)));
  return results.map((r) => ({
    ...r.item,
    score: r.score ?? undefined,
    url: r.item.type === "blog" ? `/blog/${r.item.slug}` : `/events/${r.item.slug}`,
    matches:
      r.matches?.
        filter((m) => m.key === "title" || m.key === "excerpt" || m.key === "slug")
        .map((m) => ({ key: m.key as "title" | "excerpt" | "slug", indices: m.indices })) || [],
  }));
}


