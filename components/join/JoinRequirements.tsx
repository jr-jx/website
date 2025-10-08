"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import {
  AiOutlineCode,
  AiOutlineTeam,
  AiOutlineBulb,
  AiOutlineHeart,
  AiOutlineBook,
  AiOutlineRocket,
} from "react-icons/ai";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const requirements = [
  {
    icon: AiOutlineCode,
    title: "技术基础",
    description: "具备基本的编程基础，熟悉至少一门编程语言",
    details: ["了解基本的数据结构和算法", "有编程项目经验", "熟悉开发工具使用"],
  },
  {
    icon: AiOutlineTeam,
    title: "团队协作",
    description: "具备良好的团队合作精神和沟通能力",
    details: ["积极参与团队讨论", "愿意分享知识和经验", "尊重他人意见"],
  },
  {
    icon: AiOutlineBulb,
    title: "学习热情",
    description: "对新技术保持好奇心，有持续学习的意愿",
    details: ["主动学习新技术", "参与技术分享", "关注行业动态"],
  },
  {
    icon: AiOutlineHeart,
    title: "责任心",
    description: "对项目负责，按时完成任务，有责任心",
    details: ["按时完成分配任务", "主动承担责任", "追求高质量输出"],
  },
  {
    icon: AiOutlineBook,
    title: "学术要求",
    description: "在校学生，专业不限，但需有良好的学习记录",
    details: ["在校学生身份", "良好的学习成绩", "无违纪记录"],
  },
  {
    icon: AiOutlineRocket,
    title: "创新思维",
    description: "具备创新思维，能够提出有价值的想法",
    details: ["思维活跃", "敢于尝试新方法", "有创新意识"],
  },
];

export function JoinRequirements() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardsRef.current?.children) {
              createTimeline().add(cardsRef.current.children, {
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
      { threshold: 0.1 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">申请要求</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">加入要求</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们欢迎所有热爱技术的同学加入，以下是我们的基本要求，帮助您了解是否适合加入我们的团队。
          </p>
        </div>

        <div ref={cardsRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requirements.map((requirement) => {
              const IconComponent = requirement.icon;
              return (
                <Card
                  key={requirement.title}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-primary text-lg" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{requirement.title}</CardTitle>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {requirement.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      {requirement.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 底部说明 */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">重要说明</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">技术门槛</h4>
                  <p className="text-sm text-muted-foreground">
                    我们更看重学习能力和热情，而不是当前的技术水平
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">专业限制</h4>
                  <p className="text-sm text-muted-foreground">
                    欢迎所有专业的学生，技术背景不是必须的
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">时间投入</h4>
                  <p className="text-sm text-muted-foreground">每周至少投入5-8小时参与协会活动</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">长期承诺</h4>
                  <p className="text-sm text-muted-foreground">
                    希望成员能够长期参与，至少一个学期
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
