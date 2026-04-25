---
title: "自定义短代码系统"
date: 2026-04-07T00:00:00+08:00
draft: false
description: "幻梦主题提供的短代码：友链卡片、技能条等"
tags: ["短代码", "Hugo", "组件", "功能"]
categories: ["进阶技巧"]
image: "https://t.alcy.cc/ycy?random=32"
---

## 短代码

幻梦主题提供了多个实用的 Hugo 短代码，让文章内容更加丰富。

## link-card 短代码

在文章中嵌入友链卡片：

```markdown
{{</* link-card
  name="示例博客"
  url="https://example.com"
  avatar="https://example.com/avatar.png"
  description="一个有趣的博客"
*/>}}
```

## skills 短代码

在文章中展示技能进度条：

```markdown
{{</* skills
  name="JavaScript"
  level="90"
  color="#F7DF1E"
*/>}}
```

## links-grid 短代码

在文章中嵌入友链网格：

```markdown
{{</* links-grid */>}}
{{</* link-card name="..." url="..." avatar="..." description="..." */>}}
{{</* link-card name="..." url="..." avatar="..." description="..." */>}}
{{</* /links-grid */>}}
```

短代码让文章内容的表现形式更加丰富多样，无需编写 HTML 即可嵌入精美组件。
