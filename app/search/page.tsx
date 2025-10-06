"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Result = {
  title: string;
  excerpt?: string;
  slug: string;
  type: "blog" | "event";
  url: string;
};

export default function SearchPage() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);
  const [results, setResults] = useState<Result[]>([]);
  const debounced = useDebouncedValue(q, 200);

  useEffect(() => {
    const controller = new AbortController();
    const doSearch = async () => {
      if (!debounced) {
        setResults([]);
        return;
      }
      const r = await fetch(`/api/search?q=${encodeURIComponent(debounced)}`, {
        signal: controller.signal,
      });
      if (!r.ok) return;
      const data = await r.json();
      setResults(data.results as Result[]);
    };
    doSearch();
    return () => controller.abort();
  }, [debounced]);

  useEffect(() => {
    const sp = new URLSearchParams(Array.from(params.entries()));
    if (q) sp.set("q", q);
    else sp.delete("q");
    router.replace(`/search?${sp.toString()}`);
  }, [q]);

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">站内搜索</h1>
      <div className="mt-6 flex items-center gap-2">
        <input
          aria-label="搜索"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="输入标题或关键字..."
          className="w-full max-w-xl rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
        <Button asChild>
          <Link href="/">返回首页</Link>
        </Button>
      </div>
      <ul className="mt-6 space-y-3">
        {results.map((r) => (
          <li key={`${r.type}-${r.slug}`} className="rounded-md border p-4">
            <div className="text-sm text-muted-foreground">{r.type === "blog" ? "文章" : "活动"}</div>
            <Link className="text-lg font-semibold underline-offset-4 hover:underline" href={r.url}>
              {r.title}
            </Link>
            {r.excerpt && <p className="mt-1 text-sm text-muted-foreground">{r.excerpt}</p>}
          </li>
        ))}
        {!q && <li className="text-muted-foreground">输入搜索词开始检索。</li>}
        {q && results.length === 0 && (
          <li className="text-muted-foreground">没有找到匹配结果。</li>
        )}
      </ul>
    </main>
  );
}

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}


