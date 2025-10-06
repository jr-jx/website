import Link from "next/link";
import { listContent } from "@/lib/mdx";

export default async function BlogIndexPage() {
  const posts = await listContent("content/blog");
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">博客/文章</h1>
      <p className="mt-4 text-muted-foreground">文章列表：</p>
      <ul className="mt-6 list-disc pl-6">
        {posts.length === 0 && (
          <li className="list-none pl-0 text-muted-foreground">暂无文章</li>
        )}
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              className="text-primary underline-offset-4 hover:underline"
              href={`/blog/${p.slug}`}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


