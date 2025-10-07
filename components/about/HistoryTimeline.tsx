"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineCalendar, AiOutlineTrophy, AiOutlineTeam, AiOutlineRocket } from "react-icons/ai";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageCard } from "@/components/ui/PageCard";

const timelineData = [
  {
    year: "2019",
    title: "协会成立",
    description: "先锋计算机协会正式成立，首批成员30人，开始组织技术分享活动。",
    icon: AiOutlineTeam,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10"
  },
  {
    year: "2020",
    title: "线上转型",
    description: "疫情期间成功转型线上活动，举办首届线上编程竞赛，参与人数突破100人。",
    icon: AiOutlineCalendar,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10"
  },
  {
    year: "2021",
    title: "项目孵化",
    description: "启动首个开源项目\"TechShare\"，建立项目孵化机制，支持成员创新创业。",
    icon: AiOutlineRocket,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10"
  },
  {
    year: "2022",
    title: "竞赛突破",
    description: "在全国大学生程序设计竞赛中获得省级一等奖，协会影响力显著提升。",
    icon: AiOutlineTrophy,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10"
  },
  {
    year: "2023",
    title: "社区建设",
    description: "建立完善的技术社区体系，与多家企业建立合作关系，提供实习机会。",
    icon: AiOutlineTeam,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-indigo-100/50 dark:from-indigo-950/20 dark:to-indigo-900/10"
  },
  {
    year: "2024",
    title: "创新发展",
    description: "推出AI技术研究小组，探索前沿技术应用，成员规模突破150人。",
    icon: AiOutlineRocket,
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-pink-100/50 dark:from-pink-950/20 dark:to-pink-900/10"
  }
];

export function HistoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (timelineRef.current?.children) {
              createTimeline()
                .add(timelineRef.current.children, {
                  translateX: [-50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(150),
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
    <section ref={sectionRef} className="relative py-24">
      <div className="container mx-auto px-6">
        <PageHeader
          badge="发展历程"
          title="我们的成长轨迹"
          subtitle="从成立至今，我们经历了无数挑战与突破，每一步都见证着协会的成长与成员的努力。"
        />

        <div ref={timelineRef} className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="space-y-16">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={item.year} className={`relative flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* 时间点 */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                      {item.year}
                    </div>
                    
                    {/* 内容卡片 */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <PageCard className="p-6">
                        <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-xl flex-shrink-0`}>
                            <IconComponent className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </PageCard>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
