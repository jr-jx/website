"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineMail
} from "react-icons/ai";
import Image from "next/image";

const coreMembers = [
  {
    name: "张明",
    role: "会长",
    department: "计算机科学与技术",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "专注于全栈开发，拥有丰富的项目经验，致力于推动协会技术发展。",
    skills: ["React", "Node.js", "Python", "Docker"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "zhangming@example.com"
    }
  },
  {
    name: "李华",
    role: "副会长",
    department: "软件工程",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "AI技术专家，在机器学习和深度学习领域有深入研究。",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "lihua@example.com"
    }
  },
  {
    name: "王强",
    role: "技术总监",
    department: "网络工程",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "网络安全专家，专注于系统架构设计和安全防护。",
    skills: ["Go", "Kubernetes", "Security", "DevOps"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "wangqiang@example.com"
    }
  },
  {
    name: "陈雪",
    role: "产品经理",
    department: "信息管理",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "用户体验设计师，擅长产品规划和用户研究。",
    skills: ["Figma", "Product Design", "UX Research", "Agile"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "chenxue@example.com"
    }
  },
  {
    name: "刘洋",
    role: "移动开发组长",
    department: "计算机科学与技术",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    bio: "移动应用开发专家，精通iOS和Android开发。",
    skills: ["Swift", "Kotlin", "React Native", "Flutter"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "liuyang@example.com"
    }
  },
  {
    name: "赵敏",
    role: "数据科学组长",
    department: "数据科学与大数据技术",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    bio: "数据科学家，专注于大数据分析和机器学习应用。",
    skills: ["Python", "R", "SQL", "Tableau"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "zhaomin@example.com"
    }
  }
];

export function CoreMembers() {
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
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(100),
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
            核心成员
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            我们的核心团队
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            由来自不同专业背景的优秀学生组成，
            每个人都在自己的领域有着深厚的专业知识和丰富的实践经验。
          </p>
        </div>

        <div ref={cardsRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMembers.map((member) => (
              <div 
                key={member.name} 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* 头像和基本信息 */}
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/30">
                      <Image 
                        src={member.avatar} 
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{member.department}</p>
                  </div>

                  {/* 个人简介 */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 text-center">
                    {member.bio}
                  </p>

                  {/* 技能标签 */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 社交链接 */}
                  <div className="flex justify-center gap-4">
                    <a 
                      href={member.social.github} 
                      className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <AiOutlineGithub className="text-lg" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <AiOutlineLinkedin className="text-lg" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <AiOutlineMail className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
