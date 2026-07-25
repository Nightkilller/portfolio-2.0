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
    const projectDetailView = document.getElementById('mat-project-detail-view');
    const certDetailView = document.getElementById('mat-cert-detail-view');
    const connectView = document.getElementById('mat-connect-view');
    const aboutSection = document.getElementById('mat-about-view');
    const educationSection = document.getElementById('mat-education-view');
    const workWithMeSection = document.getElementById('mat-work-with-me-view');
    const certificationsView = document.getElementById('mat-certifications-view');
    const polaroids = document.getElementById('polaroids-container');

    // Hide all view sections first
    if (homeView) homeView.style.display = 'none';
    if (workGridView) workGridView.classList.remove('active');
    if (projectDetailView) projectDetailView.classList.remove('active');
    if (certDetailView) certDetailView.classList.remove('active');
    if (connectView) connectView.classList.remove('active');
    if (aboutSection) aboutSection.classList.remove('active');
    if (educationSection) educationSection.classList.remove('active');
    if (workWithMeSection) workWithMeSection.classList.remove('active');
    if (certificationsView) certificationsView.classList.remove('active');
    if (polaroids) polaroids.style.display = 'none';

    if (tabId === 'home') {
      if (homeView) homeView.style.display = 'flex';
      if (polaroids) polaroids.style.display = 'block';
    } else if (tabId === 'work') {
      if (workGridView) workGridView.classList.add('active');
    } else if (tabId === 'project-detail') {
      if (projectDetailView) projectDetailView.classList.add('active');
    } else if (tabId === 'cert-detail') {
      if (certDetailView) certDetailView.classList.add('active');
    } else if (tabId === 'connect') {
      if (connectView) connectView.classList.add('active');
    } else if (tabId === 'education') {
      if (educationSection) educationSection.classList.add('active');
    } else if (tabId === 'about') {
      if (aboutSection) aboutSection.classList.add('active');
    } else if (tabId === 'work-with-me') {
      if (workWithMeSection) workWithMeSection.classList.add('active');
    } else if (tabId === 'certifications') {
      if (certificationsView) certificationsView.classList.add('active');
    }

    // Scroll to top of mat canvas on view switch
    const matCanvas = document.querySelector('.cutting-mat-canvas');
    if (matCanvas) {
      matCanvas.scrollTop = 0;
    }
  }
}

window.PortfolioRouter = PortfolioRouter;
