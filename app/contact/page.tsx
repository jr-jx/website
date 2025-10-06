"use client";

import { useActionState } from "react";
import { submitContact } from "./actions";

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(submitContact as any, null as any);
  const errors = (state as any)?.errors as Record<string, string[]> | undefined;
  const ok = (state as any)?.ok as boolean | undefined;
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">联系</h1>
      <p className="mt-4 text-muted-foreground">邮箱、社交账号、地点与地图。</p>
      <form action={formAction} className="mt-8 max-w-xl space-y-4" aria-describedby="form-desc">
        <p id="form-desc" className="text-sm text-muted-foreground">联系我们，我们会尽快回复。</p>
        <div>
          <label className="block text-sm font-medium" htmlFor="name">姓名</label>
          <input id="name" name="name" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" />
          {errors?.name && <p className="mt-1 text-sm text-destructive">{errors.name[0]}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="email">邮箱</label>
          <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" />
          {errors?.email && <p className="mt-1 text-sm text-destructive">{errors.email[0]}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="message">留言</label>
          <textarea id="message" name="message" rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" />
          {errors?.message && <p className="mt-1 text-sm text-destructive">{errors.message[0]}</p>}
        </div>
        <div className="flex items-center gap-3">
          <button disabled={pending} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50">
            {pending ? "提交中..." : "提交"}
          </button>
          {ok && <span role="status" className="text-sm text-green-600">提交成功，我们已收到。</span>}
        </div>
      </form>
    </main>
  );
}


