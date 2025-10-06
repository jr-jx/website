"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  AiOutlineUserAdd, 
  AiOutlineMail, 
  AiOutlineCheckCircle,
  AiOutlineTeam,
  AiOutlineRocket
} from "react-icons/ai";

const benefits = [
  {
    icon: AiOutlineTeam,
    title: "加入优秀团队",
    description: "与志同道合的伙伴一起学习成长"
  },
  {
    icon: AiOutlineRocket,
    title: "参与实际项目",
    description: "获得宝贵的项目经验和技能提升"
  },
  {
    icon: AiOutlineCheckCircle,
    title: "获得专业指导",
    description: "经验丰富的导师提供技术指导"
  }
];

export function JoinCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !benefitsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              createTimeline()
                .add(contentRef.current, {
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 800,
                  easing: "easeOutExpo",
                });
            }
            if (benefitsRef.current?.children) {
              createTimeline()
                .add(benefitsRef.current.children, {
                  translateX: [50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(200),
                });
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-violet-950 dark:via-slate-900 dark:to-purple-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div ref={contentRef} className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                  立即申请
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  准备加入
                  <span className="block text-violet-600 dark:text-violet-400">我们了吗？</span>
                </h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  加入先锋计算机协会，开启你的技术成长之旅。
                  我们期待与优秀的你一起创造更美好的技术未来。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact" className="flex items-center gap-2">
                    <AiOutlineUserAdd />
                    立即申请
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact" className="flex items-center gap-2">
                    <AiOutlineMail />
                    联系我们
                  </Link>
                </Button>
              </div>
            </div>

            {/* 右侧优势 */}
            <div ref={benefitsRef} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div 
                      key={benefit.title}
                      className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-2xl text-violet-600 dark:text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{benefit.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 底部统计 */}
          <div className="mt-20 text-center">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">为什么选择我们？</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">95%</div>
                  <p className="text-slate-600 dark:text-slate-400">成员满意度</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">24+</div>
                  <p className="text-slate-600 dark:text-slate-400">成功项目</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">5年</div>
                  <p className="text-slate-600 dark:text-slate-400">发展历程</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
