/* ==========================================================================
   App Orchestrator — Cutting Mat Rendering & Interactive Elements
   ========================================================================== */

function initApp() {
  const router = new PortfolioRouter();
  router.init();
  window.portfolioRouter = router;

  const modalController = new ModalController();
  modalController.init();

  window.modalController = modalController;

  // Bind Back Buttons for inline mat views
  const backBtn = document.getElementById('project-detail-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      router.switchTab('work');
    });
  }

  const connectBackBtn = document.getElementById('connect-detail-back-btn');
  if (connectBackBtn) {
    connectBackBtn.addEventListener('click', () => {
      router.switchTab('home');
    });
  }

  const workWithMeBackBtn = document.getElementById('work-with-me-back-btn');
  if (workWithMeBackBtn) {
    workWithMeBackBtn.addEventListener('click', () => {
      router.switchTab('home');
    });
  }

  const certDetailBackBtn = document.getElementById('cert-detail-back-btn');
  if (certDetailBackBtn) {
    certDetailBackBtn.addEventListener('click', () => {
      router.switchTab('certifications');
    });
  }

  // Render Desk Elements
  renderPureDeskLogos(modalController);
  renderWorkGrid(modalController);
  renderEducationDesk();
  renderToolsDesk();
  renderCertificationsGrid(modalController);
  initMatColorPicker();
  initSidebarToggle();
  initSidebarResizer();
  bindActions(modalController, router);
}

/* Initialize Permanent Sidebar Collapse & Expand Toggle (3-Bar Hamburger) */
function initSidebarToggle() {
  const sidebar = document.getElementById('app-sidebar');
  const toggleBtn = document.getElementById('permanent-sidebar-toggle');

  if (!sidebar || !toggleBtn) return;

  const toggleSidebar = () => {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    if (isCollapsed) {
      toggleBtn.classList.remove('sidebar-open');
      toggleBtn.title = "Show Sidebar";
      localStorage.setItem('sidebar-collapsed', 'true');
    } else {
      toggleBtn.classList.add('sidebar-open');
      toggleBtn.title = "Hide Sidebar (Full Screen Mat)";
      localStorage.setItem('sidebar-collapsed', 'false');
    }
  };

  toggleBtn.addEventListener('click', toggleSidebar);

  // Restore saved collapse state
  if (localStorage.getItem('sidebar-collapsed') === 'true') {
    sidebar.classList.add('collapsed');
    toggleBtn.classList.remove('sidebar-open');
    toggleBtn.title = "Show Sidebar";
  } else {
    sidebar.classList.remove('collapsed');
    toggleBtn.classList.add('sidebar-open');
    toggleBtn.title = "Hide Sidebar (Full Screen Mat)";
  }
}

/* Initialize Sidebar Resizer Drag Handle */
function initSidebarResizer() {
  const sidebar = document.getElementById('app-sidebar');
  const resizer = document.getElementById('sidebar-resizer');
  if (!sidebar || !resizer) return;

  let isDragging = false;

  // Restore saved width
  const savedWidth = localStorage.getItem('sidebar-width');
  if (savedWidth) {
    document.documentElement.style.setProperty('--sidebar-width', savedWidth + 'px');
  }

  resizer.addEventListener('mousedown', (e) => {
    isDragging = true;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let newWidth = e.clientX;
    if (newWidth < 220) newWidth = 220;
    if (newWidth > 500) newWidth = 500;

    document.documentElement.style.setProperty('--sidebar-width', newWidth + 'px');
    localStorage.setItem('sidebar-width', newWidth);
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      resizer.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });
}

/* Initialize Mat Color Wheel Picker & Reset Button */
function initMatColorPicker() {
  const colorInput = document.getElementById('mat-color-picker');
  const resetBtn = document.getElementById('btn-reset-mat-color');

  const defaultColor = '#1f4337';

  // Load saved custom color or default
  const savedColor = localStorage.getItem('mat-custom-color');
  if (savedColor) {
    applyCustomMatColor(savedColor);
    if (colorInput) colorInput.value = savedColor;
  }

  if (colorInput) {
    colorInput.addEventListener('input', (e) => {
      const color = e.target.value;
      applyCustomMatColor(color);
      localStorage.setItem('mat-custom-color', color);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      localStorage.removeItem('mat-custom-color');
      applyCustomMatColor(defaultColor);
      if (colorInput) colorInput.value = defaultColor;
    });
  }
}

function applyCustomMatColor(hexColor) {
  const swatchDot = document.getElementById('mat-color-swatch-dot');
  if (swatchDot) swatchDot.style.background = hexColor;

  document.documentElement.style.setProperty('--bg-mat', hexColor);
  document.body.style.setProperty('--bg-mat', hexColor);

  // Compute darker shade for grid line background
  const darker = adjustColorBrightness(hexColor, -25);
  document.documentElement.style.setProperty('--bg-mat-dark', darker);
}

