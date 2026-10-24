import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 font-mono text-center">
      <div className="text-6xl font-extrabold text-[#2A2A2A] dark:text-neutral-100">
        404
      </div>
      <div className="text-xs uppercase tracking-widest text-[#2E7D32] dark:text-[#4CAF50] font-bold">
        [ERROR] HALAMAN TIDAK DITEMUKAN
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
        Halaman yang Anda minta tidak ada di sistem ini. Mungkin tautan sudah berubah atau proyek belum ditambahkan.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F3460] text-white text-xs font-mono rounded-none hover:bg-[#0B2545] transition-colors"
      >
        ← Kembali ke Beranda
      </a>
    </div>
  );
}

