import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jamki 前端沉淀知识库",
  description: "前端工程师,前端自学,高级前端工程师,中高级前端工程师,前端进阶知识,前端职业发展, react面试,react源码，工程化，前端安全，前端面试， 剑指前端 Offer",
  head: [
    ['link', { rel: 'icon', href: 'https://www.jianfengke.com/favicon.ico' }],
  ],
  themeConfig: {
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
