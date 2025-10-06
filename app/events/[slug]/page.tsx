import { notFound } from "next/navigation";
import { loadContentBySlug, listContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { EventDetails } from "@/components/events/EventDetails";

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
  
  // Don't show draft events in production
  if (event.draft && process.env.NODE_ENV === "production") {
    return notFound();
  }
  
  return (
    <main className="container mx-auto px-6 py-10">
      <EventDetails event={event} />
      <article className="prose dark:prose-invert max-w-none mt-8">
        <MDXRemote source={event.content} />
      </article>
    </main>
  );
}


