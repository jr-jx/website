import { Badge } from "@/components/mdx/Badge";
import { Button } from "@/components/ui/button";
import { type EventDetails } from "@/types/event";

interface EventDetailsProps {
  event: EventDetails;
}

export function EventDetails({ event }: EventDetailsProps) {
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
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
    <div className="space-y-6">
      {/* Event Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{event.title}</h1>
            <div className="flex items-center gap-2">
              {event.draft && <Badge>草稿</Badge>}
              {!isUpcoming && <Badge>已结束</Badge>}
              {isFull && <Badge>已满员</Badge>}
            </div>
          </div>
          
          {event.registrationUrl && isUpcoming && !isFull && (
            <Button asChild size="lg">
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                立即报名
              </a>
            </Button>
          )}
        </div>

        {event.excerpt && (
          <p className="text-lg text-muted-foreground">{event.excerpt}</p>
        )}
      </div>

      {/* Event Info */}
      <div className="grid gap-4 md:grid-cols-2">
        {event.date && (
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">活动时间</h3>
            <p className="text-sm text-muted-foreground">
              {formatDate(event.date)}
              {(event.startTime || event.endTime) && (
                <span className="block mt-1">
                  {event.startTime && formatTime(event.startTime)}
                  {event.startTime && event.endTime && " - "}
                  {event.endTime && formatTime(event.endTime)}
                </span>
              )}
            </p>
          </div>
        )}

        {event.location && (
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">活动地点</h3>
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>
        )}

        {event.maxAttendees && (
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">参与人数</h3>
            <p className="text-sm text-muted-foreground">
              {event.currentAttendees || 0} / {event.maxAttendees} 人
            </p>
            {event.maxAttendees > 0 && (
              <div className="mt-2 w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{
                    width: `${Math.min(100, ((event.currentAttendees || 0) / event.maxAttendees) * 100)}%`,
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tags */}
      {event.tags && event.tags.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">标签</h3>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
