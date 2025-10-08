"use client";

import { useEffect, useRef, useState } from "react";
import { stagger, createTimeline } from "animejs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "加入协会需要什么条件？",
    answer:
      "我们欢迎所有热爱技术的同学加入。主要要求包括：在校学生身份、基本的编程基础、良好的学习态度和团队合作精神。技术背景不是必须的，我们更看重学习能力和热情。",
  },
  {
    question: "协会的活动频率如何？",
    answer:
      "我们每周会组织1-2次技术分享活动，每月有1次大型项目展示，每学期还会举办技术竞赛和workshop。成员可以根据自己的时间安排选择性参与。",
  },
  {
    question: "新手可以加入吗？",
    answer:
      "当然可以！我们非常欢迎新手加入。协会提供从基础到进阶的完整学习路径，有经验丰富的学长学姐进行指导，还有专门的入门培训课程。",
  },
  {
    question: "加入后需要承担什么责任？",
    answer:
      "成员需要积极参与协会活动，主动学习和分享知识。我们鼓励成员参与项目开发，但不会强制要求。",
  },
  {
    question: "协会提供哪些学习资源？",
    answer: "我们提供丰富的学习资源，包括技术分享课、项目实战机会等。",
  },
  {
    question: "如何申请加入？",
    answer:
      "申请流程很简单：1）填写在线申请表 2）参加技术面试 3）通过试用期考核 4）正式成为成员。整个过程大约需要2-3周时间。",
  },
  {
    question: "协会有哪些技术方向？",
    answer:
      "我们涵盖多个技术方向，包括Web开发、Java开发、C/C++开发、算法等。成员可以根据兴趣选择发展方向。",
  },
  {
    question: "退出协会有什么要求？",
    answer:
      "成员可以随时申请退出，但建议提前告知。我们希望成员能够完成当前参与的项目，并做好知识交接工作。",
  },
];

export function JoinFAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !faqRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (faqRef.current?.children) {
              createTimeline().add(faqRef.current.children, {
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">常见问题</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">常见问题</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            以下是申请者最常问的问题，如果您还有其他疑问，欢迎随时联系我们。
          </p>
        </div>

        <div ref={faqRef} className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <Card key={index} className="overflow-hidden p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <AiOutlineMinus className="w-5 h-5 text-primary" />
                    ) : (
                      <AiOutlinePlus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <CardContent className="pt-0 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* 底部联系信息 */}
        <div className="mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center p-8">
              <h3 className="text-xl font-bold mb-4">还有其他问题？</h3>
              <p className="text-muted-foreground mb-6">
                如果您还有其他疑问，欢迎通过以下方式联系我们：
              </p>
              <Button asChild>
                <a href="mailto:hi@jr-jx.cn">发送邮件</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
