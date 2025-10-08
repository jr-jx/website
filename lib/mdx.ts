import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog, Event, BlogWithUrl, EventWithUrl } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

// 获取所有 MDX 文件
function getAllMdxFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.mdx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// 解析 MDX 文件
function parseMdxFile(filePath: string, type: 'blog' | 'event'): Blog | Event {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const slug = path.basename(filePath, '.mdx');
  
  const baseContent = {
    slug,
    title: data.title || '',
    cover: data.cover || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    draft: data.draft || false,
    tags: data.tags || [],
    categories: data.categories || [],
    body: {
      raw: content,
      code: content,
    },
  };
  
  if (type === 'blog') {
    return {
      ...baseContent,
      author: {
        name: data.author.name || '',
        github: data.author.github || '',
      }
    } as Blog;
  } else {
    return {
      ...baseContent,
    } as Event;
  }
}

// 获取所有博客文章
export function getAllBlogs(): BlogWithUrl[] {
  const blogDir = path.join(contentDirectory, 'blog');
  if (!fs.existsSync(blogDir)) return [];
  
  const files = getAllMdxFiles(blogDir);
  return files.map(file => {
    const blog = parseMdxFile(file, 'blog') as Blog;
    return {
      ...blog,
      url: `/blog/${blog.slug}`,
    };
  });
}

// 获取所有活动
export function getAllEvents(): EventWithUrl[] {
  const eventDir = path.join(contentDirectory, 'events');
  if (!fs.existsSync(eventDir)) return [];
  
  const files = getAllMdxFiles(eventDir);
  return files.map(file => {
    const event = parseMdxFile(file, 'event') as Event;
    return {
      ...event,
      url: `/events/${event.slug}`,
    };
  });
}

// 获取已发布的博客文章
export function getPublishedBlogs(): BlogWithUrl[] {
  return getAllBlogs().filter((blog) => !blog.draft);
}

// 获取已发布的活动
export function getPublishedEvents(): EventWithUrl[] {
  return getAllEvents().filter((event) => !event.draft);
}

// 根据 slug 获取博客文章
export function getBlogBySlug(slug: string): BlogWithUrl | undefined {
  return getAllBlogs().find((blog) => blog.slug === slug);
}

// 根据 slug 获取活动
export function getEventBySlug(slug: string): EventWithUrl | undefined {
  return getAllEvents().find((event) => event.slug === slug);
}

// 获取最新的博客文章
export function getLatestBlogs(count: number = 5): BlogWithUrl[] {
  return getPublishedBlogs()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// 获取最新的活动
export function getLatestEvents(count: number = 5): EventWithUrl[] {
  return getPublishedEvents()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// 根据标签获取博客文章
export function getBlogsByTag(tag: string): BlogWithUrl[] {
  return getPublishedBlogs().filter((blog) => blog.tags?.includes(tag));
}

// 根据标签获取活动
export function getEventsByTag(tag: string): EventWithUrl[] {
  return getPublishedEvents().filter((event) => event.tags?.includes(tag));
}

// 根据分类获取博客文章
export function getBlogsByCategory(category: string): BlogWithUrl[] {
  return getPublishedBlogs().filter((blog) => blog.categories?.includes(category));
}

// 获取所有标签
export function getAllTags(): string[] {
  const blogTags = getAllBlogs().flatMap((blog) => blog.tags || []);
  const eventTags = getAllEvents().flatMap((event) => event.tags || []);
  return Array.from(new Set([...blogTags, ...eventTags]));
}

// 获取所有分类
export function getAllCategories(): string[] {
  const blogCategories = getAllBlogs().flatMap((blog) => blog.categories || []);
  return Array.from(new Set(blogCategories));
}

// 获取标签统计
export function getTagStats(): Record<string, number> {
  const allTags = [...getAllBlogs(), ...getAllEvents()].flatMap((item) => item.tags || []);
  const stats: Record<string, number> = {};

  allTags.forEach((tag) => {
    stats[tag] = (stats[tag] || 0) + 1;
  });

  return stats;
}

// 获取分类统计
export function getCategoryStats(): Record<string, number> {
  const allCategories = getAllBlogs().flatMap((blog) => blog.categories || []);
  const stats: Record<string, number> = {};

  allCategories.forEach((category) => {
    stats[category] = (stats[category] || 0) + 1;
  });

  return stats;
}
