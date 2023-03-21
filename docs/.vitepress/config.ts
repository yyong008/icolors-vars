import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "icolors-systems",
  description: "System-level Color System Css Variables, fast and happy to use it",
  base: '/icolors-vars/',
  themeConfig: {
    nav: [
      { text: 'Home', link: './' },
      { text: '颜色系统', link: './antd' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '介绍', link: '/intro' },
          { text: '使用方法', link: '/usage' }
        ]
      },
      {
        text: '颜色系统',
        items: [
          { text: 'Antd', link: '/antd' },
          { text: 'ElmPlus', link: '/elm-plus' },
          { text: 'MUI', link: '/mui' },
          { text: 'TailWind', link: '/tailwind' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yyong008/icolors-vars' }
    ]
  }
})
