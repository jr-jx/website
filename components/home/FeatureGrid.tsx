"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineBulb, AiOutlineTeam, AiOutlineBook, AiOutlineMessage } from "react-icons/ai";
import { ArrowRightCircle } from "lucide-react";

const features = [
  {
    title: "技术分享",
    description: "定期举办技术讲座，分享前沿技术趋势和实战经验",
    icon: AiOutlineBulb,
    href: "/events",
  },
  {
    title: "项目协作",
    description: "参与开源项目，与志同道合的伙伴一起创造价值",
    icon: AiOutlineTeam,
    href: "/team",
  },
  {
    title: "学习资源",
    description: "丰富的技术文档和教程，助你快速提升技能",
    icon: AiOutlineBook,
    href: "/docs",
  },
  {
    title: "社区交流",
    description: "活跃的社区讨论，解答疑问，分享心得，学习经验",
    icon: AiOutlineMessage,
    href: "/blog",
  },
];

export function FeatureGrid() {
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
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: "easeOutExpo",
                delay: stagger(100),
              });
            }
            observer.unobserve(entry.target);
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
          <Badge className="mb-4">核心功能</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            我们的
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              核心价值
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            通过多样化的活动和资源，为计算机爱好者提供学习和成长的平台
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="text-primary text-xl" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button asChild variant="secondary" size="sm">
                  <Link href={feature.href}>
                    了解更多
                    <ArrowRightCircle />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
