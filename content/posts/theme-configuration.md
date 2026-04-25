---
title: "主题配置文件详解"
date: 2026-04-01T02:00:00+08:00
draft: false
description: "幻梦主题的所有配置项详解，从功能开关到SEO优化"
tags: ["Hugo", "配置", "教程"]
categories: ["主题概述"]
image: "https://t.alcy.cc/ycy?random=3"
---

幻梦主题提供了大量配置项，让你可以灵活控制主题的行为。

## 功能开关

```toml
[params]
  enableDarkMode = true       # 暗黑模式切换
  enableSearch = true         # 搜索功能
  enableParticles = true      # 粒子背景动画
  enable3DEffects = true      # 3D卡片效果
  enableScrollAnimations = true
  enableTypewriter = true     # 打字机效果
  enableTOC = true            # 文章目录
  lazyLoadImages = true       # 图片懒加载
```

## 导航菜单

```toml
[menus]
  [[menus.main]]
    name = '主页'
    pageRef = '/'
    weight = 5
    [menus.main.params]
      icon = 'fas fa-home'
```

## SEO 配置

```toml
[params]
  enableSchema = true         # 结构化数据
  enableOpenGraph = true      # Open Graph
  enableTwitterCards = true   # Twitter Cards
```

## 国际化

主题内置中英文双语支持，通过 `i18n/` 目录下的 YAML 文件管理所有文本内容，方便维护和多语言扩展。
