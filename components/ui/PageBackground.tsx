"use client";

import { ReactNode } from "react";

interface PageBackgroundProps {
  children: ReactNode;
  variant?: "hero" | "section" | "muted";
  className?: string;
}

export function PageBackground({ children, variant = "hero", className = "" }: PageBackgroundProps) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-br from-background via-background to-muted/20";
      case "section":
        return "bg-muted/30";
      case "muted":
        return "bg-background";
      default:
        return "bg-gradient-to-br from-background via-background to-muted/20";
    }
  };

  const getDecorationClasses = () => {
    switch (variant) {
      case "hero":
        return "absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse";
      case "section":
        return "absolute top-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse";
      case "muted":
        return "absolute top-1/4 left-1/4 w-48 h-48 bg-primary/2 rounded-full blur-3xl animate-pulse";
      default:
        return "absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse";
    }
  };

  const getSecondaryDecorationClasses = () => {
    switch (variant) {
      case "hero":
        return "absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000";
      case "section":
        return "absolute bottom-1/4 right-1/4 w-56 h-56 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000";
      case "muted":
        return "absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/2 rounded-full blur-3xl animate-pulse delay-1000";
      default:
        return "absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000";
    }
  };

  return (
    <div className={`relative overflow-hidden ${getBackgroundClasses()} ${className}`}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className={getDecorationClasses()} />
        <div className={getSecondaryDecorationClasses()} />
      </div>
      {children}
    </div>
  );
}
