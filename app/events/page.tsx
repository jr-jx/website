import { listContent } from "@/lib/mdx";
import { EventCard } from "@/components/events/EventCard";

export default async function EventsPage() {
  const events = await listContent("content/events");
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">活动/日程</h1>
      <p className="mt-4 text-muted-foreground">活动列表：</p>
      
      {events.length === 0 ? (
        <p className="mt-6 text-muted-foreground">暂无活动</p>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </main>
  );
}


