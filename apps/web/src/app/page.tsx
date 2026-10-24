import React from 'react';
import {
  portfolioProfile,
  portfolioProjects,
  portfolioSkills,
  portfolioTimeline
} from '@porto/util-bersama';
import { Button, SkillTag } from '@porto/ui-komponen';
import { ProjectFilterSection } from '../components/ProjectFilterSection';
import {
  ArrowRight,
  Terminal,
  Server,
  ShieldCheck,
  Cpu,
  Layers,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      
      {/* =========================================================================
          HERO SECTION: TATA LETAK ASIMETRIS (BUKAN TEMPLATE AI SIMETRIS)
          Sisi kiri fokus pada filosofi teknis, sisi kanan panel telemetri lab
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 lg:pt-8">
        
        {/* Kolom Kiri (Lebih besar: 7 kolom) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Status Badge HUD */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white dark:bg-[#1E1E1E] border border-neutral-300 dark:border-neutral-800 rounded-none text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
            <span className="text-[#2A2A2A] dark:text-neutral-200">
              {portfolioProfile.telemetryStatus}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight leading-[1.15]">
            Halo, Saya <span className="text-[#0F3460] dark:text-[#60A5FA] underline decoration-2 decoration-[#2E7D32] underline-offset-4">{portfolioProfile.name}</span>.
          </h1>

          <div className="font-mono text-sm sm:text-base text-[#2E7D32] dark:text-[#4CAF50] font-semibold">
            &gt; {portfolioProfile.role}
          </div>

          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
            {portfolioProfile.statement}
          </p>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
            {portfolioProfile.bio}
          </p>

          {/* Tombol Pintas Aksi Cepat */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asLink href="#proyek-section" variant="primary" size="md">
              <span>Eksplor Proyek &amp; Lab</span>
              <ArrowRight size={14} />
            </Button>
            <Button asLink href="/keahlian" variant="outline" size="md">
              Keahlian
            </Button>
            <Button asLink href="/kontak" variant="secondary" size="md">
              Hubungi Saya
            </Button>
          </div>

        </div>

        {/* Kolom Kanan (Asimetris: 5 kolom) - Panel Telemetri Lab Nyata */}
        <div className="lg:col-span-5 bg-white dark:bg-[#1A1A1A] border-2 border-neutral-300 dark:border-neutral-800 rounded-none p-5 shadow-sm space-y-4">
          
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#2A2A2A] dark:text-neutral-200 font-bold">
              <Terminal size={14} className="text-[#0F3460] dark:text-[#60A5FA]" />
              <span>LAB_TELEMETRY.SYS</span>
            </div>
            <span className="text-[10px] text-neutral-400">UPTIME: 99.8%</span>
          </div>

          {/* Snapshot Status Mesin Lab */}
          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-2.5 bg-neutral-50 dark:bg-[#141414] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">Ansible Control Node</span>
              <span className="text-[#2E7D32] dark:text-[#4CAF50] font-semibold">ONLINE [v2.16]</span>
            </div>

            <div className="p-2.5 bg-neutral-50 dark:bg-[#141414] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">Domain Controller DC01</span>
              <span className="text-[#0F3460] dark:text-[#60A5FA] font-semibold">ACTIVE [lab.local]</span>
            </div>

            <div className="p-2.5 bg-neutral-50 dark:bg-[#141414] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">UFW &amp; Fail2ban Service</span>
              <span className="text-[#2E7D32] dark:text-[#4CAF50] font-semibold">ENFORCED</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 gap-2 text-center font-mono">
            <div className="p-2 bg-neutral-100 dark:bg-neutral-800">
              <div className="text-lg font-bold text-[#0F3460] dark:text-[#60A5FA]">
                {portfolioProjects.length}
              </div>
              <div className="text-[10px] text-neutral-500 uppercase">Proyek &amp; Skrip</div>
            </div>
            <div className="p-2 bg-neutral-100 dark:bg-neutral-800">
              <div className="text-lg font-bold text-[#2E7D32] dark:text-[#4CAF50]">
                160+
              </div>
              <div className="text-[10px] text-neutral-500 uppercase">Jam Hands-on Lab</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-neutral-500 italic">
            * Seluruh infrastruktur lab diuji di lingkungan terisolasi virtualbox &amp; cloud VPS.
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION PROYEK: INTI PORTOFOLIO DENGAN FILTER & TATA LETAK ASIMETRIS
          ========================================================================= */}
      <section id="proyek-section" className="space-y-6 scroll-mt-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-3 border-b-2 border-[#0F3460] dark:border-neutral-700">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold">
              01 // HASIL EKSEKUSI
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight">
              Proyek, Otomasi &amp; Lab Praktik
            </h2>
          </div>
          <p className="text-xs text-neutral-500 font-mono max-w-sm">
            Klik kartu untuk membaca rincian tantangan teknis dan solusi yang dibuat.
          </p>
        </div>

        {/* Filter Interaktif: DevOps / Web / Skrip Otomatis */}
        <ProjectFilterSection initialProjects={portfolioProjects} />

      </section>

      {/* =========================================================================
          SECTION TENTANG SAYA & ALASAN SUKA BIDANG IT
          ========================================================================= */}
      <section className="space-y-6">
        
        <div className="pb-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="text-xs font-mono uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold">
            02 // PRINSIP KERJA
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight">
            Alasan Menyukai Bidang IT &amp; Infrastruktur
          </h2>
        </div>

        {/* 3 Pilar Pendekatan Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolioProfile.whyIT.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-md shadow-sm"
            >
              <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 text-[#0F3460] dark:text-[#60A5FA] flex items-center justify-center font-mono font-bold text-xs rounded-none mb-3">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#2A2A2A] dark:text-neutral-100 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          SECTION KEAHLIAN TEKNIS SINGKAT
          ========================================================================= */}
      <section className="space-y-6">
        
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold">
              03 // TOOLCHAIN
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight">
              Keahlian Teknis Terapan
            </h2>
          </div>
          <a
            href="/keahlian"
            className="text-xs font-mono font-semibold text-[#0F3460] dark:text-[#60A5FA] hover:underline"
          >
            Lihat Matriks Lengkap &gt;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioSkills.slice(0, 6).map((skill) => (
            <SkillTag key={skill.name} skill={skill} />
          ))}
        </div>

      </section>

      {/* =========================================================================
          CALL TO ACTION / KONTAK SINGKAT
          ========================================================================= */}
      <section className="p-6 sm:p-8 bg-white dark:bg-[#1C1C1C] border-2 border-[#0F3460]/20 dark:border-neutral-800 rounded-none shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-xl font-bold text-[#2A2A2A] dark:text-neutral-100">
            Tertarik Mendiskusikan Otomasi Server atau Peluang Magang?
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Saya selalu terbuka untuk berdiskusi seputar Ansible, Linux troubleshooting, dan arsitektur server. {portfolioProfile.slaNote}
          </p>
        </div>

        <Button asLink href="/kontak" variant="accent" size="lg">
          Kirim Pesan Sekarang
        </Button>
      </section>

    </div>
  );
}

