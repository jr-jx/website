import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">博客/文章</h1>
      <p className="mt-4 text-muted-foreground">文章列表与示例：</p>
      <ul className="mt-6 list-disc pl-6">
        <li>
          <Link className="text-primary underline-offset-4 hover:underline" href="/blog/hello">MDX 示例：你好，MDX</Link>
        </li>
      </ul>
    </main>
  );
}


