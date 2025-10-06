import { notFound } from "next/navigation";
import { loadContentBySlug, listContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export const dynamicParams = true;

export async function generateStaticParams() {
  const items = await listContent("content/events");
  return items.map((i) => ({ slug: i.slug }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await loadContentBySlug("content/events", slug);
  if (!event) return notFound();
  const components = useMDXComponents({});
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <article className="prose dark:prose-invert max-w-none mt-6">
        {/* @ts-expect-error RSC MDX */}
        <MDXRemote source={event.content} components={components} />
      </article>
    </main>
  );
}


