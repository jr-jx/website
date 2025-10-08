"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineCheckCircle, AiOutlineFileText, AiOutlineUserAdd } from "react-icons/ai";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const processSteps = [
  {
    step: "01",
    title: "填写申请表",
    description: "在线填写申请表单，介绍你的技术背景和兴趣方向",
    icon: AiOutlineFileText,
  },
  {
    step: "02",
    title: "线上面试",
    description: "与我们的技术团队进行线上面试，展示你的技术能力",
    icon: AiOutlineUserAdd,
  },
  {
    step: "03",
    title: "等待审核",
    description: "等待审核，审核通过后会收到通知，通过预留邮箱发送加入通知",
    icon: AiOutlineCheckCircle,
  },
  {
    step: "04",
    title: "正式加入",
    description: "通过审核后正式成为协会成员，开始你的技术成长之旅",
    icon: AiOutlineUserAdd,
  },
];

export function JoinProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !stepsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stepsRef.current?.children) {
              createTimeline().add(stepsRef.current.children, {
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 600,
                easing: "easeOutExpo",
                delay: stagger(200),
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
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">申请流程</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">加入流程</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们的申请流程简单透明，旨在找到真正热爱技术、愿意与团队共同成长的优秀成员。
          </p>
        </div>

        <div ref={stepsRef} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="text-primary text-xl" />
                    </div>
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
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
              <CardTitle className="text-xl">申请须知</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">申请时间</h4>
                  <p className="text-sm text-muted-foreground">
                    全年开放申请，每学期初进行集中面试
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">审核周期</h4>
                  <p className="text-sm text-muted-foreground">申请提交后3-5个工作日完成审核</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">面试方式</h4>
                  <p className="text-sm text-muted-foreground">线上面试，通过腾讯会议进行</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">结果通知</h4>
                  <p className="text-sm text-muted-foreground">通过邮件或QQ群通知申请结果</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
