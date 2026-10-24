'use client';

import React, { useState } from 'react';
import { portfolioProfile } from '@porto/util-bersama';
import { Button } from '@porto/ui-komponen';
import {
  MessageSquare,
  Mail,
  Github,
  Linkedin,
  Clock,
  CheckCircle2,
  Terminal,
  Send
} from 'lucide-react';

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Tanya Proyek / Lab',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Client-side feedback simulation (tidak butuh backend/database login)
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      
      {/* Header Halaman */}
      <div className="pb-4 border-b-2 border-[#0F3460] dark:border-neutral-700">
        <div className="text-xs font-mono uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold mb-1">
          KOMUNIKASI TEKNIS
        </div>
        <h1 className="text-3xl font-extrabold text-[#2A2A2A] dark:text-neutral-100 tracking-tight">
          Hubungi Saya
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          Terbuka untuk diskusi arsitektur server, masukan konfigurasi playbook, atau penawaran kerja sama &amp; magang.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Kolom Kiri: Saluran Langsung & SLA (5 Kolom) */}
        <div className="md:col-span-5 space-y-6">
          
          {/* SLA Banner Wajib */}
          <div className="p-4 bg-white dark:bg-[#1A1A1A] border-l-4 border-l-[#0F3460] dark:border-l-[#165DFF] border-y border-r border-neutral-200 dark:border-neutral-800 rounded-none shadow-sm space-y-1.5">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#0F3460] dark:text-[#60A5FA]">
              <Clock size={14} />
              <span>Jaminan Waktu Respon:</span>
            </div>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              {portfolioProfile.slaNote}
            </p>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3 font-mono text-xs">
            
            <a
              href={`https://wa.me/${portfolioProfile.whatsapp}?text=Halo%20Asror,%20saya%20melihat%20web%20portofolio%20IT%20Anda.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-none flex items-center justify-between hover:border-[#2E7D32] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare size={16} className="text-[#2E7D32] group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#2A2A2A] dark:text-neutral-200">WhatsApp Chat</span>
              </div>
              <span className="text-neutral-400 text-[11px]">+62 812-3456-7890</span>
            </a>

            <a
              href={portfolioProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-none flex items-center justify-between hover:border-black dark:hover:border-white transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Github size={16} className="text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#2A2A2A] dark:text-neutral-200">GitHub</span>
              </div>
              <span className="text-neutral-400 text-[11px]">@adisparadis</span>
            </a>

            <a
              href={portfolioProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-none flex items-center justify-between hover:border-[#0A66C2] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin size={16} className="text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#2A2A2A] dark:text-neutral-200">LinkedIn</span>
              </div>
              <span className="text-neutral-400 text-[11px]">in/adisparadis</span>
            </a>

            <div className="p-3 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-none flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-neutral-500" />
                <span className="font-semibold text-[#2A2A2A] dark:text-neutral-200">Surel</span>
              </div>
              <span className="text-neutral-400 text-[11px]">{portfolioProfile.email}</span>
            </div>

          </div>

        </div>

        {/* Kolom Kanan: Formulir Kontak Interaktif (7 Kolom) */}
        <div className="md:col-span-7 bg-white dark:bg-[#1E1E1E] border border-neutral-300 dark:border-neutral-800 p-6 rounded-none shadow-sm">
          
          {submitted ? (
            <div className="p-6 text-center space-y-3 font-mono">
              <CheckCircle2 size={32} className="mx-auto text-[#2E7D32]" />
              <div className="text-base font-bold text-[#2A2A2A] dark:text-neutral-100">
                [OK 200] Pesan Berhasil Terkirim
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans">
                Terima kasih telah menghubungi. Pesan Anda telah diterima dan akan dibalas paling lambat 3 hari kerja.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', topic: 'Tanya Proyek / Lab', message: '' });
                }}
              >
                Kirim Pesan Lain
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              
              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-1 font-bold">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama Lengkap / Instansi"
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#141414] border border-neutral-300 dark:border-neutral-700 text-[#2A2A2A] dark:text-neutral-100 rounded-none focus:outline-none focus:border-[#0F3460] dark:focus:border-[#165DFF]"
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-1 font-bold">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@email.com"
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#141414] border border-neutral-300 dark:border-neutral-700 text-[#2A2A2A] dark:text-neutral-100 rounded-none focus:outline-none focus:border-[#0F3460] dark:focus:border-[#165DFF]"
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-1 font-bold">
                  Topik Bahasan
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#141414] border border-neutral-300 dark:border-neutral-700 text-[#2A2A2A] dark:text-neutral-100 rounded-none focus:outline-none focus:border-[#0F3460] dark:focus:border-[#165DFF]"
                >
                  <option value="Tanya Proyek / Lab">Tanya Konfigurasi Proyek / Lab</option>
                  <option value="Tawaran Magang / Kerja">Peluang Magang / Kolaborasi IT</option>
                  <option value="Diskusi DevOps">Diskusi Seputar DevOps &amp; Linux</option>
                  <option value="Lainnya">Topik Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-1 font-bold">
                  Isi Pesan *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan pertanyaan, tanggapan, atau detail diskusi..."
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#141414] border border-neutral-300 dark:border-neutral-700 text-[#2A2A2A] dark:text-neutral-100 rounded-none focus:outline-none focus:border-[#0F3460] dark:focus:border-[#165DFF] resize-y"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full" icon={<Send size={14} />}>
                Kirim Pesan
              </Button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}

