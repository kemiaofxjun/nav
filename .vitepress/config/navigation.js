import { Icon } from "@iconify/vue"

// 导航网站数据配置
export const navigationConfig = {
  // 网站基本信息
  siteInfo: {
    title: '生活导航',
    subtitle: '分享有趣的站点',
    favicon: 'https://cdn.lightxi.com/cloudreve/uploads/2025/04/16/ydYDrRom_favicon.ico'
  },
  
  // 搜索配置
  search: {
    defaultEngine: 'baidu',
    engines: {
      baidu: {
        name: '百度',
        placeholder: '百度搜索',
        searchUrl: 'https://www.baidu.com/s?wd=',
        icon: 'ri:baidu-fill',
        color: '#2932E1'
      },
      google: {
        name: 'Google',
        placeholder: 'Google 搜索',
        searchUrl: 'https://www.google.com/search?q=',
        icon: 'mdi:google',
        color: '#4285F4'
      },
      bing: {
        name: 'Bing',
        placeholder: 'Bing 搜索',
        searchUrl: 'https://www.bing.com/search?q=',
        icon: 'mdi:bing',
        color: '#0078D4'
      },
      duckduckgo: {
        name: 'DuckDuckGo',
        placeholder: 'DuckDuckGo 搜索',
        searchUrl: 'https://duckduckgo.com/?q=',
        icon: 'simple-icons:duckduckgo',
        color: '#DE5833'
      },
      sogou: {
        name: '搜狗',
        placeholder: '搜狗搜索',
        searchUrl: 'https://www.sogou.com/web?query=',
        icon: 'simple-icons:sogou',
        color: '#FB6022'
      },
      so360: {
        name: '360搜索',
        placeholder: '360搜索',
        searchUrl: 'https://www.so.com/s?q=',
        icon: 'iconoir:view-360',
        color: '#01C85F'
      }
    }
  },
  
  // 导航分类数据
  categories: [
    {
      id: 'my-projects',
      name: '我的项目',
      items: [
        {
          id: 'solitude',
          name: 'Solitude',
          description: '一款设计师风格的 Hexo 主题，支持懒加载、PWA、Latex以及多种评论系统。',
          url: 'https://github.com/everfu/hexo-theme-solitude',
          icon: '',
          color: '#FF6B6B'
        },
        {
          id: 'img2color',
          name: 'Img2Color',
          description: '将图片转换为颜色',
          url: 'https://github.com/everfu/img2color',
          icon: '',
          color: '#45B7D1'
        },
      ]
    },
    {
      id: 'media',
      name: '媒体',
      items: [
        {
          id: 'blog',
          name: '博客',
          description: '个人技术博客',
          url: 'https://blog.efu.me',
          icon: {
            light: 'https://cdn.lightxi.com/cloudreve/uploads/2025/08/01/tT8ILteu_logo.avif',
            dark: 'https://cdn.lightxi.com/cloudreve/uploads/2025/08/01/tT8ILteu_logo.avif'
          },
          color: '#FF7675'
        },
        {
          id: 'aifadian',
          name: '爱发电',
          description: '分享有趣又有料的文章与资源',
          url: 'https://afdian.net/a/everfu',
          icon: '',
          color: '#FD79A8'
        }
      ]
    },
    {
      id: 'self-services',
      name: '自建服务',
      items: [
        {
          id: 'meting-api',
          name: 'Meting API',
          description: 'Meting API 接口',
          url: 'https://api.efu.me/meting/',
          icon: '',
          color: '#6C5CE7'
        }
      ]
    },
    {
      id: 'design',
      name: '设计网站',
      items: [
        {
          id: 'pinterest',
          name: 'Pinterest',
          description: '全球最大的素材管理与分享社区',
          url: 'https://www.pinterest.com',
          icon: '',
          color: '#E17055'
        },
        {
          id: 'dribbble',
          name: 'Dribbble',
          description: '插画与UI设计交流社区',
          url: 'https://dribbble.com',
          icon: '',
          color: '#EA4C89'
        },
        {
          id: 'behance',
          name: 'Behance',
          description: 'Adobe旗下设计作品发布网站',
          url: 'https://www.behance.net',
          icon: '',
          color: '#1769FF'
        }
      ]
    },
    {
      id: 'operation',
      name: '运营链接',
      items: [
        {
          id: 'wechat-platform',
          name: '微信公众号',
          description: '腾讯微信公众号开放平台',
          url: 'https://mp.weixin.qq.com',
          icon: '',
          color: '#07BC0C'
        }
      ]
    },
    {
      id: 'design-materials',
      name: '设计素材',
      items: [
        {
          id: 'iconfont',
          name: 'Iconfont',
          description: '阿里旗下的图标交流社区',
          url: 'https://www.iconfont.cn',
          icon: '',
          color: '#FF6900'
        },
        {
          id: 'unsplash',
          name: 'Unsplash',
          description: '摄影师交流社区，免费可商用版权图片',
          url: 'https://unsplash.com',
          icon: '',
          color: '#000000'
        },
        {
          id: 'pexels',
          name: 'Pexels',
          description: '免费可商用图片社区',
          url: 'https://www.pexels.com',
          icon: '',
          color: '#05A081'
        }
      ]
    },
    {
      id: 'ai-tools',
      name: 'AI工具',
      items: [
        {
          id: 'midjourney',
          name: 'Midjourney',
          description: '最强大的AI绘画工具',
          url: 'https://www.midjourney.com',
          icon: '',
          color: '#000000'
        },
        {
          id: 'chatgpt',
          name: 'ChatGPT',
          description: '最好用的AI对话助理',
          url: 'https://chat.openai.com',
          icon: '',
          color: '#10A37F'
        }
      ]
    }
  ]
}

// 获取网站信息的函数
export function getSiteInfo() {
  return navigationConfig.siteInfo
}

// 主题配置
export const themeConfig = {
  // 背景渐变配置
  background: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(45deg, #4facfe, #00f2fe)',
    accent: 'linear-gradient(45deg, #fff, #f0f8ff)'
  },
  
  // 动画配置
  animations: {
    duration: '0.6s',
    easing: 'ease-out',
    hoverScale: 'translateY(-5px)'
  },
  
  // 响应式断点
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px'
  }
}