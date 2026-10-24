import React from 'react';
import { Project, formatIndoDate, getCategoryBadgeClass, getProjectStatusBadge } from '@porto/util-bersama';
import { ArrowUpRight, Github, Layers, Wrench } from 'lucide-react';

export interface ProjectCardProps {
  project: Project;
  layoutVariant?: 'featured' | 'compact' | 'standard';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layoutVariant = 'standard'
}) => {
  const statusBadge = getProjectStatusBadge(project.status);
  const categoryBadge = getCategoryBadgeClass(project.category);
  const isFeatured = layoutVariant === 'featured' || project.featured;

  if (isFeatured) {
    // KARTU ASIMETRIS UTAMA (Lebih besar, penekanan arsitektur & metrik teknis)
    return (
      <article className="group relative bg-white dark:bg-[#1E1E1E] border-2 border-[#0F3460]/20 dark:border-neutral-700/80 rounded-md p-6 lg:p-7 shadow-sm transition-all hover:border-[#0F3460] dark:hover:border-[#165DFF] flex flex-col justify-between">
        <div>
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 border rounded-none ${categoryBadge}`}>
                {project.category}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 border rounded-none ${statusBadge.className}`}>
                {statusBadge.text}
              </span>
            </div>
            <time className="text-xs font-mono text-neutral-500">
              {formatIndoDate(project.date)}
            </time>
          </div>

          {/* Title & Excerpt */}
          <h3 className="text-xl lg:text-2xl font-bold text-[#2A2A2A] dark:text-neutral-100 mb-3 group-hover:text-[#0F3460] dark:group-hover:text-[#60A5FA] transition-colors leading-snug">
            <a href={`/proyek/${project.slug}`} className="focus:outline-none">
              {project.title}
            </a>
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            {project.summary}
          </p>

          {/* Arsitektur Alur (Diagram Sederhana) */}
          <div className="mb-5 p-3 bg-neutral-50 dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800 rounded-none text-xs font-mono text-[#0F3460] dark:text-[#60A5FA] flex items-start gap-2">
            <Layers size={15} className="shrink-0 mt-0.5 text-neutral-500" />
            <span className="break-all">{project.architecture}</span>
          </div>

          {/* Metrik Teknis Utama */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 rounded-none">
                  <div className="text-[10px] font-mono uppercase text-neutral-500 dark:text-neutral-400">
                    {m.label}
                  </div>
                  <div className="text-xs font-bold font-mono text-[#2E7D32] dark:text-[#4CAF50] mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-none"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
          <a
            href={`/proyek/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F3460] dark:text-[#60A5FA] hover:underline"
          >
            <span>Tantangan &amp; Solusi Lengkap</span>
            <ArrowUpRight size={16} />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositori GitHub untuk ${project.title}`}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </article>
    );
  }

  // KARTU STANDAR / KOMPAK
  return (
    <article className="group bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-md p-5 shadow-sm transition-all hover:border-[#0F3460] dark:hover:border-neutral-600 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 border rounded-none ${categoryBadge}`}>
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            {formatIndoDate(project.date)}
          </span>
        </div>

        <h3 className="text-base lg:text-lg font-bold text-[#2A2A2A] dark:text-neutral-100 mb-2 group-hover:text-[#0F3460] dark:group-hover:text-[#60A5FA] transition-colors">
          <a href={`/proyek/${project.slug}`} className="focus:outline-none">
            {project.title}
          </a>
        </h3>

        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3">
          {project.summary}
        </p>

        {/* Mini Highlights */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded-none"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[11px] font-mono text-neutral-400 px-1 py-0.5">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
        <a
          href={`/proyek/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F3460] dark:text-[#60A5FA] hover:underline"
        >
          <span>Detail Sistem</span>
          <ArrowUpRight size={14} />
        </a>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <Github size={16} />
          </a>
        )}
      </div>
    </article>
  );
};

