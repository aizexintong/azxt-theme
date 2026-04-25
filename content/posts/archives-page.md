---
title: "归档页面设计"
date: 2026-04-06T04:00:00+08:00
draft: false
description: "幻梦主题的按年月归档页面，时间线式文章索引"
tags: ["归档", "页面", "时间线", "UX"]
categories: ["页面设计"]
image: "https://t.alcy.cc/ycy?random=30"
---

## 归档页面

幻梦主题的归档页面按年月组织文章，方便读者按时间浏览所有内容。

## 分组逻辑

文章按年份分组，每年内再按月分组：

```
2026年
├── 4月（5篇文章）
│   ├── 文章标题 1
│   ├── 文章标题 2
│   └── ...
└── 3月（3篇文章）
    ├── 文章标题 1
    └── ...

2025年
└── ...
```

## 实现

```html
{{ range .Site.RegularPages.GroupByDate "2006" }}
<div class="archive-year">
  <h2 class="archive-year-title">{{ .Key }}年</h2>
  <p class="archive-year-count">共 {{ len .Pages }} 篇文章</p>
  
  {{ range .Pages.GroupByDate "January" }}
  <div class="archive-month">
    <h3 class="archive-month-title">{{ .Key }}</h3>
    <ul class="archive-list">
      {{ range .Pages }}
      <li class="archive-item">
        <span class="archive-date">{{ .Date.Format "01-02" }}</span>
        <a href="{{ .RelPermalink }}" class="archive-link">{{ .Title }}</a>
      </li>
      {{ end }}
    </ul>
  </div>
  {{ end }}
</div>
{{ end }}
```

归档页面让大量文章的管理变得清晰有序。
