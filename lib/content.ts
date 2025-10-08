// 重新导出 MDX 内容管理函数
export * from './mdx';
import type { ContentSearchOptions } from "@/types/content";
import { getAllBlogs, getAllEvents } from './mdx';

// 搜索内容
export function searchContent(options: ContentSearchOptions = {}) {
  const { query = "", filter = {}, sort = "date", limit, offset = 0 } = options;

  let results = [...getAllBlogs(), ...getAllEvents()];

  // 应用过滤器
  if (filter.draft !== undefined) {
    results = results.filter((item) => item.draft === filter.draft);
  }

  if (filter.tags && filter.tags.length > 0) {
    results = results.filter((item) => item.tags?.some((tag) => filter.tags!.includes(tag)));
  }

  if (filter.dateRange) {
    const { start, end } = filter.dateRange;
    results = results.filter((item) => {
      const itemDate = new Date(item.date);
      if (start && itemDate < new Date(start)) return false;
      if (end && itemDate > new Date(end)) return false;
      return true;
    });
  }

  // 应用搜索查询
  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.excerpt?.toLowerCase().includes(searchTerm) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(searchTerm)),
    );
  }

  // 应用排序
  results.sort((a, b) => {
    switch (sort) {
      case "title":
        return a.title.localeCompare(b.title);
      case "slug":
        return a.slug.localeCompare(b.slug);
      case "date":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // 应用分页
  if (offset > 0) {
    results = results.slice(offset);
  }

  if (limit) {
    results = results.slice(0, limit);
  }

  return results;
}
