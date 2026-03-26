// ==========================================================================
// Markdown文档增强
// ==========================================================================

const EnhancementManager = {
  init() {
    this.enhanceCodeBlocks();
    this.enhanceTables();
    this.enhanceBlockquotes();
    this.addHeadingAnchors();
  },

  // 代码块增强
  enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.article-content-wrapper pre');

    codeBlocks.forEach((block, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(block);

      // 获取语言
      const code = block.querySelector('code');
      let language = 'code';
      if (code && code.className) {
        const langMatch = code.className.match(/language-(\w+)/);
        if (langMatch) language = langMatch[1];
      }

      // 添加头部
      const header = document.createElement('div');
      header.className = 'code-block-header';
      header.innerHTML = `
        <span class="code-language">${language}</span>
        <button class="code-copy-btn" data-code-index="${index}" aria-label="复制代码">
          <i class="fas fa-copy"></i>
          <span>复制</span>
        </button>
      `;
      wrapper.insertBefore(header, block);

      // 复制功能
      const copyBtn = header.querySelector('.code-copy-btn');
      copyBtn.addEventListener('click', async () => {
        const codeText = code ? code.textContent : block.textContent;
        try {
          await navigator.clipboard.writeText(codeText);
          copyBtn.innerHTML = '<i class="fas fa-check"></i><span>已复制</span>';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.innerHTML = '<i class="fas fa-copy"></i><span>复制</span>';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('复制失败:', err);
        }
      });
    });
  },

  // 表格增强
  enhanceTables() {
    const tables = document.querySelectorAll('.article-content-wrapper table');

    tables.forEach(table => {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      wrapper.style.overflowX = 'auto';
      wrapper.style.margin = '1.5rem 0';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  },

  // 引用块增强
  enhanceBlockquotes() {
    const blockquotes = document.querySelectorAll('.article-content-wrapper blockquote');

    blockquotes.forEach(quote => {
      const text = quote.textContent.trim();
      if (text.startsWith('💡')) quote.classList.add('callout', 'callout-info');
      else if (text.startsWith('⚠️')) quote.classList.add('callout', 'callout-warning');
      else if (text.startsWith('📝')) quote.classList.add('callout', 'callout-note');
      else if (text.startsWith('❌')) quote.classList.add('callout', 'callout-error');
    });
  },

  // 标题锚点
  addHeadingAnchors() {
    const headings = document.querySelectorAll('.article-content-wrapper h2, .article-content-wrapper h3');

    headings.forEach(heading => {
      if (!heading.id) {
        const id = heading.textContent
          .toLowerCase()
          .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
          .replace(/^-+|-+$/g, '');
        heading.id = id || `heading-${Math.random().toString(36).substr(2, 9)}`;
      }

      const anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = `#${heading.id}`;
      anchor.innerHTML = '<i class="fas fa-link"></i>';
      anchor.setAttribute('aria-label', '链接到此标题');
      heading.appendChild(anchor);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => EnhancementManager.init());
window.EnhancementManager = EnhancementManager;
