---
title: "深色模式：夜色幻梦"
date: 2026-04-02T03:00:00+08:00
draft: false
description: "深色模式下「夜色幻梦」的星空美学与视觉设计"
tags: ["深色模式", "设计", "星空", "体验"]
categories: ["设计理念"]
image: "https://t.alcy.cc/ycy?random=8"
---

## 夜色幻梦

深色模式以「夜色幻梦」为设计主题，灵感来自深邃夜空中的星光。

## 色彩方案

深色模式采用深邃、富有层次感的色彩：

- 主背景：`#0C0B12` — 深空黑色
- 卡片背景：`#14121C` — 稍亮的深紫
- 文字主色：`#E0DCF0` — 柔和的亮紫色

## 星空特效

深色模式下，英雄区域会呈现动态星空效果：

```css
[data-theme="dark"] .hero::before {
  background:
    radial-gradient(1px 1px at 10% 20%, var(--c-star-1) 0%, transparent 100%),
    radial-gradient(2px 2px at 45% 45%, var(--c-star-5) 0%, transparent 100%);
  animation: starTwinkle 8s ease-in-out infinite;
}
```

## 星云光晕

页面背景带有星云般的渐变光晕，并伴有缓慢的脉动动画。

## 萤火虫粒子

深色模式下，Canvas 粒子系统会渲染萤火虫效果。萤火虫呈柔和的绿色光点，在页面中缓慢飘动，营造出夏夜森林的氛围。

```css
[data-theme="dark"] .firefly {
  background: radial-gradient(circle, var(--c-accent-400) 0%, transparent 100%);
  box-shadow: 0 0 20px var(--c-accent-300);
}
```

深色模式的每一个细节都经过精心设计，让夜间阅读成为一种沉浸式的梦幻体验。
