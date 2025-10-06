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
  matches?: Array<{ key: "title" | "excerpt" | "slug"; indices: Array<[number, number]> }>
};

export default function SearchPage() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);
  const [results, setResults] = useState<Result[]>([]);
  const debounced = useDebouncedValue(q, 200);
  const [type, setType] = useState<"all" | "blog" | "event">("all");

  useEffect(() => {
    const controller = new AbortController();
    const doSearch = async () => {
      if (!debounced) {
        setResults([]);
        return;
      }
      const r = await fetch(`/api/search?q=${encodeURIComponent(debounced)}&type=${type}`, {
        signal: controller.signal,
      });
      if (!r.ok) return;
      const data = await r.json();
      setResults(data.results as Result[]);
    };
    doSearch();
    return () => controller.abort();
  }, [debounced, type]);

  useEffect(() => {
    const sp = new URLSearchParams(Array.from(params.entries()));
    if (q) sp.set("q", q);
    else sp.delete("q");
    if (type && type !== "all") sp.set("type", type);
    else sp.delete("type");
    router.replace(`/search?${sp.toString()}`);
  }, [q, type]);

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
        <select
          aria-label="筛选类型"
          value={type}
          onChange={(e) => setType(e.target.value as any)}
          className="rounded-md border border-input bg-background px-2 py-2 text-sm"
        >
          <option value="all">全部</option>
          <option value="blog">文章</option>
          <option value="event">活动</option>
        </select>
        <Button asChild>
          <Link href="/">返回首页</Link>
        </Button>
      </div>
      <ul className="mt-6 space-y-3">
        {results.map((r) => (
          <li key={`${r.type}-${r.slug}`} className="rounded-md border p-4">
            <div className="text-sm text-muted-foreground">{r.type === "blog" ? "文章" : "活动"}</div>
            <Link className="text-lg font-semibold underline-offset-4 hover:underline" href={r.url}>
              <Highlight text={r.title} matches={r.matches?.find((m) => m.key === "title")?.indices} />
            </Link>
            {r.excerpt && (
              <p className="mt-1 text-sm text-muted-foreground">
                <Highlight text={r.excerpt} matches={r.matches?.find((m) => m.key === "excerpt")?.indices} />
              </p>
            )}
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

function Highlight({ text, matches }: { text: string; matches?: Array<[number, number]> }) {
  if (!matches || matches.length === 0) return <>{text}</>;
  const parts: Array<{ value: string; highlight: boolean }> = [];
  let lastIndex = 0;
  const merged = mergeRanges(matches);
  for (const [start, end] of merged) {
    if (start > lastIndex) parts.push({ value: text.slice(lastIndex, start), highlight: false });
    parts.push({ value: text.slice(start, end + 1), highlight: true });
    lastIndex = end + 1;
  }
  if (lastIndex < text.length) parts.push({ value: text.slice(lastIndex), highlight: false });
  return (
    <span>
      {parts.map((p, i) => (
        <span key={i} className={p.highlight ? "bg-yellow-200 dark:bg-yellow-800/60" : undefined}>
          {p.value}
        </span>
      ))}
    </span>
  );
}

function mergeRanges(ranges: Array<[number, number]>): Array<[number, number]> {
  if (ranges.length <= 1) return ranges;
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);
  const merged: Array<[number, number]> = [];
  let [curStart, curEnd] = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    const [s, e] = sorted[i];
    if (s <= curEnd + 1) {
      curEnd = Math.max(curEnd, e);
    } else {
      merged.push([curStart, curEnd]);
      curStart = s;
      curEnd = e;
    }
  }
  merged.push([curStart, curEnd]);
  return merged;
}


