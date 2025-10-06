"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(contentRef.current?.children || [], {
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 600,
              easing: "easeOutExpo",
              delay: stagger(200),
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto border-0 bg-background/50 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-12 text-center">
            <div ref={contentRef} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  准备开始你的
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    技术之旅
                  </span>
                  了吗？
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  加入先锋计算机协会，与我们一起探索技术的无限可能，
                  <br />
                  在学习和实践中不断成长。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/join">立即加入</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">联系我们</Link>
                </Button>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  已有账户？<Link href="/login" className="text-primary hover:underline">登录</Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
