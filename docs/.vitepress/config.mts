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
          { text: 'PromiseA+规范', link: '/js/promise_A+' },
          { text: '自己实现一个Promise', link: '/js/promise' },
        ],
        collapsed: true
      },
      {
        text: 'CSS基础',
        items: [
          { text: 'BFC', link: '/css/BFC' },
          { text: 'CSS属性选择器', link: '/css/selector' },
          { text: '盒模型', link: '/css/box-model' },
          { text: '隐藏元素的方法', link: '/css/visible' },
          { text: 'CSS常见列布局', link: '/css/column-layout' },
        ],
        collapsed: true
      },
      {
        text: 'React',
        items: [
          { text: 'React事件合成', link: '/react/synthetic-event'},
        ],
        collapsed: true
      },
      {
        text: 'NodeJs',
        items: [
          { text: '搞不懂path.join的path.resolve的区别就来看看这个', link: '/nodejs/path-action' },
          { text: 'Koa启动流程及其洋葱模型源码分析', link: '/nodejs/koa-compose' },
          { text: 'cluster-集群', link: '/nodejs/cluster' },
        ],
        collapsed: true
      },
      {
        text: '工程化',
        items: [
          { text: 'CommonJs常见疑点', link: '/engineering/commomjs' },
          { text: '热更新原理', link: '/engineering/hmr' },
        ],
        collapsed: true
      },
      {
        text: 'Typescript',
        items: [
          { text: 'Typescript常用的内置工具方法', link: '/typescript/utils-type' },
        ],
        collapsed: true
      },
      {
        text: '浏览器与网络',
        items: [
          { text: '浏览器资源缓存策略-强缓存与协商缓存', link: '/network/cache-strategy' },
          { text: '浏览器应用层缓存简介', link: '/network/applicatiob-cache' },
          { text: '浏览器渲染流程', link: '/network/browser-render' },
        ],
        collapsed: true
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kejianfeng' }
    ]
  },
  // base: '/frontend-kb/'
})
