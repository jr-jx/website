"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  AiOutlineUserAdd, 
  AiOutlineTeam, 
  AiOutlineRocket,
  AiOutlineTrophy,
  AiOutlineArrowRight
} from "react-icons/ai";
import { PageBackground } from "@/components/ui/PageBackground";
import { StatCard } from "@/components/ui/StatCard";

export function JoinHero() {
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
                加入我们
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                开启你的
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">技术之旅</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                加入先锋计算机协会，与志同道合的伙伴一起学习成长，
                参与精彩的项目，获得宝贵的实践经验。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="#apply" className="flex items-center gap-2">
                  <AiOutlineUserAdd />
                  立即申请
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/contact" className="flex items-center gap-2">
                  <AiOutlineArrowRight />
                  了解更多
                </Link>
              </Button>
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
