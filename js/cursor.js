/* ==========================================================================
   Apple iOS 26 Liquid Glass Anti-Gravity Cursor & Physics Engine
   ========================================================================== */

class LiquidGlassCursor {
  constructor() {
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.spotlightPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.velocity = { x: 0, y: 0 };
    this.targetElement = null;
    this.isHovering = false;
    this.isClicking = false;

    // Trail Droplet Array
    this.numDroplets = 8;
    this.droplets = [];
    
    // Lerp Speed Factor (0.12 - 0.18 for liquid fluid inertia)
    this.lerp = 0.16;
    
    this.init();
  }

  init() {
    // Only activate cursor on desktop fine pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    this.createElements();
    this.bindEvents();
    this.render();
  }

  createElements() {
    // Wrapper Container
    this.wrapper = document.createElement('div');
    this.wrapper.id = 'liquid-cursor-wrapper';
    this.wrapper.className = 'liquid-cursor-wrapper';

    // Main Sphere Dot
    this.cursorDot = document.createElement('div');
    this.cursorDot.id = 'liquid-cursor-dot';
    this.cursorDot.className = 'liquid-cursor-dot';

    // Inner Glass Refractions
    const specular = document.createElement('div');
    specular.className = 'liquid-glass-specular';

    const refraction = document.createElement('div');
    refraction.className = 'liquid-glass-refraction';

    this.cursorDot.appendChild(specular);
    this.cursorDot.appendChild(refraction);

    // Trail Container
    this.trailContainer = document.createElement('div');
    this.trailContainer.className = 'liquid-cursor-trail-container';

    // Generate 8 Liquid Droplet Trail Elements
    for (let i = 0; i < this.numDroplets; i++) {
      const drop = document.createElement('div');
      drop.className = 'trail-droplet';
      const size = Math.max(4, 14 - i * 1.2);
      drop.style.width = `${size}px`;
      drop.style.height = `${size}px`;
      drop.style.marginLeft = `-${size / 2}px`;
      drop.style.marginTop = `-${size / 2}px`;
      drop.style.opacity = '0';
      this.trailContainer.appendChild(drop);

      this.droplets.push({
        el: drop,
        x: this.mouse.x,
        y: this.mouse.y,
        size: size
      });
    }

    this.wrapper.appendChild(this.trailContainer);
    this.wrapper.appendChild(this.cursorDot);
    document.body.appendChild(this.wrapper);

    // Ambient Spotlight
    this.spotlight = document.createElement('div');
    this.spotlight.id = 'liquid-spotlight';
    this.spotlight.className = 'liquid-spotlight';
    document.body.appendChild(this.spotlight);
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.checkHoverState(e.target);
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      this.isClicking = true;
      this.cursorDot.classList.add('clicking');
      this.triggerRipple();
    });

    window.addEventListener('mouseup', () => {
      this.isClicking = false;
      this.cursorDot.classList.remove('clicking');
    });

    // Handle iframe / window leaving
    document.addEventListener('mouseleave', () => {
      this.wrapper.style.opacity = '0';
      this.spotlight.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      this.wrapper.style.opacity = '1';
      this.spotlight.style.opacity = '1';
    });
  }

  triggerRipple() {
    const ripple = document.createElement('div');
    ripple.className = 'liquid-cursor-ripple';
    ripple.style.left = `${this.cursorPos.x}px`;
    ripple.style.top = `${this.cursorPos.y}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
    }, 650);
  }

  checkHoverState(target) {
    if (!target) return;

    // Check for interactive targets
    const interactive = target.closest('a, button, input, textarea, label, [role="button"], .work-card, .cert-card, .pure-logo-item, .oval-hand-btn, .sidebar-link, .avatar-container, .mat-tab-btn');

    if (interactive && interactive !== this.targetElement) {
      if (this.targetElement) {
        this.resetElementReaction(this.targetElement);
      }
      this.targetElement = interactive;
      this.isHovering = true;
      this.cursorDot.classList.add('hovering');
    } else if (!interactive && this.targetElement) {
      this.resetElementReaction(this.targetElement);
      this.targetElement = null;
      this.isHovering = false;
      this.cursorDot.classList.remove('hovering', 'magnetic');
    }
  }

  applyElementAntiGravity(el, targetX, targetY) {
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = targetX - centerX;
    const deltaY = targetY - centerY;

    // 3D Tilt calculation
    const tiltX = (deltaY / (rect.height / 2)) * -8;
    const tiltY = (deltaX / (rect.width / 2)) * 8;

    el.classList.add('anti-gravity-react');
    el.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px) translateZ(10px)`;
    el.style.boxShadow = `0 14px 35px rgba(0, 0, 0, 0.35), 0 0 25px rgba(255, 255, 255, 0.2)`;
  }

  resetElementReaction(el) {
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
    setTimeout(() => el.classList.remove('anti-gravity-react'), 300);
  }

  render() {
    // Magnetic Attraction Center Lerp
    let targetX = this.mouse.x;
    let targetY = this.mouse.y;

    if (this.targetElement) {
      const rect = this.targetElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Magnetic Pull Towards Center
      const dist = Math.hypot(this.mouse.x - centerX, this.mouse.y - centerY);
      if (dist < 100) {
        targetX = this.mouse.x * 0.65 + centerX * 0.35;
        targetY = this.mouse.y * 0.65 + centerY * 0.35;
        this.cursorDot.classList.add('magnetic');
        this.applyElementAntiGravity(this.targetElement, this.mouse.x, this.mouse.y);
      }
    }

    // Interpolate Cursor Position (Lerp)
    const prevX = this.cursorPos.x;
    const prevY = this.cursorPos.y;

    this.cursorPos.x += (targetX - this.cursorPos.x) * this.lerp;
    this.cursorPos.y += (targetY - this.cursorPos.y) * this.lerp;

    // Calculate Velocity & Inertia
    const vx = this.cursorPos.x - prevX;
    const vy = this.cursorPos.y - prevY;
    const speed = Math.hypot(vx, vy);
    const angle = Math.atan2(vy, vx) * (180 / Math.PI);

    // Liquid Squeeze & Stretch Physics Deformation
    const stretch = Math.min(speed * 0.015, 0.4);
    const scaleX = 1 + stretch;
    const scaleY = 1 - stretch;

    // Apply 3D Hardware Accelerated Transform
    this.cursorDot.style.transform = `translate3d(${this.cursorPos.x}px, ${this.cursorPos.y}px, 0) rotate(${angle.toFixed(1)}deg) scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)})`;

    // Interpolate Spotlight Position
    this.spotlightPos.x += (this.mouse.x - this.spotlightPos.x) * 0.1;
    this.spotlightPos.y += (this.mouse.y - this.spotlightPos.y) * 0.1;
    this.spotlight.style.transform = `translate3d(${this.spotlightPos.x}px, ${this.spotlightPos.y}px, 0)`;

    // Render Droplet Trail Physics
    let leadX = this.cursorPos.x;
    let leadY = this.cursorPos.y;

    for (let i = 0; i < this.numDroplets; i++) {
      const drop = this.droplets[i];
      const dropLerp = 0.35 - (i * 0.03);

      drop.x += (leadX - drop.x) * Math.max(dropLerp, 0.08);
      drop.y += (leadY - drop.y) * Math.max(dropLerp, 0.08);

      const opacity = Math.max(0, (0.55 - (i * 0.06))).toFixed(2);
      const scale = Math.max(0.2, (1 - (i * 0.1))).toFixed(2);

      drop.el.style.transform = `translate3d(${drop.x.toFixed(1)}px, ${drop.y.toFixed(1)}px, 0) scale(${scale})`;
      drop.el.style.opacity = opacity;

      leadX = drop.x;
      leadY = drop.y;
    }

    requestAnimationFrame(() => this.render());
  }
}

// Initialize Liquid Cursor Engine on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new LiquidGlassCursor());
} else {
  new LiquidGlassCursor();
}
