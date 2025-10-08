"use client";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ badge, title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
        {badge}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
