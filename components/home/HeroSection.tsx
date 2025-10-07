"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/mdx/Badge";
import Link from "next/link";
import { AiOutlineUserAdd, AiOutlineCalendar } from "react-icons/ai";
import { PageBackground } from "@/components/ui/PageBackground";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !buttonsRef.current) return;

    // 页面加载动画序列
    const timeline = createTimeline()
      .add(titleRef.current, {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
      })
      .add(subtitleRef.current, {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      }, 200)
      .add(buttonsRef.current.children, {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 500,
        easing: "easeOutExpo",
        delay: stagger(100),
      }, 400);

    return () => {
      timeline.pause();
      timeline.reset();
    };
  }, []);

  return (
    <PageBackground variant="hero" className="min-h-screen flex items-center justify-center">
      <section ref={heroRef} className="w-full">

      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge className="mb-4">先锋计算机协会</Badge>
          
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            探索技术的
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              无限可能
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            专注内容表达、良好可访问性、移动端优先、快速发布。
            <br />
            与我们一起构建未来的技术社区。
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/join" className="flex items-center gap-2">
                <AiOutlineUserAdd />
                加入我们
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/events" className="flex items-center gap-2">
                <AiOutlineCalendar />
                查看活动
              </Link>
            </Button>
          </div>

          {/* 滚动指示器 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      </section>
    </PageBackground>
  );
}
