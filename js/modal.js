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

  // Populate & Open Project Case Study Drawer Modal
  openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId) || PORTFOLIO_DATA.projects[0];
    if (!project) return;

    const modalHero = document.getElementById('project-modal-hero');
    const modalCategory = document.getElementById('project-modal-category');
    const modalTitle = document.getElementById('project-modal-title');
    const modalMetaRole = document.getElementById('project-modal-meta-role');
    const modalMetaTools = document.getElementById('project-modal-meta-tools');
    const modalMetaYear = document.getElementById('project-modal-meta-year');
    const modalDescription = document.getElementById('project-modal-description');
    const modalUsecase = document.getElementById('project-modal-usecase');
    const modalDeliverables = document.getElementById('project-modal-deliverables');
    const githubBtn = document.getElementById('project-github-link');
    const demoBtn = document.getElementById('project-demo-link');

    if (modalHero) modalHero.style.background = project.gradient;
    if (modalCategory) modalCategory.textContent = project.categoryLabel;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalMetaRole) modalMetaRole.textContent = project.role;
    if (modalMetaTools) modalMetaTools.textContent = project.tools;
    if (modalMetaYear) modalMetaYear.textContent = project.year;
    if (modalDescription) modalDescription.textContent = project.description;
    if (modalUsecase) modalUsecase.textContent = project.usecase || project.subtitle;

    // GitHub & Demo links
    if (githubBtn) {
      if (project.github) {
        githubBtn.href = project.github;
        githubBtn.style.display = 'inline-flex';
      } else {
        githubBtn.style.display = 'none';
      }
    }

    if (demoBtn) {
      if (project.demo) {
        demoBtn.href = project.demo;
        demoBtn.style.display = 'inline-flex';
      } else {
        demoBtn.style.display = 'none';
      }
    }

    // Render deliverables
    if (modalDeliverables) {
      modalDeliverables.innerHTML = project.deliverables
        .map(item => `
          <div class="deliverable-tag">
            <span style="color: ${project.accentColor}; font-weight: bold;">✦</span>
            <span>${item}</span>
          </div>
        `).join('');
    }

    this.openModal(this.projectModal);
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
