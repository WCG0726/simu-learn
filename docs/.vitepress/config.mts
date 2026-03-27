import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '仿真学习平台',
  description: 'COMSOL、ANSYS、DEFORM 仿真教程 - 电子封装、金属成形、多物理场仿真',
  base: '/simu-learn/',
  
  head: [
    ['link', { rel: 'icon', href: '/simu-learn/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'COMSOL, ANSYS, DEFORM, 仿真, 电子封装, 金属成形, 多物理场' }],
    ['meta', { name: 'author', content: 'WCG0726' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '仿真学习平台',

    nav: [
      { text: '首页', link: '/' },
      { 
        text: 'COMSOL', 
        link: '/comsol/',
        activeMatch: '/comsol/'
      },
      { 
        text: 'ANSYS', 
        link: '/ansys/',
        activeMatch: '/ansys/'
      },
      { 
        text: 'DEFORM', 
        link: '/deform/',
        activeMatch: '/deform/'
      },
      { 
        text: '工具', 
        link: '/tools/',
        activeMatch: '/tools/'
      },
      { 
        text: '常见问题', 
        link: '/faq/',
        activeMatch: '/faq/'
      }
    ],

    sidebar: {
      '/comsol/': [
        {
          text: '📚 入门教程',
          collapsed: false,
          items: [
            { text: 'COMSOL 概述', link: '/comsol/' },
            { text: '安装与配置', link: '/comsol/basics/installation' },
            { text: '界面介绍', link: '/comsol/basics/interface' },
            { text: '几何建模', link: '/comsol/basics/geometry' },
            { text: '材料设置', link: '/comsol/basics/materials' },
            { text: '网格划分', link: '/comsol/basics/mesh' },
            { text: '求解器设置', link: '/comsol/basics/solver' },
            { text: '后处理', link: '/comsol/basics/postprocessing' }
          ]
        },
        {
          text: '🔬 电子封装',
          collapsed: false,
          items: [
            { text: '概述', link: '/comsol/electronic-packaging/' },
            { text: '芯片热分析', link: '/comsol/electronic-packaging/chip-thermal' },
            { text: 'PCB 热仿真', link: '/comsol/electronic-packaging/pcb-thermal' },
            { text: '封装热阻计算', link: '/comsol/electronic-packaging/thermal-resistance' },
            { text: '焊点应力分析', link: '/comsol/electronic-packaging/solder-stress' },
            { text: '热循环疲劳', link: '/comsol/electronic-packaging/thermal-cycling' }
          ]
        },
        {
          text: '⚡ 热电材料',
          collapsed: false,
          items: [
            { text: '概述', link: '/comsol/thermoelectric/' },
            { text: 'Seebeck 效应', link: '/comsol/thermoelectric/seebeck' },
            { text: 'Peltier 效应', link: '/comsol/thermoelectric/peltier' },
            { text: '热电模块仿真', link: '/comsol/thermoelectric/module' },
            { text: 'ZT 值优化', link: '/comsol/thermoelectric/zt-optimization' }
          ]
        },
        {
          text: '🔗 热-电-力耦合',
          collapsed: false,
          items: [
            { text: '概述', link: '/comsol/thermal-electrical-mechanical/' },
            { text: '焦耳热分析', link: '/comsol/thermal-electrical-mechanical/joule-heating' },
            { text: '热应力分析', link: '/comsol/thermal-electrical-mechanical/thermal-stress' },
            { text: '电迁移分析', link: '/comsol/thermal-electrical-mechanical/electromigration' },
            { text: 'MEMS 器件仿真', link: '/comsol/thermal-electrical-mechanical/mems' }
          ]
        }
      ],
      '/ansys/': [
        {
          text: '📚 入门教程',
          collapsed: false,
          items: [
            { text: 'ANSYS 概述', link: '/ansys/' },
            { text: '安装与配置', link: '/ansys/basics/installation' },
            { text: 'Workbench 界面', link: '/ansys/basics/workbench' },
            { text: '几何建模', link: '/ansys/basics/geometry' },
            { text: '网格划分', link: '/ansys/basics/mesh' },
            { text: 'Mechanical 基础', link: '/ansys/basics/mechanical' },
            { text: 'Fluent 基础', link: '/ansys/basics/fluent' }
          ]
        },
        {
          text: '🔬 电子封装',
          collapsed: false,
          items: [
            { text: '概述', link: '/ansys/electronic-packaging/' },
            { text: 'Icepak 热仿真', link: '/ansys/electronic-packaging/icepak' },
            { text: 'PCB 热分析', link: '/ansys/electronic-packaging/pcb-thermal' },
            { text: '封装热阻', link: '/ansys/electronic-packaging/thermal-resistance' },
            { text: '跌落仿真', link: '/ansys/electronic-packaging/drop-test' }
          ]
        },
        {
          text: '⚡ 热电材料',
          collapsed: false,
          items: [
            { text: '概述', link: '/ansys/thermoelectric/' },
            { text: '热电器件仿真', link: '/ansys/thermoelectric/device' },
            { text: '温度场分析', link: '/ansys/thermoelectric/temperature' }
          ]
        },
        {
          text: '🔗 热-电-力耦合',
          collapsed: false,
          items: [
            { text: '概述', link: '/ansys/thermal-electrical-mechanical/' },
            { text: '电热耦合', link: '/ansys/thermal-electrical-mechanical/electrothermal' },
            { text: '热应力分析', link: '/ansys/thermal-electrical-mechanical/thermal-stress' },
            { text: '功率模块仿真', link: '/ansys/thermal-electrical-mechanical/power-module' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '🛠️ 实用工具',
          collapsed: false,
          items: [
            { text: '工具总览', link: '/tools/' },
            { text: '热阻计算器', link: '/tools/thermal-resistance' },
            { text: '网格估算器', link: '/tools/mesh-estimator' },
            { text: '材料数据库', link: '/tools/materials' },
            { text: '参数参考', link: '/tools/parameters' }
          ]
        }
      ],
      '/faq/': [
        {
          text: '❓ 常见问题',
          collapsed: false,
          items: [
            { text: '问题总览', link: '/faq/' },
            { text: '安装问题', link: '/faq/installation' },
            { text: '收敛问题', link: '/faq/convergence' },
            { text: '网格问题', link: '/faq/mesh' },
            { text: '结果验证', link: '/faq/verification' }
          ]
        }
      ],
      '/deform/': [
        {
          text: '📚 入门教程',
          collapsed: false,
          items: [
            { text: 'DEFORM 概述', link: '/deform/' },
            { text: '安装与配置', link: '/deform/basics/installation' },
            { text: '界面介绍', link: '/deform/basics/interface' }
          ]
        },
        {
          text: '🔧 应用案例',
          collapsed: false,
          items: [
            { text: '热锻仿真', link: '/deform/applications/hot-forging' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WCG0726/simu-learn' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 WCG0726'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/WCG0726/simu-learn/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
