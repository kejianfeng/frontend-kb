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
        text: 'JS基础',
        items: [
          { text: '原型及原型链', link: '/js/prototype' },
        ]
      },
      {
        text: 'CSS基础',
        items: [
          { text: 'BFC', link: '/css/BFC' },
        ]
      },
      {
        text: 'React',
        items: [
          { text: 'react渲染流程', link: '/js/prototype' },
        ]
      },
      {
        text: '工程化',
        items: [
          { text: 'husky', link: '/js/prototype' },
        ]
      },




    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kejianfeng' }
    ]
  },
  // base: '/frontend-kb/'
})
