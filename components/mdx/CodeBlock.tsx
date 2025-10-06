"use client";

import { useState } from "react";

export function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };
  return (
    <div className="not-prose group relative">
      <pre className="overflow-x-auto rounded-md border bg-muted p-4 text-sm"><code>{code}</code></pre>
      <button
        onClick={onCopy}
        className="absolute right-2 top-2 rounded-md border bg-background px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="复制代码"
      >
        {copied ? "已复制" : "复制"}
      </button>
    </div>
  );
}


