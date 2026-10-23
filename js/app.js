/**
 * Logic Interaktif Web Portofolio IT
 * Mengatur Theme Toggle, Filter & Search Proyek, Lightbox Sertifikat,
 * Modal Catatan Belajar, dan Form Kontak.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initNavigationSpy();
  renderProfileAndStats();
  renderAboutSection();
  renderSkills();
  initProjectsManager();
  renderCertificates();
  renderBlogPosts();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. THEME TOGGLE (DARK / LIGHT MODE DENGAN LOCALSTORAGE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('porto_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Default to stored theme, or user system preference, or light
  const initialTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan`);
    });
  }
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('porto_theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('porto_theme', 'light');
    updateThemeIcon('light');
  }
}

function updateThemeIcon(theme) {
  const iconWrap = document.getElementById('theme-icon-wrap');
  if (!iconWrap) return;

  if (theme === 'dark') {
    // Show Sun icon (to switch to light)
    iconWrap.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    iconWrap.parentElement.setAttribute('title', 'Ubah ke Mode Terang');
  } else {
    // Show Moon icon (to switch to dark)
    iconWrap.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    iconWrap.parentElement.setAttribute('title', 'Ubah ke Mode Gelap');
  }
}

/* ==========================================================================
   2. MOBILE DRAWER NAVIGATION MENU
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.innerHTML = isOpen ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      ` : `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    });

    // Close drawer when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        menuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      });
    });
  }
}

/* ==========================================================================
   3. SCROLL SPY FOR ACTIVE NAVIGATION
   ========================================================================== */
function initNavigationSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });

    mobileLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. RENDER PROFILE & STATS
   ========================================================================== */
function renderProfileAndStats() {
  const p = portfolioData.profile;
  
  // Hero texts
  const heroNameEl = document.getElementById('hero-name');
  const heroRoleEl = document.getElementById('hero-role');
  const heroBioEl = document.getElementById('hero-bio');
  const heroStatusEl = document.getElementById('hero-status-text');

  if (heroNameEl) heroNameEl.textContent = p.name;
  if (heroRoleEl) heroRoleEl.textContent = p.role;
  if (heroBioEl) heroBioEl.textContent = p.bio;
  if (heroStatusEl) heroStatusEl.textContent = p.status;

  // Stats bar
  const statHours = document.getElementById('stat-hours');
  const statProjects = document.getElementById('stat-projects');
  const statCerts = document.getElementById('stat-certs');
  const statNotes = document.getElementById('stat-notes');

  if (statHours) statHours.textContent = `${p.stats.hoursLearned}+`;
  if (statProjects) statProjects.textContent = `${portfolioData.projects.length}+`;
  if (statCerts) statCerts.textContent = `${portfolioData.certificates.length}`;
  if (statNotes) statNotes.textContent = `${portfolioData.blogPosts.length}+`;
}

/* ==========================================================================
   5. RENDER ABOUT SECTION (STORY, WHY IT, LEARNING TIMELINE)
   ========================================================================== */
