---
title: "首页英雄区域设计"
date: 2026-04-06T00:00:00+08:00
draft: false
description: "幻梦主题首页英雄区的设计理念与视觉构成"
tags: ["首页", "英雄区", "设计", "布局"]
categories: ["页面设计"]
image: "https://t.alcy.cc/ycy?random=26"
---

## 英雄区域

幻梦主题的首页英雄区域是整个页面的视觉焦点，融合了多种设计元素。

## 视觉构成

```
┌─────────────────────────────────┐
│  🏷️ 欢迎徽章                    │
│  ✨ 你好，我是                    │
│  🌟 爱则心痛（渐变文字）          │
│  ⌨️ 前端开发者（打字机效果）      │
│  📝 个人描述文字                  │
│  [了解我] [开始阅读] 按钮         │
│  🖱️ 滚动提示                     │
└─────────────────────────────────┘
```

## 渐变标题

姓名使用渐变文字效果：

```css
.hero-name {
  background: var(--grad-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## 装饰元素

背景中有缓慢浮动的装饰光晕：

```css
.float-shape {
  position: absolute;
  border-radius: var(--r-full);
  opacity: 0.12;
  animation: floatAround 30s ease-in-out infinite;
}
```

## 数据驱动

英雄区域的内容通过 `data/home.yaml` 文件配置，无需修改模板即可自定义文字内容和按钮链接。这种设计让个性化定制变得异常简单。
