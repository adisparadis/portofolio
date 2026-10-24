'use client';

import React, { useState } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Keahlian', href: '/keahlian' },
    { label: 'Kontak', href: '/kontak' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#161616]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Developer Identifier (Asimetris, sentuhan HUD IT) */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#0F3460] dark:bg-[#165DFF] text-white flex items-center justify-center font-mono font-bold text-xs rounded-none border border-[#0F3460]">
            &gt;_
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#2A2A2A] dark:text-neutral-100 font-mono">
              asror<span className="text-[#2E7D32] dark:text-[#4CAF50]">.lab</span>
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              DevOps &amp; Infra
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-mono transition-colors rounded-none border border-transparent ${
                  isActive
                    ? 'font-bold text-[#0F3460] dark:text-[#60A5FA] bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            aria-label="Buka menu navigasi"
            className="md:hidden p-1.5 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-none bg-white dark:bg-[#1E1E1E]"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] px-4 py-4 space-y-1">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-none border border-transparent"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

