"use client";

import { ReactNode } from "react";
import { PageCard } from "./PageCard";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ icon, value, label, className = "" }: StatCardProps) {
  return (
    <PageCard className={`p-6 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-foreground">{value}</div>
          <div className="text-muted-foreground">{label}</div>
        </div>
      </div>
    </PageCard>
  );
}
