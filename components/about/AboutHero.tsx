"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineTeam, AiOutlineRocket, AiOutlineHeart, AiOutlineCode, AiOutlineBulb, AiOutlineGlobal } from "react-icons/ai";
import { Icon3D } from "@/components/ui/Icon3D";
import { Card3D } from "@/components/ui/Card3D";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div ref={contentRef} className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                先锋计算机协会
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                技术
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">创新</span>
              </h1>
            </div>

            {/* 三维图标展示 */}
            <div className="grid grid-cols-3 gap-6">
              <Icon3D 
                icon={<AiOutlineCode />} 
                size="lg" 
                color="primary" 
                animationType="float"
                className="delay-0"
              />
              <Icon3D 
                icon={<AiOutlineBulb />} 
                size="lg" 
                color="warning" 
                animationType="rotate"
                className="delay-500"
              />
              <Icon3D 
                icon={<AiOutlineGlobal />} 
                size="lg" 
                color="success" 
                animationType="scale"
                className="delay-1000"
              />
            </div>
          </div>

          {/* 右侧三维统计卡片 */}
          <div ref={statsRef} className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <Card3D animationType="float" className="p-8">
                <div className="flex items-center gap-6">
                  <Icon3D 
                    icon={<AiOutlineTeam />} 
                    size="xl" 
                    color="primary" 
                    animationType="tilt"
                  />
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">150+</div>
                    <div className="text-muted-foreground text-lg">活跃成员</div>
                  </div>
                </div>
              </Card3D>

              <Card3D animationType="scale" className="p-8">
                <div className="flex items-center gap-6">
                  <Icon3D 
                    icon={<AiOutlineRocket />} 
                    size="xl" 
                    color="secondary" 
                    animationType="rotate"
                  />
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">24+</div>
                    <div className="text-muted-foreground text-lg">技术项目</div>
                  </div>
                </div>
              </Card3D>

              <Card3D animationType="tilt" className="p-8">
                <div className="flex items-center gap-6">
                  <Icon3D 
                    icon={<AiOutlineHeart />} 
                    size="xl" 
                    color="error" 
                    animationType="float"
                  />
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">5年</div>
                    <div className="text-muted-foreground text-lg">发展历程</div>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
