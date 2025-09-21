import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "先锋计算机协会",
  description: "",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: '先锋计算机协会' }],
    ['meta', { property: 'og:description', content: '' }],
    ['meta', { property: 'og:image', content: 'https://cdn.lightxi.com/cloudreve/uploads/2025/09/07/BKx5jyN7_r-logo-2.png' }],
    ['meta', { property: 'og:url', content: 'https://jr-jx.cn' }],
    ['meta', { name: 'keywords', content: '先锋计算机协会,计算机协会,江西软件职业技术大学' }],
    ['meta', { name: 'description', content: '先锋计算机协会' }],
    ['meta', { name: 'author', content: '先锋计算机协会' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
  ],
  themeConfig: {
    logo: '/favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '加入我们', link: 'https://qm.qq.com/q/3uta5AKkKI' }
    ],

    sidebar: [
      {
        text: '加入我们',
        items: [
          { text: '加入我们', link: '/markdown-examples' },
          { text: '加入我们', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jr-jx' }
    ],
    
    footer: {
      copyright: '© 2025 先锋计算机协会'
    }
  }
})
