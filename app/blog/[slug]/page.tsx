import { notFound } from "next/navigation";
import { loadContentBySlug, listContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export const dynamicParams = true;

export async function generateStaticParams() {
  const items = await listContent("content/blog");
  return items.map((i) => ({ slug: i.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadContentBySlug("content/blog", slug);
  if (!post) return notFound();
  const components = useMDXComponents({});
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <article className="prose dark:prose-invert max-w-none mt-6">
        {/* @ts-expect-error RSC MDX */}
        <MDXRemote source={post.content} components={components} />
      </article>
    </main>
  );
}


