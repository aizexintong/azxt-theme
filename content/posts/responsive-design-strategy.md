---
title: "响应式设计适配策略"
date: 2026-04-02T04:00:00+08:00
draft: false
description: "幻梦主题如何实现从手机到宽屏的无缝响应式体验"
tags: ["响应式", "CSS", "移动端", "设计"]
categories: ["设计理念"]
image: "https://t.alcy.cc/ycy?random=9"
---

## 响应式策略

幻梦主题采用 Mobile-First 的设计策略，从最小屏幕开始逐步增强。

## 断点系统

```css
--bp-sm: 576px;   /* 手机横屏 */
--bp-md: 768px;   /* 平板 */
--bp-lg: 992px;   /* 桌面 */
--bp-xl: 1200px;  /* 宽屏 */
```

## 布局自适应

### 文章列表

桌面端采用左右分栏布局，左侧文章列表 + 右侧边栏。移动端自动切换为单栏：

```css
@media (min-width: 768px) {
  .posts-layout {
    flex-direction: row;
  }
  .posts-sidebar {
    display: block;
    width: var(--sidebar-w);
  }
}
```

### 卡片网格

文章卡片网格根据屏幕宽度自动调整列数：

```css
.posts-grid {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .posts-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 992px) {
  .posts-grid { grid-template-columns: repeat(3, 1fr); }
}
```

## 导航适配

桌面端显示完整导航菜单，移动端自动折叠为滑出式菜单，并通过 `aria-expanded` 等属性确保无障碍访问。

幻梦主题在所有屏幕尺寸上都能提供一致的梦幻视觉体验。
