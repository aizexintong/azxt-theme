---
title: "标签云与分类系统"
date: 2026-04-03T04:00:00+08:00
draft: false
description: "幻梦主题的标签和分类系统：4列网格展示与流畅分页"
tags: ["标签", "分类", "导航", "UX"]
categories: ["组件系统"]
image: "https://t.alcy.cc/ycy?random=14"
---

## 标签系统

幻梦主题的标签页面采用响应式网格布局，文章卡片以 4×4 排列（最多每行 4 篇），每页显示 16 篇文章。

## 网格布局

```css
.term-posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--sp-6);
}

@media (min-width: 992px) {
  .term-posts-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 标签云

标签云页面将所有标签以标签云形式展示，每个标签带有数量标识：

```html
<a href="/tags/css" class="cloud-tag" data-weight="3">
  CSS <span class="tag-count">(3)</span>
</a>
```

## 分页系统

当文章超过 16 篇时自动启用分页，提供上一页/下一页和页码导航：

```css
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.page-link.current {
  background: var(--grad-primary);
  color: white;
}
```

标签页面让浏览特定主题的文章变得轻松而高效。
