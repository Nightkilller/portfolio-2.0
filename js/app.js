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

  // Render Desk Elements
  renderPureDeskLogos(modalController);
  renderWorkGrid(modalController);
  renderEducationDesk();
  renderToolsDesk();
  renderCertificationsGrid(modalController);
  bindActions(modalController, router);
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
      return `
        <div class="work-card-item" data-project-id="${project.id}">
          <div class="work-card-preview" style="background: ${project.gradient};">
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center;">
              <div style="font-family: var(--font-serif); font-size: 2.4rem; color: #fff; font-style: italic;">${project.title}</div>
              <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.8); margin-top: 6px;">${project.categoryLabel}</div>
            </div>
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
      ? `<div style="position: absolute; top: 14px; right: 14px; background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.08em;">${cert.badge}</div>`
      : '';

    const scoreHtml = cert.score
      ? `<div style="font-size: 0.85rem; color: rgba(255,255,255,0.9); margin-top: 6px; font-weight: 600;">Score: ${cert.score}</div>`
      : '';

    return `
      <div class="cert-card-item" data-cert-id="${cert.id}">
        <div class="work-card-preview" style="background: ${cert.gradient}; position: relative; cursor: pointer;">
          ${badgeHtml}
          <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center;">
            <div style="font-size: 2.6rem; margin-bottom: 8px;">${cert.icon}</div>
            <div style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; font-style: italic; line-height: 1.2;">${cert.title}</div>
            ${scoreHtml}
          </div>
        </div>
        <div>
          <div class="work-card-title">${cert.title}</div>
          <div class="work-card-tags">${cert.issuer} • ${cert.date}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  // Bind click to open certification detail modal
  const items = container.querySelectorAll('.cert-card-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-cert-id');
      const cert = certs.find(c => c.id === id);
      if (cert) openCertDetailModal(cert);
    });
  });
}

/* Open Certification Detail Modal */
function openCertDetailModal(cert) {
  // Remove any existing cert modal
  const existing = document.getElementById('cert-detail-modal');
  if (existing) existing.remove();

  const highlightsHtml = (cert.highlights || []).map(h => {
    return `<div style="display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: #f8f9fa; border: 1px solid #eeeeee; border-radius: 6px; font-size: 0.88rem; color: #333;">
      <span style="color: #2ecc71;">✓</span> ${h}
    </div>`;
  }).join('');

  const scoreSection = cert.score
    ? `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; padding: 18px 22px; background: #f8f9fa; border: 1px solid #eee; border-radius: 10px; margin-bottom: 24px;">
        <div>
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; font-weight: 600;">Score</div>
          <div style="font-size: 1.4rem; font-weight: 700; color: #1f5c47;">${cert.score}</div>
        </div>
        ${cert.scoreDetails ? `<div>
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; font-weight: 600;">Breakdown</div>
          <div style="font-size: 0.92rem; font-weight: 500; color: #333;">${cert.scoreDetails}</div>
        </div>` : ''}
        ${cert.credits ? `<div>
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; font-weight: 600;">Credits</div>
          <div style="font-size: 0.92rem; font-weight: 500; color: #333;">${cert.credits}</div>
        </div>` : ''}
       </div>`
    : '';

  const metaGrid = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; padding: 18px 22px; background: #f8f9fa; border: 1px solid #eee; border-radius: 10px; margin-bottom: 24px;">
      <div>
        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; font-weight: 600;">Issued By</div>
        <div style="font-size: 0.95rem; font-weight: 600; color: #111;">${cert.issuer}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; font-weight: 600;">Platform</div>
        <div style="font-size: 0.95rem; font-weight: 600; color: #111;">${cert.platform}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; font-weight: 600;">Date</div>
        <div style="font-size: 0.95rem; font-weight: 600; color: #111;">${cert.date}</div>
      </div>
    </div>
  `;

  const modalHtml = `
    <div id="cert-detail-modal" class="modal-overlay active" style="z-index: 1001;">
      <div class="modal-container" style="max-width: 720px;">
        <button class="modal-close-btn" id="cert-modal-close-btn">✕</button>
        
        <div style="background: ${cert.gradient}; min-height: 180px; display: flex; align-items: flex-end; padding: 28px 32px; color: #fff; position: relative;">
          ${cert.badge ? `<div style="position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); padding: 4px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">${cert.badge}</div>` : ''}
          <div>
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.9; margin-bottom: 6px;">CERTIFICATION</div>
            <h2 style="font-family: var(--font-serif); font-size: 2.4rem; line-height: 1.1;">${cert.title}</h2>
          </div>
        </div>
        
        <div style="padding: 32px;">
          ${metaGrid}
          ${scoreSection}
          
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: #111; margin-bottom: 12px;">About This Certification</h3>
            <p style="font-size: 1rem; line-height: 1.75; color: #444;">${cert.description}</p>
          </div>
          
          ${highlightsHtml ? `
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: #111; margin-bottom: 14px;">Key Skills & Topics</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px;">
              ${highlightsHtml}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Bind close events
  const modal = document.getElementById('cert-detail-modal');
  const closeBtn = document.getElementById('cert-modal-close-btn');

  closeBtn.addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape' && document.getElementById('cert-detail-modal')) {
      modal.remove();
      document.removeEventListener('keydown', handler);
    }
  });
}
