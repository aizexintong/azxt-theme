---
title: "暗黑模式切换实现"
date: 2026-04-04T03:00:00+08:00
draft: false
description: "幻梦主题的智能暗黑模式：支持手动切换与系统跟随"
tags: ["暗黑模式", "主题", "JavaScript", "UX"]
categories: ["功能特性"]
image: "https://t.alcy.cc/ycy?random=19"
---

## 三模式切换

幻梦主题支持三种主题模式：浅色、深色和系统跟随。

## 实现原理

通过 CSS 自定义属性和 `data-theme` 属性实现主题切换：

```javascript
const ThemeManager = {
  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  },

  applyTheme(theme) {
    let themeToApply = theme;
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      themeToApply = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', themeToApply);
  }
};
```

## CSS 变量驱动

所有颜色值都通过 CSS 变量定义，切换主题只需改变变量的值：

```css
:root { --c-bg-main: #F8F6FC; }
[data-theme="dark"] { --c-bg-main: #0C0B12; }
```

## 系统监听

当选择「系统跟随」模式时，主题会监听系统主题变化并自动切换：

```javascript
watchSystemTheme() {
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (this.currentTheme === 'system') {
        this.applyTheme('system');
      }
    });
}
```

暗黑模式切换按钮带有缩放动画，交互反馈细腻生动。
