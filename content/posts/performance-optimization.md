---
title: "性能优化技巧"
date: 2026-04-07T02:00:00+08:00
draft: false
description: "幻梦主题中的性能优化实践：从CSS构建到资源加载"
tags: ["性能", "优化", "CSS", "构建"]
categories: ["进阶技巧"]
image: "https://t.alcy.cc/ycy?random=34"
---

## 性能优化

幻梦主题在设计与开发过程中始终关注性能表现。

## CSS 构建

CSS 文件通过 Hugo Pipes 进行合并和压缩：

```html
{{- $css := slice
  (resources.Get "css/_variables.css")
  (resources.Get "css/_base.css")
  ...
  | resources.Concat "css/main.css" -}}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
```

## 图片优化

- 使用原生 `loading="lazy"` 实现懒加载
- 所有图片设置宽高避免布局偏移
- 支持现代图片格式

## JavaScript

- 第三方库使用 `defer` 延迟加载
- 主脚本在 `DOMContentLoaded` 后初始化
- 低端设备自动降低特效复杂度

```javascript
const isLowEnd = navigator.hardwareConcurrency <= 2;
this.performanceMultiplier = isLowEnd ? 0.5 : 1;
```

## 渲染性能

- 使用 `will-change` 提示浏览器即将变化的属性
- 动画使用 `transform` 和 `opacity`（可由 GPU 加速）
- 避免强制同步布局（布局抖动）
