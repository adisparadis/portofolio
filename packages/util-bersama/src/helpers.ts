import { Project, ProjectCategory, ProjectStatus } from './types';

/**
 * Filter proyek berdasarkan kategori dan kata kunci pencarian
 */
export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string = ''
): Project[] {
  let result = [...projects];

  // Filter Kategori (DevOps / Web / Skrip Otomatis / Semua)
  if (category && category !== 'Semua') {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter Pencarian kata kunci
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    result = result.filter((p) => {
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchSummary = p.summary.toLowerCase().includes(q);
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(q));
      const matchChallenge = p.challenge.toLowerCase().includes(q);
      const matchSolution = p.solution.toLowerCase().includes(q);
      return matchTitle || matchSummary || matchTags || matchChallenge || matchSolution;
    });
  }

  return result;
}

/**
 * Mengambil proyek tunggal berdasarkan parameter slug
 */
export function getProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Format tanggal Indonesia ramah baca (contoh: "12 Mar 2026")
 */
export function formatIndoDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
      'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

/**
 * Label status teknis dengan palet desain yang disyaratkan
 */
export function getProjectStatusBadge(status: ProjectStatus): {
  text: string;
  className: string;
} {
  switch (status) {
    case 'Selesai':
      return {
        text: 'PRODUKSI / SELESAI',
        className: 'bg-[#2E7D32]/10 text-[#2E7D32] border-[#2E7D32]/30 dark:bg-[#2E7D32]/20 dark:text-[#4CAF50] dark:border-[#2E7D32]/40'
      };
    case 'Aktif Diuji':
      return {
        text: 'AKTIF DIUJI',
        className: 'bg-[#0F3460]/10 text-[#0F3460] border-[#0F3460]/30 dark:bg-[#165DFF]/15 dark:text-[#60A5FA] dark:border-[#165DFF]/40'
      };
    case 'Dalam Pengembangan':
      return {
        text: 'LAB BERJALAN',
        className: 'bg-[#2A2A2A]/10 text-[#2A2A2A] border-[#2A2A2A]/30 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700'
      };
    default:
      return {
        text: status,
        className: 'bg-neutral-100 text-neutral-700 border-neutral-300'
      };
  }
}

/**
 * Penanda visual kategori proyek
 */
export function getCategoryBadgeClass(category: ProjectCategory): string {
  switch (category) {
    case 'DevOps':
      return 'text-[#0F3460] border-[#0F3460]/20 bg-[#0F3460]/5 dark:text-[#60A5FA] dark:border-[#165DFF]/30 dark:bg-[#165DFF]/10';
    case 'Web':
      return 'text-[#2A2A2A] border-[#2A2A2A]/20 bg-[#2A2A2A]/5 dark:text-neutral-200 dark:border-neutral-700 dark:bg-neutral-800/60';
    case 'Skrip Otomatis':
      return 'text-[#2E7D32] border-[#2E7D32]/20 bg-[#2E7D32]/5 dark:text-[#4CAF50] dark:border-[#2E7D32]/30 dark:bg-[#2E7D32]/10';
    default:
      return 'text-neutral-700 border-neutral-300 bg-neutral-100';
  }
}

