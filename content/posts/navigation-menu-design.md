---
title: "导航菜单设计与实现"
date: 2026-04-03T01:00:00+08:00
draft: false
description: "幻梦主题的双模式导航系统：桌面端水平导航与移动端滑出菜单"
tags: ["导航", "UI", "组件", "CSS"]
categories: ["组件系统"]
image: "https://t.alcy.cc/ycy?random=11"
---

## 双模式导航

幻梦主题根据屏幕尺寸提供两种导航模式：

- 桌面端：水平导航栏
- 移动端：滑出式菜单

## 头部设计

导航栏采用磨砂玻璃效果，滚动时增加阴影：

```css
.site-header {
  background: var(--color-surface-glass);
  backdrop-filter: blur(20px) saturate(180%);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.site-header.scrolled {
  background: var(--c-surface-main);
  box-shadow: var(--shadow-medium);
}
```

## 移动端菜单

在移动端，导航菜单从右侧滑出，带有磨砂玻璃背景：

```css
.mobile-menu {
  position: fixed;
  top: 0;
  right: -280px;
  width: min(280px, 82vw);
  height: 100%;
  transition: right var(--t-base);
}

.mobile-menu.active { right: 0; }
```

## 图标集成

每个导航项都支持 Font Awesome 图标，通过菜单配置中的 `params.icon` 指定，让导航更加直观生动。
