import { cn } from "@/lib/utils";

export function Callout({
  children,
  type = "info",
  className,
}: {
  children: React.ReactNode;
  type?: "info" | "warn" | "error" | "success";
  className?: string;
}) {
  const color =
    type === "warn"
      ? "bg-yellow-50 text-yellow-900 border-yellow-300 dark:bg-yellow-950/40 dark:text-yellow-100"
      : type === "error"
      ? "bg-red-50 text-red-900 border-red-300 dark:bg-red-950/40 dark:text-red-100"
      : type === "success"
      ? "bg-emerald-50 text-emerald-900 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-100"
      : "bg-blue-50 text-blue-900 border-blue-300 dark:bg-blue-950/40 dark:text-blue-100";
  return (
    <div className={cn("not-prose rounded-md border px-3 py-2 text-sm", color, className)}>
      {children}
    </div>
  );
}


