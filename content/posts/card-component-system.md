---
title: "卡片组件系统详解"
date: 2026-04-03T00:00:00+08:00
draft: false
description: "幻梦主题中卡片组件的设计哲学与实现方案"
tags: ["组件", "卡片", "CSS", "设计"]
categories: ["组件系统"]
image: "https://t.alcy.cc/ycy?random=10"
---

## 卡片设计哲学

卡片是幻梦主题中最核心的 UI 组件。每张卡片都是一个独立的内容容器，带有磨砂玻璃背景、柔和阴影和精致的圆角。

## 基础卡片

```css
.card {
  border-radius: var(--r-xl);
  padding: var(--sp-5);
  box-shadow: var(--color-shadow-medium);
  border: 1px solid var(--color-border-main);
  transition: transform var(--t-base), box-shadow var(--t-base);
}
```

## 顶部分隔线

卡片悬停时会显示一条渐变色顶部分隔线，增加精致感：

```css
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--color-grad-primary);
  opacity: 0;
  transition: opacity var(--t-base);
}

.card:hover::before { opacity: 1; }
```

## 卡片类型

幻梦主题包含多种卡片变体：

- **文章卡片**（`.post-card`）：用于首页和标签页的文章展示
- **列表卡片**（`.post-item`）：用于文章列表页
- **侧边栏卡片**（`.sidebar-card`）：侧边栏小部件容器
- **友链卡片**（`.link-card`）：友链页面
- **技能卡片**（`.skill-item`）：技能展示

所有卡片共享统一的设计语言，确保视觉一致性。
