"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Badge } from "@/components/mdx/Badge";
import { AiOutlineTeam, AiOutlineRocket, AiOutlineHeart } from "react-icons/ai";

export function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !statsRef.current) return;

    const timeline = createTimeline()
      .add(titleRef.current, {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
      })
      .add(subtitleRef.current, {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      }, 200)
      .add(statsRef.current.children, {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 500,
        easing: "easeOutExpo",
        delay: stagger(150),
      }, 400);

    return () => {
      timeline.pause();
      timeline.reset();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge className="mb-4">关于我们</Badge>
          
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            先锋计算机协会
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              技术引领未来
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            我们致力于为计算机爱好者提供学习、交流、实践的平台，
            <br />
            通过技术创新推动社会发展，培养未来的技术领袖。
          </p>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                <AiOutlineTeam className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">活跃成员</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                <AiOutlineRocket className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24+</div>
              <p className="text-muted-foreground">技术项目</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                <AiOutlineHeart className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">5年</div>
              <p className="text-muted-foreground">发展历程</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
