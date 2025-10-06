"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "活跃成员", value: 150, suffix: "+" },
  { label: "技术活动", value: 24, suffix: "+" },
  { label: "项目作品", value: 12, suffix: "+" },
  { label: "学习资源", value: 50, suffix: "+" },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 数字计数动画
            stats.forEach((stat, index) => {
              const startTime = Date.now();
              const duration = 2000;
              
              const animateValue = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutExpo = 1 - Math.pow(2, -10 * progress);
                const currentValue = Math.round(stat.value * easeOutExpo);
                
                setAnimatedValues(prev => {
                  const newValues = [...prev];
                  newValues[index] = currentValue;
                  return newValues;
                });
                
                if (progress < 1) {
                  requestAnimationFrame(animateValue);
                }
              };
              
              animateValue();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            我们的
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              成长足迹
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            数字见证我们的成长，每一份努力都值得记录
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {animatedValues[index]}{stat.suffix}
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
