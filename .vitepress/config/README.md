# 配置文件说明

本目录包含了导航网站的所有配置信息，便于统一管理和维护。

## 文件结构

```
.vitepress/
├── config/
│   ├── navigation.js     # 导航数据和主题配置
│   └── README.md        # 配置说明文档
├── types/
│   └── navigation.js    # 类型定义文件
├── utils/
│   └── config.js        # 配置工具函数
└── components/
    └── NavigationHome.vue # 主页组件
```

## 配置文件详解

### navigation.js

包含两个主要的配置对象：

#### 1. navigationConfig

存储所有导航相关的数据：

- **siteInfo**: 网站基本信息
  - `title`: 网站标题
  - `subtitle`: 网站副标题
  - `favicon`: 网站图标路径

- **search**: 搜索配置
  - `placeholder`: 搜索框占位符文字
  - `searchUrl`: 搜索引擎URL前缀

- **categories**: 导航分类数组
  - 每个分类包含 `id`、`name` 和 `items` 数组
  - 每个导航项包含 `id`、`name`、`description`、`url`、`icon`、`color`

#### 2. themeConfig

主题相关的配置：

- **background**: 背景渐变配置
- **animations**: 动画效果配置
- **breakpoints**: 响应式断点配置

## 如何添加新的导航项

1. 打开 `navigation.js` 文件
2. 在对应的分类中添加新项目：

```javascript
{
  id: 'unique-id',           // 唯一标识符
  name: '项目名称',           // 显示名称
  description: '项目描述',    // 描述信息
  url: 'https://example.com', // 链接地址
  icon: {
    light: '/path/to/icon.png', // 图标路径（可选）
    dark: '/path/to/icon.png' // 图标路径（可选）
  },
  color: '#FF6B6B'          // 主题色彩（可选，会自动生成）
}
```

## 如何添加新的分类

在 `categories` 数组中添加新的分类对象：

```javascript
{
  id: 'new-category',
  name: '新分类',
  items: [
    // 导航项目列表
  ]
}
```

## 工具函数

`utils/config.js` 提供了以下实用函数：

- `getSiteInfo()`: 获取网站基本信息
- `getSearchConfig()`: 获取搜索配置
- `getNavigationCategories()`: 获取所有导航分类
- `getCategoryById(id)`: 根据ID获取特定分类
- `getNavigationItemById(id)`: 根据ID获取特定导航项
- `searchNavigationItems(keyword)`: 搜索导航项目
- `formatSearchUrl(query)`: 格式化搜索URL
- `isValidUrl(url)`: 验证URL有效性
- `getRandomColor()`: 获取随机颜色

## 类型定义

`types/navigation.js` 包含了所有数据结构的JSDoc类型定义，提供更好的代码提示和文档。

## 最佳实践

1. **保持数据结构一致性**: 确保所有导航项都包含必需的字段
2. **使用有意义的ID**: 使用描述性的ID便于维护
3. **提供完整的描述**: 为每个项目写清楚的描述
4. **验证URL**: 确保所有链接都是有效的
5. **合理分类**: 将相关的项目归类到同一分类下
6. **保持简洁**: 避免过长的名称和描述

## 注意事项

- 修改配置后需要重启开发服务器才能看到效果
- 图标路径相对于 `public` 目录
- 颜色值支持十六进制格式（如：`#FF6B6B`）
- URL支持绝对路径和相对路径