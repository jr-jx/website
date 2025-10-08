import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/content";
import { CustomMDX } from "@/components/mdx";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="container mx-auto px-6 py-10">
      <article className="max-w-4xl mx-auto">
        <CustomMDX source={post.body.raw} components={{
          Badge,
          Callout,
        }} />
      </article>
    </main>
  );
}
