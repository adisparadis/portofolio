# 🌐 Portofolio IT & DevOps Enthusiast

Web Portofolio IT modern, ringan (*ultra-fast*), dan 100% responsif yang dirancang khusus untuk pembelajar IT, calon *System Administrator*, *DevOps Engineer*, dan *Cloud/Security Enthusiast*.

Website ini dibangun menggunakan **HTML5 semantik, CSS3 modern dengan custom variable & grid**, serta **Vanilla JavaScript modular** tanpa dependensi berat (tanpa framework yang membengkak), sehingga menghasilkan performa muat secepat kilat (*PageSpeed 99+*), ramah kuota, dan dapat langsung dibuka di ponsel maupun laptop.

---

## ✨ Fitur-Fitur Utama yang Telah Diimplementasikan

### 1. 🏠 Halaman Beranda (Landing Page)
- **Judul Utama & Posisi:** Menampilkan nama + posisi (*"Muhammad Asror | Pembelajar IT | DevOps & Keamanan Dasar"*).
- **Kalimat Pembuka & Bio Teknis:** Penjelasan siapa Anda, keahlian yang sedang difokuskan, dan tujuan pembuatan portofolio.
- **Tombol Pintas Navigasi:** Urutan tombol cepat: `Lihat Proyek` ➔ `Keahlian` ➔ `Hubungi Saya`.
- **Animasi Ringkas Ikon IT:** Floating subtle animation untuk ikon teknologi (*Server*, *Code*, *Cloud*, *Shield*, *Terminal*) yang bergerak pelan dan elegan tanpa membebani performa perangkat.
- **Mode Gelap / Terang (Dark / Light Mode Toggle):** Terletak di pojok kanan atas navbar sticky. Menggunakan palet teknis:
  - **Tema Terang:** Biru Tua (`#0F3460`), abu-abu muda (`#F4F6F9`), dan putih bersih (`#FFFFFF`).
  - **Tema Gelap:** Hitam keabu-abuan (`#0D1117` / `#161B22`) dengan aksen biru terang IT (`#165DFF`).
  - Pilihan tema otomatis tersimpan di `localStorage` peramban.

### 2. 👤 Halaman Tentang Saya
- **Foto Profil Teknis & Status Badge:** Avatar IT vector tajam lengkap dengan indikator status online/kolaborasi.
- **Ringkasan Latar Belakang:** Kapan mulai belajar IT dan fokus area sistem.
- **Kartu Alasan Suka IT:** 3 pilar ketertarikan (Kekuatan Otomasi, Seni Troubleshooting, Keamanan Berkelanjutan).
- **Roadmap / Perjalanan Belajar Bertahap:**
  - *Tahap 1:* Fondasi Komputer & Web Dasar (HTML, CSS, JS, OSI Layer, Subnetting)
  - *Tahap 2:* Sistem Operasi Linux & Shell Scripting (Ubuntu, SSH, Bash)
  - *Tahap 3:* Otomasi Konfigurasi dengan Ansible (Playbook, Idempotency, Multi-node)
  - *Tahap 4:* Active Directory & Keamanan Dasar (Windows Server 2022, GPO, UFW)
  - *Tahap 5:* Containerization & CI/CD Pipeline (Docker & GitHub Actions)

### 3. 🚀 Halaman Proyek (Inti Portofolio)
- **Kartu Proyek Komprehensif:**
  - Tangkapan layar / Diagram arsitektur sistem vector (*Ansible Orchestration*, *AD DS Domain Forest*, *Linux Hardening Script*, *Subnet Calculator CLI*, *Cloud Encrypted Backup*).
  - Badge kategori (*DevOps*, *Keamanan*, *Skrip Otomatis*, *Web*).
  - Penjelasan tujuan, poin hasil (*highlights*), dan pil teknologi (*tech stack tags*).
  - Tombol aksi: **Detail Sistem** (membuka modal interaktif diagram alur) dan **Lihat Kode** (tautan GitHub).
- **Fitur Tambahan Proyek:**
  - ✅ **Pencarian Real-Time:** Cari proyek berdasarkan nama, teknologi, atau konsep langsung saat mengetik.
  - ✅ **Filter Kategori:** Tab filter *Semua*, *DevOps*, *Keamanan*, *Skrip Otomatis*, dan *Web*.
  - ✅ **Urutkan Proyek:** Dropdown sortir *Terbaru Dulu*, *Terlama Dulu*, dan *Nama (A-Z)*.
  - ✅ **Counter Otomatis:** Menampilkan jumlah proyek yang cocok dengan filter.

### 4. ⚡ Halaman Keahlian (Skills) & Sertifikat
- **Matriks Keahlian Berjenjang:**
  - Indikator level: **Dasar**, **Menengah**, dan **Sedang Dipelajari**.
  - Meteran persentase visual dan deskripsi ringkas tiap keahlian (Ansible, Linux Admin, Active Directory, UFW Firewall, Git, Bash Scripting, HTML/CSS/JS, Jaringan Dasar, Docker).
- **Galeri Sertifikat:**
  - Kartu sertifikat rapi berisi nama sertifikat, lembaga penerbit, tahun kelulusan, dan Credential ID.
  - **Fitur Zoom Lightbox:** Klik kartu sertifikat untuk memperbesar tampilan resolusi tinggi dan menyalin ID sertifikat dalam 1 klik.

