# 🌐 Portofolio IT — Desain Rekayasa Teknis & Native GitHub Pages

Website portofolio pengembang IT modern, berkinerja tinggi, dan langsung terdeteksi di **GitHub Pages** (`adisparadis.github.io/portofolio/`) tanpa memerlukan server tambahan.

---

## 🎨 Karakteristik Desain & UI-UX (Anti-Template AI)

* **Palet Warna Utama:** Abu-abu tua (`#2A2A2A`), Biru tua (`#0F3460`), Aksen hijau lembut (`#2E7D32`).
* **Tipografi:** Font Inter (teks bacaan) & JetBrains Mono (terminal & kode).
* **Tata Letak Asimetris:** Slot kartu proyek unggulan mengambil ruang lebih besar (2 kolom) untuk menonjolkan metrik teknis dan topologi alur sistem, memecah pola kartu simetris AI yang monoton.
* **Perpaduan Sudut:** Blok kode dan badge memakai **sudut tajam murni (`rounded-none`)**, sedangkan kartu proyek memakai **sudut sedikit bulat (`rounded-md` / 6px)**.
* **Bukan Ilustrasi Hiasan AI:** Seluruh ilustrasi menggunakan diagram arsitektur vektor sistem nyata (Ansible, Active Directory, Linux Bash).

---

## 📁 Struktur Berkas

```text
porto/
│
├── index.html                   ← File utama yang langsung dibaca GitHub Pages
├── update.bat                   ← Skrip 1-klik untuk upload update ke GitHub
├── dev.bat                      ← Skrip 1-klik jalankan server lokal
│
├── css/
│   └── style.css                ← Variabel warna, dark/light theme, tata letak asimetris
│
├── js/
│   ├── data.js                  ← ★ PUSAT KONTEN: Edit data diri, proyek, skill di sini ★
│   └── app.js                   ← Logika filter kategori, search, modal tantangan & solusi
│
└── assets/
    └── images/                  ← Vektor SVG diagram arsitektur sistem
```

---

## ✏️ Cara Mengubah Data Portofolio

> Anda **hanya perlu mengedit 1 file**: [`js/data.js`](js/data.js)

1. Buka `js/data.js` menggunakan VS Code / teks editor.
2. Ubah profil di bagian `profile`: nama, bio, nomor WhatsApp, LinkedIn, email.
3. Tambah atau ubah proyek di array `projects`:
   - `challenge`: Tuliskan hambatan teknis yang spesifik.
   - `solution`: Tuliskan langkah pemecahan masalah dan arsitekturnya.
   - `codeSnippet`: Baris kode konfigurasi inti.
4. Simpan file (`Ctrl + S`).
5. Klik dua kali file **`update.bat`** untuk otomatis mengirim perubahan ke GitHub!
