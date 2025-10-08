// MDX 内容基础类型
export interface MDXContent {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  draft?: boolean;
  tags?: string[];
  categories?: string[];
  body: {
    raw: string;
    code: string;
  };
}

// 作者信息类型
export interface Author {
  name: string;
  github?: string;
}

// 博客文章类型
export interface Blog extends MDXContent {
  cover?: string;
  author?: Author;
}

// 活动类型
export interface Event extends MDXContent {
  startTime?: string;
  endTime?: string;
  location?: string;
  registrationUrl?: string;
  maxAttendees?: number;
  currentAttendees?: number;
}

// 扩展类型定义
export interface BlogWithUrl extends Blog {
  url: string;
}

export interface EventWithUrl extends Event {
  url: string;
}

// 内容类型联合
export type ContentType = Blog | Event;

// 内容元数据类型
export interface ContentMetadata {
  title: string;
  date: string;
  excerpt?: string;
  draft?: boolean;
  tags?: string[];
}

// 博客特定元数据
export interface BlogMetadata extends ContentMetadata {
  cover?: string;
  categories?: string[];
}

// 活动特定元数据
export interface EventMetadata extends ContentMetadata {
  startTime?: string;
  endTime?: string;
  location?: string;
  registrationUrl?: string;
  maxAttendees?: number;
  currentAttendees?: number;
}

// 内容排序选项
export type SortOption = "date" | "title" | "slug";

// 内容过滤选项
export interface ContentFilter {
  draft?: boolean;
  tags?: string[];
  categories?: string[];
  dateRange?: {
    start?: string;
    end?: string;
  };
}

// 内容搜索选项
export interface ContentSearchOptions {
  query?: string;
  filter?: ContentFilter;
  sort?: SortOption;
  limit?: number;
  offset?: number;
}
