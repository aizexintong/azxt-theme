---
title: "友链页面实现"
date: 2026-04-06T02:00:00+08:00
draft: false
description: "幻梦主题友链页面的响应式网格布局与数据配置"
tags: ["友链", "页面", "数据驱动", "布局"]
categories: ["页面设计"]
image: "https://t.alcy.cc/ycy?random=28"
---

## 友链页面

幻梦主题的友链页面以精美的卡片网格展示友情链接，支持分类筛选。

## 网格布局

```css
.links-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--sp-5);
}

@media (min-width: 768px) {
  .links-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 992px) {
  .links-grid { grid-template-columns: repeat(3, 1fr); }
}
```

## 卡片设计

每张友链卡片包含头像、名称、描述、分类和访问链接。悬停时卡片上移并加深阴影。

```yaml
# data/friends.yaml
friends:
  - name: "示例博客"
    url: "https://example.com"
    avatar: "https://example.com/avatar.png"
    description: "一个有趣的博客"
    category: "技术"
```

## 申请友链

页面底部设有「申请友链」区域，展示交换条件、站点信息和联系方式。所有内容均通过数据文件配置，无需修改模板。
