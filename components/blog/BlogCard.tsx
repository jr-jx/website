import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BlogWithUrl } from "@/types/content";

interface BlogCardProps {
  blog: BlogWithUrl;
}

export function BlogCard({ blog }: BlogCardProps) {
  const getAuthorAvatar = (github?: string) => {
    if (github) {
      return `https://wsrv.nl/?url=github.com/${github}.png`;
    }
    return undefined;
  };

  const getAuthorName = (author?: { name: string; github?: string }) => {
    if (author?.name) {
      return author.name;
    }
    if (author?.github) {
      return `@${author.github}`;
    }
    return "未知作者";
  };

  const getAuthorInitials = (author?: { name: string; github?: string }) => {
    if (author?.name) {
      return author.name.charAt(0).toUpperCase();
    }
    if (author?.github) {
      return author.github.charAt(0).toUpperCase();
    }
    return "?";
  };

  return (
    <Link href={blog.url} className="block">
      <Card className="group h-full overflow-hidden transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer p-0">
        {blog.cover && (
          <div className="relative h-32 w-full overflow-hidden">
            <Image
              src={blog.cover}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        )}
        
        <CardHeader className="p-4 pb-2">
          <h3 className="line-clamp-2 text-base font-semibold leading-tight group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          
          {blog.excerpt && (
            <p className="line-clamp-2 text-sm text-muted-foreground mt-1">
              {blog.excerpt}
            </p>
          )}
        </CardHeader>
        
        <CardContent className="p-4 pt-0">
          <div className="flex items-center justify-between gap-2">
            {/* 左侧：分类和标签 */}
            <div className="flex flex-wrap gap-1 items-center">
              {blog.categories && blog.categories.length > 0 && (
                <>
                  {blog.categories.slice(0, 1).map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs px-1.5 py-0.5 text-[10px]">
                      {category}
                    </Badge>
                  ))}
                </>
              )}
              
              {blog.tags && blog.tags.length > 0 && (
                <>
                  {blog.tags.slice(0, 1).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-1.5 py-0.5 text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                  {blog.tags.length > 1 && (
                    <Badge variant="outline" className="text-xs px-1.5 py-0.5 text-[10px]">
                      +{blog.tags.length - 1}
                    </Badge>
                  )}
                </>
              )}
              <time className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                  {new Date(blog.date).toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
              </time>
            </div>
            
            {/* 右侧：作者信息 */}
            <div className="flex items-center gap-2">
              <Avatar className="h-5 w-5">
                <AvatarImage 
                  src={getAuthorAvatar(blog.author?.github)} 
                  alt={getAuthorName(blog.author)} 
                />
                <AvatarFallback className="text-xs">
                  {getAuthorInitials(blog.author)}
                </AvatarFallback>
              </Avatar>
              <div className="text-right">
                <div className="text-xs font-medium truncate">
                  {getAuthorName(blog.author)}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}