/**
 * 导航项目类型定义
 * @typedef {Object} NavigationItem
 * @property {string} id - 唯一标识符
 * @property {string} name - 显示名称
 * @property {string} description - 描述信息
 * @property {string} url - 链接地址
 * @property {string} icon - 图标路径
 * @property {string} color - 主题色彩
 */

/**
 * 导航分类类型定义
 * @typedef {Object} NavigationCategory
 * @property {string} id - 分类唯一标识符
 * @property {string} name - 分类名称
 * @property {NavigationItem[]} items - 该分类下的导航项目列表
 */

/**
 * 网站基本信息类型定义
 * @typedef {Object} SiteInfo
 * @property {string} title - 网站标题
 * @property {string} subtitle - 网站副标题
 * @property {string} logo - Logo路径
 * @property {string} favicon - 网站图标路径
 */

/**
 * 搜索配置类型定义
 * @typedef {Object} SearchConfig
 * @property {string} placeholder - 搜索框占位符
 * @property {string} searchUrl - 搜索引擎URL
 */

/**
 * 导航配置类型定义
 * @typedef {Object} NavigationConfig
 * @property {SiteInfo} siteInfo - 网站基本信息
 * @property {SearchConfig} search - 搜索配置
 * @property {NavigationCategory[]} categories - 导航分类列表
 */

/**
 * 主题配置类型定义
 * @typedef {Object} ThemeConfig
 * @property {Object} background - 背景配置
 * @property {Object} animations - 动画配置
 * @property {Object} breakpoints - 响应式断点配置
 */

// 导出类型定义
export const types = {};