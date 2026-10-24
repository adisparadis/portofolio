'use client';

import React, { useState } from 'react';
import { Project, filterProjects } from '@porto/util-bersama';
import { ProjectCard, Button } from '@porto/ui-komponen';
import { Search, Filter, Terminal, ArrowRight } from 'lucide-react';

export interface ProjectFilterSectionProps {
  initialProjects: Project[];
  showSearch?: boolean;
  limit?: number;
  showAllLink?: boolean;
}

export const ProjectFilterSection: React.FC<ProjectFilterSectionProps> = ({
  initialProjects,
  showSearch = true,
  limit,
  showAllLink = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'DevOps', 'Web', 'Skrip Otomatis'];

  const filtered = filterProjects(initialProjects, selectedCategory, searchQuery);
  const displayedProjects = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="w-full">
      {/* Baris Kontrol: Tab Kategori Asimetris & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        
        {/* Tab Kategori dengan sudut tajam teknis */}
        <div className="flex items-center flex-wrap gap-1.5" role="tablist">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`px-3 py-1.5 text-xs font-mono rounded-none border transition-colors ${
                  isActive
                    ? 'bg-[#0F3460] text-white border-[#0F3460] dark:bg-[#165DFF] dark:border-[#165DFF]'
                    : 'bg-white dark:bg-[#1E1E1E] text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input Realtime */}
        {showSearch && (
          <div className="relative min-w-[260px] max-w-sm">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari Ansible, GPO, Bash..."
              className="w-full pl-8 pr-3 py-1.5 text-xs font-mono bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 text-[#2A2A2A] dark:text-neutral-100 rounded-none focus:outline-none focus:border-[#0F3460] dark:focus:border-[#165DFF]"
            />
          </div>
        )}

      </div>

      {/* Info Status Hasil Filter */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-6">
        <div className="flex items-center gap-1.5">
          <Terminal size={12} className="text-[#2E7D32]" />
          <span>
            QUERY: [{selectedCategory}] {searchQuery ? `"${searchQuery}"` : ''} ➔ {displayedProjects.length} proyek ditemukan
          </span>
        </div>
      </div>

      {/* TATA LETAK ASIMETRIS (Non-uniform layout untuk memecah pola template AI kaku) */}
      {displayedProjects.length === 0 ? (
        <div className="p-8 text-center bg-white dark:bg-[#1A1A1A] border border-dashed border-neutral-300 dark:border-neutral-800 rounded-none">
          <p className="font-mono text-xs text-neutral-500">
            [NULL] Tidak ada proyek yang cocok dengan filter aktif. Coba ubah kategori atau kata kunci.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => {
            // Logika Asimetris:
            // Proyek pertama atau proyek yang diflag `featured` mengambil 2 span kolom di desktop
            // Proyek lainnya mengambil slot compact, sehingga ritme visual bervariasi!
            const isLargeSlot = index === 0 || (project.featured && index % 3 === 0);

            return (
              <div
                key={project.id}
                className={isLargeSlot ? 'md:col-span-2' : 'col-span-1'}
              >
                <ProjectCard
                  project={project}
                  layoutVariant={isLargeSlot ? 'featured' : 'standard'}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Tautan ke Halaman Arsip Lengkap jika ada batasan limit */}
      {showAllLink && (
        <div className="mt-10 flex justify-center">
          <Button
            asLink
            href="/proyek"
            variant="outline"
            size="md"
            icon={<ArrowRight size={14} />}
          >
            Lihat Semua Proyek &amp; Lab Praktik ({initialProjects.length})
          </Button>
        </div>
      )}
    </section>
  );
};

