// ==========================================================================
// 主题管理系统
// ==========================================================================

const ThemeManager = {
  config: {
    light: {
      name: 'light',
      icon: 'fas fa-moon',
      label: '切换到深色模式'
    },
    dark: {
      name: 'dark',
      icon: 'fas fa-sun',
      label: '切换到浅色模式'
    }
  },

  currentTheme: null,

  init() {
    this.setThemeImmediately();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initToggle());
    } else {
      this.initToggle();
    }

    this.watchSystemTheme();
  },

  setThemeImmediately() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
  },

  initToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    this.updateToggleButton(toggleBtn);

    toggleBtn.addEventListener('click', () => {
      this.toggleTheme();
      toggleBtn.style.transform = 'scale(0.9)';
      setTimeout(() => { toggleBtn.style.transform = ''; }, 150);
    });
  },

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },

  setTheme(theme) {
    if (!this.config[theme]) return;

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
    this.updateAllToggleButtons();
    this.updateBackgroundEffects(theme);

    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  },

  updateBackgroundEffects(theme) {
    const fireflyContainer = document.getElementById('firefly-container');
    const starsContainer = document.getElementById('stars-container');
    const lightParticles = document.getElementById('light-particles');

    if (theme === 'dark') {
      if (fireflyContainer) fireflyContainer.style.display = 'block';
      if (starsContainer) starsContainer.style.display = 'block';
      if (lightParticles) lightParticles.style.display = 'block';
      if (typeof createStars === 'function') createStars();
      if (typeof createLightParticles === 'function') createLightParticles();
      if (typeof createFireflies === 'function') createFireflies();
    } else {
      if (fireflyContainer) fireflyContainer.style.display = 'none';
      if (starsContainer) starsContainer.style.display = 'none';
      if (lightParticles) lightParticles.style.display = 'none';
    }
  },

  updateAllToggleButtons() {
    document.querySelectorAll('#theme-toggle').forEach(btn => this.updateToggleButton(btn));
  },

  updateToggleButton(button) {
    if (!button) return;
    const config = this.config[this.currentTheme];
    const icon = button.querySelector('i');

    if (icon) {
      icon.className = config.icon;
      icon.setAttribute('aria-label', config.label);
    }
    button.setAttribute('title', config.label);
    button.setAttribute('aria-label', config.label);
  },

  watchSystemTheme() {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
};

// 立即初始化
ThemeManager.init();
window.ThemeManager = ThemeManager;
