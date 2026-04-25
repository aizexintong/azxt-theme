---
title: "主题定制与扩展指南"
date: 2026-04-07T04:00:00+08:00
draft: false
description: "如何根据个人需求定制和扩展幻梦主题"
tags: ["定制", "扩展", "指南", "主题开发"]
categories: ["进阶技巧"]
image: "https://t.alcy.cc/ycy?random=36"
---

## 定制指南

幻梦主题的设计充分考虑了可定制性，以下是一些常见的定制方法。

## 修改配色

通过覆盖 CSS 变量可以轻松修改主题配色：

```css
:root {
  --c-primary-400: #YOUR_COLOR;
  --c-secondary-400: #YOUR_COLOR;
  --c-accent-400: #YOUR_COLOR;
}
```

## 自定义页面

数据驱动页面（首页、关于、友链、技能等）只需修改 `data/` 目录下的 YAML 文件即可自定义内容。无需触碰任何模板文件。

## 添加新页面

1. 在 `content/` 目录下创建新的 Markdown 文件
2. 在 `layouts/` 目录下创建对应的模板文件
3. 在 `i18n/` 目录下添加翻译文本

## 扩展功能

主题的 JavaScript 采用模块化管理器模式：

```
ThemeManager      → 主题切换
EffectsManager    → 粒子特效
AnimationManager  → 滚动动画
InteractionManager → 交互功能
EnhancementManager → 内容增强
UtilsManager      → 工具功能
```

可以根据需要添加新的管理器来扩展功能。
