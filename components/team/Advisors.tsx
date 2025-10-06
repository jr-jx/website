"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlineBook, AiOutlineTrophy, AiOutlineTeam } from "react-icons/ai";
import Image from "next/image";

const advisors = [
  {
    name: "王教授",
    title: "指导老师",
    department: "计算机科学与技术学院",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    bio: "计算机科学博士，专注于人工智能和机器学习研究，拥有20年教学经验。",
    achievements: ["发表论文50+篇", "主持国家级项目5项", "指导学生获奖30+次"],
    research: "人工智能、机器学习、计算机视觉"
  },
  {
    name: "李教授",
    title: "技术顾问",
    department: "软件工程学院",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "软件工程专家，在软件架构设计和系统优化方面有丰富经验。",
    achievements: ["软件专利10+项", "企业合作项目20+个", "技术标准制定参与者"],
    research: "软件工程、系统架构、性能优化"
  },
  {
    name: "张教授",
    title: "学术顾问",
    department: "网络工程学院",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "网络安全专家，在网络攻防和信息安全领域有深入研究。",
    achievements: ["安全漏洞发现100+个", "网络安全培训师", "行业标准制定专家"],
    research: "网络安全、密码学、网络攻防"
  }
];

export function Advisors() {
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
    <section ref={sectionRef} className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
            指导老师
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            我们的指导团队
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            由经验丰富的教授和行业专家组成，
            为协会提供学术指导和技术支持，助力成员成长。
          </p>
        </div>

        <div ref={cardsRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div 
                key={advisor.name} 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* 头像和基本信息 */}
                  <div className="text-center mb-6">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyan-100 dark:border-cyan-900/30">
                      <Image 
                        src={advisor.avatar} 
                        alt={advisor.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{advisor.name}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-1">{advisor.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{advisor.department}</p>
                  </div>

                  {/* 个人简介 */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 text-center">
                    {advisor.bio}
                  </p>

                  {/* 研究方向 */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AiOutlineBook className="text-cyan-600 dark:text-cyan-400" />
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">研究方向</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{advisor.research}</p>
                  </div>

                  {/* 主要成就 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AiOutlineTrophy className="text-cyan-600 dark:text-cyan-400" />
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">主要成就</h4>
                    </div>
                    <div className="space-y-2">
                      {advisor.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部总结 */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AiOutlineTeam className="text-3xl text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">专业指导</h3>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              我们的指导老师团队拥有丰富的学术经验和行业背景，
              为协会成员提供专业的技术指导和职业规划建议，
              帮助大家在技术道路上不断成长和进步。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
