---
title: "关于页面设计"
date: 2026-04-06T01:00:00+08:00
draft: false
description: "幻梦主题关于页面的数据驱动设计与视觉布局"
tags: ["关于", "页面", "设计", "数据驱动"]
categories: ["页面设计"]
image: "https://t.alcy.cc/ycy?random=27"
---

## 关于页面

幻梦主题的关于页面采用数据驱动设计，通过 YAML 文件配置所有内容。

## 页面结构

```
┌──────────────────────────────────┐
│  关于我                          │
│  头像 + 姓名 + 标语              │
│  引用语句                        │
│  统计：文章数 · 标签 · 技能 · 项目│
├──────────────────────────────────┤
│  技术理念（4列网格）              │
│  💡 创新  🎨 设计  🛠️ 工程  🌱 成长│
├──────────────────────────────────┤
│  联系方式（3列网格）              │
│  GitHub · 邮箱 · 其它             │
└──────────────────────────────────┘
```

## 数据文件

```yaml
# data/about.yaml
intro:
  name: "爱则心痛"
  title: "前端开发者 / 技术博主"
  quote: "用代码创造美好事物"
  avatar: "https://example.com/avatar.png"
```

## 统计计算

统计数字由 Hugo 自动计算：

```html
<div class="stat-number">{{ len site.RegularPages }}</div>
<div class="stat-label">{{ i18n "homepostcount" }}</div>
```

关于页面既展示个人品牌，又通过数据驱动的设计让维护变得轻而易举。
