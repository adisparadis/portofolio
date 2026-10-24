/**
 * =========================================================================
 * LOGIKA INTERAKTIF PORTOFOLIO IT
 * Filter proyek asimetris, pencarian real-time, tema gelap/terang, & modal.
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  renderProfile();
  renderWhyIT();
  renderTimeline();
  renderSkills();
  initProjectsManager();
  initContactForm();
});

/* 1. TEMA TERANG / GELAP */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const stored = localStorage.getItem('porto_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = stored ? stored : (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
}

function applyTheme(theme) {
  const iconSpan = document.getElementById('theme-icon');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('porto_theme', 'dark');
    if (iconSpan) iconSpan.innerHTML = '☀';
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('porto_theme', 'light');
    if (iconSpan) iconSpan.innerHTML = '☽';
  }
}

/* 2. MENU MOBILE DRAWER */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (btn && drawer) {
    btn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      btn.innerHTML = drawer.classList.contains('open') ? '✕' : '☰';
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        btn.innerHTML = '☰';
      });
    });
  }
}

/* 3. PROFIL & HERO TELEMETRI */
function renderProfile() {
  const p = portfolioData.profile;
  const setTxt = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };

  setTxt('hero-name', p.name);
  setTxt('hero-role', `> ${p.role}`);
  setTxt('hero-statement', p.statement);
  setTxt('hero-bio', p.bio);
  setTxt('telemetry-status-text', p.telemetryStatus);
  setTxt('contact-sla-text', p.slaNote);
  setTxt('footer-sla-text', p.slaNote);
  setTxt('stat-projects-count', `${portfolioData.projects.length} Lab`);
}

/* 4. ALASAN SUKA BIDANG IT */
function renderWhyIT() {
  const container = document.getElementById('why-it-container');
  if (!container) return;

  container.innerHTML = portfolioData.profile.whyIT.map((item) => `
    <div class="why-card">
      <div class="why-num">// PILAR ${item.number}</div>
      <h3 class="why-title">${escapeHTML(item.title)}</h3>
      <p class="why-desc">${escapeHTML(item.desc)}</p>
    </div>
  `).join('');
}

/* 5. ROADMAP BELAJAR BERTAHAP */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = portfolioData.timeline.map((step) => {
    let badgeClass = 'badge-devops';
    let label = 'SELESAI';
    if (step.status === 'sedang-berjalan') {
      badgeClass = 'badge-script';
      label = 'FOKUS SAAT INI';
    } else if (step.status === 'rencana') {
      badgeClass = 'badge-web';
      label = 'RENCANA';
    }

    return `
      <div class="timeline-row">
        <div class="timeline-meta">
          <span style="font-weight: 700; color: var(--color-primary);">${step.phase}</span>
          <span style="color: var(--text-subtle);">• ${step.period}</span>
          <span class="badge ${badgeClass}">${label}</span>
        </div>
        <h3 class="timeline-heading">${escapeHTML(step.title)}</h3>
        <p class="timeline-body">${escapeHTML(step.description)}</p>
      </div>
    `;
  }).join('');
}

/* 6. MATRIKS KEAHLIAN */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map((skill) => {
    let borderStyle = 'border-left-color: var(--color-primary);';
    if (skill.level === 'Dasar') borderStyle = 'border-left-color: var(--color-accent);';
    if (skill.level === 'Sedang Dipelajari') borderStyle = 'border-left-color: #D97706;';

    return `
      <div class="skill-box" style="${borderStyle}">
        <div class="skill-box-head">
          <span class="skill-name">${escapeHTML(skill.name)}</span>
          <span class="skill-level">${escapeHTML(skill.level)}</span>
        </div>
        <p class="skill-note">${escapeHTML(skill.practicalUse)}</p>
      </div>
    `;
  }).join('');
}

/* 7. MANAJER PROYEK: FILTER KATEGORI, SEARCH REAL-TIME & MODAL */
function initProjectsManager() {
  let activeCategory = 'Semua';
  let searchQuery = '';

  const pills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('project-search');

  function update() {
    let list = [...portfolioData.projects];

    if (activeCategory !== 'Semua') {
      list = list.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.challenge.toLowerCase().includes(q) ||
          p.solution.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    renderProjectsGrid(list);
    const counter = document.getElementById('projects-counter');
    if (counter) {
      counter.textContent = `QUERY: [${activeCategory}] ${searchQuery ? `"${searchQuery}"` : ''} ➔ ${list.length} proyek`;
    }
  }

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      update();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      update();
    });
  }

  update();
}

