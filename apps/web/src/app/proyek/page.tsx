import React from 'react';
import { portfolioProjects } from '@porto/util-bersama';
import { ProjectFilterSection } from '../../components/ProjectFilterSection';
import { Layers } from 'lucide-react';

export const metadata = {
  title: 'Arsip Proyek & Lab IT | Muhammad Asror',
  description: 'Daftar lengkap proyek otomasi server, pengamanan jaringan, dan utilitas CLI.'
};

export default function ProyekIndexPage() {
  return (
    <div className="space-y-8">
      
      {/* Header Halaman */}
      <div className="pb-4 border-b-2 border-[#0F3460] dark:border-neutral-700">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold mb-1">
          <Layers size={14} />
          <span>ARSIP LAB &amp; REKAYASA SISTEM</span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight">
          Koleksi Proyek Portofolio
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
          Eksplorasi implementasi sistem nyata tanpa template generik. Setiap proyek mendokumentasikan kendala teknis spesifik serta keputusan arsitektur yang diambil.
        </p>
      </div>

      {/* Filter & Bento Grid Interaktif */}
      <ProjectFilterSection initialProjects={portfolioProjects} showSearch={true} />

    </div>
  );
}

