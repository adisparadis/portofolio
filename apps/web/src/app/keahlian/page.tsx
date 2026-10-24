import React from 'react';
import { portfolioSkills } from '@porto/util-bersama';
import { SkillTag } from '@porto/ui-komponen';
import { Cpu, Server, Shield, Terminal } from 'lucide-react';

export const metadata = {
  title: 'Keahlian & Toolchain Teknis | Muhammad Asror',
  description: 'Matriks kompetensi teknis terapan di bidang DevOps, administrasi Linux, dan keamanan sistem.'
};

export default function KeahlianPage() {
  const infraSkills = portfolioSkills.filter((s) => s.category === 'Infrastruktur & DevOps');
  const securitySkills = portfolioSkills.filter((s) => s.category === 'Jaringan & Keamanan');
  const webSkills = portfolioSkills.filter((s) => s.category === 'Scripting & Web');

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      
      {/* Header Halaman */}
      <div className="pb-4 border-b-2 border-[#0F3460] dark:border-neutral-700">
        <div className="text-xs font-mono uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold mb-1">
          MATRIKS KOMPETENSI
        </div>
        <h1 className="text-3xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight">
          Keahlian &amp; Toolchain Teknis
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          Setiap keahlian dinilai berdasarkan implementasi langsung di lab, bukan sekadar teori atau klaim persentase palsu.
        </p>
      </div>

      {/* Kategori 1: Infrastruktur & DevOps */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-200 dark:border-neutral-800 font-mono text-sm font-bold text-[#0F3460] dark:text-[#60A5FA]">
          <Server size={16} />
          <span>Infrastruktur &amp; Otomasi Server</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {infraSkills.map((s) => (
            <SkillTag key={s.name} skill={s} />
          ))}
        </div>
      </section>

      {/* Kategori 2: Jaringan & Keamanan */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-200 dark:border-neutral-800 font-mono text-sm font-bold text-[#2E7D32] dark:text-[#4CAF50]">
          <Shield size={16} />
          <span>Jaringan &amp; Tata Kelola Keamanan</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {securitySkills.map((s) => (
            <SkillTag key={s.name} skill={s} />
          ))}
        </div>
      </section>

      {/* Kategori 3: Scripting & Web */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-200 dark:border-neutral-800 font-mono text-sm font-bold text-[#2A2A2A] dark:text-neutral-300">
          <Terminal size={16} />
          <span>Scripting &amp; Antarmuka Web</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {webSkills.map((s) => (
            <SkillTag key={s.name} skill={s} />
          ))}
        </div>
      </section>

      {/* Catatan Penilaian Kompetensi */}
      <div className="p-4 bg-neutral-100 dark:bg-[#181818] border border-neutral-200 dark:border-neutral-800 rounded-none text-xs font-mono text-neutral-600 dark:text-neutral-400 space-y-1">
        <div className="font-bold text-[#2A2A2A] dark:text-neutral-200">
          // Keterangan Indikator Level:
        </div>
        <div>• <strong>Menengah:</strong> Sering dipakai di lab mandiri, mampu mengatasi error umum, mengerti dokumentasi resmi.</div>
        <div>• <strong>Dasar:</strong> Memahami konsep arsitektur, mampu konfigurasi standar dan verifikasi status.</div>
        <div>• <strong>Sedang Dipelajari:</strong> Sedang aktif dieksplorasi dalam roadmap pembelajaran tahun ini.</div>
      </div>

    </div>
  );
}

