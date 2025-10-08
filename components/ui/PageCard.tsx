"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function PageCard({
  children,
  className = "",
  hover = true,
  gradient = false,
}: PageCardProps) {
  return (
    <div
      className={cn(
        "relative bg-card rounded-3xl border shadow-lg transition-all duration-300",
        hover && "hover:shadow-xl",
        gradient && "group",
        className,
      )}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
