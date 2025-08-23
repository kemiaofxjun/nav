import { defineConfig } from 'vitepress'
import { getSiteInfo } from './config/navigation.js'

const siteInfo = getSiteInfo()

export default defineConfig({
  title: siteInfo.title,
  description: siteInfo.subtitle,
  base: '/nav/',
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
  },
  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://kemiaofxjun.github.io/nav/'
  }
})