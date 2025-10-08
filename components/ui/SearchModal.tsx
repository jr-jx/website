"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Search, X, FileText, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SearchResult {
  title: string;
  excerpt?: string;
  slug: string;
  type: "blog" | "event";
  url: string;
  date?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // 搜索函数
  const performSearch = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&limit=8`);
        if (response.ok) {
          const data = await response.json();
          setResults(data.results || []);

          // 保存搜索历史
          if (searchQuery && !recentSearches.includes(searchQuery)) {
            const newRecent = [searchQuery, ...recentSearches.slice(0, 4)];
            setRecentSearches(newRecent);
            localStorage.setItem("recent-searches", JSON.stringify(newRecent));
          }
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [recentSearches],
  );

  // 防抖搜索
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  // 键盘导航
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = results.length + (query ? 0 : recentSearches.length);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          if (query && results[selectedIndex]) {
            window.location.href = results[selectedIndex].url;
            onClose();
          } else if (!query && recentSearches[selectedIndex]) {
            setQuery(recentSearches[selectedIndex]);
          }
        }
        break;
      case "Escape":
        onClose();
        break;
    }
  };

  // 聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // 重置状态
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // 加载搜索历史
  useEffect(() => {
    const saved = localStorage.getItem("recent-searches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch {
        setRecentSearches([]);
      }
    }
  }, []);

  // 截取摘要
  const truncateExcerpt = (excerpt: string, maxLength: number = 120) => {
    if (excerpt.length <= maxLength) return excerpt;
    return excerpt.substring(0, maxLength).trim() + "...";
  };

  // 格式化日期
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) return "昨天";
      if (diffDays < 7) return `${diffDays}天前`;
      if (diffDays < 30) return `${Math.ceil(diffDays / 7)}周前`;
      return date.toLocaleDateString("zh-CN");
    } catch {
      return "";
    }
  };

  // 高亮搜索关键词
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<mark class="bg-primary/20 px-1 rounded">$1</mark>');
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="flex items-start justify-center min-h-screen pt-20 px-4">
        <Card
          className="w-full max-w-2xl shadow-2xl border-0 bg-background/95 backdrop-blur-md p-0 dark:border"
          onClick={(e) => e.stopPropagation()}
        >
          <CardContent className="p-0">
            {/* 搜索输入框 */}
            <div className="flex items-center gap-3 p-4 border-b">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="搜索文章、活动..."
                className="border-0 shadow-none focus-visible:ring-0 text-lg bg-transparent"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* 搜索结果 */}
            <div ref={resultsRef} className="max-h-80 overflow-y-auto">
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-3"></div>
                  <p className="text-sm text-muted-foreground">搜索中...</p>
                </div>
              ) : query && results.length === 0 ? (
                <div className="p-8 text-center">
                  <Search className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">未找到相关结果</p>
                  <p className="text-xs text-muted-foreground mt-1">尝试使用不同的关键词</p>
                </div>
              ) : !query ? (
                <div className="p-4">
                  {recentSearches.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        最近搜索
                      </div>
                      {recentSearches.map((search, index) => (
                        <div
                          key={search}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors",
                            "hover:bg-muted/50",
                            selectedIndex === index && "bg-muted",
                          )}
                          onClick={() => setQuery(search)}
                        >
                          <Search className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{search}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="text-center py-8">
                    <Search className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">输入关键词开始搜索</p>
                  </div>
                </div>
              ) : (
                <div className="p-2">
                  {results.map((result, index) => (
                    <Link
                      key={`${result.type}-${result.slug}`}
                      href={result.url}
                      onClick={onClose}
                      className={cn(
                        "block p-3 rounded-lg transition-colors",
                        "hover:bg-muted/50",
                        selectedIndex === index && "bg-muted",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {result.type === "blog" ? (
                            <FileText className="w-4 h-4 text-primary" />
                          ) : (
                            <Calendar className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3
                              className="font-medium text-foreground truncate"
                              dangerouslySetInnerHTML={{
                                __html: highlightText(result.title, query),
                              }}
                            />
                            <Badge className="text-xs bg-primary/10 text-primary">
                              {result.type === "blog" ? "博客" : "活动"}
                            </Badge>
                          </div>
                          {result.excerpt && (
                            <p
                              className="text-sm text-muted-foreground leading-relaxed mb-2"
                              dangerouslySetInnerHTML={{
                                __html: highlightText(truncateExcerpt(result.excerpt), query),
                              }}
                            />
                          )}
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            {result.date && (
                              <>
                                <Clock className="w-3 h-3" />
                                <span>{formatDate(result.date)}</span>
                              </>
                            )}
                            <ArrowRight className="w-3 h-3 ml-auto" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 底部提示 */}
            {query && results.length > 0 && (
              <div className="p-3 border-t bg-muted/20 text-xs text-muted-foreground text-center">
                使用 ↑↓ 键导航，Enter 键选择，Esc 键关闭
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>,
    document.body,
  );
}
