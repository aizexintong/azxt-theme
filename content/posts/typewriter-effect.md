---
title: "打字机效果实现"
date: 2026-04-04T04:00:00+08:00
draft: false
description: "幻梦主题首页的 Type.js 打字机效果，让标题动起来"
tags: ["打字机", "动画", "JavaScript", "首页"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=20"
---

## 打字机效果

幻梦主题首页的英雄区域使用 Typed.js 库实现打字机效果，展示多行动态标语。

## 配置

```javascript
const typed = new Typed('#typed-text', {
  strings: [
    '前端开发者',
    '技术博主',
    '开源爱好者',
    '热爱生活的人'
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  showCursor: true
});
```

## 视觉集成

打字机效果区域设有占位样式，确保 JavaScript 加载完成前页面不会闪烁：

```css
.typed-text {
  display: inline-block;
  min-height: 1.5em;
}
```

打字机效果为首页增添了动态感和互动性，让访问者在第一时间感受到主题的活力。
