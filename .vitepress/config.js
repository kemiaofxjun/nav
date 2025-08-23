import { defineConfig } from 'vitepress'
import { getSiteInfo } from './config/navigation.js'

const siteInfo = getSiteInfo()

// 判断环境：开发环境用 /，生产环境用 /nav/
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/nav/' : '/'

export default defineConfig({
  title: siteInfo.title,
  description: siteInfo.subtitle,
  base: basePath, // 动态设置base路径
  
  // 构建输出目录调整为直接生成nav目录
  outDir: '../dist/nav',
  
  srcExclude: ['README.md'],
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: siteInfo.favicon }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: siteInfo.title }],
    ['meta', { property: 'og:description', content: siteInfo.subtitle }],
  ],
  
  themeConfig: {
    logo: '/logo.png',
    sidebar: false,
    outline: false,
    
    // 添加GitHub Pages需要的.nav目录支持
    dest: '.vitepress/dist/nav',
  },
  
  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true,
  
  sitemap: {
    // 修正URL格式问题
    hostname: 'https://kemiaofxjun.github.io/nav'
  },
  
  // 添加本地开发服务器重定向
  vite: {
    server: {
      open: '/nav/'
    }
  }
})