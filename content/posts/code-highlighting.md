---
title: "代码语法高亮系统"
date: 2026-04-05T00:00:00+08:00
draft: false
description: "幻梦主题的代码高亮方案：Hugo Chroma + 主题自适应色彩"
tags: ["代码", "高亮", "Chroma", "CSS"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=22"
---

## 语法高亮

幻梦主题使用 Hugo 内置的 Chroma 语法高亮引擎，配合自定义 CSS 实现双主题自适应色彩。

## 配置

```toml
[markup]
  [markup.highlight]
    codeFences = true
    guessSyntax = true
    noClasses = false
```

## 色彩定义

通过 CSS 变量实现浅色/深色模式下的不同高亮色彩：

```css
/* 浅色模式 */
:root {
  --c-code-keyword: #C026D3;
  --c-code-string: #059669;
  --c-code-number: #D97706;
}

/* 深色模式 */
[data-theme="dark"] {
  --c-code-keyword: #E879F9;
  --c-code-string: #34D399;
  --c-code-number: #FBBF24;
}
```

## 语言标签

代码块右上角会自动显示编程语言标签：

```css
.highlight::before {
  content: attr(data-lang);
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.35rem 0.75rem;
  border-radius: 0 var(--r-lg) 0 var(--r-md);
  background: var(--c-primary-100);
  color: var(--c-primary-500);
}
```

## 复制按钮

代码块悬停时右下角会出现复制按钮，点击即可复制代码内容。`

幻梦主题让技术文章的代码展示既专业又美观。
