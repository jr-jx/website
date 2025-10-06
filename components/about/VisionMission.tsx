"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/mdx/Badge";
import { AiOutlineEye, AiOutlineTarget, AiOutlineBulb } from "react-icons/ai";

export function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = createTimeline()
              .add(cardsRef.current?.children, {
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 600,
                easing: "easeOutExpo",
                delay: stagger(200),
              });
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
          <Badge className="mb-4">愿景与使命</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            我们的<span className="text-primary">愿景</span>与<span className="text-primary">使命</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            通过技术创新和知识分享，构建一个充满活力的技术社区，
            培养具有创新精神和实践能力的技术人才。
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                <AiOutlineEye className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">愿景</h3>
              <p className="text-muted-foreground leading-relaxed">
                成为引领技术创新的先锋组织，通过持续的学习和实践，
                推动计算机技术的发展，为社会培养更多优秀的技术人才，
                让技术改变世界，让创新驱动未来。
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                <AiOutlineTarget className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">使命</h3>
              <p className="text-muted-foreground leading-relaxed">
                为计算机爱好者提供优质的学习资源和实践平台，
                通过技术分享、项目协作、竞赛参与等方式，
                促进成员间的交流与合作，提升整体技术水平。
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                <AiOutlineBulb className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">价值观</h3>
              <p className="text-muted-foreground leading-relaxed">
                坚持开放、包容、创新的理念，鼓励成员勇于探索新技术，
                分享知识经验，在合作中成长，在创新中突破，
                共同构建一个积极向上的技术社区。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
