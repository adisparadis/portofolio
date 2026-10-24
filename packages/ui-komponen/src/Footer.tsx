import React from 'react';
import { portfolioProfile } from '@porto/util-bersama';
import { Github, Linkedin, MessageSquare, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] text-neutral-600 dark:text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          
          {/* Kolom 1: Profil & SLA */}
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono font-bold text-[#2A2A2A] dark:text-neutral-200 text-sm">
              <Terminal size={14} className="text-[#2E7D32] dark:text-[#4CAF50]" />
              <span>{portfolioProfile.name}</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed mb-3">
              {portfolioProfile.statement}
            </p>
            <div className="p-2.5 bg-white dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 rounded-none font-mono text-[11px] text-[#2E7D32] dark:text-[#4CAF50]">
              ✓ {portfolioProfile.slaNote}
            </div>
          </div>

          {/* Kolom 2: Arsitektur Monorepo */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase text-[#2A2A2A] dark:text-neutral-300 mb-2.5">
              Spesifikasi Sistem
            </h4>
            <ul className="space-y-1.5 font-mono text-[11px] text-neutral-500">
              <li>• Arsitektur: Next.js + pnpm Workspaces</li>
              <li>• Package: @porto/ui-komponen</li>
              <li>• Package: @porto/util-bersama</li>
              <li>• Desain: Non-simetris &amp; Zero AI Template</li>
            </ul>
          </div>

          {/* Kolom 3: Saluran Langsung */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase text-[#2A2A2A] dark:text-neutral-300 mb-2.5">
              Jaringan &amp; Kode
            </h4>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href={portfolioProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0F3460] dark:hover:text-white"
              >
                <Github size={14} />
                <span>github.com/adisparadis</span>
              </a>
              <a
                href={portfolioProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0F3460] dark:hover:text-white"
              >
                <Linkedin size={14} />
                <span>linkedin.com/in/adisparadis</span>
              </a>
              <a
                href={`https://wa.me/${portfolioProfile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2E7D32] dark:text-[#4CAF50]"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Diskusi Teknis</span>
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {portfolioProfile.name}. Kerangka Monorepo Portofolio IT.
          </div>
          <div>
            STATUS: <span className="text-[#2E7D32] dark:text-[#4CAF50]">ONLINE // HIGH FIDELITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

