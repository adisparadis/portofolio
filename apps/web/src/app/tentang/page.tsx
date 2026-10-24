import React from 'react';
import { portfolioProfile, portfolioTimeline } from '@porto/util-bersama';
import { Button } from '@porto/ui-komponen';
import { User, Compass, Calendar, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Tentang Saya & Perjalanan Belajar | Muhammad Asror',
  description: 'Latar belakang belajar, fokus keahlian, dan roadmap rekayasa sistem IT.'
};

export default function TentangPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      
      {/* Header Halaman */}
      <div className="pb-4 border-b-2 border-[#0F3460] dark:border-neutral-700">
        <div className="text-xs font-mono uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold mb-1">
          BIOGRAFI // FILOSOFI
        </div>
        <h1 className="text-3xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight">
          Tentang Saya &amp; Perjalanan Belajar IT
        </h1>
      </div>

      {/* Grid Profil Asimetris */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Foto Profil Teknis / Avatar Sederhana */}
        <div className="md:col-span-4 bg-white dark:bg-[#1E1E1E] border-2 border-neutral-300 dark:border-neutral-800 p-4 rounded-none shadow-sm space-y-3">
          <div className="w-full aspect-square bg-[#0F3460]/10 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center overflow-hidden">
            <img
              src="/assets/images/avatar.svg"
              alt={`Foto Profil ${portfolioProfile.name}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="font-mono text-center space-y-1">
            <div className="font-bold text-sm text-[#2A2A2A] dark:text-neutral-100">
              {portfolioProfile.name}
            </div>
            <div className="text-xs text-[#2E7D32] dark:text-[#4CAF50]">
              {portfolioProfile.role}
            </div>
            <div className="text-[11px] text-neutral-500">
              Lokasi: {portfolioProfile.location}
            </div>
          </div>
        </div>

        {/* Uraian Latar Belakang */}
        <div className="md:col-span-8 space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <h2 className="text-lg font-bold text-[#2A2A2A] dark:text-neutral-100 font-mono">
            // Latar Belakang &amp; Titik Balik
          </h2>

          <p>
            Perjalanan saya di dunia IT berawal dari membangun antarmuka web sederhana. Namun, rasa penasaran yang sebenarnya muncul saat bertanya: <em>&quot;Bagaimana server merespons ribuan request tanpa putus, dan bagaimana konfigurasi sistem operasi dapat direplikasi tanpa campur tangan klik mouse yang berulang?&quot;</em>
          </p>

          <p>
            Rasa penasaran tersebut membawa saya meninggalkan cara setup manual dan mendalami <strong>Linux CLI</strong> serta konsep <strong>Infrastructure as Code (IaC) menggunakan Ansible</strong>. Bagi saya, keindahan sistem IT terletak pada kemampuan mendokumentasikan seluruh state server ke dalam teks konfigurasi yang dapat diverifikasi dan diaudit.
          </p>

          <p>
            Saat ini, fokus utama saya terbagi ke dua pilar:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <li><strong>DevOps &amp; Linux:</strong> Otomasi provisioning Nginx, manajemen user sudoer, dan hardening firewall UFW.</li>
            <li><strong>Identitas &amp; Akses:</strong> Implementasi Active Directory Domain Services, manajemen OU, dan pembatasan workstation via GPO.</li>
          </ul>
        </div>

      </div>

      {/* Alasan Menyukai Bidang IT */}
      <section className="space-y-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-bold text-[#2A2A2A] dark:text-neutral-100 font-mono">
          // Mengapa Saya Menyukai Bidang IT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioProfile.whyIT.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-none shadow-sm space-y-2"
            >
              <div className="text-xs font-mono font-bold text-[#0F3460] dark:text-[#60A5FA]">
                PILAR 0{idx + 1}
              </div>
              <h3 className="font-bold text-sm text-[#2A2A2A] dark:text-neutral-100">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Perjalanan Belajar Bertahap */}
      <section className="space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#2A2A2A] dark:text-neutral-100 font-mono">
            // Roadmap Tahapan Belajar (Perjalanan Nyata)
          </h2>
          <span className="text-xs font-mono text-neutral-500">
            Status: Aktif Bertahap
          </span>
        </div>

        <div className="space-y-4">
          {portfolioTimeline.map((step, idx) => {
            const statusConfig = {
              selesai: {
                label: 'SELESAI',
                color: 'text-[#2E7D32] border-[#2E7D32] bg-[#2E7D32]/10'
              },
              'sedang-berjalan': {
                label: 'FOKUS SAAT INI',
                color: 'text-[#0F3460] border-[#0F3460] bg-[#0F3460]/10 dark:text-[#60A5FA] dark:border-[#165DFF]'
              },
              rencana: {
                label: 'RENCANA BERIKUTNYA',
                color: 'text-neutral-500 border-neutral-400 bg-neutral-100 dark:bg-neutral-800'
              }
            }[step.status];

            return (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-none flex flex-col md:flex-row md:items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="font-bold text-[#0F3460] dark:text-[#60A5FA]">
                      {step.phase}
                    </span>
                    <span className="text-neutral-400">• {step.period}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 border rounded-none ${statusConfig.color}`}>
                      {statusConfig.label}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#2A2A2A] dark:text-neutral-100">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Navigasi CTA */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <Button asLink href="/proyek" variant="outline" size="md">
          Lihat Proyek Praktik
        </Button>
        <Button asLink href="/kontak" variant="primary" size="md">
          Hubungi Saya
        </Button>
      </div>

    </div>
  );
}

