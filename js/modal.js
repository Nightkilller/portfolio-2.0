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
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId) || PORTFOLIO_DATA.apps.find(p => p.id === projectId) || PORTFOLIO_DATA.projects[0];
    if (!project) return;

    this.populateModalData(project);
    this.openModal(this.projectModal);
  }

  // Open Desk Polaroid Modal (GitHub, Xcode, LinkedIn, YouTube)
  openDeskPolaroidModal(deskItem) {
    if (!deskItem) return;
    this.populateModalData(deskItem);
    this.openModal(this.projectModal);
  }

  populateModalData(data) {
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

    if (modalHero) modalHero.style.background = data.gradient;
    if (modalCategory) modalCategory.textContent = data.categoryLabel;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalMetaRole) modalMetaRole.textContent = data.role || data.categoryLabel;
    if (modalMetaTools) modalMetaTools.textContent = data.tools || "JavaScript, TypeScript, Python";
    if (modalMetaYear) modalMetaYear.textContent = data.year || "2024";
    if (modalDescription) modalDescription.textContent = data.description;
    if (modalUsecase) modalUsecase.textContent = data.usecase || data.subtitle;

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
    if (modalDeliverables && data.deliverables) {
      modalDeliverables.innerHTML = data.deliverables
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
