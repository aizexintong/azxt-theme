---
title: "SEO与结构化数据"
date: 2026-04-07T03:00:00+08:00
draft: false
description: "幻梦主题的SEO优化策略：Open Graph、Twitter Cards和JSON-LD"
tags: ["SEO", "结构化数据", "Open Graph", "优化"]
categories: ["进阶技巧"]
image: "https://t.alcy.cc/ycy?random=35"
---

## SEO 优化

幻梦主题内置全面的 SEO 优化功能。

## Open Graph

```html
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ .Description }}">
<meta property="og:type" content="website">
<meta property="og:image" content="{{ $avatar }}">
```

## Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ .Title }}">
<meta name="twitter:description" content="{{ .Description }}">
```

## 结构化数据

使用 JSON-LD 格式的 Schema.org 结构化数据：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "爱则心痛 | azxt",
  "url": "https://azxt.org/",
  "author": {
    "@type": "Person",
    "name": "爱则心痛"
  }
}
</script>
```

## RSS

主题自动生成 RSS feed，并通过 `<link>` 标签在页面头部引用，确保内容聚合器可以轻松发现和订阅。

SEO 优化让幻梦主题的网站在搜索引擎中获得更好的可见性。
