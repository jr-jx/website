"use client";

import { ReactNode } from "react";

interface GlobalBackgroundProps {
  children: ReactNode;
  variant?: "hero" | "section" | "muted" | "default";
}

export function GlobalBackground({ children, variant = "default" }: GlobalBackgroundProps) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-br from-background via-background to-muted/20";
      case "section":
        return "bg-muted/30";
      case "muted":
        return "bg-background";
      default:
        return "bg-background";
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
        return "absolute top-1/4 left-1/4 w-32 h-32 bg-primary/1 rounded-full blur-3xl animate-pulse";
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
        return "absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/1 rounded-full blur-3xl animate-pulse delay-1000";
    }
  };

  return (
    <div className={`relative min-h-screen ${getBackgroundClasses()}`}>
      {/* 全局背景装饰 */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className={getDecorationClasses()} />
        <div className={getSecondaryDecorationClasses()} />

        {/* 微动感粒子效果 */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-ping delay-300" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-secondary/30 rounded-full animate-ping delay-700" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-ping delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-secondary/25 rounded-full animate-ping delay-500" />

        {/* 浮动几何图形 */}
        <div
          className="absolute top-1/5 right-1/5 w-4 h-4 border border-primary/10 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-1/5 left-1/5 w-3 h-3 border border-secondary/10 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-2 h-2 bg-primary/5 rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>

      {children}
    </div>
  );
}
