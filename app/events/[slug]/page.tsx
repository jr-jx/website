import { notFound } from "next/navigation";
import { loadContentBySlug, listContent } from "@/lib/mdx";
import { EventDetails } from "@/components/events/EventDetails";
import { MDXContent } from "@/components/mdx/MDXContent";

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
      <div className="mt-8">
        <MDXContent source={event.content} />
      </div>
    </main>
  );
}


