/* ==========================================================================
   Router Module — Tab Navigation & Section State
   ========================================================================== */

class PortfolioRouter {
  constructor() {
    this.currentTab = 'home';
  }

  init() {
    this.bindTabNavigation();
  }

  bindTabNavigation() {
    const tabButtons = document.querySelectorAll('[data-tab-target]');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = btn.getAttribute('data-tab-target');
        this.switchTab(targetTab);
      });
    });
  }

  switchTab(tabId) {
    if (!tabId) return;
    this.currentTab = tabId;

    // Update Nav Tabs Active State
    const tabButtons = document.querySelectorAll('[data-tab-target]');
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-tab-target') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Views on the Mat
    const homeView = document.getElementById('mat-work-view');
    const workGridView = document.getElementById('mat-work-grid-view');
    const aboutSection = document.getElementById('mat-about-view');
    const educationSection = document.getElementById('mat-education-view');
    const polaroids = document.getElementById('polaroids-container');

    // Hide all view sections first
    if (homeView) homeView.style.display = 'none';
    if (workGridView) workGridView.classList.remove('active');
    if (aboutSection) aboutSection.classList.remove('active');
    if (educationSection) educationSection.classList.remove('active');
    if (polaroids) polaroids.style.display = 'none';

    if (tabId === 'home') {
      if (homeView) homeView.style.display = 'flex';
      if (polaroids) polaroids.style.display = 'block';
    } else if (tabId === 'work') {
      if (workGridView) workGridView.classList.add('active');
    } else if (tabId === 'education') {
      if (educationSection) educationSection.classList.add('active');
    } else if (tabId === 'about') {
      if (aboutSection) aboutSection.classList.add('active');
    } else if (tabId === 'work-with-me') {
      // Trigger Work With Me modal directly
      if (window.modalController) {
        window.modalController.openBookingModal();
      }
    }
  }
}

window.PortfolioRouter = PortfolioRouter;
