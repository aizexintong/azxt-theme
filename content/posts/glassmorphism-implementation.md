---
title: "磨砂玻璃效果实现"
date: 2026-04-02T01:00:00+08:00
draft: false
description: "深入剖析幻梦主题中的毛玻璃效果实现原理和技巧"
tags: ["CSS", "玻璃态", "设计", "实现"]
categories: ["设计理念"]
image: "https://t.alcy.cc/ycy?random=6"
---

## 毛玻璃效果的核心

幻梦主题大量使用了磨砂玻璃（Glassmorphism）效果，其核心是 CSS 的 `backdrop-filter` 属性。

## 实现原理

```css
.glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
}
```

`backdrop-filter: blur(16px)` 对元素背后的内容应用 16 像素的高斯模糊，配合半透明背景色，形成毛玻璃的视觉效果。

## 双主题适应

主题通过 CSS 变量让玻璃效果自动适应浅色和深色模式：

```css
:root {
  --c-surface-glass: rgba(255, 255, 255, 0.72);
}

[data-theme="dark"] {
  --c-surface-glass: rgba(20, 18, 28, 0.72);
}
```

## 应用场景

幻梦主题将磨砂玻璃应用于所有卡片类元素，营造统一的视觉语言：

- 文章卡片（`.post-card`）
- 侧边栏（`.sidebar-card`）
- 导航栏（`.site-header`）
- 页脚（`.site-footer`）
- 菜单面板（`.mobile-menu`）

玻璃效果带来了通透、轻盈的视觉感受，让内容层次更加分明。
