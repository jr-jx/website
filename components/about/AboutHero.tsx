"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineTeam, AiOutlineRocket, AiOutlineHeart } from "react-icons/ai";

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
    <section ref={heroRef} className="relative min-h-screen flex items-center bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* 几何背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                关于先锋计算机协会
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                技术改变
                <span className="block text-blue-600 dark:text-blue-400">世界</span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                我们是一群热爱技术的年轻人，致力于通过创新和实践推动计算机技术的发展，
                为每一位成员提供成长的机会，为社会培养优秀的技术人才。
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">开放包容</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">持续学习</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">创新实践</span>
              </div>
            </div>
          </div>

          {/* 右侧统计 */}
          <div ref={statsRef} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <AiOutlineTeam className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">150+</div>
                    <div className="text-slate-600 dark:text-slate-400">活跃成员</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <AiOutlineRocket className="text-2xl text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">24+</div>
                    <div className="text-slate-600 dark:text-slate-400">技术项目</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <AiOutlineHeart className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">5年</div>
                    <div className="text-slate-600 dark:text-slate-400">发展历程</div>
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
