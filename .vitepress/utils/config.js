import { navigationConfig, themeConfig } from '../config/navigation.js'

/**
 * 获取网站配置信息
 * @returns {Object} 网站基本信息
 */
export const getSiteInfo = () => {
  return navigationConfig.siteInfo
}

/**
 * 获取搜索配置
 * @returns {Object} 搜索配置信息
 */
export const getSearchConfig = () => {
  return navigationConfig.search
}

/**
 * 获取所有搜索引擎列表
 * @returns {Array} 搜索引擎列表
 */
export const getSearchEngines = () => {
  const searchConfig = getSearchConfig()
  return Object.entries(searchConfig.engines).map(([key, engine]) => ({
    id: key,
    ...engine
  }))
}

/**
 * 根据ID获取搜索引擎
 * @param {string} engineId - 搜索引擎ID
 * @returns {Object|null} 搜索引擎配置
 */
export const getSearchEngineById = (engineId) => {
  const searchConfig = getSearchConfig()
  return searchConfig.engines[engineId] || null
}

/**
 * 获取当前选择的搜索引擎
 * @returns {Object} 当前搜索引擎配置
 */
export const getCurrentSearchEngine = () => {
  const savedEngine = localStorage.getItem('search-engine')
  const searchConfig = getSearchConfig()
  const engineId = savedEngine || searchConfig.defaultEngine
  return {
    id: engineId,
    ...searchConfig.engines[engineId]
  }
}

/**
 * 获取导航分类数据
 * @returns {Array} 导航分类列表
 */
export const getNavigationCategories = () => {
  return navigationConfig.categories
}

/**
 * 根据ID获取特定分类
 * @param {string} categoryId - 分类ID
 * @returns {Object|null} 分类对象
 */
export const getCategoryById = (categoryId) => {
  return navigationConfig.categories.find(cat => cat.id === categoryId) || null
}

/**
 * 根据ID获取特定导航项目
 * @param {string} itemId - 项目ID
 * @returns {Object|null} 导航项目
 */
export const getNavigationItemById = (itemId) => {
  for (const category of navigationConfig.categories) {
    const item = category.items.find(item => item.id === itemId)
    if (item) return item
  }
  return null
}

/**
 * 搜索导航项目
 * @param {string} keyword - 搜索关键词
 * @returns {Array} 匹配的导航项目列表
 */
export const searchNavigationItems = (keyword) => {
  const results = []
  const lowerKeyword = keyword.toLowerCase()
  
  navigationConfig.categories.forEach(category => {
    category.items.forEach(item => {
      if (
        item.name.toLowerCase().includes(lowerKeyword) ||
        item.description.toLowerCase().includes(lowerKeyword)
      ) {
        results.push({
          ...item,
          categoryName: category.name,
          categoryId: category.id
        })
      }
    })
  })
  
  return results
}

/**
 * 获取主题配置
 * @returns {Object} 主题配置对象
 */
export const getThemeConfig = () => {
  return themeConfig
}

/**
 * 获取随机颜色（用于没有指定颜色的项目）
 * @returns {string} 十六进制颜色值
 */
export const getRandomColor = () => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#FF7675', '#FD79A8', '#FDCB6E', '#00B894',
    '#6C5CE7', '#A29BFE', '#E17055', '#EA4C89', '#1769FF'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * 验证URL是否有效
 * @param {string} url - 要验证的URL
 * @returns {boolean} URL是否有效
 */
export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * 格式化搜索URL
 * @param {string} query - 搜索查询
 * @param {string} engineId - 搜索引擎ID (可选，默认使用当前选择的引擎)
 * @returns {string} 完整的搜索URL
 */
export const formatSearchUrl = (query, engineId = null) => {
  const engine = engineId ? getSearchEngineById(engineId) : getCurrentSearchEngine()
  return `${engine.searchUrl}${encodeURIComponent(query)}`
}