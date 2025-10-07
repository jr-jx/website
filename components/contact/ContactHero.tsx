"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { StatCard } from "@/components/ui/StatCard";

export function ContactHero() {
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
    <section ref={heroRef} className="relative min-h-[80vh] flex items-center">

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                联系我们
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                让我们
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">保持联系</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                有任何问题或建议？我们很乐意听到你的声音。
                通过以下方式联系我们，我们会尽快回复。
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">快速响应</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">专业支持</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">友好服务</span>
              </div>
            </div>
          </div>

          {/* 右侧联系方式 */}
          <div ref={statsRef} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <StatCard
                icon={<AiOutlineMail className="text-2xl text-primary" />}
                value="邮箱"
                label="contact@pioneer-ca.org"
              />
              <StatCard
                icon={<AiOutlinePhone className="text-2xl text-primary" />}
                value="电话"
                label="+86 138-0000-0000"
              />
              <StatCard
                icon={<AiOutlineEnvironment className="text-2xl text-primary" />}
                value="地址"
                label="计算机学院大楼 3楼"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
