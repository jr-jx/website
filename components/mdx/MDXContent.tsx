"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  const components = useMDXComponents({});
  
  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
