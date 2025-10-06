"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "请填写姓名"),
  email: z.string().email("邮箱格式不正确"),
  message: z.string().min(10, "请至少输入 10 个字"),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export async function submitContact(prevState: any, formData: FormData) {
  const data = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    message: String(formData.get("message") || ""),
  };
  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    } as const;
  }

  // TODO: 这里可集成发送邮件或存储逻辑
  await new Promise((r) => setTimeout(r, 400));

  return { ok: true } as const;
}


