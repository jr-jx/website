"use client";

import { ReactNode } from "react";
import { Animated3D } from "./Animated3D";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  animationType?: "float" | "rotate" | "scale" | "tilt";
  hover?: boolean;
  gradient?: boolean;
}

export function Card3D({
  children,
  className = "",
  animationType = "float",
  hover = true,
  gradient = false,
}: Card3DProps) {
  return (
    <Animated3D animationType={animationType}>
      <div
        className={cn(
          "relative bg-card/80 backdrop-blur-sm rounded-3xl border shadow-lg transition-all duration-300",
          hover && "hover:shadow-2xl hover:scale-105",
          gradient && "group",
          className,
        )}
      >
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        )}
        <div className="relative">{children}</div>
      </div>
    </Animated3D>
  );
}