function renderAboutSection() {
  const about = portfolioData.profile.about;

  // Story
  const storyEl = document.getElementById('about-story-text');
  if (storyEl) storyEl.textContent = about.story;

  // Why IT Cards
  const whyItContainer = document.getElementById('why-it-container');
  if (whyItContainer) {
    whyItContainer.innerHTML = about.whyIT.map(item => `
      <div class="why-it-item">
        <div class="why-it-icon">
          ${getLucideIcon(item.icon)}
        </div>
        <div>
          <h4>${escapeHTML(item.title)}</h4>
          <p>${escapeHTML(item.desc)}</p>
        </div>
      </div>
    `).join('');
  }

  // Learning Journey Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = about.journey.map(step => {
      const statusText = step.status === 'completed' ? 'Selesai' : (step.status === 'in-progress' ? 'Sedang Dipelajari' : 'Rencana');
      return `
        <div class="timeline-item">
          <div class="timeline-dot ${step.status}"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-phase">${escapeHTML(step.phase)}</span>
              <span class="timeline-period">• ${escapeHTML(step.period)}</span>
              <span class="badge ${step.status === 'completed' ? 'badge-security' : (step.status === 'in-progress' ? 'badge-devops' : 'badge-script')}">
                ${statusText}
              </span>
            </div>
            <h4 class="timeline-item-title">${escapeHTML(step.title)}</h4>
            <p class="timeline-desc">${escapeHTML(step.description)}</p>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ==========================================================================
   6. RENDER SKILLS SECTION
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(skill => {
    let levelBadgeClass = 'level-dasar';
    if (skill.level === 'Menengah') levelBadgeClass = 'level-menengah';
    if (skill.level === 'Sedang Dipelajari') levelBadgeClass = 'level-sedang-dipelajari';

    return `
      <div class="skill-card" data-category="${skill.category}">
        <div class="skill-card-top">
          <div class="skill-info">
            <div class="skill-icon-wrap">
              ${getLucideIcon(skill.icon)}
            </div>
            <h4 class="skill-name">${escapeHTML(skill.name)}</h4>
          </div>
          <span class="skill-level-badge ${levelBadgeClass}">${escapeHTML(skill.level)}</span>
        </div>
        <p class="skill-desc">${escapeHTML(skill.desc)}</p>
        <div class="skill-progress-wrap">
          <div class="skill-progress-bar">
            <div class="skill-progress-fill" style="width: ${skill.percent}%;"></div>
          </div>
          <span class="skill-percent">${skill.percent}%</span>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   7. PROJECTS MANAGER (SEARCH, FILTER KATEGORI, SORTING & MODAL)
   ========================================================================== */
function initProjectsManager() {
  let currentCategory = 'all';
  let searchQuery = '';
  let sortBy = 'newest';

  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');
  const sortSelect = document.getElementById('project-sort');

  function update() {
    let filtered = [...portfolioData.projects];

    // Filter by Category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase().includes(currentCategory.toLowerCase()));
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some(tag => tag.toLowerCase().includes(q))
        );
      });
    }

    // Sorting
    if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderProjects(filtered);
    updateProjectCounter(filtered.length);
  }

  // Filter tab clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      update();
    });
  });

  // Search input change
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      update();
    });
  }

  // Sort dropdown change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      update();
    });
  }

  // Initial render
  update();
}

function updateProjectCounter(count) {
  const counterEl = document.getElementById('projects-counter');
  if (counterEl) {
    counterEl.textContent = `Menampilkan ${count} dari ${portfolioData.projects.length} proyek`;
  }
}

