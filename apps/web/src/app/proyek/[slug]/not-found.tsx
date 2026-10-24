import Link from 'next/link';

export default function ProyekNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-5 font-mono text-center max-w-lg mx-auto">
      <div className="text-5xl font-extrabold text-[#2A2A2A] dark:text-neutral-100">
        NULL
      </div>
      <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
        [WARN] PROJECT NOT FOUND IN DATABASE
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Proyek dengan slug tersebut tidak ditemukan. Mungkin belum ditambahkan ke data atau tautannya salah.
      </p>
      <Link
        href="/proyek"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F3460] text-white text-xs font-mono rounded-none hover:bg-[#0B2545] transition-colors"
      >
        ← Kembali ke Indeks Proyek
      </Link>
    </div>
  );
}

