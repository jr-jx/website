import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type EventMeta } from "@/types/event";
import { Calendar, MapPin, Clock } from "lucide-react";

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

  const getStatusBadge = () => {
    if (event.draft) return { text: "草稿", variant: "secondary" as const };
    if (!isUpcoming) return { text: "已结束", variant: "destructive" as const };
    return { text: "进行中", variant: "default" as const };
  };

  const status = getStatusBadge();

  return (
    <Link href={`/events/${event.slug}`} className="block">
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer border-1 bg-gradient-to-br from-background to-muted/20 hover:from-background hover:to-primary/5">
        <CardHeader className="p-6 pb-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary transition-colors flex-1">
              {event.title}
            </h3>
            <Badge variant={status.variant} className="text-xs px-3 py-1 shrink-0 font-medium">
              {status.text}
            </Badge>
          </div>
          
          {event.excerpt && (
            <p className="line-clamp-2 text-sm text-muted-foreground mt-2 leading-relaxed">
              {event.excerpt}
            </p>
          )}
        </CardHeader>
        
        <CardContent className="p-6 pt-0 space-y-4">
          {/* 活动信息 */}
          <div className="space-y-3">
            {event.date && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">{formatDate(event.date)}</span>
                {(event.startTime || event.endTime) && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.startTime && formatTime(event.startTime)}
                    {event.startTime && event.endTime && " - "}
                    {event.endTime && formatTime(event.endTime)}
                  </span>
                )}
              </div>
            )}
            
            {event.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="truncate">{event.location}</span>
              </div>
            )}
          </div>
          
          {/* 底部：标签和操作按钮 */}
          <div className="flex items-center justify-between pt-2">
            {/* 左侧：标签 */}
            <div className="flex flex-wrap gap-1.5">
              {event.tags && event.tags.length > 0 && (
                <>
                  {event.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 font-medium">
                      {tag}
                    </Badge>
                  ))}
                  {event.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{event.tags.length - 2}
                    </Badge>
                  )}
                </>
              )}
            </div>
            
            {/* 右侧：操作按钮 */}
            <div className="flex gap-2">
              {event.registrationUrl && isUpcoming && (
                <Button
                  size="sm"
                  variant="default"
                  className="h-7 px-3 text-xs font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  立即报名
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                className="h-7 px-3 text-xs font-medium"
              >
                查看详情
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
