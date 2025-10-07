"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineEnvironment, AiOutlineCar, AiOutlineRuby } from "react-icons/ai";

export function ContactMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !mapRef.current || !infoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (mapRef.current && infoRef.current) {
              createTimeline()
                .add(mapRef.current, {
                  translateX: [-50, 0],
                  opacity: [0, 1],
                  duration: 800,
                  easing: "easeOutExpo",
                })
                .add(infoRef.current.children, {
                  translateX: [50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(100),
                }, 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
            位置信息
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            找到我们
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            欢迎到我们的办公室进行面对面交流，
            以下是详细的位置信息和交通指南。
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 地图区域 */}
            <div ref={mapRef} className="space-y-6">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* 模拟地图 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 dark:from-cyan-800/20 dark:to-blue-800/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <AiOutlineEnvironment className="text-2xl text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">计算机学院大楼</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">3楼 301室</p>
                  </div>
                  
                  {/* 装饰性元素 */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    点击地图查看详细位置和导航信息
                  </p>
                </div>
              </div>
            </div>

            {/* 位置信息 */}
            <div ref={infoRef} className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">详细地址</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-cyan-600 dark:text-cyan-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">计算机学院大楼</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">3楼 301室</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-cyan-600 dark:text-cyan-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">大学路123号</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">科技园区</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">交通指南</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AiOutlineCar className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">自驾</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">校园内有免费停车场，建议停放在计算机学院附近</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AiOutlineRuby className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">地铁</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">地铁2号线大学站A出口，步行5分钟即达</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AiOutlineEnvironment className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">公交</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">乘坐15路、28路、35路公交车到大学站下车</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">温馨提示</h3>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <p>• 来访前请提前预约，确保有人接待</p>
                  <p>• 校园内请保持安静，遵守相关规定</p>
                  <p>• 如有特殊需求，请提前联系我们</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
