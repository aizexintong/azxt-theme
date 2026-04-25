---
title: "图片懒加载策略"
date: 2026-04-05T02:00:00+08:00
draft: false
description: "幻梦主题的图片懒加载实现，提升页面加载速度"
tags: ["性能", "图片", "懒加载", "优化"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=24"
---

## 懒加载

幻梦主题支持图片懒加载，仅在图片进入视口时才开始加载，显著提升页面首屏速度。

## 原生懒加载

所有图片均使用 HTML5 原生的 `loading="lazy"` 属性：

```html
<img src="image.jpg" loading="lazy" alt="description" />
```

## JavaScript 增强

对于需要更精细控制的场景，主题还提供了 IntersectionObserver 方案：

```javascript
initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
}
```

## 性能收益

懒加载可以减少初始页面加载量 30%-50%，尤其对于包含大量图片的文章页面效果显著。访问者只看到需要的图片，带宽得到更有效的利用。
