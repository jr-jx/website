"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineEye, AiOutlineTag, AiOutlineHeart } from "react-icons/ai";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageCard } from "@/components/ui/PageCard";

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
            badge="愿景与使命"
            title="我们的核心理念"
            subtitle="通过技术创新和知识分享，构建一个充满活力的技术社区，培养具有创新精神和实践能力的技术人才。"
          />

        <div ref={cardsRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 愿景 */}
            <PageCard gradient className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <AiOutlineEye className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">愿景</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                成为引领技术创新的先锋组织，通过持续的学习和实践，
                推动计算机技术的发展，为社会培养更多优秀的技术人才，
                让技术改变世界，让创新驱动未来。
              </p>
            </PageCard>

            {/* 使命 */}
            <PageCard gradient className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <AiOutlineTag className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">使命</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                为计算机爱好者提供优质的学习资源和实践平台，
                通过技术分享、项目协作、竞赛参与等方式，
                促进成员间的交流与合作，提升整体技术水平。
              </p>
            </PageCard>

            {/* 价值观 */}
            <PageCard gradient className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <AiOutlineHeart className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">价值观</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                坚持开放、包容、创新的理念，鼓励成员勇于探索新技术，
                分享知识经验，在合作中成长，在创新中突破，
                共同构建一个积极向上的技术社区。
              </p>
            </PageCard>
          </div>
        </div>
      </div>
    </section>
  );
}
