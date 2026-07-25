/* ==========================================================================
   Router Module — Tab Navigation & Section State
   ========================================================================== */

class PortfolioRouter {
  constructor() {
    this.currentTab = 'work';
  }

  init() {
    this.bindTabNavigation();
  }

  bindTabNavigation() {
    const tabButtons = document.querySelectorAll('[data-tab-target]');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
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

    // Toggle Section Views on the Mat
    const workHero = document.getElementById('mat-work-view');
    const aboutSection = document.getElementById('mat-about-view');
    const servicesSection = document.getElementById('mat-services-view');

    if (tabId === 'work') {
      if (workHero) workHero.style.display = 'flex';
      if (aboutSection) aboutSection.classList.remove('active');
      if (servicesSection) servicesSection.classList.remove('active');
    } else if (tabId === 'about') {
      if (workHero) workHero.style.display = 'none';
      if (aboutSection) aboutSection.classList.add('active');
      if (servicesSection) servicesSection.classList.remove('active');
    } else if (tabId === 'services') {
      if (workHero) workHero.style.display = 'none';
      if (aboutSection) aboutSection.classList.remove('active');
      if (servicesSection) servicesSection.classList.add('active');
    }
  }
}

window.PortfolioRouter = PortfolioRouter;
