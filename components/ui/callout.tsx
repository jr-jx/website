import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const calloutVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        warning: "bg-yellow-50 text-yellow-900 border-yellow-200 dark:bg-yellow-950/50 dark:text-yellow-200 dark:border-yellow-800",
        error: "bg-red-50 text-red-900 border-red-200 dark:bg-red-950/50 dark:text-red-200 dark:border-red-800",
        info: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/50 dark:text-blue-200 dark:border-blue-800",
        success: "bg-green-50 text-green-900 border-green-200 dark:bg-green-950/50 dark:text-green-200 dark:border-green-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  icon?: React.ReactNode;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(calloutVariants({ variant }), className)}
        {...props}
      >
        {icon}
        <div className="[&>p]:m-0 [&>p]:text-sm">{children}</div>
      </div>
    );
  }
);

Callout.displayName = "Callout";

export { Callout, calloutVariants };
export default Callout;