function renderProjects(projectsList) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (projectsList.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
        <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--text-main);">Tidak ada proyek ditemukan</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = projectsList.map(proj => {
    const badgeClass = `badge-${proj.badgeColor}`;
    const formattedDate = formatDateIndo(proj.date);

    return `
      <article class="project-card" data-id="${proj.id}">
        <div class="project-image-box">
          <img src="${proj.image}" alt="${escapeHTML(proj.title)}" loading="lazy">
        </div>
        <div class="project-card-body">
          <div class="project-card-header">
            <span class="badge ${badgeClass}">${escapeHTML(proj.category)}</span>
            <span class="project-date">${formattedDate}</span>
          </div>
          <h3 class="project-title">${escapeHTML(proj.title)}</h3>
          <p class="project-summary">${escapeHTML(proj.summary)}</p>
          <div class="project-tags">
            ${proj.tags.map(tag => `<span class="tech-tag">${escapeHTML(tag)}</span>`).join('')}
          </div>
          <div class="project-card-actions">
            <button class="btn btn-primary btn-sm btn-project-detail" data-id="${proj.id}" style="flex: 1;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Detail Sistem
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" title="Lihat Kode di GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Kode
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach event listener to Detail buttons
  document.querySelectorAll('.btn-project-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openProjectModal(id);
    });
  });
}

function openProjectModal(projectId) {
  const proj = portfolioData.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-modal');
  const titleEl = document.getElementById('modal-project-title');
  const bodyEl = document.getElementById('modal-project-body');

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = proj.title;
  bodyEl.innerHTML = `
    <div style="margin-bottom: 1.5rem; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-color);">
      <img src="${proj.image}" alt="${escapeHTML(proj.title)}" style="width: 100%; height: auto;">
    </div>
    
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem;">
      <span class="badge badge-${proj.badgeColor}">${escapeHTML(proj.category)}</span>
      <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">${formatDateIndo(proj.date)}</span>
    </div>

    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Tujuan & Deskripsi Proyek</h4>
    <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${escapeHTML(proj.fullDescription)}</p>

    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Diagram Alur & Arsitektur</h4>
    <div style="background: var(--bg-primary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.85rem; color: var(--color-accent); margin-bottom: 1.5rem; overflow-x: auto;">
      ${escapeHTML(proj.architecture)}
    </div>

    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Poin Keberhasilan (Key Results)</h4>
    <ul style="margin-left: 1.5rem; margin-bottom: 1.75rem; color: var(--text-secondary); line-height: 1.6;">
      ${proj.highlights.map(h => `<li style="margin-bottom: 0.35rem;">${escapeHTML(h)}</li>`).join('')}
    </ul>

    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Teknologi yang Digunakan</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
      ${proj.tags.map(t => `<span class="tech-tag" style="font-size: 0.82rem; padding: 0.3rem 0.7rem;">${escapeHTML(t)}</span>`).join('')}
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        Buka Repositori GitHub
      </a>
      <button class="btn btn-primary" onclick="closeModal('project-modal')">Tutup Jendela</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   8. RENDER CERTIFICATES & LIGHTBOX ZOOM MODAL
   ========================================================================== */
function renderCertificates() {
  const container = document.getElementById('certificates-grid');
  if (!container) return;

  container.innerHTML = portfolioData.certificates.map(cert => `
    <div class="certificate-card" onclick="openCertificateModal('${cert.id}')">
      <div class="certificate-preview-box">
        <img src="${cert.image}" alt="${escapeHTML(cert.title)}" loading="lazy">
        <div class="cert-zoom-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <span>Klik untuk Memperbesar</span>
        </div>
      </div>
      <div class="certificate-card-body">
        <div class="cert-issuer-year">
          <span>${escapeHTML(cert.issuer)}</span>
          <span>${escapeHTML(cert.year)}</span>
        </div>
        <h4 class="cert-title">${escapeHTML(cert.title)}</h4>
        <div class="cert-credential-id">ID: ${escapeHTML(cert.credentialId)}</div>
      </div>
    </div>
  `).join('');
}

