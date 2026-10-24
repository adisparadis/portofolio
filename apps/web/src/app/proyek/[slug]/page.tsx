import React from 'react';
import { notFound } from 'next/navigation';
import {
  portfolioProjects,
  getProjectBySlug,
  formatIndoDate,
  getCategoryBadgeClass,
  getProjectStatusBadge
} from '@porto/util-bersama';
import { CodeBlock, Button } from '@porto/ui-komponen';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  BarChart3,
  Calendar
} from 'lucide-react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({
    slug: p.slug
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(portfolioProjects, params.slug);
  if (!project) return { title: 'Proyek Tidak Ditemukan' };

  return {
    title: `${project.title} | Dokumentasi Lab IT`,
    description: project.summary
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(portfolioProjects, params.slug);

  if (!project) {
    notFound();
  }

  const statusBadge = getProjectStatusBadge(project.status);
  const categoryBadge = getCategoryBadgeClass(project.category);

  return (
    <article className="space-y-10 max-w-4xl mx-auto">
      
      {/* Tombol Kembali & Breadcrumb */}
      <nav className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono">
        <a
          href="/proyek"
          className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Kembali ke Indeks Proyek</span>
        </a>

        <span className="text-neutral-400">
          ID: {project.id} // {project.category}
        </span>
      </nav>

      {/* Header Utama Proyek */}
      <header className="space-y-4">
        
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-xs font-mono font-bold px-2 py-0.5 border rounded-none ${categoryBadge}`}>
            {project.category}
          </span>
          <span className={`text-xs font-mono px-2 py-0.5 border rounded-none ${statusBadge.className}`}>
            {statusBadge.text}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 ml-auto">
            <Calendar size={12} />
            <time>{formatIndoDate(project.date)}</time>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 leading-tight">
          {project.title}
        </h1>

        <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
          {project.summary}
        </p>

        {/* Tautan Repositori & Demo */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <Button
              asLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              icon={<Github size={14} />}
            >
              Lihat Kode di GitHub
            </Button>
          )}

          {project.demoUrl && (
            <Button
              asLink
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={<ExternalLink size={14} />}
            >
              Lihat Hasil Live
            </Button>
          )}
        </div>

      </header>

      {/* Diagram Arsitektur Alur Sistem */}
      <section className="bg-white dark:bg-[#1A1A1A] border-2 border-neutral-300 dark:border-neutral-800 rounded-none p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#0F3460] dark:text-[#60A5FA] mb-3 uppercase">
          <Layers size={14} />
          <span>Diagram Arsitektur &amp; Topologi Sistem</span>
        </div>

        {/* Visual Preview SVG Diagram */}
        {project.image && (
          <div className="mb-4 border border-neutral-200 dark:border-neutral-800 bg-[#0B1120] overflow-hidden">
            <img
              src={project.image}
              alt={`Diagram Arsitektur ${project.title}`}
              className="w-full h-auto max-h-[320px] object-contain mx-auto"
            />
          </div>
        )}

        <div className="p-3 bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 break-all">
          $ {project.architecture}
        </div>
      </section>

      {/* =========================================================================
          FITUR WAJIB: DESKRIPSI TANTANGAN TEKNIS + PENYELESAIAN
          ========================================================================= */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* 1. Bagian Tantangan Utama */}
        <section className="bg-white dark:bg-[#1E1E1E] border-l-4 border-l-amber-600 border-y border-r border-neutral-200 dark:border-neutral-800 p-6 rounded-none shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-mono font-bold text-sm uppercase">
            <AlertTriangle size={16} />
            <span>Tantangan Teknis yang Dihadapi (The Bottleneck)</span>
          </div>

          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {project.challenge}
          </p>
        </section>

        {/* 2. Bagian Penyelesaian & Solusi Arsitektur */}
        <section className="bg-white dark:bg-[#1E1E1E] border-l-4 border-l-[#2E7D32] border-y border-r border-neutral-200 dark:border-neutral-800 p-6 rounded-none shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#2E7D32] dark:text-[#4CAF50] font-mono font-bold text-sm uppercase">
            <CheckCircle2 size={16} />
            <span>Penyelesaian &amp; Keputusan Desain (The Solution)</span>
          </div>

          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {project.solution}
          </p>
        </section>

      </div>

      {/* Blok Kode Cuplikan Konfigurasi (Sudut Tajam rounded-none) */}
      {project.codeSnippet && (
        <section className="space-y-2">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
            Cuplikan File Konfigurasi Inti
          </h3>
          <CodeBlock
            code={project.codeSnippet.code}
            language={project.codeSnippet.language}
            filename={project.codeSnippet.filename}
            caption="Konfigurasi diuji secara langsung pada lingkungan virtualbox lab terisolasi."
          />
        </section>
      )}

      {/* Metrik Hasil Terukur */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
            <BarChart3 size={14} />
            <span>Hasil Terukur (Metrics &amp; Benchmarks)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-none"
              >
                <div className="text-xs font-mono text-neutral-500">{m.label}</div>
                <div className="text-lg font-bold font-mono text-[#2E7D32] dark:text-[#4CAF50] mt-1">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Poin Kunci Keberhasilan */}
      {project.keyResults && project.keyResults.length > 0 && (
        <section className="p-5 bg-neutral-50 dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800 rounded-none space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0F3460] dark:text-[#60A5FA]">
            Ringkasan Keberhasilan Eksekusi:
          </h3>
          <ul className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-300">
            {project.keyResults.map((res, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#2E7D32] dark:text-[#4CAF50] font-bold">✓</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tech Stack Pills */}
      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-neutral-400 mr-2">Teknologi Terkait:</span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-none"
          >
            {tag}
          </span>
        ))}
      </div>

    </article>
  );
}

