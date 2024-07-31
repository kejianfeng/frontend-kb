import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jamki 前端沉淀知识库",
  description: "总结前端的一些常见技能点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: 'https://www.jianfengke.com' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '开始学习', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kejianfeng' }
    ]
  }
})
