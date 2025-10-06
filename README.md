## 先锋计算机协会官网（Next.js + Tailwind + shadcn/ui + MDX + Anime.js）

### 本地开发

```bash
pnpm i
pnpm dev
```

### 内容模型

- 博客：`content/blog/*.mdx`
- 活动：`content/events/*.mdx`

支持 frontmatter：`title`、`date`、`excerpt`。

### 部署（Vercel）

1. 推送到 GitHub
2. 在 Vercel 选择导入该仓库
3. Framework 选择 Next.js，构建命令默认（Next 15）
4. 环境变量：可根据需要配置 `NEXT_PUBLIC_*`

### 路由

- `/` 首页
- `/blog`、`/blog/[slug]`
- `/events`、`/events/[slug]`
- `/about`、`/team`、`/docs`、`/join`、`/contact`
