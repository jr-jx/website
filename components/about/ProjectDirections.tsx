"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Badge } from "@/components/mdx/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  AiOutlineCode, 
  AiOutlineRobot, 
  AiOutlineMobile, 
  AiOutlineCloud,
  AiOutlineSecurityScan,
  AiOutlineDatabase,
  AiOutlineArrowRight
} from "react-icons/ai";

const directions = [
  {
    title: "Web 开发",
    description: "前端、后端全栈开发，React、Vue、Node.js 等现代技术栈",
    icon: AiOutlineCode,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10",
    projects: ["TechShare 平台", "协会官网", "在线学习系统"]
  },
  {
    title: "人工智能",
    description: "机器学习、深度学习、自然语言处理等 AI 技术研究与应用",
    icon: AiOutlineRobot,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10",
    projects: ["智能问答系统", "图像识别应用", "推荐算法研究"]
  },
  {
    title: "移动开发",
    description: "iOS、Android 原生开发，跨平台框架 React Native、Flutter",
    icon: AiOutlineMobile,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10",
    projects: ["协会移动端", "学习助手 App", "活动管理工具"]
  },
  {
    title: "云计算",
    description: "云服务架构设计，容器化部署，微服务开发",
    icon: AiOutlineCloud,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10",
    projects: ["云原生应用", "DevOps 实践", "服务监控系统"]
  },
  {
    title: "网络安全",
    description: "信息安全研究，渗透测试，安全防护体系建设",
    icon: AiOutlineSecurityScan,
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10",
    projects: ["安全审计工具", "漏洞扫描器", "安全培训平台"]
  },
  {
    title: "数据科学",
    description: "大数据处理，数据分析，数据可视化，商业智能",
    icon: AiOutlineDatabase,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-indigo-100/50 dark:from-indigo-950/20 dark:to-indigo-900/10",
    projects: ["数据分析平台", "可视化仪表板", "预测模型"]
  }
];

export function ProjectDirections() {
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
                .add(cardsRef.current.children, {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4">项目方向</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            技术<span className="text-primary">发展方向</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们专注于前沿技术领域，通过实际项目实践，
            帮助成员掌握核心技术，提升实战能力。
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {directions.map((direction) => {
            const IconComponent = direction.icon;
            return (
              <Card 
                key={direction.title} 
                className={`group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br ${direction.bgColor} hover:scale-105`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${direction.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{direction.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{direction.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground">代表项目：</h4>
                    <div className="flex flex-wrap gap-2">
                      {direction.projects.map((project, projectIndex) => (
                        <span 
                          key={projectIndex}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 行动号召 */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">加入我们的技术探索之旅</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                无论你是初学者还是经验丰富的开发者，都能在这里找到适合的项目方向。
                我们提供丰富的学习资源、实践机会和导师指导，帮助你快速成长。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/join" className="flex items-center gap-2">
                    <AiOutlineArrowRight />
                    立即加入
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/events">查看活动</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
