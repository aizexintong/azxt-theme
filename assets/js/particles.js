// 粒子背景特效
class ParticlesBackground {
  constructor(canvasId = 'particles-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 80;
    this.maxDistance = 100;
    this.mouse = { x: 0, y: 0, radius: 120 };
    
    this.init();
    this.animate();
    this.bindEvents();
  }
  
  init() {
    this.resizeCanvas();
    
    // 创建粒子
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: this.getRandomColor()
      });
    }
  }
  
  getRandomColor() {
    const colors = [
      'rgba(147, 112, 219, 0.6)', // 紫色
      'rgba(255, 105, 180, 0.6)', // 粉色
      'rgba(64, 224, 208, 0.6)',  // 青色
      'rgba(255, 215, 0, 0.6)',   // 金色
      'rgba(30, 144, 255, 0.6)'   // 蓝色
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      color: this.getRandomColor()
    };
  }
  
  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    this.ctx.fillStyle = particle.color;
    this.ctx.fill();
  }
  
  drawLine(p1, p2, distance) {
    const opacity = 1 - (distance / this.maxDistance);
    this.ctx.beginPath();
    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.strokeStyle = `rgba(147, 112, 219, ${opacity * 0.3})`;
    this.ctx.lineWidth = 0.5;
    this.ctx.stroke();
  }
  
  updateParticle(particle) {
    // 移动粒子
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    
    // 边界检查
    if (particle.x > this.canvas.width) particle.x = 0;
    if (particle.x < 0) particle.x = this.canvas.width;
    if (particle.y > this.canvas.height) particle.y = 0;
    if (particle.y < 0) particle.y = this.canvas.height;
    
    // 鼠标交互
    const dx = this.mouse.x - particle.x;
    const dy = this.mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < this.mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (this.mouse.radius - distance) / this.mouse.radius;
      particle.x -= Math.cos(angle) * force * 2;
      particle.y -= Math.sin(angle) * force * 2;
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 更新和绘制粒子
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      this.updateParticle(particle);
      this.drawParticle(particle);
      
      // 绘制连接线
      for (let j = i + 1; j < this.particles.length; j++) {
        const otherParticle = this.particles[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.maxDistance) {
          this.drawLine(particle, otherParticle, distance);
        }
      }
    }
    
    requestAnimationFrame(() => this.animate());
  }
  
  bindEvents() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
    });
    
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
    
    window.addEventListener('touchmove', (e) => {
      // 不要阻止默认行为，允许滚动
      this.mouse.x = e.touches[0].clientX;
      this.mouse.y = e.touches[0].clientY;
    }, { passive: true });
  }
}

// 初始化粒子特效
document.addEventListener('DOMContentLoaded', () => {
  new ParticlesBackground();
});