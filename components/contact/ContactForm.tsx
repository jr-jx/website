"use client";

import { useActionState } from "react";
import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import { submitContact } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { AiOutlineSend, AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact as any, null as any);
  const errors = (state as any)?.errors as Record<string, string[]> | undefined;
  const ok = (state as any)?.ok as boolean | undefined;
  
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (formRef.current) {
              createTimeline()
                .add(formRef.current, {
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 800,
                  easing: "easeOutExpo",
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
            发送消息
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            给我们留言
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            有任何问题、建议或合作意向？请填写下面的表单，
            我们会尽快回复您的消息。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div ref={formRef} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <form action={formAction} className="space-y-6" aria-describedby="form-desc">
              <p id="form-desc" className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                请填写以下信息，我们会尽快与您联系。
              </p>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">
                  <div className="flex items-center gap-2">
                    <AiOutlineUser className="text-emerald-600 dark:text-emerald-400" />
                    姓名
                  </div>
                </label>
                <input 
                  id="name" 
                  name="name" 
                  type="text"
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-colors" 
                  placeholder="请输入您的姓名"
                />
                {errors?.name && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                  <div className="flex items-center gap-2">
                    <AiOutlineMail className="text-emerald-600 dark:text-emerald-400" />
                    邮箱
                  </div>
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email"
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-colors" 
                  placeholder="请输入您的邮箱地址"
                />
                {errors?.email && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="message">
                  <div className="flex items-center gap-2">
                    <AiOutlineMessage className="text-emerald-600 dark:text-emerald-400" />
                    留言内容
                  </div>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-colors resize-none" 
                  placeholder="请详细描述您的问题或建议..."
                />
                {errors?.message && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message[0]}</p>}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  disabled={pending} 
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {pending ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      提交中...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      发送消息
                    </div>
                  )}
                </Button>
                
                {ok && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">消息发送成功！我们会尽快回复您。</span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
