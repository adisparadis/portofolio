# 🌐 Portofolio IT — Next.js Monorepo (pnpm Workspaces)

Portofolio pengembang IT modern berarsitektur **monorepo pnpm workspaces** dengan **Next.js 14 App Router**, desain non-simetris bebas template AI, dan performa tinggi.

---

## 📁 Struktur Monorepo

```text
porto/                           ← Root monorepo
│
├── apps/
│   └── web/                     ← Aplikasi portofolio utama (Next.js 14)
│       ├── src/
│       │   ├── app/
│       │   │   ├── page.tsx            → Beranda
│       │   │   ├── tentang/page.tsx    → Tentang Saya & Timeline
│       │   │   ├── proyek/page.tsx     → Indeks Proyek + Filter + Search
│       │   │   ├── proyek/[slug]/      → Detail Proyek (Tantangan & Solusi)
│       │   │   ├── keahlian/page.tsx   → Matriks Keahlian Teknis
│       │   │   ├── kontak/page.tsx     → Formulir & Saluran Kontak
│       │   │   ├── layout.tsx          → Root Layout (Navbar + Footer)
│       │   │   └── globals.css         → Tailwind CSS + pola grid halus
│       │   └── components/
│       │       └── ProjectFilterSection.tsx  → Filter/Search interaktif
│       ├── public/assets/images/       → SVG diagram proyek & sertifikat
│       ├── tailwind.config.ts          → Palet warna teknis (#2A2A2A, #0F3460, #2E7D32)
│       ├── next.config.mjs             → transpilePackages workspace
│       └── package.json                → @porto/web
│
├── packages/
│   ├── ui-komponen/                    ← Komponen UI yang dapat dipakai ulang
│   │   └── src/
│   │       ├── Button.tsx              → 5 varian tombol (rounded-none = sudut tajam)
│   │       ├── ProjectCard.tsx         → Kartu featured (asimetris) & standard
│   │       ├── CodeBlock.tsx           → Blok kode sudut tajam + tombol salin
│   │       ├── SkillTag.tsx            → Label keahlian + deskripsi implementasi nyata
│   │       ├── ThemeToggle.tsx         → Mode gelap/terang (flash-free)
│   │       ├── Navbar.tsx              → Navbar sticky + hamburger mobile
│   │       └── Footer.tsx              → Footer kolom teknis
│   │
│   └── util-bersama/                   ← Logic & Data murni (zero UI)
│       └── src/
│           ├── types.ts                → TypeScript interfaces (Project, Skill, dll)
│           ├── data.ts                 ← ★ EDIT DI SINI untuk ubah konten ★
│           ├── helpers.ts              → filterProjects(), formatIndoDate(), badge styles
│           └── index.ts                → Barrel exports
│
├── pnpm-workspace.yaml                 ← Konfigurasi workspace pnpm
├── vercel.json                         ← Konfigurasi deploy Vercel
├── package.json                        ← Root scripts
├── tsconfig.json                       ← TypeScript config root
└── update.bat                          ← Skrip 1-klik push ke GitHub
```

---

## ✏️ Cara Mengubah Konten Portofolio

> **Cukup edit 1 file**: [`packages/util-bersama/src/data.ts`](packages/util-bersama/src/data.ts)

### Mengubah Data Diri:
```typescript
export const portfolioProfile: PortfolioProfile = {
  name: "Nama Lengkap Anda",
  role: "Jabatan / Posisi",
  email: "email@anda.com",
  whatsapp: "6281234567890",
  github: "https://github.com/username-anda",
  linkedin: "https://linkedin.com/in/username-anda",
  // ...
};
```

### Menambah Proyek Baru:
```typescript
export const portfolioProjects: Project[] = [
  {
    id: "p-7",
    slug: "nama-url-proyek",         // URL: /proyek/nama-url-proyek
    title: "Judul Proyek Anda",
    category: "DevOps",              // DevOps | Web | Skrip Otomatis
    status: "Selesai",
    challenge: "Jelaskan masalah spesifik yang dihadapi...",
    solution: "Jelaskan solusi dan keputusan arsitektur yang diambil...",
    // ...
  }
];
```

---

## 🚀 Menjalankan Secara Lokal

```powershell
# Install semua dependensi workspace
pnpm install

# Jalankan dev server
pnpm dev
# Buka: http://localhost:3000
```

## 🏗️ Build Produksi

```powershell
pnpm build
# Atau hanya untuk apps/web:
pnpm --filter @porto/web build
```

---

## ☁️ Deploy ke Vercel

`vercel.json` sudah dikonfigurasi. Cukup:
1. Sambungkan repo GitHub ke [vercel.com](https://vercel.com)
2. Klik **Deploy** — Vercel otomatis mendeteksi monorepo pnpm

---

## 🎨 Gaya Desain

| Elemen | Pilihan |
|--------|---------|
| **Palet Warna** | Abu-abu tua `#2A2A2A`, Biru tua `#0F3460`, Hijau lembut `#2E7D32` |
| **Font** | Inter (Sans) + JetBrains Mono (Kode) |
| **Kartu Proyek** | `rounded-md` (sedikit bulat) |
| **Blok Kode** | `rounded-none` (sudut tajam teknis) |
| **Tata Letak** | Asimetris — kartu featured mengambil 2 kolom, kartu lain 1 kolom |
| **Dark Mode** | Toggle flash-free, tersimpan di `localStorage` |
