---
title: "浅色模式：朦胧幻梦"
date: 2026-04-02T02:00:00+08:00
draft: false
description: "浅色模式下「朦胧幻梦」的设计细节与视觉体验"
tags: ["浅色模式", "设计", "体验"]
categories: ["设计理念"]
image: "https://t.alcy.cc/ycy?random=7"
---

## 朦胧幻梦

浅色模式以「朦胧幻梦」为设计主题，灵感来自晨雾中的紫藤花园。

## 色彩氛围

浅色模式采用柔和、低饱和度的色彩方案：

- 主背景：`#F8F6FC` — 极淡的紫色底色
- 卡片背景：`#FFFFFF` — 纯白，确保内容可读性
- 文字主色：`#3A3650` — 柔和的深紫灰色

## 梦幻光晕

页面背景带有微妙的渐变光晕效果：

```css
[data-theme="light"] body::before {
  background:
    radial-gradient(ellipse at 20% 20%, rgba(166, 150, 192, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(204, 160, 181, 0.1) 0%, transparent 50%);
  animation: dreamyPulse 15s ease-in-out infinite alternate;
}
```

## 卡片光泽

浅色模式下的卡片带有柔和的光泽阴影：

```css
[data-theme="light"] .card {
  box-shadow:
    var(--shadow-card),
    0 0 0 1px rgba(166, 150, 192, 0.08);
}
```

这种细腻的光影处理让界面在浅色背景下依然富有层次感和立体感。
