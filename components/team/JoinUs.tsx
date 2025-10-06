"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  AiOutlineUserAdd, 
  AiOutlineCalendar, 
  AiOutlineMail,
  AiOutlineBulb,
  AiOutlineTeam,
  AiOutlineTrophy,
  AiOutlineArrowRight
} from "react-icons/ai";

const benefits = [
  {
    icon: AiOutlineBulb,
    title: "技术成长",
    description: "参与实际项目，提升技术能力，获得导师指导"
  },
  {
    icon: AiOutlineTeam,
    title: "团队协作",
    description: "与优秀同学合作，培养团队精神和沟通能力"
  },
  {
    icon: AiOutlineTrophy,
    title: "竞赛机会",
    description: "参加各类技术竞赛，获得荣誉和奖励"
  },
  {
    icon: AiOutlineCalendar,
    title: "活动丰富",
    description: "定期举办技术分享、讲座、workshop等活动"
  }
];

const requirements = [
  "对计算机技术有浓厚兴趣",
  "具备基本的编程基础",
  "有团队合作精神",
  "愿意学习和分享知识",
  "能够积极参与协会活动"
];

export function JoinUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !benefitsRef.current || !requirementsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (benefitsRef.current?.children) {
              createTimeline()
                .add(benefitsRef.current.children, {
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(100),
                });
            }
            if (requirementsRef.current?.children) {
              createTimeline()
                .add(requirementsRef.current.children, {
                  translateX: [-50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(50),
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950 dark:via-slate-900 dark:to-purple-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            加入我们
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            成为我们的一员
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            无论你是初学者还是经验丰富的开发者，
            我们都欢迎你的加入，一起创造更美好的技术未来。
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 左侧：加入我们的好处 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">为什么选择我们？</h3>
              <div ref={benefitsRef} className="space-y-6">
                {benefits.map((benefit) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-2xl text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{benefit.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 右侧：申请要求 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">申请要求</h3>
              <div ref={requirementsRef} className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-indigo-600 dark:text-indigo-400 rounded-full"></div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">{requirement}</p>
                  </div>
                ))}
              </div>

              {/* 申请流程 */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">申请流程</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-slate-600 dark:text-slate-400">填写申请表</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-slate-600 dark:text-slate-400">技术面试</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-slate-600 dark:text-slate-400">试用期考核</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <p className="text-slate-600 dark:text-slate-400">正式加入</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 行动号召 */}
          <div className="text-center mt-20">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-6">
                <AiOutlineUserAdd className="text-3xl text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">准备加入我们了吗？</h3>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                我们正在寻找有激情、有梦想的技术爱好者加入我们的团队。
                如果你对技术充满热情，愿意与我们一起成长，那就赶快行动吧！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/join" className="flex items-center gap-2">
                    <AiOutlineArrowRight />
                    立即申请
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact" className="flex items-center gap-2">
                    <AiOutlineMail />
                    联系我们
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
