---
title: "全站搜索功能实现"
date: 2026-04-04T00:00:00+08:00
draft: false
description: "幻梦主题的本地搜索功能：无需后端，快速全文检索"
tags: ["搜索", "JavaScript", "功能", "实现"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=16"
---

## 本地搜索

幻梦主题内置本地搜索功能，无需第三方服务即可实现全文检索。

## 工作原理

搜索功能通过构建 JSON 索引文件实现：

```json
[
  {
    "title": "文章标题",
    "permalink": "/posts/article/",
    "date": "2026-04-01",
    "content": "文章内容（前500字符）",
    "tags": ["tag1", "tag2"]
  }
]
```

## 搜索体验

用户按下 `Ctrl+K` 或点击搜索按钮即可唤出搜索面板。搜索支持实时过滤，输入即搜：

```javascript
function performSearch(query) {
  const normalizedQuery = query.toLowerCase();
  const results = searchIndex.filter(item => {
    return item.title.includes(normalizedQuery) ||
           item.content.includes(normalizedQuery);
  });
  displayResults(results, query);
}
```

## 结果展示

搜索结果以列表形式展示，包含标题、内容摘要、日期和标签，匹配关键词会高亮显示：

```css
.search-highlight {
  background-color: var(--c-primary-200);
  color: var(--c-primary-700);
  border-radius: 2px;
}
```

搜索面板采用磨砂玻璃效果，与主题整体视觉保持一致。
