---
title: "主题安装与快速开始"
date: 2026-04-01T01:00:00+08:00
draft: false
description: "快速上手幻梦主题，从安装到运行只需三步"
tags: ["Hugo", "安装", "教程", "快速开始"]
categories: ["主题概述"]
image: "https://t.alcy.cc/ycy?random=2"
---

## 环境要求

幻梦主题需要 Hugo 0.146.0 或更高版本。

## 安装步骤

### 第一步：下载主题

```bash
cd your-site
git submodule add https://github.com/yourname/illusion.git themes/illusion
```

### 第二步：配置

在站点根目录的 `hugo.toml` 中设置主题：

```toml
theme = "illusion"
```

### 第三步：运行

```bash
hugo server
```

访问 `http://localhost:1313` 即可看到效果。

## 基础配置

幻梦主题提供了丰富的配置项：

```toml
[params]
  enableDarkMode = true
  enableSearch = true
  enableParticles = true
  enableTOC = true
```

## 目录结构

```
content/
├── _index.md        # 首页
├── about.md         # 关于
├── archives.md      # 归档
├── links.md         # 友链
├── posts/           # 文章目录
└── skills.md        # 技能
```

幻梦主题采用数据驱动模式，大部分页面内容通过 `data/` 目录下的 YAML 文件配置，无需修改模板即可自定义页面内容。
