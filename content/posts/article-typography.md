---
title: "文章内容排版之美"
date: 2026-04-03T03:00:00+08:00
draft: false
description: "幻梦主题如何通过精心设计的排版提升阅读体验"
tags: ["排版", "阅读体验", "设计", "文章"]
categories: ["组件系统"]
image: "https://t.alcy.cc/ycy?random=13"
---

## 阅读体验优先

幻梦主题将文章内容的阅读体验放在首位。每一处排版细节都经过精心打磨。

## 字体系统

正文采用 `1.0625rem` 字号和 `1.85` 行高，确保长时间阅读的舒适度：

```css
.article-text {
  font-size: 1.0625rem;
  line-height: 1.85;
  color: var(--c-text-main);
}
```

## 标题层级

```css
.article-text h2 {
  font-size: 1.625rem;
  margin: 2.5rem 0 1rem;
  border-bottom: 2px solid var(--c-border-light);
}
.article-text h3 {
  font-size: 1.375rem;
  margin: 2rem 0 0.75rem;
}
```

## 引用样式

引用块采用左侧彩色边框 + 底色，突出显示：

```css
.article-text blockquote {
  border-left: 4px solid var(--c-primary-400);
  padding: 1.25rem 1.5rem;
  background: var(--c-primary-100);
  font-style: italic;
}
```

## 代码块

代码块采用语法高亮，支持行号、语言标签和复制按钮，让技术文章更加专业：

```
.highlight pre {
  padding: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.65;
}
```

幻梦主题让每一篇文章都像一本精装书，阅读成为一种享受。
