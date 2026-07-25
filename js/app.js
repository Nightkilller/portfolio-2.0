/* ==========================================================================
   App Orchestrator — Cutting Mat Rendering & Interactive Elements
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const router = new PortfolioRouter();
  router.init();

  const modalController = new ModalController();
  modalController.init();

  window.modalController = modalController;

  // Render Desk Elements
  renderAppLogoCards(modalController);
  renderWorkGrid(modalController);
  renderEducationDesk();
  renderToolsDesk();
  bindActions(modalController, router);
});

/* Render Clean App Logo Cards (Figma, Photoshop, Xcode, VS Code) — Pure App Logos, No Cutout Frame */
function renderAppLogoCards(modalController) {
  const container = document.getElementById('polaroids-container');
  if (!container) return;

  const positions = ['logo-pos-1', 'logo-pos-2', 'logo-pos-3', 'logo-pos-4'];
  const deskItems = PORTFOLIO_DATA.deskPolaroids || [];

  const html = deskItems.map((item, index) => {
    const posClass = positions[index % positions.length];

    return `
      <div class="app-logo-card ${posClass}" data-logo-id="${item.id}" style="--glow-color: ${item.glowColor || 'rgba(255,255,255,0.3)'};">
        <div class="app-logo-squircle">
          ${item.svgIcon}
        </div>
        <div class="app-logo-info">
          <div class="app-logo-title">${item.title}</div>
          <div class="app-logo-subtitle">${item.categoryLabel}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  // Bind click handlers to open drawer
  const cards = container.querySelectorAll('.app-logo-card');
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const item = deskItems[index];
      if (item) {
        modalController.openDeskPolaroidModal(item);
      }
    });
  });
}

/* Render Work Showcase Grid View (Matching Image 2 /work layout) */
function renderWorkGrid(modalController) {
  const container = document.getElementById('work-grid-container');
  if (!container) return;

  const html = PORTFOLIO_DATA.projects.map(project => {
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

  container.innerHTML = html;

  const items = container.querySelectorAll('.work-card-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-project-id');
      modalController.openProjectModal(id);
    });
  });
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
        <div style="font-size: 1rem; font-weight: 500; color: #444; margin-bottom: 8px;">🎓 ${edu.institution}</div>
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
