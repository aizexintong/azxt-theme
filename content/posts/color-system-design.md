---
title: "梦幻色彩系统设计"
date: 2026-04-02T00:00:00+08:00
draft: false
description: "幻梦主题的色彩系统如何实现双主题自适应，以及配色背后的设计思考"
tags: ["设计", "色彩", "CSS", "主题开发"]
categories: ["设计理念"]
image: "https://t.alcy.cc/ycy?random=5"
---

## 色彩哲学

幻梦主题的色彩设计围绕「梦幻」这一核心理念展开。紫色代表神秘与浪漫，粉色增添温柔感，绿色则带来自然的清新气息。

## CSS 变量体系

通过 CSS 自定义属性实现双主题色彩自适应：

```css
[data-theme="light"] {
  --c-primary-400: #786C8A;
  --c-bg-main: #F8F6FC;
}

[data-theme="dark"] {
  --c-primary-400: #827AA2;
  --c-bg-main: #0C0B12;
}
```

## 9 色阶系统

每种颜色都包含 9 个色阶（100-900），从浅到深覆盖所有使用场景：

```
100: 最浅，用于背景
300: 中等浅，用于边框
500: 基准色，用于主要元素
700: 较深，用于文字
900: 最深，用于强调
```

## 语义化映射

主题还定义了语义化色彩变量，将设计令牌映射到具体用途：

```css
--color-text-primary: var(--c-text-main);
--color-accent: var(--c-primary-500);
--color-border-main: var(--c-border-main);
```

这种分层设计让色彩管理变得清晰而灵活。
