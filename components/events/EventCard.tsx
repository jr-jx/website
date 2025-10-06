import Link from "next/link";
import { Badge } from "@/components/mdx/Badge";
import { Button } from "@/components/ui/button";
import { type EventMeta } from "@/types/event";

interface EventCardProps {
  event: EventMeta;
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeStr?: string) => {
    if (!timeStr) return null;
    return new Date(`2000-01-01T${timeStr}`).toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isUpcoming = event.date && new Date(event.date) > new Date();
  const isFull = event.maxAttendees && event.currentAttendees && event.currentAttendees >= event.maxAttendees;

  return (
    <div className="rounded-lg border p-6 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold">
            <Link href={`/events/${event.slug}`} className="hover:underline">
              {event.title}
            </Link>
          </h3>
          {event.draft && <Badge>草稿</Badge>}
          {!isUpcoming && <Badge>已结束</Badge>}
          {isFull && <Badge>已满员</Badge>}
        </div>
        
        {event.excerpt && (
          <p className="text-muted-foreground">{event.excerpt}</p>
        )}
      </div>

      <div className="space-y-2 text-sm">
        {event.date && (
          <div className="flex items-center gap-2">
            <span className="font-medium">日期:</span>
            <span>{formatDate(event.date)}</span>
          </div>
        )}
        
        {(event.startTime || event.endTime) && (
          <div className="flex items-center gap-2">
            <span className="font-medium">时间:</span>
            <span>
              {event.startTime && formatTime(event.startTime)}
              {event.startTime && event.endTime && " - "}
              {event.endTime && formatTime(event.endTime)}
            </span>
          </div>
        )}
        
        {event.location && (
          <div className="flex items-center gap-2">
            <span className="font-medium">地点:</span>
            <span>{event.location}</span>
          </div>
        )}
        
        {event.maxAttendees && (
          <div className="flex items-center gap-2">
            <span className="font-medium">人数:</span>
            <span>
              {event.currentAttendees || 0} / {event.maxAttendees}
            </span>
          </div>
        )}
      </div>

      {event.tags && event.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {event.tags.map((tag) => (
            <Badge key={tag} className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <Button asChild size="sm">
          <Link href={`/events/${event.slug}`}>查看详情</Link>
        </Button>
        
        {event.registrationUrl && isUpcoming && !isFull && (
          <Button asChild variant="outline" size="sm">
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
              立即报名
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
