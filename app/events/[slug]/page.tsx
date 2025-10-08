import { notFound } from "next/navigation";
import { getAllEvents, getEventBySlug } from "@/lib/content";
import { EventDetails } from "@/components/events/EventDetails";
import { CustomMDX } from "@/components/mdx";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllEvents().map((event) => ({ slug: event.slug }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return notFound();

  // Don't show draft events in production
  if (event.draft && process.env.NODE_ENV === "production") {
    return notFound();
  }

  return (
    <main className="container mx-auto px-6 py-10">
      <EventDetails
        event={{
          ...event,
          content: event.body.raw,
        }}
      />
      <div className="mt-8 prose dark:prose-invert max-w-none">
        <CustomMDX event={event} />
      </div>
    </main>
  );
}
