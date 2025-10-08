import { getPublishedEvents } from "@/lib/content";
import { EventCard } from "@/components/events/EventCard";

export default async function EventsPage() {
  const events = getPublishedEvents();

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">活动日程</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          参与我们的精彩活动，与志同道合的伙伴一起学习成长
        </p>
      </div>

      {events.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-4 mb-4">
            <svg
              className="h-8 w-8 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">暂无活动</h3>
          <p className="text-muted-foreground">我们正在筹备精彩活动，敬请期待！</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </main>
  );
}