### 5. 📬 Halaman Kontak
- **Formulir Interaktif:** Input Nama, Email, Kategori Topik, dan Pesan dengan validasi dan notifikasi toast sukses instan.
- **Catatan SLA Waktu Respon:** Banner pengingat resmi: *“Saya akan balas pesan paling lambat 3 hari kerja”*.
- **Tautan Langsung:** Tombol direct chat WhatsApp, tautan profil GitHub, dan koneksi LinkedIn.

### 6. 📊 Fitur Tambahan: Ringkasan Aktivitas Belajar
- Dashboard statistik mini:
  - 160+ Jam Belajar & Hands-on Lab
  - 6+ Proyek Teknis Selesai
  - 4 Sertifikat & Ujian Kompetensi
  - 12+ Modul & Catatan Praktik IT

### 7. 📜 Fitur Tambahan: Catatan Belajar & Blog IT
- Blog ringkasan teknis dengan modal reader berformat ramah baca:
  1. *Dasar Ansible: Kenapa Idempotency Begitu Penting dalam Otomasi Server?*
  2. *Langkah Demi Langkah: Membangun Lab Active Directory di VirtualBox*
  3. *Checklist 5 Menit: Pengamanan Dasar (Hardening) Server Linux Baru*
  4. *Mengenal Tool Esensial Troubleshooting Jaringan di Terminal (Ping, Traceroute, ss)*

---

## 📁 Struktur Berkas Proyek

```text
porto/
│
├── index.html                   # Halaman tunggal utama (Semantic HTML5)
├── README.md                    # Dokumentasi lengkap proyek
│
├── css/
│   └── style.css                # CSS Variables, tema terang/gelap, layout responsif & animasi
│
├── js/
│   ├── data.js                  # PUSAT DATA: Data diri, proyek, skill, sertifikat, & artikel
│   └── app.js                   # Logic interaktif: Theme toggle, search, filter, modal, toast
│
└── assets/
    ├── icons/                   # Tempat ikon pendukung tambahan
    └── images/                  # Grafik SVG vektor tajam (Offline-ready, zero broken links)
        ├── avatar.svg           # Foto profil IT
        ├── project-ansible.svg  # Diagram arsitektur Ansible
        ├── project-ad.svg       # Diagram arsitektur Active Directory
        ├── project-bash.svg     # Tampilan terminal Linux Hardening
        ├── project-portfolio.svg# Pratinjau responsif web
        ├── project-network.svg  # Topologi subnet IPv4 CLI
        ├── project-backup.svg   # Alur enkripsi backup cloud
        ├── cert-linux.svg       # Sertifikat Linux Essentials
        ├── cert-ansible.svg     # Sertifikat Ansible Automation
        ├── cert-cisco.svg       # Sertifikat Cisco Networking
        └── cert-ad.svg          # Sertifikat Windows Server AD
```

---

## 🚀 Cara Menjalankan Website Secara Lokal

Website ini **tidak membutuhkan instalasi node modules yang rumit**. Anda bisa membukanya langsung:

### Cara 1: Buka Langsung di Peramban
1. Buka folder `c:\Users\asror\Downloads\porto`.
2. Klik dua kali pada berkas `index.html`.
3. Website akan langsung terbuka di Google Chrome, Microsoft Edge, atau browser pilihan Anda.

### Cara 2: Menggunakan Python Local Server (Opsional)
Jalankan perintah berikut di PowerShell atau Command Prompt:
```powershell
cd c:\Users\asror\Downloads\porto
python -m http.server 8000
```
Lalu buka peramban di alamat: `http://localhost:8000`

---

## ✏️ Cara Mengubah Data Portofolio Anda

Seluruh data portofolio dirancang agar **sangat mudah diubah dari satu tempat**: berkas **`js/data.js`**.

- **Mengubah Nama & Biodata:** Buka `js/data.js` bagian `profile` (`name`, `role`, `bio`, `whatsapp`, `email`).
- **Menambah / Mengubah Proyek:** Edit array `projects` di `js/data.js`. Anda dapat mengubah judul, kategori, deskripsi, teknologi, dan tautan GitHub.
- **Menambah Keahlian:** Edit array `skills` di `js/data.js` dan sesuaikan tingkat kemampuan (`Dasar`, `Menengah`, `Sedang Dipelajari`).
- **Menambah Sertifikat:** Edit array `certificates` di `js/data.js`.
- **Menulis Catatan Belajar Baru:** Tambahkan objek baru ke dalam array `blogPosts` di `js/data.js`.

---

## 🌐 Cara Publikasi / Hosting Online Gratis

### Opsi A: GitHub Pages (Sangat Direkomendasikan untuk Portofolio IT)
1. Buat repositori baru di akun GitHub Anda (misal: `portofolio-it`).
2. Unggah seluruh isi folder ini ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: IT Portfolio Website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portofolio-it.git
   git push -u origin main
   ```
3. Buka repositori di GitHub ➔ masuk menu **Settings** ➔ **Pages** ➔ pilih Branch `main` ➔ klik **Save**.
4. Website Anda akan aktif secara instan di: `https://USERNAME.github.io/portofolio-it/`.

### Opsi B: Vercel / Netlify
Tinggal *drag-and-drop* folder `porto` ke dashboard [Netlify Drop](https://app.netlify.com/drop) atau sambungkan repositori GitHub Anda ke [Vercel](https://vercel.com).

