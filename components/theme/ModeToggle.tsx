"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 防止水合错误
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" aria-label="切换主题">
        <AiOutlineSun />
      </Button>
    );
  }

  const isDark = theme === "dark";
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="切换主题"
    >
      {isDark ? <AiOutlineSun /> : <AiOutlineMoon />}
    </Button>
  );
}
