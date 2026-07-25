/* ==========================================================================
   App Orchestrator — Cutting Mat Rendering & Interactive Elements
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const router = new PortfolioRouter();
  router.init();

  const modalController = new ModalController();
  modalController.init();

  // Render Cutting Mat Visual Elements
  renderPolaroidCards(modalController);
  renderServicesDesk();
  renderToolsDesk();
  bindActions(modalController, router);
});

/* Render Polaroid Cards Scattered Around the Cutting Mat */
function renderPolaroidCards(modalController) {
  const container = document.getElementById('polaroids-container');
  if (!container) return;

  const positions = ['polaroid-pos-1', 'polaroid-pos-2', 'polaroid-pos-3', 'polaroid-pos-4'];

  const html = PORTFOLIO_DATA.projects.map((project, index) => {
    const posClass = positions[index % positions.length];
    const isRightPin = index % 2 === 0;
    const pinClass = isRightPin ? 'push-pin-top-right' : 'push-pin-top-left';

    return `
      <div class="polaroid-card ${posClass}" data-project-id="${project.id}">
        <!-- 3D Blue Push Pin -->
        <svg class="push-pin ${pinClass}" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" fill="#1e88e5"/>
          <circle cx="10" cy="10" r="3" fill="#64b5f6" opacity="0.8"/>
        </svg>

        <div class="polaroid-frame">
          <div class="polaroid-art" style="background: ${project.gradient};">
            <div class="polaroid-art-title">${project.title}</div>
            <div class="polaroid-art-tag">${project.categoryLabel}</div>
          </div>
        </div>
        <div class="polaroid-caption">${project.title}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  // Bind click handlers to open case study drawer modal
  const cards = container.querySelectorAll('.polaroid-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project-id');
      modalController.openProjectModal(id);
    });
  });
}

/* Render Services Spec List on Desk */
function renderServicesDesk() {
  const container = document.getElementById('services-desk-grid');
  if (!container) return;

  const html = PORTFOLIO_DATA.services.map(service => {
    return `
      <div style="margin-bottom: 28px; padding-bottom: 20px; border-bottom: 1px solid #eeeeee;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <h3 style="font-size: 1.3rem; font-weight: 600; color: #111;">${service.number}. ${service.title}</h3>
          <span style="font-size: 1.4rem;">${service.icon}</span>
        </div>
        <p style="font-size: 0.95rem; color: #555; line-height: 1.6; margin-bottom: 12px;">${service.description}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${service.features.map(f => `<span style="font-size: 0.8rem; padding: 4px 10px; background: #f0f4f2; border-radius: 4px; color: #1f5c47; font-weight: 500;">✓ ${f}</span>`).join('')}
        </div>
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
  const bookBtns = document.querySelectorAll('[data-action="book-project"]');
  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalController.openBookingModal();
    });
  });

  const btnProjects = document.getElementById('btn-hand-projects');
  if (btnProjects) {
    btnProjects.addEventListener('click', () => {
      // Filter or open project modal
      const firstProject = PORTFOLIO_DATA.projects[0];
      if (firstProject) modalController.openProjectModal(firstProject.id);
    });
  }

  const btnFliers = document.getElementById('btn-hand-fliers');
  if (btnFliers) {
    btnFliers.addEventListener('click', () => {
      const flierProject = PORTFOLIO_DATA.projects.find(p => p.category === 'fliers') || PORTFOLIO_DATA.projects[3];
      if (flierProject) modalController.openProjectModal(flierProject.id);
    });
  }
}