function adjustColorBrightness(hex, percent) {
  let num = parseInt(hex.replace('#',''), 16);
  if (isNaN(num)) return hex;
  let amt = Math.round(2.55 * percent);
  let R = (num >> 16) + amt;
  let G = (num >> 8 & 0x00FF) + amt;
  let B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255?R<0?0:R:255)*0x10000 + (G<255?G<0?0:G:255)*0x100 + (B<255?B<0?0:B:255)).toString(16).slice(1);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* Render Pure Clearbit API Logos — Pure Logos Only, Zero Description */
function renderPureDeskLogos(modalController) {
  const container = document.getElementById('polaroids-container');
  if (!container) return;

  const positions = ['logo-pos-1', 'logo-pos-2', 'logo-pos-3', 'logo-pos-4', 'logo-pos-5', 'logo-pos-6', 'logo-pos-7'];
  const deskItems = PORTFOLIO_DATA.deskPolaroids || [];

  const html = deskItems.map((item, index) => {
    const posClass = positions[index % positions.length];

    return `
      <div class="pure-logo-item ${posClass}" data-logo-id="${item.id}" title="${item.title}" style="--glow-color: ${item.glowColor || 'rgba(255,255,255,0.4)'};">
        <img 
          src="${item.logoUrl}" 
          alt="${item.title} Logo" 
          class="clearbit-logo-img"
          loading="eager"
        />
      </div>
    `;
  }).join('');

  container.innerHTML = html;
  makeLogosDraggable(container);
}

/* Make Desk Floating Logos Draggable Anywhere across the Cutting Mat Canvas */
function makeLogosDraggable(container) {
  const logos = container.querySelectorAll('.pure-logo-item');
  const matCanvas = document.querySelector('.cutting-mat-canvas');

  logos.forEach(logo => {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    const onStart = (e) => {
      isDragging = true;
      logo.classList.add('dragging');

      const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

      startX = clientX;
      startY = clientY;

      const rect = logo.getBoundingClientRect();
      const parentRect = matCanvas ? matCanvas.getBoundingClientRect() : { left: 0, top: 0 };

      // Convert current computed position to pixel offset relative to parent mat canvas
      initialLeft = rect.left - parentRect.left + (matCanvas ? matCanvas.scrollLeft : 0);
      initialTop = rect.top - parentRect.top + (matCanvas ? matCanvas.scrollTop : 0);

      // Fix current position in inline px style so drag starts smoothly
      logo.style.left = `${initialLeft}px`;
      logo.style.top = `${initialTop}px`;
      logo.style.right = 'auto';
      logo.style.bottom = 'auto';

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('touchend', onEnd);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault();

      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - startX;
      const deltaY = clientY - startY;

      logo.style.left = `${initialLeft + deltaX}px`;
      logo.style.top = `${initialTop + deltaY}px`;
    };

    const onEnd = () => {
      isDragging = false;
      logo.classList.remove('dragging');

      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    };

    logo.addEventListener('mousedown', onStart);
    logo.addEventListener('touchstart', onStart, { passive: false });
  });
}

/* Render Work Showcase Grid View (Projects + Apps I Created) */
function renderWorkGrid(modalController) {
  const projectsContainer = document.getElementById('work-grid-container');
  const appsContainer = document.getElementById('apps-grid-container');

  const renderCardList = (list, targetEl) => {
    if (!targetEl || !list) return;
    const html = list.map(project => {
      const previewContent = project.image
        ? `<img src="${project.image}" alt="${project.title} Preview" style="width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block;" />`
        : `<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center;">
            <div style="font-family: var(--font-serif); font-size: 2.4rem; color: #fff; font-style: italic;">${project.title}</div>
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.8); margin-top: 6px;">${project.categoryLabel}</div>
          </div>`;

      return `
        <div class="work-card-item" data-project-id="${project.id}">
          <div class="work-card-preview" style="background: ${project.gradient}; overflow: hidden;">
            ${previewContent}
          </div>
          <div>
            <div class="work-card-title">${project.title}</div>
            <div class="work-card-tags">${project.tags.join(' • ')}</div>
          </div>
        </div>
      `;
    }).join('');

    targetEl.innerHTML = html;

    const items = targetEl.querySelectorAll('.work-card-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-project-id');
        modalController.openProjectModal(id);
      });
    });
  };

  renderCardList(PORTFOLIO_DATA.projects, projectsContainer);
  renderCardList(PORTFOLIO_DATA.apps, appsContainer);
}

