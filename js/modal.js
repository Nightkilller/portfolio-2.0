/* ==========================================================================
   Modal Controller Module — Case Studies & Book a Project Form Modal
   ========================================================================== */

class ModalController {
  constructor() {
    this.projectModal = document.getElementById('project-modal');
    this.bookingModal = document.getElementById('booking-modal');
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
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }

  closeActiveModal() {
    if (!this.activeModal) return;
    this.activeModal.classList.remove('active');
    this.activeModal = null;
    document.body.style.overflow = ''; // Unlock background scrolling
  }

  // Populate & Open Project Case Study Modal
  openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    // Populate elements inside project modal
    const modalHero = document.getElementById('project-modal-hero');
    const modalCategory = document.getElementById('project-modal-category');
    const modalTitle = document.getElementById('project-modal-title');
    const modalMetaRole = document.getElementById('project-modal-meta-role');
    const modalMetaTools = document.getElementById('project-modal-meta-tools');
    const modalMetaYear = document.getElementById('project-modal-meta-year');
    const modalDescription = document.getElementById('project-modal-description');
    const modalDeliverables = document.getElementById('project-modal-deliverables');

    if (modalHero) {
      modalHero.style.background = project.gradient;
    }
    if (modalCategory) modalCategory.textContent = project.categoryLabel;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalMetaRole) modalMetaRole.textContent = project.role;
    if (modalMetaTools) modalMetaTools.textContent = project.tools;
    if (modalMetaYear) modalMetaYear.textContent = project.year;
    if (modalDescription) modalDescription.textContent = project.description;

    // Render deliverables list
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

  // Open "Book a Project" Modal
  openBookingModal() {
    // Reset form state if needed
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

      // Collect form values
      const name = document.getElementById('input-name')?.value;
      const email = document.getElementById('input-email')?.value;
      const title = document.getElementById('input-title')?.value;

      if (!name || !email || !title) {
        alert('Please fill out your Name, Email, and Project Title.');
        return;
      }

      // Simulate smooth submission response
      form.style.display = 'none';
      if (successState) {
        successState.style.display = 'flex';
      }

      // Reset inputs after delay
      setTimeout(() => {
        form.reset();
      }, 500);
    });
  }
}

window.ModalController = ModalController;
