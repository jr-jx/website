"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import {
  AiFillBilibili,
  AiOutlineDocker,
  AiOutlineGithub,
  AiOutlineJava,
  AiOutlineTikTok,
} from "react-icons/ai";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiC,
  SiFlutter,
  SiGitee,
  SiGo,
  SiKotlin,
  SiLinux,
  SiMysql,
  SiPython,
  SiQt,
  SiTiktok,
  SiTypescript,
} from "react-icons/si";
import { RiBlueskyFill, RiNodejsFill, RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const coreMembers = [
  {
    name: "王卓",
    role: "会长",
    department: "大数据技术",
    avatar: "https://wsrv.nl/?url=github.com/everfu.png",
    bio: "专注于全栈开发，拥有丰富的项目经验，狂热的开源爱好者。",
    skills: [
      {
        name: "React",
        icon: <RiReactjsFill />,
      },
      {
        name: "Node.js",
        icon: <RiNodejsFill />,
      },
      {
        name: "Docker",
        icon: <AiOutlineDocker />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Kotlin",
        icon: <SiKotlin />,
      },
      {
        name: "Java",
        icon: <AiOutlineJava />,
      },
      {
        name: "Go",
        icon: <SiGo />,
      },
      {
        name: "Vue",
        icon: <RiVuejsFill />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter />,
      },
    ],
    social: [
      {
        name: "github",
        url: "https://github.com/everfu",
        target: "_blank",
        icon: <AiOutlineGithub />,
      },
      {
        name: "gitee",
        url: "https://gitee.com/everfu",
        target: "_blank",
        icon: <SiGitee />,
      },
      {
        name: "butterfly",
        url: "https://bsky.app/profile/everfu.bsky.social",
        target: "_blank",
        icon: <RiBlueskyFill />,
      },
      {
        name: "bilibili",
        url: "https://space.bilibili.com/1329819902",
        target: "_blank",
        icon: <AiFillBilibili />,
      },
    ],
  },
  {
    name: "曾络",
    role: "副会长/技术部部长",
    department: "软件工程技术",
    avatar: "https://wsrv.nl/?url=github.com/xxhhzl.png",
    bio: "AI技术专家，在机器学习和深度学习领域有深入研究。",
    skills: [
      {
        name: "C/C++",
        icon: <SiC />,
      },
      {
        name: "Python",
        icon: <SiPython />,
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
      },
      {
        name: "Qt",
        icon: <SiQt />,
      },
      {
        name: "Linux",
        icon: <SiLinux />,
      },
    ],
    social: [
      {
        name: "github",
        url: "https://github.com/xxhhzl",
        target: "_blank",
        icon: <AiOutlineGithub />,
      },
      {
        name: "gitee",
        url: "https://gitee.com/zlzelu",
        target: "_blank",
        icon: <SiGitee />,
      },
    ],
  },
  {
    name: "方楚元",
    role: "组织部部长",
    department: "人工智能工程技术",
    avatar: "https://s3.qjqq.cn/47/68e522812c208.jpg!color",
    bio: "阿里人工智能高级训练师，  Ai视觉应用（ 基于yolo/opencv）的爱好者， AIGC创作者，有诸多AIGC城市宣传作品。",
    skills: [
      {
        name: "C",
        icon: <SiC />,
      },
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
    social: [],
  },
  {
    name: "郑玮庭",
    role: "外宣部部长",
    department: "大数据技术",
    avatar: "https://s3.qjqq.cn/47/68e522c9c1e45.jpg!color",
    bio: "资深自媒体运营，擅长内容创作和传播。",
    skills: [
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop />,
      },
      {
        name: "Premiere",
        icon: <SiAdobepremierepro />,
      },
      {
        name: "剪映",
        icon: <SiTiktok />,
      },
    ],
    social: [
      {
        name: "抖音",
        url: "https://v.douyin.com/ac0df6PHlvs",
        target: "_blank",
        icon: <AiOutlineTikTok />,
      },
    ],
  },
  {
    name: "钟浩",
    role: "财务部部长",
    department: "软件工程技术",
    avatar: "https://s3.qjqq.cn/47/68e52489da665.jpg!color",
    bio: "财务专家，精通财务管理。",
    skills: [
      {
        name: "WPS",
      },
      {
        name: "C/C++",
        icon: <SiC />,
      },
    ],
    social: [],
  },
  {
    name: "熊雅琪",
    role: "技术部副部长",
    department: "软件工程技术",
    avatar: "https://s3.qjqq.cn/47/68e52402ec931.jpg!color",
    bio: "程序猿一个，精通C。",
    skills: [
      {
        name: "C/C++",
        icon: <SiC />,
      },
    ],
    social: [],
  },
  {
    name: "熊晓琴",
    role: "外宣部副部长",
    department: "软件工程技术",
    avatar: "https://s3.qjqq.cn/47/68e524f3d3309.jpg!color",
    bio: "审美小天才，擅长设计。",
    skills: [
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop />,
      },
      {
        name: "Premiere",
        icon: <SiAdobepremierepro />,
      },
      {
        name: "剪映",
        icon: <SiTiktok />,
      },
    ],
    social: [],
  },
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
              createTimeline().add(cardsRef.current.children, {
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: "easeOutExpo",
                delay: stagger(100),
              });
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">核心成员</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">我们的核心团队</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            由来自不同专业背景的优秀学生组成，每个人都在自己的领域有着深厚的专业知识和丰富的实践经验。
          </p>
        </div>

        <div ref={cardsRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreMembers.map((member) => (
              <Card key={member.name} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-2">{member.name}</CardTitle>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="text-xs bg-primary/10 text-primary">{member.role}</Badge>
                        <Badge className="text-xs bg-muted text-muted-foreground">
                          {member.department}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        className="text-xs bg-muted text-muted-foreground flex items-center gap-1"
                      >
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>

                  {member.social.length > 0 && (
                    <div className="flex justify-center gap-1 pt-2">
                      {member.social.map((social) => (
                        <Button key={social.name} variant="ghost" size="icon-sm" asChild>
                          <a
                            href={social.url}
                            target={social.target || "_blank"}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            {social.icon}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
