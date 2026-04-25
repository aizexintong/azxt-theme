---
title: "键盘导航与无障碍设计"
date: 2026-04-05T03:00:00+08:00
draft: false
description: "幻梦主题如何通过键盘导航和无障碍设计提升可访问性"
tags: ["无障碍", "键盘", "可访问性", "UX"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=25"
---

## 无障碍设计

幻梦主题遵循 Web 无障碍标准，确保所有用户都能获得良好的浏览体验。

## 键盘快捷键

主题支持以下键盘快捷键：

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+K` | 打开搜索 |
| `Escape` | 关闭搜索、菜单、灯箱 |
| `Tab` | 导航焦点切换 |

## ARIA 属性

所有交互元素都配有适当的 ARIA 属性：

```html
<button class="search-toggle"
        aria-label="搜索"
        aria-expanded="false">
  <i class="fas fa-search"></i>
</button>

<nav class="main-nav"
     aria-label="主导航"
     role="navigation">
</nav>
```

## 跳过导航

页面提供「跳转到主要内容」的跳过导航链接，方便键盘用户快速跳过重复内容：

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--sp-4);
  padding: var(--sp-2) var(--sp-4);
  background: var(--grad-primary);
  color: white;
  border-radius: var(--r-sm);
  z-index: 10000;
}

.skip-link:focus { top: var(--sp-4); }
```

## 焦点样式

所有可聚焦元素都有清晰的焦点轮廓，确保键盘导航用户能清楚定位当前焦点位置。
