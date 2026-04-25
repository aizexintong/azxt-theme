---
title: "分页组件设计"
date: 2026-04-03T05:00:00+08:00
draft: false
description: "幻梦主题中优雅的分页组件设计和交互细节"
tags: ["分页", "组件", "UI", "UX"]
categories: ["组件系统"]
image: "https://t.alcy.cc/ycy?random=15"
---

## 分页设计

幻梦主题的分页组件采用圆角胶囊按钮风格，与整体梦幻设计语言一致。

## 样式实现

```css
.page-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 1rem;
  border-radius: var(--r-full);
  border: 1px solid var(--c-border-main);
  transition: all var(--t-fast);
}
```

## 当前页码

当前页码使用渐变背景突出显示：

```css
.page-link.current {
  background: var(--grad-primary);
  border-color: transparent;
  color: white;
}
```

## 响应式

在移动端，分页按钮适当缩小间距，确保在小屏幕上依然可用。分页组件支持上一页/下一页按钮和直接点击页码跳转，让长列表的浏览变得轻松自如。
