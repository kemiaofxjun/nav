import { Icon } from "@iconify/vue"

// 导航网站数据配置
export const navigationConfig = {
  // 网站基本信息
  siteInfo: {
    title: '生活导航',
    subtitle: '分享有趣的站点',
    favicon: 'https://img.314926.xyz/images/2025/08/13/no-background-kemiaofxjun.webp'
  },
  
  // 搜索配置
  search: {
    defaultEngine: 'bing',
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
      name: '我的博客',
      items: [
        {
          id: 'solitude',
          name: 'Solitude',
          description: '一款设计师风格的 Hexo 主题，支持懒加载、PWA、Latex以及多种评论系统。',
          url: 'https://myboke.kemiaosw.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/hexo-blog-solitude.webp',
            dark: 'https://img.314926.xyz/images/2025/08/23/hexo-blog-solitude.webp'
          },
          color: '#FF6B6B'
        },
        {
          id: 'blog-v3-nuxt4',
          name: '纸鹿的博客魔改',
          description: '框架为nuxt4',
          url: 'https://kemeow.kemiaosw.top',
          icon: {
            light: 'https://www.zhilu.site/api/avatar.png',
            dark: 'https://www.zhilu.site/api/avatar.png'
          },
          color: '#45B7D1'
        },
        {
          id: 'notionnext',
          name: 'NotionNext-heo',
          description: 'notionnext的博客，heo主题',
          url: 'https://myboke.kemeow.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/notionnext.webp',
            dark: 'https://img.314926.xyz/images/2025/08/23/notionnext.webp'
          },
          color: '#892B93'
        },
                {
          id: 'hugo-mono',
          name: 'Hugo-Mono',
          description: '基于hugo的一款非常简洁的博客主题。',
          url: 'https://myblog.kemiaosw.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/hugo-mono.webp',
            dark: 'https://img.314926.xyz/images/2025/08/23/hugo-mono.webp'
          },
          color: '#192B93'
        },
        {
          id: 'astro-pure',
          name: 'astro-theme-pure',
          description: 'astro-theme-pure的自用版本',
          url: 'https://kmblog.kemeow.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/astro-pure.webp',
            dark: 'https://img.314926.xyz/images/2025/08/23/astro-pure.webp'
          },
          color: '#85B7D1'
        },
        {
          id: 'astro-Mizuki',
          name: 'astro-theme-Mizuki',
          description: 'astro-theme-Mizuki的自用版本',
          url: 'https://blog.kemiaosw.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/Mizuki.webp',
            dark: 'https://img.314926.xyz/images/2025/08/23/Mizuki.webp'
          },
          color: '#02A7D1'
        },
        {
          id: 'suzu-blog',
          name: 'suzu-blog',
          description: '基于 Next.js 的博客模板，一键启动，简易配置，使用 Markdown 撰写你的文章。',
          url: 'https://me.kemeow.top',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMfaKnDOjtUSdscJskzhkvZZmPqoagAAq3HMRupnFBVtBUzwAfAgrMBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMfaKnDOjtUSdscJskzhkvZZmPqoagAAq3HMRupnFBVtBUzwAfAgrMBAAMCAAN4AAM2BA.webp'
          },
          color: '#130BD1',
        },
        {
          id: 'wallleap-blog',
          name: 'wallleap-blog',
          description: 'A GitHub Issue blog theme based on Vue 2',
          url: 'https://myblog.kemeow.top',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMmaKqLdVfP6rV0QjlsLLMGBz4AAdF-AAKHwzEbqZxYVV9hJNQl8yumAQADAgADeAADNgQ.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMmaKqLdVfP6rV0QjlsLLMGBz4AAdF-AAKHwzEbqZxYVV9hJNQl8yumAQADAgADeAADNgQ.webp'
          },
          color: '#130BD1',
        },
        {
          id: 'rin-blog',
          name: 'rin-blog',
          description: '⚡基于 Cloudflare Pages + Workers + D1 + R2 的动态博客',
          url: 'https://rin.kemeow.top',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMoaKqPLqdfoiF8Pw1G4NhpSmkUWMkAApDDMRupnFhVbNrrcIZmXsoBAAMCAAN5AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMoaKqPLqdfoiF8Pw1G4NhpSmkUWMkAApDDMRupnFhVbNrrcIZmXsoBAAMCAAN5AAM2BA.webp'
          },
          color: '#130BD1',
        },
        {
          id: 'rin-blog',
          name: 'rin-blog',
          description: 'Gmeek 博客',
          url: 'https://blog.kemiao.site',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMpaKqR6poVc1IfyI6LG6-nYrxdijgAApXDMRupnFhVsGOzja-SddEBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMpaKqR6poVc1IfyI6LG6-nYrxdijgAApXDMRupnFhVsGOzja-SddEBAAMCAAN4AAM2BA.webp'
          },
          color: '#130BD1',
        },
        {
          id: 'xlog',
          name: 'xlog-blog',
          description: '区块链 博客',
          url: 'https://xlog.kemiao.xyz',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMsaKqg4alIgMsHFHPOPzuGUiC2BtsAAq7DMRupnFhVe8SYG42VsyYBAAMCAANtAAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMsaKqg4alIgMsHFHPOPzuGUiC2BtsAAq7DMRupnFhVe8SYG42VsyYBAAMCAANtAAM2BA.webp'
          },
          color: '#130BD1',
        },  
      ],
    },
    // {
    //   id: 'media',
    //   name: '媒体',
    //   items: [
    //     {
    //       id: 'blog',
    //       name: '博客',
    //       description: '个人技术博客',
    //       url: 'https://blog.efu.me',
    //       icon: {
    //         light: 'https://cdn.lightxi.com/cloudreve/uploads/2025/08/01/tT8ILteu_logo.avif',
    //         dark: 'https://cdn.lightxi.com/cloudreve/uploads/2025/08/01/tT8ILteu_logo.avif'
    //       },
    //       color: '#FF7675'
    //     },
    //     {
    //       id: 'aifadian',
    //       name: '爱发电',
    //       description: '分享有趣又有料的文章与资源',
    //       url: 'https://afdian.net/a/everfu',
    //       icon: '',
    //       color: '#FD79A8'
    //     }
    //   ]
    // },
    { 
      id: 'common-site',
      name: '常用网站',
      items: [
          {
          id: 'Github',
          name: 'Github',
          description: '常用代码托管网站',
          url: 'https://github.com/',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMraKqT3bmOZf_bXcG9bcf_2bg6GbAAAprDMRupnFhV3t-NdBcLNFUBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMraKqT3bmOZf_bXcG9bcf_2bg6GbAAAprDMRupnFhV3t-NdBcLNFUBAAMCAAN4AAM2BA.webp'
          },
          color: '#85B7D1',
        },
          {
          id: 'Gitee',
          name: 'Gitee',
          description: '常用代码托管网站',
          url: 'https://gitee.com/',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMtaKqhh-jiQNUVuP6zaQXiRVl3oLEAAq_DMRupnFhV5iO8oolqxr0BAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMtaKqhh-jiQNUVuP6zaQXiRVl3oLEAAq_DMRupnFhV5iO8oolqxr0BAAMCAAN4AAM2BA.webp'
          },
          color: '#85B7D1',
        },
        {
          id: 'vercel',
          name: 'Vercel',
          description: 'vercel部署博客',
          url: 'https://vercel.com/',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMwaKqixMw7aUpOKASscmBOCNg8N_cAArXDMRupnFhVPWRnlaD-e-4BAAMCAAN5AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMwaKqixMw7aUpOKASscmBOCNg8N_cAArXDMRupnFhVPWRnlaD-e-4BAAMCAAN5AAM2BA.webp'
          },
          color: '#85B7D1',
        },
        {
          id: 'cloudflare',
          name: 'cloudflare',
          description: 'cloudflare部署博客和workers',
          url: 'https://dash.cloudflare.com/',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMyaKqnSSZt88LiEVBB11OFCBTd0FkAAsTDMRupnFhVLziHo9bcQfQBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMyaKqnSSZt88LiEVBB11OFCBTd0FkAAsTDMRupnFhVLziHo9bcQfQBAAMCAAN4AAM2BA.webp'
          },
          color: '#85B7D1',
        },
        {
          id: 'netlify',
          name: 'netlify',
          description: 'netlify部署博客',
          url: 'https://app.netlify.com/',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMzaKqofGiOuA6T26iNGz7PU7_OtY4AAs_DMRupnFhV5omy7Dd-WpYBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMzaKqofGiOuA6T26iNGz7PU7_OtY4AAs_DMRupnFhV5omy7Dd-WpYBAAMCAAN4AAM2BA.webp'
          },
          color: '#85B7D1',
        }, 
        {
          id: 'bilibili',
          name: '哔哩哔哩',
          description: '哔哩哔哩视频平台',
          url: 'https://www.bilibili.com/',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAM0aKqrep1TaCQyhEYqvVTuYdNJ0NQAAtrDMRupnFhVKLc-7YQYmD4BAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAM0aKqrep1TaCQyhEYqvVTuYdNJ0NQAAtrDMRupnFhVKLc-7YQYmD4BAAMCAAN4AAM2BA.webp'
          },
          color: '#85B7D1',
        }, 
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
          url: 'https://meting.051531.xyz/meting/',
          icon: '',
          color: '#6C5CE7'
        },
        {
          id: 'CloudPaste',
          name: 'CloudPaste',
          description: '于 Cloudflare 的在线剪贴板和文件分享服务，支持 Markdown 编辑和文件上传',
          url: 'https://cloud.kemeow.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/cloudpaste.webp',
            dark: 'https://img.314926.xyz/images/2025/08/23/cloudpaste.webp'
          },
          color: '#85B7D1'
        },
        {
          id: 'Kemiao-Cover',
          name: 'Kemiao-Cover',
          description: '简洁的在线生成封面网站',
          url: 'https://cover.kemeow.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/Mini-Cover.svg',
            dark: 'https://img.314926.xyz/images/2025/08/23/Mini-Cover.svg'
          },
          color: '#85B7D1'
        },
        {
          id: 'kemiao-CoverView',
          name: 'kemiao-CoverView',
          description: '封面生成器',
          url: 'https://coverview.kemeow.top',
          icon: {
            light: 'https://img.314926.xyz/images/2025/08/23/CoverView.webp',
            dark: 'https://img.314926.xyz/images/2025/08/23/CoverView.webp'
          },
          color: '#21F7D1'
        },
        {
          id: 'Umami',
          name: 'Umami',
          description: '克喵的Umami自建服务',
          url: 'https://unami-kemiao.kemiaosw.top',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMZaKmFyiKaVZXNY7kXKfW8zP4eDGkAAkjEMRuLMFFV2tQhf9SXxrkBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMZaKmFyiKaVZXNY7kXKfW8zP4eDGkAAkjEMRuLMFFV2tQhf9SXxrkBAAMCAAN4AAM2BA.webp'
          },
          color: '#941AD1'
        },
        {
          id: 'uptime-status',
          name: '网站监测',
          description: '克喵的网站监测页面',
          url: 'https://status.kemeow.top',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMaaKmTWVxkdidV-MMtbWaBcKQWZJYAAoHEMRuLMFFVq_PMXQkvPxIBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMaaKmTWVxkdidV-MMtbWaBcKQWZJYAAoHEMRuLMFFVq_PMXQkvPxIBAAMCAAN4AAM2BA.webp'
          },
          color: '#941AD1'
        }, 
        {
          id: 'kemiao-mails',
          name: 'cloud-mail',
          description: '基于cloudflare的邮件服务',
          url: 'https://mail.kemeow.top',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMbaKmklN8oHrhud8bnYiCm2vuYx3YAAovHMRupnFBVO9B8TqZdFHcBAAMCAANtAAM2BA.svg',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMbaKmklN8oHrhud8bnYiCm2vuYx3YAAovHMRupnFBVO9B8TqZdFHcBAAMCAANtAAM2BA.svg'
          },
          color: '#801AD1'
        },
        {
          id: 'YF-cloud',
          name: 'YF-cloud',
          description: 'YF-cloud资源分享平台',
          url: 'https://fx.kemeow.top',
          icon: '',
          color: '#71da81'
        },
        {
          id: 'kemiao-FlareDrive-R2',
          name: 'kemiao-FlareDrive-R2',
          description: 'FlareDrive-R2 是基于 Cloudflare R2 + Workers 构建的在线网盘系统',
          url: 'https://pan.kemeow.top',
          icon: '',
          color: '#804ca1'
        },
        {
          id: 'openlist',
          name: 'openlist',
          description: 'alist开源网盘的改版',
          url: 'https://alist.050815.xyz',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMcaKmwTbAGYa6SIEu8zHaZkugXYpcAApfHMRupnFBVqxiVTrE5qHABAAMCAAN5AAM2BA.svg',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMcaKmwTbAGYa6SIEu8zHaZkugXYpcAApfHMRupnFBVqxiVTrE5qHABAAMCAAN5AAM2BA.svg'
          },
          color: '#801AD1'
        },
        {
          id: 'busuanzi',
          name: 'busuanzi统计',
          description: '卜算子网站统计服务',
          url: 'https://busuanzi.050815.xyz',
          icon: '',
          color: '#101AD1'
        },
        {
          id: 'check-flink',
          name: 'check-flink',
          description: '检查友链情况',
          url: 'https://check-flink.kemeow.top',
          icon: '',
          color: '#414AD1'
        },
        {
          id: 'kemiao-moepush',
          name: 'kemiao-moepush',
          description: '一个基于 NextJS + Cloudflare 技术栈构建的可爱消息推送服务',
          url: 'https://moepush.261770.xyz',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMdaKm4J303SLKgLVn84RQS2ctJ9lYAAp3HMRupnFBVCUvGkLy_jDIBAAMCAAN3AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMdaKm4J303SLKgLVn84RQS2ctJ9lYAAp3HMRupnFBVCUvGkLy_jDIBAAMCAAN3AAM2BA.webp'
          },
          color: '#801AD1',
        },
        {
          id: 'hubproxy',
          name: 'hubproxy',
          description: '代理加速服务',
          url: 'https://moepush.261770.xyz',
          icon: '',
          color: '#203AD1',
        },
        {
          id: 'MeowNocode',
          name: 'MeowNocode',
          description: '无服务器的memos',
          url: 'https://meow.kemeow.top',
          icon: '',
          color: '#868AD1',
        },
        {
          id: 'Qexo',
          name: 'Qexo',
          description: '适用于所有静态博客框架的快速、强大且美观的在线管理器。',
          url: 'https://qexo.kemeow.top',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMeaKnA0XHhyYQ03dUfyEXpLAAB11CUAAKoxzEbqZxQVdV4FGAC7qDlAQADAgADbQADNgQ.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMeaKnA0XHhyYQ03dUfyEXpLAAB11CUAAKoxzEbqZxQVdV4FGAC7qDlAQADAgADbQADNgQ.webp'
          },
          color: '#130BD1',
        },
      ]
    },
    {
      id: 'web',
      name: '服务网站',
      items: [
        {
          id: 'heo-music',
          name: 'Heo-Music',
          description: '一个基于Aplayer和MetingJS的静态音乐播放器',
          url: 'https://music.kemiao.online',
          icon: '',
          color: '#E17055'
        },
        {
          id: 'TimePlus',
          name: 'TimePlus',
          description: 'typecho的相册',
          url: 'https://photos.050815.xyz/',
          icon: '',
          color: '#EA4C89'
        },
        {
          id: 'typecho-memos',
          name: 'typecho-memos',
          description: 'typecho的一款memos说说主题',
          url: 'https://read.050815.xyz',
          icon: '',
          color: '#1769FF'
        },
        {
          id: 'lin-snow-Ech0',
          name: 'Ech0',
          description: 'Ech0 - 开源、自托管、专注思想流动的轻量级发布平台',
          url: 'https://read.050815.xyz',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMgaKnJZk6CIdcSMMLN5erAnz1aWEYAArbHMRupnFBV8MaN_nT7UskBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMgaKnJZk6CIdcSMMLN5erAnz1aWEYAArbHMRupnFBV8MaN_nT7UskBAAMCAAN4AAM2BA.webp'
          },
          color: '#ae17ffff'
        },
        {
          id: 'Moments',
          name: 'Moments',
          description: 'Moments朋友圈部署',
          url: 'https://moment.051531.xyz',
          icon: '',
          color: '#17f0ffff'
        },
        {
          id: 'icefox',
          name: 'icefox',
          description: 'Typecho微信朋友圈主题 icefox',
          url: 'https://pyq.081531.xyz',
          icon: '',
          color: '#02ffa2ff'
        },
        {
          id: 'imgbed',
          name: '克喵的imgbed',
          description: 'cloudflare的imgbed',
          url: 'https://imgbed.kemeow.top',
          icon: '',
          color: '#ff3a04ff'
        },
        {
          id: 'typecho-reborn',
          name: 'typecho-reborn',
          description: '又一仿朋友圈主题',
          url: 'https://moment.081531.xyz',
          icon: '',
          color: '#20c240ff'
        },
                {
          id: 'memos',
          name: 'memos',
          description: '又一仿朋友圈主题',
          url: 'https://moment.081531.xyz',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMhaKnPdyeR6najXgPkOqV5IMarHS4AAs3HMRupnFBVpzU1h0J_5JQBAAMCAANtAAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMhaKnPdyeR6najXgPkOqV5IMarHS4AAs3HMRupnFBVpzU1h0J_5JQBAAMCAANtAAM2BA.webp',
          },
          color: '#20c240ff'
        },
                {
          id: 'newsnow',
          name: 'newsnow',
          description: 'Elegant reading of real-time and hottest news',
          url: 'https://newsnow.kemeow.top',
          icon: '',
          color: '#383ac6ff'
        },
        {
          id: 'BroadcastChannel',
          name: 'BroadcastChannel',
          description: '将您的 Telegram 频道变成微博。',
          url: 'https://shuoshuo.kemiao.online',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMqaKqS4OV4A8lxcNbA3n1CYfv5_OwAApbDMRupnFhVMPdrhjH_s4QBAAMCAAN4AAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMqaKqS4OV4A8lxcNbA3n1CYfv5_OwAApbDMRupnFhVMPdrhjH_s4QBAAMCAAN4AAM2BA.webp',
          },
          color: '#20c240ff'
        },
      ]
    },
    // {
    //   id: 'operation',
    //   name: '运营链接',
    //   items: [
    //     {
    //       id: 'wechat-platform',
    //       name: '微信公众号',
    //       description: '腾讯微信公众号开放平台',
    //       url: 'https://mp.weixin.qq.com',
    //       icon: '',
    //       color: '#07BC0C'
    //     }
    //   ]
    // },
    // {
    //   id: 'design-materials',
    //   name: '设计素材',
    //   items: [
    //     {
    //       id: 'iconfont',
    //       name: 'Iconfont',
    //       description: '阿里旗下的图标交流社区',
    //       url: 'https://www.iconfont.cn',
    //       icon: '',
    //       color: '#FF6900'
    //     },
    //     {
    //       id: 'unsplash',
    //       name: 'Unsplash',
    //       description: '摄影师交流社区，免费可商用版权图片',
    //       url: 'https://unsplash.com',
    //       icon: '',
    //       color: '#000000'
    //     },
    //     {
    //       id: 'pexels',
    //       name: 'Pexels',
    //       description: '免费可商用图片社区',
    //       url: 'https://www.pexels.com',
    //       icon: '',
    //       color: '#05A081'
    //     }
    //   ]
    // },
    {
      id: 'ai-tools',
      name: 'AI工具',
      items: [
        {
          id: 'wenxiaobai',
          name: '问小白',
          description: '问小白ai',
          url: 'https://www.wenxiaobai.com',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMjaKnW1-mwJH5WkoRsQsQf9ESQTEMAAt7HMRupnFBVvAABTlbXYJCmAQADAgADbQADNgQ.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMjaKnW1-mwJH5WkoRsQsQf9ESQTEMAAt7HMRupnFBVvAABTlbXYJCmAQADAgADbQADNgQ.webp',
          },
          color: '#0841ffff'
        },
        {
          id: 'Kimi',
          name: 'Kimi',
          description: 'Kimi-Ai',
          url: 'https://www.kimi.com',
          icon: {
            light: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMlaKnbJytq1J88lkROJHpH8zKkZSUAAujHMRupnFBVgJ0d_OvkyacBAAMCAANtAAM2BA.webp',
            dark: 'https://imgtg.kemeow.top/file/AgACAgUAAyEGAAScqokCAAMlaKnbJytq1J88lkROJHpH8zKkZSUAAujHMRupnFBVgJ0d_OvkyacBAAMCAANtAAM2BA.webp',
          },
          color: '#f52ee8ff'
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