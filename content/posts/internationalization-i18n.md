---
title: "国际化多语言支持"
date: 2026-04-07T01:00:00+08:00
draft: false
description: "幻梦主题的 i18n 国际化系统：轻松扩展多语言支持"
tags: ["国际化", "i18n", "Hugo", "功能"]
categories: ["进阶技巧"]
image: "https://t.alcy.cc/ycy?random=33"
---

## 国际化支持

幻梦主题内置完整的国际化支持，默认提供中文和英文翻译。

## 翻译文件

所有用户可见的文本都集中在 `i18n/` 目录下的 YAML 文件中：

```yaml
# i18n/zh-CN.yaml
sitetitle:
  other: "爱则心痛 · azxt"
hometitle:
  other: "首页"
searchtitle:
  other: "搜索"
readmore:
  other: "阅读全文"
```

## 在模板中使用

```html
<button aria-label="{{ i18n "searchtitle" }}">
  <i class="fas fa-search"></i>
</button>
```

## 添加新语言

只需创建新的翻译文件即可添加语言支持。例如添加日语支持：

```yaml
# i18n/ja-JP.yaml
sitetitle:
  other: "愛則心痛 · azxt"
searchtitle:
  other: "検索"
```

## 主题配置

```toml
defaultContentLanguage = 'zh'
defaultContentLanguageInSubdir = false
```

国际化设计让幻梦主题可以轻松服务于多语言受众。
