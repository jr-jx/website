"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineEnvironment,
  AiOutlineClockCircle,
  AiOutlineWechat,
  AiOutlineQq,
  AiOutlineGithub,
  AiOutlineGlobal
} from "react-icons/ai";

const contactMethods = [
  {
    icon: AiOutlineMail,
    title: "邮箱联系",
    description: "发送邮件给我们，我们会在24小时内回复",
    contact: "contact@pioneer-ca.org",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10"
  },
  {
    icon: AiOutlinePhone,
    title: "电话咨询",
    description: "工作时间拨打我们的电话，获得即时支持",
    contact: "+86 138-0000-0000",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10"
  },
  {
    icon: AiOutlineEnvironment,
    title: "实地访问",
    description: "欢迎到我们的办公室进行面对面交流",
    contact: "计算机学院大楼 3楼 301室",
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10"
  },
  {
    icon: AiOutlineClockCircle,
    title: "工作时间",
    description: "我们的服务时间，确保及时响应",
    contact: "周一至周五 9:00-18:00",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10"
  }
];

const socialLinks = [
  {
    icon: AiOutlineWechat,
    name: "微信群",
    description: "加入我们的技术交流群",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: AiOutlineQq,
    name: "QQ群",
    description: "QQ群号：123456789",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: AiOutlineGithub,
    name: "GitHub",
    description: "关注我们的开源项目",
    color: "from-slate-500 to-slate-600"
  },
  {
    icon: AiOutlineGlobal,
    name: "官方网站",
    description: "访问我们的官网了解更多",
    color: "from-indigo-500 to-purple-500"
  }
];

export function ContactInfo() {
  const sectionRef = useRef<HTMLElement>(null);
  const methodsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !methodsRef.current || !socialRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (methodsRef.current?.children) {
              createTimeline()
                .add(methodsRef.current.children, {
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: "easeOutExpo",
                  delay: stagger(100),
                });
            }
            if (socialRef.current?.children) {
              createTimeline()
                .add(socialRef.current.children, {
                  translateX: [50, 0],
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
    <section ref={sectionRef} className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
            联系方式
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            多种联系方式
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            我们提供多种联系方式，您可以选择最适合的方式与我们沟通，
            我们会确保及时回复您的消息。
          </p>
        </div>

        {/* 联系方式 */}
        <div ref={methodsRef} className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div 
                  key={method.title} 
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.bgColor} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-xl flex-shrink-0`}>
                        <IconComponent className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{method.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">{method.description}</p>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{method.contact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 社交媒体 */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">关注我们</h3>
            <p className="text-slate-600 dark:text-slate-400">
              通过社交媒体平台关注我们，获取最新的技术动态和活动信息。
            </p>
          </div>

          <div ref={socialRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <div 
                  key={social.name} 
                  className="group cursor-pointer"
                >
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 text-center group-hover:scale-105">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-2xl`}>
                      <IconComponent className="text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">{social.name}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{social.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
