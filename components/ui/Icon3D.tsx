"use client";

import { ReactNode } from "react";
import { Animated3D } from "./Animated3D";

interface Icon3DProps {
  icon: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  animationType?: "float" | "rotate" | "scale" | "tilt";
  className?: string;
}

export function Icon3D({ 
  icon, 
  size = "lg", 
  color = "primary",
  animationType = "float",
  className = ""
}: Icon3DProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm": return "w-8 h-8 text-lg";
      case "md": return "w-12 h-12 text-xl";
      case "lg": return "w-16 h-16 text-2xl";
      case "xl": return "w-20 h-20 text-3xl";
      default: return "w-16 h-16 text-2xl";
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case "primary": return "bg-primary/10 text-primary";
      case "secondary": return "bg-secondary/10 text-secondary";
      case "accent": return "bg-accent/10 text-accent";
      case "success": return "bg-green-500/10 text-green-500";
      case "warning": return "bg-yellow-500/10 text-yellow-500";
      case "error": return "bg-red-500/10 text-red-500";
      default: return "bg-primary/10 text-primary";
    }
  };

  return (
    <Animated3D animationType={animationType} className={className}>
      <div className={`
        ${getSizeClasses()} 
        ${getColorClasses()} 
        rounded-2xl flex items-center justify-center
        shadow-lg border border-current/20
        backdrop-blur-sm
      `}>
        {icon}
      </div>
    </Animated3D>
  );
}
