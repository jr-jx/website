"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineEye, AiOutlineTag, AiOutlineHeart } from "react-icons/ai";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card3D } from "@/components/ui/Card3D";
import { Icon3D } from "@/components/ui/Icon3D";

export function VisionMission() {
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
                  translateX: [100, 0],
                  opacity: [0, 1],
                  duration: 800,
                  easing: "easeOutExpo",
                  delay: stagger(300),
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
          badge="核心理念"
          title="愿景 · 使命 · 价值观"
          subtitle=""
        />

        <div ref={cardsRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 愿景 */}
            <Card3D animationType="float" className="p-8 text-center">
              <div className="flex flex-col items-center gap-6">
                <Icon3D 
                  icon={<AiOutlineEye />} 
                  size="xl" 
                  color="primary" 
                  animationType="rotate"
                />
                <h3 className="text-2xl font-bold text-foreground">愿景</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  引领技术创新，培养技术人才
                </p>
              </div>
            </Card3D>

            {/* 使命 */}
            <Card3D animationType="scale" className="p-8 text-center">
              <div className="flex flex-col items-center gap-6">
                <Icon3D 
                  icon={<AiOutlineTag />} 
                  size="xl" 
                  color="secondary" 
                  animationType="tilt"
                />
                <h3 className="text-2xl font-bold text-foreground">使命</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  提供学习平台，促进技术交流
                </p>
              </div>
            </Card3D>

            {/* 价值观 */}
            <Card3D animationType="tilt" className="p-8 text-center">
              <div className="flex flex-col items-center gap-6">
                <Icon3D 
                  icon={<AiOutlineHeart />} 
                  size="xl" 
                  color="error" 
                  animationType="float"
                />
                <h3 className="text-2xl font-bold text-foreground">价值观</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  开放包容，持续创新
                </p>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
