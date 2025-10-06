import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout } from "@/components/mdx/Callout";
import { Badge } from "@/components/mdx/Badge";
import { CodeBlock } from "@/components/mdx/CodeBlock";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  const components = {
    Callout,
    Badge,
    CodeBlock,
  };
  
  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
