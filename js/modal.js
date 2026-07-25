/* ==========================================================================
   Modal Controller Module — Case Studies, Connect Drawer & Work With Me Form
   ========================================================================== */

class ModalController {
  constructor() {
    this.projectModal = document.getElementById('project-modal');
    this.bookingModal = document.getElementById('booking-modal');
    this.connectModal = document.getElementById('connect-modal');
    this.activeModal = null;
  }

  init() {
    this.bindCloseButtons();
    this.bindBackdropClicks();
    this.bindEscKey();
    this.bindBookingForm();
  }

  bindCloseButtons() {
    const closeBtns = document.querySelectorAll('.modal-close-btn');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => this.closeActiveModal());
    });
  }

  bindBackdropClicks() {
    const overlays = document.querySelectorAll('.modal-overlay');
    overlays.forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.closeActiveModal();
        }
      });
    });
  }

  bindEscKey() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeActiveModal();
      }
    });
  }

  openModal(modalElement) {
    if (!modalElement) return;
    this.activeModal = modalElement;
    modalElement.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeActiveModal() {
    if (!this.activeModal) return;
    this.activeModal.classList.remove('active');
    this.activeModal = null;
    document.body.style.overflow = '';
  }

  // Populate & Expand Project Detail inline inside the green mat
  openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId) || PORTFOLIO_DATA.apps.find(p => p.id === projectId) || PORTFOLIO_DATA.projects[0];
    if (!project) return;

    this.populateInlineDetailData(project);

    if (window.portfolioRouter) {
      window.portfolioRouter.switchTab('project-detail');
    }
  }

  populateInlineDetailData(data) {
    const hero = document.getElementById('project-detail-hero');
    const category = document.getElementById('project-detail-category');
    const title = document.getElementById('project-detail-title');
    const role = document.getElementById('project-detail-role');
    const tools = document.getElementById('project-detail-tools');
    const year = document.getElementById('project-detail-year');
    const description = document.getElementById('project-detail-description');
    const usecase = document.getElementById('project-detail-usecase');
    const deliverables = document.getElementById('project-detail-deliverables');
    const githubBtn = document.getElementById('project-detail-github');
    const demoBtn = document.getElementById('project-detail-demo');

    if (hero) hero.style.background = data.gradient;
    if (category) category.textContent = data.categoryLabel;
    if (title) title.textContent = data.title;
    if (role) role.textContent = data.role || data.categoryLabel;
    if (tools) tools.textContent = data.tools || "JavaScript, TypeScript, Python";
    if (year) year.textContent = data.year || "2024";
    if (description) description.textContent = data.description;
    if (usecase) usecase.textContent = data.usecase || data.subtitle;

    // Action links
    if (githubBtn) {
      if (data.github) {
        githubBtn.href = data.github;
        githubBtn.style.display = 'inline-flex';
      } else {
        githubBtn.style.display = 'none';
      }
    }

    if (demoBtn) {
      if (data.demo) {
        demoBtn.href = data.demo;
        demoBtn.style.display = 'inline-flex';
      } else {
        demoBtn.style.display = 'none';
      }
    }

    // Deliverables list
    if (deliverables && data.deliverables) {
      deliverables.innerHTML = data.deliverables
        .map(item => `
          <div class="deliverable-tag">
            <span style="color: ${data.accentColor || '#2ecc71'}; font-weight: bold;">✦</span>
            <span>${item}</span>
          </div>
        `).join('');
    }
  }

  // Open Connect Profiles Modal
  openConnectModal() {
    this.openModal(this.connectModal);
  }

  // Open "Work With Me" Form Modal
  openBookingModal() {
    const form = document.getElementById('project-booking-form');
    const successState = document.getElementById('booking-success-state');
    if (form) form.style.display = 'flex';
    if (successState) successState.style.display = 'none';

    this.openModal(this.bookingModal);
  }

  bindBookingForm() {
    const form = document.getElementById('project-booking-form');
    const successState = document.getElementById('booking-success-state');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('input-name')?.value;
      const email = document.getElementById('input-email')?.value;
      const title = document.getElementById('input-title')?.value;

      if (!name || !email || !title) {
        alert('Please fill out your Name, Email, and Project Scope.');
        return;
      }

      form.style.display = 'none';
      if (successState) successState.style.display = 'flex';

      setTimeout(() => {
        form.reset();
      }, 500);
    });
  }
}

window.ModalController = ModalController;
