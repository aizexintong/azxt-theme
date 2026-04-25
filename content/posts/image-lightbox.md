---
title: "图片灯箱组件"
date: 2026-04-04T01:00:00+08:00
draft: false
description: "幻梦主题的图片灯箱实现：点击放大、背景模糊、键盘操作"
tags: ["图片", "灯箱", "JavaScript", "UX"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=17"
---

## 图片灯箱

幻梦主题自带图片灯箱功能，点击文章中的图片即可放大查看。

## 实现逻辑

```javascript
const UtilsManager = {
  initImageLightbox() {
    const images = document.querySelectorAll('.article-text img');
    images.forEach(img => {
      img.addEventListener('click', () => this.openLightbox(img.src));
    });
  },

  openLightbox(src) {
    const lightbox = document.getElementById('img-lightbox');
    const lightboxImg = document.getElementById('img-lightbox-img');
    lightboxImg.src = src;
    lightbox.classList.add('active');
  }
};
```

## 视觉设计

灯箱采用全屏遮罩 + 背景模糊，让图片成为视觉焦点：

```css
.img-lightbox {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-lightbox img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: var(--r-lg);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
}
```

## 操作方式

- 点击图片打开灯箱
- 点击关闭按钮或灯箱背景关闭
- 按下 `Escape` 键关闭
- 关闭按钮带有 90 度旋转动画
