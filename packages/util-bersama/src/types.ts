export type ProjectCategory = 'DevOps' | 'Web' | 'Skrip Otomatis';

export type ProjectStatus = 'Selesai' | 'Aktif Diuji' | 'Dalam Pengembangan';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCodeSnippet {
  filename: string;
  language: string;
  code: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  date: string;
  summary: string;
  featured: boolean; // Menandai proyek utama untuk tata letak asimetris
  image: string;
  tags: string[];
  architecture: string;
  githubUrl: string;
  demoUrl?: string;
  
  // Fitur Wajib: Deskripsi Tantangan + Penyelesaian Teknis
  challenge: string;
  solution: string;
  
  codeSnippet?: ProjectCodeSnippet;
  metrics: ProjectMetric[];
  keyResults: string[];
}

export interface Skill {
  name: string;
  category: 'Infrastruktur & DevOps' | 'Jaringan & Keamanan' | 'Scripting & Web';
  level: 'Dasar' | 'Menengah' | 'Sedang Dipelajari';
  practicalUse: string; // Catatan implementasi nyata (bukan sekadar bintang 1-5)
}

export interface TimelineStep {
  phase: string;
  title: string;
  period: string;
  description: string;
  status: 'selesai' | 'sedang-berjalan' | 'rencana';
}

export interface PortfolioProfile {
  name: string;
  role: string;
  telemetryStatus: string;
  bio: string;
  statement: string;
  location: string;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  slaNote: string;
  whyIT: {
    title: string;
    description: string;
  }[];
}

