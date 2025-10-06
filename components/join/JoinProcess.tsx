"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { 
  AiOutlineFileText, 
  AiOutlineUser, 
  AiOutlineCheckCircle,
  AiOutlineTeam
} from "react-icons/ai";

const processSteps = [
  {
    step: "01",
    title: "填写申请表",
    description: "在线填写申请表单，介绍你的技术背景和兴趣方向",
    icon: AiOutlineFileText,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10"
  },
  {
    step: "02",
    title: "技术面试",
    description: "与我们的技术团队进行面试，展示你的技术能力",
    icon: AiOutlineUser,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10"
  },
  {
    step: "03",
    title: "试用期考核",
    description: "参与项目实践，展示你的学习能力和团队协作精神",
    icon: AiOutlineCheckCircle,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10"
  },
  {
    step: "04",
    title: "正式加入",
    description: "通过考核后正式成为协会成员，开始你的技术成长之旅",
    icon: AiOutlineTeam,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10"
  }
];

export function JoinProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !stepsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stepsRef.current?.children) {
              createTimeline()
                .add(stepsRef.current.children, {
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(200),
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
          <div className="inline-flex items-center px-6 py-3 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
            申请流程
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            加入流程
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            我们的申请流程简单透明，旨在找到真正热爱技术、
            愿意与团队共同成长的优秀成员。
          </p>
        </div>

        <div ref={stepsRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.step} 
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.bgColor} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    {/* 步骤编号 */}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-2xl font-bold text-slate-600 dark:text-slate-400">
                      {step.step}
                    </div>
                    
                    {/* 图标 */}
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl`}>
                      <IconComponent className="text-white" />
                    </div>
                    
                    {/* 内容 */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 时间线连接线 */}
        <div className="hidden lg:block max-w-6xl mx-auto mt-8">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 dark:from-blue-800 dark:via-green-800 dark:via-purple-800 dark:to-orange-800 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* 底部说明 */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">申请须知</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">申请时间</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">全年开放申请，每学期初进行集中面试</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">审核周期</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">申请提交后3-5个工作日完成审核</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">试用期</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">通过面试后进入1个月试用期</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">结果通知</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">通过邮件和电话通知申请结果</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
