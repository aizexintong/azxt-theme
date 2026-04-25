---
title: "Canvas粒子特效系统"
date: 2026-04-04T02:00:00+08:00
draft: false
description: "幻梦主题的昼夜双模式粒子特效：白天糖果彩带雨，夜间星光萤火虫"
tags: ["特效", "Canvas", "JavaScript", "动画"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=18"
---

## 粒子系统

幻梦主题的 Canvas 粒子特效系统根据时间自动切换模式。

## 日间模式：糖果彩带雨

白天模式下，页面会飘落彩带、糖果、爱心和星星粒子，营造欢快的氛围。

```javascript
const candyConfig = {
  ribbonCount: 20,
  candyCount: 12,
  heartCount: 5,
  starCount: 8,
  colors: ['#B3A0FF', '#9B84FF', '#FF9CB8', '#FF7A9E']
};
```

## 夜间模式：星光与萤火虫

夜间模式下，粒子系统切换为闪烁的星星和飘动的萤火虫：

```javascript
const starConfig = {
  count: 60,
  colors: ['#E8E4F5', '#E8C880', '#FFF0A0'],
  minSize: 1,
  maxSize: 4
};
```

## 性能适配

系统会自动检测设备性能，在低端设备上降低粒子数量：

```javascript
const isLowEnd = navigator.hardwareConcurrency <= 2 ||
                 navigator.deviceMemory <= 2;
this.performanceMultiplier = isLowEnd ? 0.5 : 1;
```

粒子系统为页面带来了生动的视觉反馈，让浏览体验更加沉浸。