function openCertificateModal(certId) {
  const cert = portfolioData.certificates.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('cert-modal');
  const titleEl = document.getElementById('modal-cert-title');
  const bodyEl = document.getElementById('modal-cert-body');

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = cert.title;
  bodyEl.innerHTML = `
    <div class="lightbox-image-wrap">
      <img src="${cert.image}" alt="${escapeHTML(cert.title)}">
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div>
        <div style="font-weight: 700; color: var(--text-main); font-size: 1.1rem;">${escapeHTML(cert.title)}</div>
        <div style="color: var(--text-secondary); font-size: 0.9rem;">Penerbit: ${escapeHTML(cert.issuer)} (${cert.year})</div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Credential ID: ${escapeHTML(cert.credentialId)}</div>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-outline btn-sm" onclick="copyToClipboard('${cert.credentialId}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          Salin ID
        </button>
        <button class="btn btn-primary btn-sm" onclick="closeModal('cert-modal')">Tutup</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   9. RENDER BLOG POSTS & ARTICLE MODAL READER
   ========================================================================== */
function renderBlogPosts() {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  container.innerHTML = portfolioData.blogPosts.map(post => `
    <article class="blog-card" onclick="openBlogModal('${post.id}')">
      <div class="blog-card-meta">
        <span class="badge badge-devops">${escapeHTML(post.category)}</span>
        <span class="blog-read-time">${escapeHTML(post.readTime)}</span>
      </div>
      <h3 class="blog-title">${escapeHTML(post.title)}</h3>
      <p class="blog-summary">${escapeHTML(post.summary)}</p>
      <div class="blog-card-footer">
        <span>Baca Ringkasan Lengkap</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </article>
  `).join('');
}

function openBlogModal(blogId) {
  const post = portfolioData.blogPosts.find(b => b.id === blogId);
  if (!post) return;

  const modal = document.getElementById('blog-modal');
  const titleEl = document.getElementById('modal-blog-title');
  const bodyEl = document.getElementById('modal-blog-body');

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = post.title;

  // Simple Markdown Parser for the article content
  const renderedHTML = parseSimpleMarkdown(post.content);

  bodyEl.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
      <div style="display: flex; gap: 0.75rem; align-items: center;">
        <span class="badge badge-devops">${escapeHTML(post.category)}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">${formatDateIndo(post.date)}</span>
      </div>
      <span style="font-size: 0.85rem; color: var(--text-muted);">${escapeHTML(post.readTime)}</span>
    </div>
    
    <div class="article-content">
      ${renderedHTML}
    </div>

    <div style="margin-top: 2.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.85rem; color: var(--text-muted);">Ditulis sebagai dokumentasi lab mandiri.</span>
      <button class="btn btn-secondary btn-sm" onclick="closeModal('blog-modal')">Tutup Bacaan</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   10. MODAL UTILITIES (CLOSE, BACKDROP CLICK, ESCAPE KEY)
   ========================================================================== */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Global modal dismiss on ESC key and background click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

/* ==========================================================================
   11. CONTACT FORM HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Harap lengkapi semua bidang yang wajib diisi.');
      return;
    }

    // Submit Simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg style="animation: spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
      Mengirim Pesan...
    `;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showToast('Pesan berhasil terkirim! Saya akan membalas maksimal 3 hari kerja.');
    }, 1200);
  });
}

/* ==========================================================================
   12. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast toast-success';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${escapeHTML(message)}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Tersalin ke clipboard: ${text}`);
  }).catch(() => {
    showToast('Gagal menyalin teks');
  });
}

/* ==========================================================================
   13. BACK TO TOP SCROLL
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ==========================================================================
   14. HELPER UTILITIES (ICONS, DATES, ESCAPE, SIMPLE MARKDOWN)
   ========================================================================== */
function formatDateIndo(dateStr) {
  try {
    const d = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch (e) {
    return dateStr;
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function parseSimpleMarkdown(md) {
  if (!md) return '';
  let html = md.trim();

  // Fenced Code Blocks ```bash ... ```
  html = html.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang}">${escapeHTML(code.trim())}</code></pre>`;
  });

  // Inline code `code`
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    return `<code>${escapeHTML(code)}</code>`;
  });

  // Headers ### and ####
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Unordered list items - item
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Paragraphs
  const paragraphs = html.split(/\n\s*\n/);
  html = paragraphs.map(p => {
    p = p.trim();
    if (p.startsWith('<h') || p.startsWith('<pre') || p.startsWith('<ul') || p.startsWith('<ol')) {
      return p;
    }
    return `<p>${p}</p>`;
  }).join('\n');

  return html;
}

function getLucideIcon(name) {
  const iconMap = {
    'server': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    'terminal': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    'shield': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    'shield-check': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    'cpu': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    'code': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    'git-branch': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    'layout': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    'network': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="16" y="16" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><line x1="12" y1="8" x2="12" y2="12"></line></svg>`,
    'box': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  };

  return iconMap[name] || iconMap['terminal'];
}

