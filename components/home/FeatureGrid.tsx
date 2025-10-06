"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/mdx/Badge";
import Link from "next/link";
import { AiOutlineBulb, AiOutlineTeam, AiOutlineBook, AiOutlineMessage } from "react-icons/ai";

const features = [
  {
    title: "技术分享",
    description: "定期举办技术讲座，分享前沿技术趋势和实战经验",
    icon: AiOutlineBulb,
    href: "/events",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "项目协作",
    description: "参与开源项目，与志同道合的伙伴一起创造价值",
    icon: AiOutlineTeam,
    href: "/team",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "学习资源",
    description: "丰富的技术文档和教程，助你快速提升技能",
    icon: AiOutlineBook,
    href: "/docs",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "社区交流",
    description: "活跃的社区讨论，解答疑问，分享心得",
    icon: AiOutlineMessage,
    href: "/blog",
    color: "from-orange-500 to-red-500",
  },
];

export function FeatureGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 滚动触发动画
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(cardsRef.current?.children || [], {
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 600,
              easing: "easeOutExpo",
              delay: stagger(150),
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4">核心功能</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            我们的
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              核心价值
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            通过多样化的活动和资源，为计算机爱好者提供学习和成长的平台
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                <Link 
                  href={feature.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  了解更多 →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
