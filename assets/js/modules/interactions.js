// ==========================================================================
// 交互功能管理
// ==========================================================================

const InteractionManager = {
  init() {
    this.initMobileMenu();
    this.initSmoothScroll();
    this.initLazyLoad();
    this.initTouchInteractions();
    this.initKeyboardNavigation();
    this.initAOS();
    this.initTyped();
    this.initHeaderScroll();
  },

  // AOS动画初始化
  initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
      });
    }
  },

  // 打字效果
  initTyped() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;

    const strings = typedElement.dataset.typed;
    if (!strings) return;

    try {
      const stringsArray = JSON.parse(strings);
      if (typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
          strings: stringsArray,
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
          showCursor: true,
          cursorChar: '|'
        });
      }
    } catch (e) {
      console.warn('Typed.js initialization failed:', e);
    }
  },

  // 头部滚动效果
  initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  },

  // 移动端菜单
  initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (!toggleBtn || !mobileMenu) return;

    const openMenu = () => {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      mobileMenu.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      mobileMenu.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
    };

    toggleBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // ESC关闭
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  },

  // 平滑滚动
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  },

  // 图片懒加载
  initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  },

  // 触摸交互
  initTouchInteractions() {
    if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;

    document.body.classList.add('touch-device');

    const touchElements = document.querySelectorAll('.btn, .card, .post-card, .skill-item');
    touchElements.forEach(el => {
      el.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      }, { passive: true });

      el.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
      }, { passive: true });
    });
  },

  // 键盘导航
  initKeyboardNavigation() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = '跳转到主要内容';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

document.addEventListener('DOMContentLoaded', () => InteractionManager.init());
window.InteractionManager = InteractionManager;
