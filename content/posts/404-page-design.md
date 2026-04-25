---
title: "404页面创意设计"
date: 2026-04-06T05:00:00+08:00
draft: false
description: "幻梦主题的404页面：将错误变为有趣的体验"
tags: ["404", "页面", "创意", "设计"]
categories: ["页面设计"]
image: "https://t.alcy.cc/ycy?random=31"
---

## 404 页面

幻梦主题的 404 页面不是冷冰冰的错误提示，而是一次有趣的交互体验。

## 设计理念

当用户访问不存在的页面时，看到的是一只漂浮的幽灵图标和友好的提示信息，而不是枯燥的「404 Not Found」。

## 页面内容

```
       👻
  哎呀，迷路了？
  这里好像什么都没有

  [ 返回首页 ]  [ 浏览文章 ]
```

## 数据配置

```yaml
# data/404.yaml
icon: "fas fa-ghost"
title: "页面未找到"
message: "这里好像什么都没有……"
buttons:
  - label: "返回首页"
    link: "/"
  - label: "浏览文章"
    link: "/posts/"
```

## 幽灵动画

幽灵图标带有上下浮动的动画：

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.error-icon {
  animation: float 3s ease-in-out infinite;
}
```

404 页面将错误转化为一次友好的互动，让访问者即使在出错时也能感受到主题的温度。
