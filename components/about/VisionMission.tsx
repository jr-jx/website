"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineEye, AiOutlineTag, AiOutlineHeart } from "react-icons/ai";

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
    <section ref={sectionRef} className="py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
            愿景与使命
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            我们的核心理念
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            通过技术创新和知识分享，构建一个充满活力的技术社区，
            培养具有创新精神和实践能力的技术人才。
          </p>
        </div>

        <div ref={cardsRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 愿景 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                    <AiOutlineEye className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">愿景</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  成为引领技术创新的先锋组织，通过持续的学习和实践，
                  推动计算机技术的发展，为社会培养更多优秀的技术人才，
                  让技术改变世界，让创新驱动未来。
                </p>
              </div>
            </div>

            {/* 使命 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
                    <AiOutlineTag className="text-2xl text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">使命</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  为计算机爱好者提供优质的学习资源和实践平台，
                  通过技术分享、项目协作、竞赛参与等方式，
                  促进成员间的交流与合作，提升整体技术水平。
                </p>
              </div>
            </div>

            {/* 价值观 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                    <AiOutlineHeart className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">价值观</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  坚持开放、包容、创新的理念，鼓励成员勇于探索新技术，
                  分享知识经验，在合作中成长，在创新中突破，
                  共同构建一个积极向上的技术社区。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
