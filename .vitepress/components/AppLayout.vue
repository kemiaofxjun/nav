<template>
    <div class="navigation-home">
      <div class="main-layout">
        <ThemeToggle />
     
        <header class="header">
          <div class="header-content">
            <div class="hero-section">
              <SiteHeader 
                :title="siteInfo.title" 
                :subtitle="siteInfo.subtitle" 
              />
              
              <SearchSection 
                :placeholder="currentSearchEngine.placeholder || '搜索...'"
                @search="handleSearch"
                @engine-change="handleSearchEngineChange"
              />
            </div>
          </div>
        </header>
     
        <main class="main-content">
          <div class="container">
            <CategorySection 
              v-for="(category, index) in processedCategories" 
              :key="category.id"
              :category="category"
              :animation-delay="index * 100"
              @card-click="openLink"
            />
          </div>
        </main>
     
        <SiteFooter />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
  import ThemeToggle from './ThemeToggle.vue'
  import SiteHeader from './SiteHeader.vue'
  import SearchSection from './SearchSection.vue'
  import CategorySection from './CategorySection.vue'
  import SiteFooter from './SiteFooter.vue'
  import { 
    getSiteInfo, 
    getSearchConfig, 
    getNavigationCategories,
    getCurrentSearchEngine,
    formatSearchUrl,
    isValidUrl,
    getRandomColor
  } from '../utils/config.js'
  
  // 网站配置信息
  const siteInfo = reactive(getSiteInfo())
  const searchConfig = reactive(getSearchConfig())
  const currentSearchEngine = ref({})
  
  // 导航数据
  const categories = reactive([])
  
  // 响应式状态
  const activeCategory = ref('')
  
  // 初始化数据
  onMounted(() => {
    const navCategories = getNavigationCategories()
    categories.splice(0, categories.length, ...navCategories)
    
    // 监听滚动以更新活跃分类
    window.addEventListener('scroll', handleScroll)
    
    // 初始化搜索引擎
    updateCurrentSearchEngine()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  // 处理滚动以更新活跃分类
  const handleScroll = () => {
    const sections = document.querySelectorAll('[id^="category-"]')
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      const offsetTop = section.offsetTop - 100
      
      if (scrollTop >= offsetTop) {
        const categoryId = section.id.replace('category-', '')
        if (activeCategory.value !== categoryId) {
          activeCategory.value = categoryId
        }
        break
      }
    }
  }
  
  // 计算属性：为没有颜色的项目生成随机颜色
  const processedCategories = computed(() => {
    return categories.map(category => ({
      ...category,
      items: category.items.map(item => ({
        ...item,
        color: item.color || getRandomColor()
      }))
    }))
  })
  
  // 搜索相关方法
  const handleSearch = (query) => {
    if (!query.trim()) return
    
    const searchUrl = formatSearchUrl(currentSearchEngine.value, query)
    if (searchUrl && isValidUrl(searchUrl)) {
      window.open(searchUrl, '_blank')
    }
  }
  
  const handleSearchEngineChange = (engine) => {
    currentSearchEngine.value = engine
  }
  
  const updateCurrentSearchEngine = () => {
    const engine = getCurrentSearchEngine()
    if (engine) {
      currentSearchEngine.value = engine
    }
  }
  
  // 打开链接
  const openLink = (item) => {
    if (item.url && isValidUrl(item.url)) {
      window.open(item.url, '_blank')
    }
  }
  </script>
  
  <style scoped>
  .navigation-home {
    min-height: 100vh;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
  
  .main-layout {
    width: 100%;
  }
  
     .header {
    padding: 3rem 1.5rem 2rem;
    background-color: hsl(var(--background));
    position: relative;
    z-index: 2;
  }
  
  .header-content {
    max-width: 1024px;
    margin: 0 auto;
  }
  
  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
     .main-content {
    padding: 0 1.5rem;
    max-width: 1024px;
    margin: 0 auto;
    border-radius: 12px 12px 0 0;
    position: relative;
    z-index: 1;
  }
  
     @media (max-width: 768px) {
    .header {
      padding: 2rem 1rem 0;
    }
    
    .header-content {
      max-width: 100%;
    }
    
    .hero-section {
      gap: 0.5rem;
    }
    
    .main-content {
      padding: 1.5rem 1rem;
      max-width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .header {
      padding: 1.5rem 0.75rem 1rem;
    }
    
    .main-content {
      padding: 1rem 0.75rem;
    }
  }
  </style>