import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import { Callout } from "@/components/mdx/Callout";
import { Badge } from "@/components/mdx/Badge";
import { CodeBlock } from "@/components/mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className={cn(
          "scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl",
          (props as any)?.className
        )}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className={cn(
          "scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
          (props as any)?.className
        )}
        {...props}
      />
    ),
    p: (props) => (
      <p className={cn("leading-7", (props as any)?.className)} {...props} />
    ),
    Callout,
    Badge,
    CodeBlock,
    ...components,
  };
}


