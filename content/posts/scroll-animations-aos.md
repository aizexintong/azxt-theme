---
title: "滚动动画与AOS集成"
date: 2026-04-04T05:00:00+08:00
draft: false
description: "幻梦主题如何利用AOS库实现优雅的滚动入场动画"
tags: ["动画", "滚动", "AOS", "体验"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=21"
---

## 滚动动画

幻梦主题集成 AOS（Animate On Scroll）库，实现元素进入视口时的流畅动画。

## 使用方法

在 HTML 元素上添加 `data-aos` 属性即可启用动画：

```html
<div data-aos="fade-up">
  滚动时我会优雅出现
</div>
<div data-aos="zoom-in" data-aos-delay="200">
  我会延迟200毫秒出现
</div>
```

## 初始化

```javascript
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});
```

## 回退方案

主题还实现了 IntersectionObserver 回退方案，确保在不支持 AOS 的环境下依然有基本的滚动动画效果：

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
});
```

滚动动画让页面浏览更具节奏感，内容呈现更加优雅自然。
