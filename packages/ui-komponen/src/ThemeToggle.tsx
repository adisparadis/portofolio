'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('porto_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored ? stored === 'dark' : prefersDark;

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('porto_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('porto_theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-none border border-neutral-300 dark:border-neutral-700 bg-transparent" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
      className="p-1.5 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1E1E1E] rounded-none shadow-sm transition-colors"
    >
      {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
    </button>
  );
};