/* Render Education List on Desk Sheet */
function renderEducationDesk() {
  const container = document.getElementById('education-desk-list');
  if (!container) return;

  const html = PORTFOLIO_DATA.profile.education.map(edu => {
    return `
      <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #eeeeee;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <h3 style="font-size: 1.3rem; font-weight: 600; color: #111;">${edu.degree}</h3>
          <span style="font-size: 0.9rem; font-weight: 600; color: #1f5c47; background: #e8f5e9; padding: 4px 10px; border-radius: 20px;">${edu.year}</span>
        </div>
        <div style="font-size: 1rem; font-weight: 500; color: #444; margin-bottom: 8px;">${edu.institution}</div>
        <p style="font-size: 0.92rem; color: #666; line-height: 1.6;">${edu.description}</p>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/* Render Tools List on Desk Sheet */
function renderToolsDesk() {
  const container = document.getElementById('tools-desk-list');
  if (!container) return;

  const html = PORTFOLIO_DATA.profile.tools.map(tool => {
    return `
      <span style="font-size: 0.88rem; padding: 6px 14px; background: #f4f4f5; border-radius: 20px; color: #222; font-weight: 500;">
        ${tool}
      </span>
    `;
  }).join('');

  container.innerHTML = html;
}

/* Bind Actions & Modal Triggers */
function bindActions(modalController, router) {
  // Booking Form Modal
  const bookBtns = document.querySelectorAll('[data-action="book-project"]');
  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalController.openBookingModal();
    });
  });

  // Connect Modal
  const connectBtns = document.querySelectorAll('[data-action="connect"]');
  connectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalController.openConnectModal();
    });
  });

  // Handwritten Oval Buttons on Center Desk
  const btnProjects = document.getElementById('btn-hand-projects');
  if (btnProjects) {
    btnProjects.addEventListener('click', () => {
      router.switchTab('work');
    });
  }

  const btnConnect = document.getElementById('btn-hand-connect');
  if (btnConnect) {
    btnConnect.addEventListener('click', () => {
      modalController.openConnectModal();
    });
  }
}

/* Render Certifications Grid Cards */
function renderCertificationsGrid(modalController) {
  const container = document.getElementById('certifications-grid-container');
  if (!container) return;

  const certs = PORTFOLIO_DATA.certifications || [];

  const html = certs.map(cert => {
    const badgeHtml = cert.badge
      ? `<div style="position: absolute; top: 14px; right: 14px; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; z-index: 2;">${cert.badge}</div>`
      : '';

    // Use actual certificate image if available, otherwise fallback to gradient
    const previewContent = cert.image
      ? `<img src="${cert.image}" alt="${cert.title} Certificate" style="width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block;" />`
      : `<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center;">
            <div style="font-size: 2.6rem; margin-bottom: 8px;">${cert.icon}</div>
            <div style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; font-style: italic; line-height: 1.2;">${cert.title}</div>
          </div>`;

    return `
      <div class="cert-card-item" data-cert-id="${cert.id}">
        <div class="work-card-preview" style="background: ${cert.gradient}; position: relative; cursor: pointer; overflow: hidden;">
          ${badgeHtml}
          ${previewContent}
        </div>
        <div>
          <div class="work-card-title">${cert.title}</div>
          <div class="work-card-tags">${cert.issuer} • ${cert.date}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  // Bind click to open inline certification detail on green cutting mat
  const items = container.querySelectorAll('.cert-card-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-cert-id');
      const cert = certs.find(c => c.id === id);
      if (cert) openCertInlineDetail(cert);
    });
  });
}

/* Open Inline Certification Detail (Expands inside Green Cutting Mat Canvas) */
function openCertInlineDetail(cert) {
  const hero = document.getElementById('cert-detail-hero');
  const title = document.getElementById('cert-detail-title');
  const imgBox = document.getElementById('cert-detail-image-box');
  const img = document.getElementById('cert-detail-img');
  const issuer = document.getElementById('cert-detail-issuer');
  const platform = document.getElementById('cert-detail-platform');
  const date = document.getElementById('cert-detail-date');
  const scoreBox = document.getElementById('cert-detail-score-box');
  const score = document.getElementById('cert-detail-score');
  const breakdownCol = document.getElementById('cert-detail-breakdown-col');
  const breakdown = document.getElementById('cert-detail-breakdown');
  const creditsCol = document.getElementById('cert-detail-credits-col');
  const credits = document.getElementById('cert-detail-credits');
  const description = document.getElementById('cert-detail-description');
  const highlights = document.getElementById('cert-detail-highlights');

  if (hero) hero.style.background = cert.gradient;
  if (title) title.textContent = cert.title;

  if (cert.image) {
    if (img) img.src = cert.image;
    if (imgBox) imgBox.style.display = 'block';
  } else {
    if (imgBox) imgBox.style.display = 'none';
  }

  if (issuer) issuer.textContent = cert.issuer;
  if (platform) platform.textContent = cert.platform;
  if (date) date.textContent = cert.date;

  if (cert.score) {
    if (scoreBox) scoreBox.style.display = 'block';
    if (score) score.textContent = cert.score;

    if (cert.scoreDetails) {
      if (breakdown) breakdown.textContent = cert.scoreDetails;
      if (breakdownCol) breakdownCol.style.display = 'block';
    } else {
      if (breakdownCol) breakdownCol.style.display = 'none';
    }

    if (cert.credits) {
      if (credits) credits.textContent = cert.credits;
      if (creditsCol) creditsCol.style.display = 'block';
    } else {
      if (creditsCol) creditsCol.style.display = 'none';
    }
  } else {
    if (scoreBox) scoreBox.style.display = 'none';
  }

  if (description) description.textContent = cert.description;

  if (highlights) {
    const list = cert.highlights || [];
    highlights.innerHTML = list.map(h => `
      <div class="deliverable-tag">
        <span style="color: #2ecc71;">✓</span> ${h}
      </div>
    `).join('');
  }

  if (window.portfolioRouter) {
    window.portfolioRouter.switchTab('cert-detail');
  }
}
