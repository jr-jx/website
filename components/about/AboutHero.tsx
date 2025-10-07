"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineTeam, AiOutlineRocket, AiOutlineHeart } from "react-icons/ai";
import { StatCard } from "@/components/ui/StatCard";

export function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current || !statsRef.current) return;

    const timeline = createTimeline()
      .add(contentRef.current, {
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
      })
      .add(statsRef.current.children, {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
        delay: stagger(200),
      }, 300);

    return () => {
      timeline.pause();
      timeline.reset();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center">

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                关于先锋计算机协会
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                技术改变
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">世界</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                我们是一群热爱技术的年轻人，致力于通过创新和实践推动计算机技术的发展，
                为每一位成员提供成长的机会，为社会培养优秀的技术人才。
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">开放包容</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">持续学习</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">创新实践</span>
              </div>
            </div>
          </div>

          {/* 右侧统计 */}
          <div ref={statsRef} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <StatCard
                icon={<AiOutlineTeam className="text-2xl text-primary" />}
                value="150+"
                label="活跃成员"
              />
              <StatCard
                icon={<AiOutlineRocket className="text-2xl text-primary" />}
                value="24+"
                label="技术项目"
              />
              <StatCard
                icon={<AiOutlineHeart className="text-2xl text-primary" />}
                value="5年"
                label="发展历程"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
