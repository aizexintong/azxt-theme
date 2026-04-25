---
title: "文章目录(TOC)系统"
date: 2026-04-05T01:00:00+08:00
draft: false
description: "幻梦主题的自动文章目录生成，支持滚动高亮跟随"
tags: ["目录", "TOC", "导航", "UX"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=23"
---

## 文章目录

幻梦主题为长篇文章自动生成目录，方便读者快速定位内容。

## 配置开启

```toml
[params]
  enableTOC = true
```

## 目录生成

目录使用 Hugo 内置的 `.TableOfContents` 函数生成，自动提取文章中的 h2 和 h3 标题：

```html
{{ if and .Site.Params.enableTOC .TableOfContents }}
<div class="side-box">
  <div class="side-box-title"><i class="fas fa-list"></i> 目录</div>
  <div class="side-toc">{{ .TableOfContents }}</div>
</div>
{{ end }}
```

## 滚动高亮

通过 IntersectionObserver 实现滚动时当前标题的高亮跟随：

```javascript
const tocObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const tocLink = document.querySelector(`.side-toc a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      tocLink?.classList.add('active');
    } else {
      tocLink?.classList.remove('active');
    }
  });
});
```

目录系统让读者在长篇文章中也能轻松导航，提升阅读效率。
