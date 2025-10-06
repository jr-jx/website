import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type ContentMeta = {
  title: string;
  date?: string;
  excerpt?: string;
  slug: string;
  draft?: boolean;
};

export type LoadedContent = ContentMeta & {
  content: string;
};

async function readDirectoryFiles(dir: string): Promise<string[]> {
  const cwd = process.cwd();
  const directory = path.join(cwd, dir);
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
      .map((e) => path.join(directory, e.name));
  } catch {
    return [];
  }
}

export async function listContent(dir: string, includeDrafts = false): Promise<ContentMeta[]> {
  const files = await readDirectoryFiles(dir);
  const items: ContentMeta[] = [];
  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const { data } = matter(raw);
    const slug = path.basename(file).replace(/\.mdx$/, "");
    const isDraft = Boolean(data.draft);
    
    // Skip drafts unless explicitly included
    if (isDraft && !includeDrafts) continue;
    
    items.push({
      title: typeof data.title === "string" ? data.title : slug,
      date: typeof data.date === "string" ? data.date : undefined,
      excerpt: typeof data.excerpt === "string" ? data.excerpt : undefined,
      slug,
      draft: isDraft,
    });
  }
  // sort by date desc if present, otherwise by title
  return items.sort((a, b) => {
    if (a.date && b.date) return a.date > b.date ? -1 : 1;
    return a.title.localeCompare(b.title);
  });
}

export async function loadContentBySlug(
  dir: string,
  slug: string
): Promise<LoadedContent | null> {
  const cwd = process.cwd();
  const filepath = path.join(cwd, dir, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filepath, "utf8");
    const { content, data } = matter(raw);
    return {
      title: typeof data.title === "string" ? data.title : slug,
      date: typeof data.date === "string" ? data.date : undefined,
      excerpt: typeof data.excerpt === "string" ? data.excerpt : undefined,
      slug,
      draft: Boolean(data.draft),
      content,
    };
  } catch {
    return null;
  }
}


