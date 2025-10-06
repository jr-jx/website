import Link from "next/link";
import { listContent } from "@/lib/mdx";

export default async function EventsPage() {
  const events = await listContent("content/events");
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">活动/日程</h1>
      <p className="mt-4 text-muted-foreground">活动列表：</p>
      <ul className="mt-6 list-disc pl-6">
        {events.length === 0 && (
          <li className="list-none pl-0 text-muted-foreground">暂无活动</li>
        )}
        {events.map((e) => (
          <li key={e.slug}>
            <Link
              className="text-primary underline-offset-4 hover:underline"
              href={`/events/${e.slug}`}
            >
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


