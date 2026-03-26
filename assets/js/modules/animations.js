// ==========================================================================
// 动画效果管理
// ==========================================================================

const AnimationManager = {
  init() {
    this.initAOS();
    this.initScrollProgress();
    this.initSkillBars();
    this.initFloatingElements();
    this.initParticles();
  },

  // 初始化 AOS 动画库
  initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-out',
        once: true,
        offset: 50,
        delay: 0
      });
    }
  },

  // 滚动进度条
  initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  },

  // 技能条动画
  initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    if (!skillBars.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          const level = skillBar.dataset.level || '0';
          skillBar.style.width = level + '%';
          observer.unobserve(skillBar);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  },

  // 浮动元素
  initFloatingElements() {
    const container = document.querySelector('main') || document.body;
    const colors = ['#FFB7BE', '#EACCF2', '#C5F0D8'];

    for (let i = 0; i < 2; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.background = colors[Math.floor(Math.random() * colors.length)];
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 15 + 's';
      container.appendChild(element);
    }
  },

  // 粒子背景
  initParticles() {
    if (typeof particlesJS !== 'undefined') {
      const container = document.getElementById('particles-canvas');
      if (container) {
        particlesJS('particles-canvas', {
          particles: {
            number: { value: 25, density: { enable: true, value_area: 800 } },
            color: { value: ['#FFB7BE', '#EACCF2', '#C5F0D8'] },
            shape: { type: 'circle' },
            opacity: { value: 0.15, random: true },
            size: { value: 2, random: true },
            line_linked: {
              enable: true,
              distance: 100,
              color: '#FFD4D8',
              opacity: 0.08,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              random: true,
              out_mode: 'out'
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: false },
              onclick: { enable: false }
            }
          }
        });
      }
    }
  }
};

// 检查是否应该减少动画
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.addEventListener('DOMContentLoaded', () => AnimationManager.init());
}

window.AnimationManager = AnimationManager;
