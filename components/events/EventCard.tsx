import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      month: "short",
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
  const isFull =
    event.maxAttendees && event.currentAttendees && event.currentAttendees >= event.maxAttendees;

  const getStatusBadge = () => {
    if (event.draft) return { text: "草稿", variant: "secondary" as const };
    if (!isUpcoming) return { text: "已结束", variant: "destructive" as const };
    if (isFull) return { text: "已满员", variant: "destructive" as const };
    return { text: "进行中", variant: "default" as const };
  };

  const status = getStatusBadge();

  return (
    <Link href={`/events/${event.slug}`} className="block">
      <Card className="group h-full overflow-hidden transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer p-0">
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-base font-semibold leading-tight group-hover:text-primary transition-colors flex-1">
              {event.title}
            </h3>
            <Badge variant={status.variant} className="text-xs px-2 py-0.5 shrink-0">
              {status.text}
            </Badge>
          </div>
          
          {event.excerpt && (
            <p className="line-clamp-2 text-sm text-muted-foreground mt-1">
              {event.excerpt}
            </p>
          )}
        </CardHeader>
        
        <CardContent className="p-4 pt-0 space-y-3">
          {/* 活动信息 */}
          <div className="space-y-1 text-xs text-muted-foreground">
            {event.date && (
              <div className="flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(event.date)}</span>
                {(event.startTime || event.endTime) && (
                  <span>
                    {event.startTime && formatTime(event.startTime)}
                    {event.startTime && event.endTime && " - "}
                    {event.endTime && formatTime(event.endTime)}
                  </span>
                )}
              </div>
            )}
            
            {event.location && (
              <div className="flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">{event.location}</span>
              </div>
            )}
            
            {event.maxAttendees && (
              <div className="flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>
                  {event.currentAttendees || 0} / {event.maxAttendees} 人
                </span>
              </div>
            )}
          </div>
          
          {/* 底部：标签和操作按钮 */}
          <div className="flex items-center justify-between">
            {/* 左侧：标签 */}
            <div className="flex flex-wrap gap-1">
              {event.tags && event.tags.length > 0 && (
                <>
                  {event.tags.slice(0, 1).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-1.5 py-0.5 text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                  {event.tags.length > 1 && (
                    <Badge variant="outline" className="text-xs px-1.5 py-0.5 text-[10px]">
                      +{event.tags.length - 1}
                    </Badge>
                  )}
                </>
              )}
            </div>
            
            {/* 右侧：操作按钮 */}
            <div className="flex gap-1">
              {event.registrationUrl && isUpcoming && !isFull && (
                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 px-2 text-xs"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  报名
                </Button>
              )}
              <Button
                size="sm"
                variant="ghost"
                className="h-6 px-2 text-xs"
              >
                详情
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