/* RENDER TATA LETAK ASIMETRIS (1 SLOT BESAR + SLOT STANDAR) */
function renderProjectsGrid(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-color); font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
        [NULL] Tidak ada proyek yang cocok dengan filter. Coba ubah kata kunci atau pilih kategori Semua.
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map((p, index) => {
    const isFeatured = index === 0 || (p.featured && index % 3 === 0);
    const badgeCategory = p.category === 'DevOps' ? 'badge-devops' : (p.category === 'Web' ? 'badge-web' : 'badge-script');

    if (isFeatured) {
      // KARTU BESAR (ASIMETRIS DUA KOLOM DENGAN METRIK TERUKUR)
      return `
        <article class="card-project card-featured">
          <div>
            <div class="card-header-meta">
              <span class="badge ${badgeCategory}">${escapeHTML(p.category)}</span>
              <span style="color: var(--text-subtle);">${formatDate(p.date)}</span>
            </div>
            <h3 class="card-title">${escapeHTML(p.title)}</h3>
            <p class="card-summary">${escapeHTML(p.summary)}</p>

            <div class="card-arch-box">
              $ TOPOLOGI: ${escapeHTML(p.architecture)}
            </div>

            <div class="card-metrics-grid">
              ${p.metrics.map((m) => `
                <div class="metric-pill">
                  <div class="metric-lbl">${escapeHTML(m.label)}</div>
                  <div class="metric-val">${escapeHTML(m.value)}</div>
                </div>
              `).join('')}
            </div>

            <div class="card-tags">
              ${p.tags.map((t) => `<span class="tag-item">${escapeHTML(t)}</span>`).join('')}
            </div>
          </div>

          <div class="card-footer">
            <button class="btn btn-primary btn-sm" onclick="openProjectModal('${p.id}')">
              Buka Tantangan &amp; Solusi
            </button>
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                Lihat Kode di GitHub
              </a>
            ` : ''}
          </div>
        </article>
      `;
    }

    // KARTU STANDAR / COMPACT
    return `
      <article class="card-project">
        <div>
          <div class="card-header-meta">
            <span class="badge ${badgeCategory}">${escapeHTML(p.category)}</span>
            <span style="color: var(--text-subtle);">${formatDate(p.date)}</span>
          </div>
          <h3 class="card-title">${escapeHTML(p.title)}</h3>
          <p class="card-summary" style="font-size: 0.82rem;">${escapeHTML(p.summary)}</p>

          <div class="card-tags">
            ${p.tags.slice(0, 3).map((t) => `<span class="tag-item">${escapeHTML(t)}</span>`).join('')}
            ${p.tags.length > 3 ? `<span class="tag-item">+${p.tags.length - 3}</span>` : ''}
          </div>
        </div>

        <div class="card-footer">
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${p.id}')">
            Rincian Teknis
          </button>
          ${p.githubUrl ? `
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-decoration: underline;">
              GitHub
            </a>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');
}

/* 8. MODAL PROYEK (TANTANGAN + PENYELESAIAN + BLOK KODE) */
function openProjectModal(projectId) {
  const p = portfolioData.projects.find((proj) => proj.id === projectId);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = p.title;

  modalBody.innerHTML = `
    <!-- Gambar Diagram Arsitektur -->
    ${p.image ? `
      <div style="background: #0B1120; border: 1px solid var(--border-color); padding: 0.75rem; margin-bottom: 1.5rem; text-align: center;">
        <img src="${p.image}" alt="Diagram ${escapeHTML(p.title)}" style="max-width: 100%; height: auto; max-height: 280px; display: inline-block;">
      </div>
    ` : ''}

    <!-- Alur Arsitektur -->
    <div style="padding: 0.6rem 0.8rem; background: var(--bg-subtle); border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.78rem; margin-bottom: 1.5rem;">
      <strong style="color: var(--color-primary);">&gt; TOPOLOGI ALUR:</strong> ${escapeHTML(p.architecture)}
    </div>

    <!-- FITUR WAJIB 1: TANTANGAN TEKNIS YANG DIHADAPI -->
    <div class="challenge-box">
      <div class="box-kicker" style="color: #D97706;">⚠ TANTANGAN UTAMA (THE BOTTLENECK):</div>
      <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-main); font-family: var(--font-sans);">
        ${escapeHTML(p.challenge)}
      </p>
    </div>

    <!-- FITUR WAJIB 2: PENYELESAIAN & ARSITEKTUR -->
    <div class="solution-box">
      <div class="box-kicker" style="color: #2E7D32;">✓ PENYELESAIAN TEKNIS (THE SOLUTION):</div>
      <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-main); font-family: var(--font-sans);">
        ${escapeHTML(p.solution)}
      </p>
    </div>

    <!-- Cuplikan Kode Konfigurasi dengan Sudut Tajam (rounded-none) -->
    ${p.codeSnippet ? `
      <div class="code-wrapper">
        <div class="code-header">
          <span>${escapeHTML(p.codeSnippet.filename)}</span>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="code-lang-pill">${escapeHTML(p.codeSnippet.language)}</span>
            <button class="code-copy-btn" onclick="copySnippet('${encodeURIComponent(p.codeSnippet.code)}')">
              📋 Salin
            </button>
          </div>
        </div>
        <pre class="code-body"><code>${escapeHTML(p.codeSnippet.code)}</code></pre>
      </div>
    ` : ''}

    <!-- Metrik Hasil -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin: 1.5rem 0;">
      ${p.metrics.map((m) => `
        <div class="metric-pill" style="padding: 0.75rem;">
          <div class="metric-lbl">${escapeHTML(m.label)}</div>
          <div class="metric-val" style="font-size: 0.95rem;">${escapeHTML(m.value)}</div>
        </div>
      `).join('')}
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      ${p.githubUrl ? `
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          Buka Repositori di GitHub
        </a>
      ` : ''}
      <button class="btn btn-primary btn-sm" onclick="closeModal()">
        Tutup
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function copySnippet(encodedCode) {
  const code = decodeURIComponent(encodedCode);
  navigator.clipboard.writeText(code).then(() => {
    alert('Snippet kode berhasil disalin ke clipboard!');
  }).catch(() => {});
}

/* 9. FORMULIR KONTAK */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = original;
      btn.disabled = false;
      alert('Pesan berhasil terkirim! Saya akan membalas paling lambat 3 hari kerja.');
    }, 800);
  });
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
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

