import Fuse from "fuse.js";
import { getAllBlogs, getAllEvents } from "./content";

export type SearchItem = {
  title: string;
  excerpt?: string;
  slug: string;
  type: "blog" | "event";
};

export type SearchResult = SearchItem & {
  url: string;
  score?: number;
  matches?: Array<{
    key: "title" | "excerpt" | "slug";
    indices: Array<[number, number]>;
  }>;
};

const cache: { index: Fuse<SearchItem> | null; items: SearchItem[] } = {
  index: null,
  items: [],
};

export async function buildIndex(): Promise<void> {
  const blogs = getAllBlogs().filter((blog) => !blog.draft);
  const events = getAllEvents().filter((event) => !event.draft);
  const items: SearchItem[] = [
    ...blogs.map((b) => ({
      title: b.title,
      excerpt: b.excerpt,
      slug: b.slug,
      type: "blog" as const,
    })),
    ...events.map((e) => ({
      title: e.title,
      excerpt: e.excerpt,
      slug: e.slug,
      type: "event" as const,
    })),
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
  options?: { type?: "blog" | "event" | "all"; limit?: number },
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
      r.matches
        ?.filter((m) => m.key === "title" || m.key === "excerpt" || m.key === "slug")
        .map((m) => ({
          key: m.key as "title" | "excerpt" | "slug",
          indices: [...m.indices] as [number, number][],
        })) || [],
  }));
}
