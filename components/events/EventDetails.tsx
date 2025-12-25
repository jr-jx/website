// import { formatDate } from "@/lib/date"; // 暂时不使用
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type EventDetails } from "@/types/event";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

interface EventDetailsProps {
  event: EventDetails;
}

export function EventDetails({ event }: EventDetailsProps) {
  const formatEventDate = (dateStr?: string) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    const year = date.getFullYear();
    // const month = date.getMonth() + 1; // 暂时不使用
    const day = date.getDate();
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekday = weekdays[date.getDay()];
    const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    const monthName = months[date.getMonth()];
    
    return `${weekday}，${year}年${monthName}${day}日`;
  };

  const formatTime = (timeStr?: string) => {
    if (!timeStr) return null;
    return new Date(`2000-01-01T${timeStr}`).toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isUpcoming = event.date && new Date(event.date) > new Date();

  return (
    <div className="space-y-8">
      {/* Event Header */}
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="space-y-4 flex-1">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                {event.title}
              </h1>
              <div className="flex items-center gap-3">
                {event.draft && <Badge variant="secondary" className="px-3 py-1">草稿</Badge>}
                {!isUpcoming && <Badge variant="destructive" className="px-3 py-1">已结束</Badge>}
                {isUpcoming && !event.draft && <Badge variant="default" className="px-3 py-1">进行中</Badge>}
              </div>
            </div>

            {event.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {event.excerpt}
              </p>
            )}
          </div>

          {event.registrationUrl && isUpcoming && (
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold">
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                立即报名
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Event Info */}
      <div className="grid gap-6 md:grid-cols-2">
        {event.date && (
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">活动时间</h3>
            </div>
            <p className="text-sm text-muted-foreground space-y-1">
              <span className="block font-medium">{formatEventDate(event.date)}</span>
              {(event.startTime || event.endTime) && (
                <span className="flex items-center gap-1 text-sm">
                  <Clock className="h-3 w-3" />
                  {event.startTime && formatTime(event.startTime)}
                  {event.startTime && event.endTime && " - "}
                  {event.endTime && formatTime(event.endTime)}
                </span>
              )}
            </p>
          </div>
        )}

        {event.location && (
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">活动地点</h3>
            </div>
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>
        )}
      </div>

      {/* Tags */}
      {event.tags && event.tags.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">活动标签</h3>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
