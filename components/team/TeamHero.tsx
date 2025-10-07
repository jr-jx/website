"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineTeam, AiOutlineUser, AiOutlineTrophy } from "react-icons/ai";
import { PageBackground } from "@/components/ui/PageBackground";
import { StatCard } from "@/components/ui/StatCard";

export function TeamHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current || !statsRef.current) return;

    const timeline = createTimeline()
      .add(contentRef.current, {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
      })
      .add(statsRef.current.children, {
        translateX: [50, 0],
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
    <PageBackground variant="hero" className="min-h-screen flex items-center">
      <section ref={heroRef} className="w-full">

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                我们的团队
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                遇见
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">优秀的人</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                我们汇聚了来自不同专业背景的优秀人才，
                每个人都在自己的领域发光发热，
                共同推动协会的发展与创新。
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">技术专家</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">创新思维</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">团队协作</span>
              </div>
            </div>
          </div>

          {/* 右侧统计 */}
          <div ref={statsRef} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <StatCard
                icon={<AiOutlineTeam className="text-2xl text-primary" />}
                value="25+"
                label="核心成员"
              />
              <StatCard
                icon={<AiOutlineUser className="text-2xl text-primary" />}
                value="8"
                label="指导老师"
              />
              <StatCard
                icon={<AiOutlineTrophy className="text-2xl text-primary" />}
                value="15+"
                label="获奖项目"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    </PageBackground>
  );
}
