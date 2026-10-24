import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui-komponen/src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Palet Warna Sesuai Spesifikasi:
        // Abu-abu tua (#2A2A2A), Biru tua (#0F3460), Aksen hijau lembut (#2E7D32)
        'tech-gray': '#2A2A2A',
        'tech-navy': '#0F3460',
        'tech-green': '#2E7D32',
        dark: {
          bg: '#141414',
          surface: '#1E1E1E',
          card: '#242424',
          border: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;

