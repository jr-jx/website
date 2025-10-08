"use client";

import { ReactNode } from "react";
import { GlobalBackground } from "./GlobalBackground";

interface PageContainerProps {
  children: ReactNode;
  variant?: "hero" | "section" | "muted" | "default";
  className?: string;
}

export function PageContainer({
  children,
  variant = "default",
  className = "",
}: PageContainerProps) {
  return (
    <GlobalBackground variant={variant}>
      <div className={`relative z-10 ${className}`}>{children}</div>
    </GlobalBackground>
  );
}
