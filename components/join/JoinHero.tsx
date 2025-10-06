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
    <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-violet-950 dark:via-slate-900 dark:to-purple-950 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-violet-200 dark:bg-violet-800 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                加入我们
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                开启你的
                <span className="block text-violet-600 dark:text-violet-400">技术之旅</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
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
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center">
                    <AiOutlineTeam className="text-2xl text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">150+</div>
                    <div className="text-slate-600 dark:text-slate-400">活跃成员</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <AiOutlineRocket className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">24+</div>
                    <div className="text-slate-600 dark:text-slate-400">技术项目</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center">
                    <AiOutlineTrophy className="text-2xl text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">15+</div>
                    <div className="text-slate-600 dark:text-slate-400">获奖项目</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
