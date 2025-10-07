"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { 
  AiOutlineHeart, 
  AiOutlineBulb, 
  AiOutlineTeam, 
  AiOutlineRocket,
  AiOutlineIe,
  AiOutlineGlobal
} from "react-icons/ai";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageCard } from "@/components/ui/PageCard";

const values = [
  {
    title: "开放包容",
    description: "我们欢迎所有对技术感兴趣的同学，无论技术水平如何，都能在这里找到属于自己的位置。",
    icon: AiOutlineHeart,
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10"
  },
  {
    title: "持续学习",
    description: "技术日新月异，我们鼓励成员保持学习热情，不断探索新技术，提升自身能力。",
    icon: AiOutlineBulb,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-yellow-100/50 dark:from-yellow-950/20 dark:to-yellow-900/10"
  },
  {
    title: "团队协作",
    description: "我们相信团队的力量，通过协作完成复杂项目，在合作中共同成长。",
    icon: AiOutlineTeam,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10"
  },
  {
    title: "创新实践",
    description: "鼓励成员勇于尝试新想法，将理论知识转化为实际项目，在实践中创新。",
    icon: AiOutlineRocket,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10"
  },
  {
    title: "诚信负责",
    description: "我们坚持诚信原则，对项目负责，对团队负责，对社会负责。",
    icon: AiOutlineIe,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10"
  },
  {
    title: "服务社会",
    description: "运用技术能力服务社会，通过开源项目和技术分享回馈社区。",
    icon: AiOutlineGlobal,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-indigo-100/50 dark:from-indigo-950/20 dark:to-indigo-900/10"
  }
];

export function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardsRef.current?.children) {
              createTimeline()
                .add(cardsRef.current.children || [], {
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(100),
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
          badge="核心价值观"
          title="我们的价值观"
          subtitle="这些价值观指导着我们的行为，塑造着我们的文化，是我们协会持续发展的精神支柱。"
        />

        <div ref={cardsRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <PageCard key={value.title} gradient className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      <IconComponent className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </PageCard>
              );
            })}
          </div>
        </div>

        {/* 底部总结 */}
        <div className="text-center mt-20">
          <PageCard className="max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">共同愿景</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              我们相信，通过坚持这些价值观，我们能够构建一个充满活力、
              富有创新精神的技术社区，为每一位成员提供成长的机会，
              为社会培养更多优秀的技术人才。
            </p>
          </PageCard>
        </div>
      </div>
    </section>
  );
}
