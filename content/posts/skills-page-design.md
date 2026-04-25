---
title: "技能页面展示"
date: 2026-04-06T03:00:00+08:00
draft: false
description: "幻梦主题技能页面的进度条动画与分类展示方案"
tags: ["技能", "页面", "进度条", "动画"]
categories: ["页面设计"]
image: "https://t.alcy.cc/ycy?random=29"
---

## 技能页面

幻梦主题的技能页面以可视化的方式展示技能水平，包含分类概览和详细技能列表。

## 分类概览

技能按类别分组展示，每类带有进度条：

```yaml
# data/skills.yaml
categories:
  - name: "前端开发"
    icon: "fab fa-html5"
    level: 90
    description: "HTML / CSS / JavaScript"
```

## 进度条动画

进度条使用 IntersectionObserver 触发动画：

```css
.progress-bar {
  height: 100%;
  background: var(--grad-primary);
  border-radius: var(--r-full);
  transition: width 1.2s var(--ease-slow);
  width: 0;
}
```

## 开发时间线

页面底部展示开发历程时间线，左侧为日期徽标，右侧为事件描述。时间线采用交替布局，奇数项靠左、偶数项靠右。

技能页面让访问者能够直观地了解博主的技术栈和专长领域。
