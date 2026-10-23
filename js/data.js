/**
 * Data Portofolio IT
 * File ini memudahkan pembaruan konten (Data Diri, Proyek, Keahlian, Sertifikat, Catatan Belajar)
 * tanpa perlu mengubah struktur HTML secara manual.
 */

const portfolioData = {
  // 1. DATA DIRI & INFORMASI UTAMA
  profile: {
    name: "Asrorul Faradis",
    role: "Pembelajar IT | DevOps & Keamanan Dasar",
    tagline: "Membangun Fondasi Infrastruktur yang Otomatis, Andal, dan Aman",
    bio: "Halo! Saya adalah seorang pembelajar IT yang berfokus pada administrasi sistem, otomasi infrastruktur (DevOps), serta dasar keamanan sistem informasi. Portofolio ini mendokumentasikan proyek langsung, lab simulasi, dan catatan perjalanan belajar saya dari fondasi web hingga otomasi server.",
    location: "Indonesia",
    status: "Terbuka untuk Belajar, Magang & Kolaborasi Proyek",
    email: "asror.itdev@example.com",
    whatsapp: "6281234567890",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    stats: {
      hoursLearned: 160,
      projectsCompleted: 8,
      certificatesCount: 4,
      notesWritten: 12
    },
    about: {
      story: "Perjalanan saya di dunia IT berawal dari rasa ingin tahu tentang bagaimana aplikasi di balik layar berjalan tanpa henti di internet. Dari memahami dasar web, saya jatuh cinta pada efisiensi Linux, otomasi server menggunakan Ansible, serta pentingnya pengamanan sistem lewat Active Directory dan kontrol akses.",
      whyIT: [
        {
          title: "Kekuatan Otomasi",
          desc: "Menghilangkan tugas repetitif dengan skrip bash dan playbook Ansible. Satu klik untuk mengonfigurasi puluhan server.",
          icon: "cpu"
        },
        {
          title: "Seni Pemecahan Masalah (Troubleshooting)",
          desc: "Menganalisis log sistem, menelusuri paket jaringan, dan menemukan akar masalah adalah tantangan logika yang memuaskan.",
          icon: "terminal"
        },
        {
          title: "Keamanan Berkelanjutan",
          desc: "Infrastruktur yang baik bukan hanya cepat, tetapi harus menerapkan prinsip least privilege, pembaruan rutin, dan audit berlapis.",
          icon: "shield"
        }
      ],
      journey: [
        {
          phase: "Tahap 1",
          title: "Fondasi Komputer & Web Dasar",
          period: "Awal Belajar",
          description: "Mempelajari dasar HTML5, CSS3, logika JavaScript, konsep OSI Layer, protokol HTTP/HTTPS, dan subnetting IP dasar.",
          status: "completed"
        },
        {
          phase: "Tahap 2",
          title: "Sistem Operasi Linux & Shell Scripting",
          period: "Pengembangan",
          description: "Mendalami distro Linux (Ubuntu/Debian), manajemen user/permission, systemd service, SSH key-based auth, dan skrip Bash otomatisasi.",
          status: "completed"
        },
        {
          phase: "Tahap 3",
          title: "Otomasi Konfigurasi dengan Ansible",
          period: "Lanjutan",
          description: "Mempelajari Configuration as Code: membuat Inventory, Roles, Playbook idempotence, templating Jinja2, dan deployment multi-node.",
          status: "completed"
        },
        {
          phase: "Tahap 4",
          title: "Active Directory & Keamanan Dasar",
          period: "Fokus Saat Ini",
          description: "Membangun Lab Windows Server 2022, implementasi Domain Controller, Group Policy Objects (GPO), UFW Firewall, dan audit akses.",
          status: "in-progress"
        },
        {
          phase: "Tahap 5",
          title: "Containerization & CI/CD Pipeline",
          period: "Target Berikutnya",
          description: "Rencana eksplorasi Docker, Docker Compose, GitHub Actions, dan integrasi dasar monitoring (Prometheus & Grafana).",
          status: "planned"
        }
      ]
    }
  },

  // 2. KEAHLIAN (SKILLS)
  skills: [
    {
      category: "devops",
      name: "Ansible Automation",
      level: "Menengah",
      percent: 75,
      desc: "Pembuatan Playbook, Roles, Jinja2 template, otomatisasi setup Nginx/UFW.",
      icon: "server"
    },
    {
      category: "devops",
      name: "Linux Administration (Ubuntu/Debian)",
      level: "Menengah",
      percent: 80,
      desc: "Manajemen paket, User/Group permissions, Systemd services, Cronjobs, SSH hardening.",
      icon: "terminal"
    },
    {
      category: "security",
      name: "Active Directory & Windows Server",
      level: "Dasar",
      percent: 60,
      desc: "Setup AD DS, OU, User Management, Group Policy Objects (GPO), DNS lokal.",
      icon: "shield"
    },
    {
      category: "security",
      name: "Keamanan Dasar & Firewall (UFW/Iptables)",
      level: "Dasar",
      percent: 65,
      desc: "Port filtering, SSH key authentication, Fail2ban, prinsip Least Privilege.",
      icon: "shield-check"
    },
    {
      category: "devops",
      name: "Git & GitHub Version Control",
      level: "Menengah",
      percent: 78,
      desc: "Branching, Pull Request, Git Flow dasar, dan dokumentasi repositori teknis.",
      icon: "git-branch"
    },
    {
      category: "scripting",
      name: "Bash & Shell Scripting",
      level: "Menengah",
      percent: 72,
      desc: "Skrip backup database, monitoring disk usage otomatis, parsing log.",
      icon: "code"
    },
    {
      category: "web",
      name: "HTML5, CSS3 & JavaScript Dasar",
      level: "Menengah",
      percent: 82,
      desc: "Desain web responsif, CSS Flexbox/Grid, manipulasi DOM, tema gelap/terang.",
      icon: "layout"
    },
    {
      category: "network",
      name: "Jaringan Komputer Dasar & Troubleshooting",
      level: "Dasar",
      percent: 68,
      desc: "Analisis ping, traceroute, netstat, DNS lookup, pembagian subnet IPv4.",
      icon: "network"
    },
    {
      category: "devops",
      name: "Docker & Kontainer Dasar",
      level: "Sedang Dipelajari",
      percent: 45,
      desc: "Pembuatan Dockerfile dasar, manajemen image, port binding, volume data.",
      icon: "box"
    }
  ],

  // 3. DAFTAR PROYEK (PROJECTS)
  projects: [
    {
      id: "proj-1",
      title: "Otomasi Deployment Web Server dengan Ansible",
      category: "DevOps",
      date: "2026-03-15",
      badgeColor: "devops",
      summary: "Mengotomatisasi instalasi multi-node Nginx web server, konfigurasi virtual host, dan pengaktifan firewall UFW menggunakan Ansible Playbook yang idempoten.",
      image: "assets/images/project-ansible.svg",
      tags: ["Ansible", "Ubuntu Server", "Nginx", "YAML", "Jinja2"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Playbook dapat dijalankan ulang tanpa merusak konfigurasi lama (idempotent)",
        "Konfigurasi Nginx tersimpan dalam template Jinja2 dinamis",
        "Mengurangi waktu setup manual dari 35 menit menjadi 2 menit"
      ],
      architecture: "Ansible Control Node (SSH) ──> Managed Node 1 (Web Server 01) & Managed Node 2 (Web Server 02)",
      fullDescription: "Proyek ini bertujuan memecahkan masalah setup server manual yang rawan human-error. Dengan menggunakan Ansible, satu file playbook dapat mendeteksi sistem operasi target, memperbarui repositori apt, menginstal Nginx, menyalin konfigurasi virtual host berbasis Jinja2, serta mengonfigurasi firewall UFW agar hanya membuka port 22, 80, dan 443."
    },
    {
      id: "proj-2",
      title: "Simulasi Active Directory & Pengamanan GPO",
      category: "Keamanan",
      date: "2026-02-28",
      badgeColor: "security",
      summary: "Membangun lingkungan domain controller Windows Server 2022 di lingkungan virtual lab dengan penerapan Organizational Unit (OU) dan Group Policy Objects.",
      image: "assets/images/project-ad.svg",
      tags: ["Windows Server 2022", "Active Directory", "GPO", "DNS", "VirtualBox"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Struktur OU terpisah untuk Divisi IT, Keuangan, dan Pengguna Umum",
        "GPO penonaktifan port USB drive untuk mencegah pencurian data fisik",
        "Kebijakan password kompleks dan lockout otomatis setelah 3x salah input"
      ],
      architecture: "Domain Controller (DC01.lab.local) ──> GPO Push ──> Client Win10 (PC-HR01, PC-FIN01)",
      fullDescription: "Implementasi lab Active Directory Domain Services (AD DS) yang mensimulasikan tata kelola identitas enterprise. Fokus utama proyek adalah menerapkan prinsip least privilege melalui GPO, audit user login, mapping folder drive departemen secara otomatis, dan isolasi hak akses Administrator domain."
    },
    {
      id: "proj-3",
      title: "Skrip Bash Server Hardening & Audit Keamanan",
      category: "Skrip Otomatis",
      date: "2026-01-20",
      badgeColor: "script",
      summary: "Skrip bash modular untuk mempercepat audit awal dan pengamanan instan pada server Linux baru (ganti port SSH, disable root, konfigurasi UFW).",
      image: "assets/images/project-bash.svg",
      tags: ["Bash", "Linux CLI", "UFW Firewall", "Fail2ban", "Security"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Menonaktifkan login SSH root dan mewajibkan otentikasi SSH Key",
        "Instalasi dan konfigurasi otomatis Fail2ban pencegah brute-force",
        "Menghasilkan laporan audit keamanan dalam format teks ringkas"
      ],
      architecture: "Eksekusi Skrip CLI (sudo bash harden.sh) ──> Pemeriksaan Sistem ──> Konfigurasi ──> Log Audit",
      fullDescription: "Skrip ini dirancang untuk mempermudah sysadmin pemula saat menyiapkan VPS Linux baru. Hanya dengan menjalankan satu perintah, skrip secara interaktif meminta konfigurasi nama user sudo baru, mengganti port default 22 SSH, mengaktifkan UFW dengan whitelist ketat, dan mengonfigurasi backup crontab."
    },
    {
      id: "proj-4",
      title: "Web Portofolio IT & Dokumentasi Teknis",
      category: "Web",
      date: "2026-03-01",
      badgeColor: "web",
      summary: "Website portofolio yang ringan, cepat, dan responsif dengan fitur pencarian real-time, filter kategori proyek, mode gelap/terang, dan catatan blog teknis.",
      image: "assets/images/project-portfolio.svg",
      tags: ["HTML5", "CSS3 Modern", "Vanilla JS", "Responsive Design"],
      githubUrl: "https://github.com",
      demoUrl: "#",
      highlights: [
        "100% responsif di desktop, tablet, dan smartphone",
        "Mode gelap/terang otomatis tersimpan di localStorage browser",
        "Pencarian kata kunci dan pengurutan proyek tanpa muat ulang halaman"
      ],
      architecture: "Static Single Page Application ──> Zero Dependencies ──> High Performance & Fast FCP",
      fullDescription: "Dibuat dengan filosofi kecepatan dan kemudahan akses. Portofolio ini tidak bergantung pada framework berat sehingga dapat dimuat seketika bahkan di jaringan seluler lambat. Kode dirancang modular agar data proyek dan keahlian dapat diperbarui dari satu file data."
    },
    {
      id: "proj-5",
      title: "Kalkulator Subnet IPv4 & Detektor Jaringan CLI",
      category: "Keamanan",
      date: "2025-12-10",
      badgeColor: "security",
      summary: "Aplikasi baris perintah (CLI) untuk menghitung alokasi subnet CIDR, range host yang valid, broadcast address, serta uji ping otomatis multi-host.",
      image: "assets/images/project-network.svg",
      tags: ["Python 3", "Networking", "CIDR", "ICMP", "CLI Tool"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Menghitung Network ID, Broadcast, Subnet Mask, dan Usable Host",
        "Validasi input IP address dan penanganan error yang ramah pemula",
        "Fitur batch ping untuk mendeteksi host yang aktif dalam subnet"
      ],
      architecture: "Input CIDR (192.168.1.0/24) ──> Binary Mask Calculation ──> Host Scan ICMP ──> Output Tabel",
      fullDescription: "Membantu pelajar dan staf IT junior dalam merencanakan pembagian segmentasi VLAN dan subnetting IP tanpa harus menghitung biner secara manual. Dilengkapi pemindai ICMP sederhana untuk memverifikasi ketersediaan IP di jaringan lokal."
    },
    {
      id: "proj-6",
      title: "Sistem Backup Otomatis Terenkripsi ke Cloud",
      category: "Skrip Otomatis",
      date: "2025-11-18",
      badgeColor: "script",
      summary: "Otomasi backup database MySQL dan direktori konfigurasi server dengan enkripsi GPG dan sinkronisasi berkala ke storage berbasis cloud.",
      image: "assets/images/project-backup.svg",
      tags: ["Bash", "MySQL Dump", "GPG Encryption", "Cron", "Cloud Storage"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Kompresi tar.gz dan enkripsi simetris AES-256 via GPG",
        "Penjadwalan otomatis setiap pukul 02:00 pagi menggunakan Cronjob",
        "Rotasi file otomatis: menghapus backup lama berumur lebih dari 14 hari"
      ],
      architecture: "Cron Trigger ──> DB Dump & Tar ──> GPG Encrypt ──> Cloud Sync ──> Retention Clean",
      fullDescription: "Data adalah aset paling penting dalam sistem IT. Proyek skrip bash ini memastikan seluruh database dan konfigurasi Nginx/Apache di-dump, dikompresi, dan dienkripsi sebelum diunggah ke penyimpanan cloud, sehingga aman dari kebocoran data."
    }
  ],

  // 4. SERTIFIKAT & PELATIHAN
  certificates: [
    {
      id: "cert-1",
      title: "Dasar Administrasi Sistem Linux",
      issuer: "Dicoding Indonesia & LPI Partner",
      year: "2025",
      credentialId: "LINUX-ESS-88291",
      image: "assets/images/cert-linux.svg",
      skillsCovered: ["Linux CLI", "File Hierarchy", "Permissions", "Bash Basics"],
      verifyUrl: "https://example.com/verify"
    },
    {
      id: "cert-2",
      title: "Ansible for Infrastructure Automation",
      issuer: "Coursera / Red Hat Learning Community",
      year: "2025",
      credentialId: "ANS-AUTO-40912",
      image: "assets/images/cert-ansible.svg",
      skillsCovered: ["Playbooks", "Inventory Management", "Roles", "YAML"],
      verifyUrl: "https://example.com/verify"
    },
    {
      id: "cert-3",
      title: "Network Addressing & Defense Basics",
      issuer: "Cisco Networking Academy",
      year: "2025",
      credentialId: "CSCO-NET-77142",
      image: "assets/images/cert-cisco.svg",
      skillsCovered: ["IPv4 / IPv6", "Subnetting", "Firewall Fundamentals", "Wireshark"],
      verifyUrl: "https://example.com/verify"
    },
    {
      id: "cert-4",
      title: "Windows Server & Active Directory Fundamentals",
      issuer: "IT Professional Academy",
      year: "2026",
      credentialId: "WIN-AD-99321",
      image: "assets/images/cert-ad.svg",
      skillsCovered: ["Active Directory DS", "Domain Controller", "Group Policy", "DNS"],
      verifyUrl: "https://example.com/verify"
    }
  ],

  // 5. CATATAN BELAJAR / BLOG IT
  blogPosts: [
    {
      id: "blog-1",
      title: "Dasar Ansible: Kenapa Idempotency Begitu Penting dalam Otomasi Server?",
      category: "DevOps",
      date: "2026-03-10",
      readTime: "4 menit baca",
      summary: "Memahami konsep idempotency dalam Ansible playbook dan perbandingannya dengan eksekusi skrip bash biasa saat mengonfigurasi puluhan server.",
      content: `
### Apa itu Idempotency?
Dalam dunia otomasi infrastruktur, **idempotency** adalah sifat di mana suatu perintah atau operasi dapat dijalankan berkali-kali namun tetap menghasilkan status akhir yang sama persis tanpa efek samping tak terduga.

### Perbandingan Bash Script vs Ansible
Bayangkan Anda ingin memastikan baris \`Listen 8080\` ada di file konfigurasi web server:
- **Dengan Bash sederhana:** Jika skrip dijalankan 3 kali dengan \`echo "Listen 8080" >> /etc/nginx.conf\`, baris tersebut akan tertulis 3 kali dan merusak konfigurasi.
- **Dengan Ansible modul lineinfile:** Ansible akan memeriksa apakah baris sudah ada. Jika sudah ada, status menjadi *OK (tidak ada perubahan)*. Jika belum ada, status menjadi *CHANGED*.

\`\`\`yaml
- name: Pastikan Nginx terpasang dan versi terbaru
  hosts: webservers
  become: yes
  tasks:
    - name: Install paket nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Pastikan service nginx aktif
      service:
        name: nginx
        state: started
        enabled: yes
\`\`\`

### Kesimpulan Pembelajaran
Menggunakan Ansible bukan hanya membuat pekerjaan lebih cepat, tetapi juga memberikan jaminan stabilitas sistem karena status server selalu konsisten dengan kode playbook yang kita tulis.
      `
    },
    {
      id: "blog-2",
      title: "Langkah Demi Langkah: Membangun Lab Active Directory di VirtualBox",
      category: "Keamanan",
      date: "2026-02-18",
      readTime: "6 menit baca",
      summary: "Panduan praktis menyiapkan Domain Controller Windows Server 2022 dan menghubungkan client Windows 10 di lingkungan jaringan internal yang terisolasi.",
      content: `
### Persiapan Lingkungan Virtual
Sebelum memulai, siapkan dua mesin virtual (VM) di VirtualBox:
1. **VM 1 (Server):** Windows Server 2022 (RAM 4GB, Hostname: \`DC01\`)
2. **VM 2 (Client):** Windows 10/11 Pro (RAM 3GB, Hostname: \`PC-CLI01\`)
3. **Pengaturan Jaringan:** Keduanya disetel ke mode **Internal Network** (misal: nama adapter \`intnet-lab\`).

### Langkah 1: Konfigurasi Static IP pada Server
Domain Controller wajib memiliki IP statis:
- **IP Address:** \`192.168.10.10\`
- **Subnet Mask:** \`255.255.255.0\`
- **Default Gateway:** \`192.168.10.1\`
- **Preferred DNS Server:** \`127.0.0.1\` (diri sendiri)

### Langkah 2: Install Role AD DS & Promosi Server
1. Buka **Server Manager** -> *Add Roles and Features*.
2. Pilih role **Active Directory Domain Services (AD DS)**.
3. Setelah instalasi selesai, klik notifikasi bendera kuning: *"Promote this server to a domain controller"*.
4. Pilih *Add a new forest*, masukkan root domain misal: \`lab.local\`.
5. Tentukan kata sandi DSRM (Directory Services Restore Mode) yang aman.

### Langkah 3: Join Domain pada Client
Pada client Windows 10, pastikan DNS client mengarah ke IP Server (\`192.168.10.10\`). Lalu masuk ke *System Properties* -> *Change* -> pilih *Domain* dan masukkan \`lab.local\`. Masukkan kredensial Administrator domain. Restart client, dan Anda berhasil masuk ke domain!
      `
    },
    {
      id: "blog-3",
      title: "Checklist 5 Menit: Pengamanan Dasar (Hardening) Server Linux Baru",
      category: "Keamanan",
      date: "2026-01-25",
      readTime: "5 menit baca",
      summary: "Daftar tindakan krusial saat baru pertama kali menyewa VPS Linux: ganti user root, kunci SSH key, pasang UFW, dan hindari serangan brute force.",
      content: `
### Mengapa Server Baru Rentan?
Dalam hitungan menit setelah VPS dengan IP publik menyala, bot otomatis di seluruh dunia akan mulai memindai port 22 dan mencoba kombinasi kata sandi umum (\`root\`, \`admin\`, \`123456\`).

### 5 Langkah Proteksi Wajib:

#### 1. Buat User Biasa dengan Akses Sudo
Jangan gunakan akun root untuk aktivitas sehari-hari:
\`\`\`bash
adduser sysadmin
usermod -aG sudo sysadmin
\`\`\`

#### 2. Pasang SSH Key & Matikan Password Authentication
Salin public key Anda dari laptop ke server:
\`\`\`bash
ssh-copy-id sysadmin@ip_server
\`\`\`
Edit file \`/etc/ssh/sshd_config\`:
\`\`\`bash
PermitRootLogin no
PasswordAuthentication no
\`\`\`
Restart service SSH: \`sudo systemctl restart ssh\`

#### 3. Aktifkan Firewall UFW (Uncomplicated Firewall)
Hanya buka port yang memang diperlukan:
\`\`\`bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
\`\`\`

#### 4. Pasang Fail2ban untuk Blokir Otomatis IP Nakal
Fail2ban memantau log SSH dan secara otomatis memblokir IP yang gagal login lebih dari batas yang ditentukan.
\`\`\`bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
\`\`\`
      `
    },
    {
      id: "blog-4",
      title: "Mengenal Tool Esensial Troubleshooting Jaringan di Terminal",
      category: "Jaringan",
      date: "2025-12-05",
      readTime: "3 menit baca",
      summary: "Memanfaatkan utilitas bawaan Linux seperti ping, traceroute, netstat/ss, dan dig untuk melacak letak kegagalan koneksi server secara sistematis.",
      content: `
### Alur Berpikir saat Troubleshooting
Ketika server tidak bisa diakses, jangan langsung panik atau me-restart server. Ikuti alur bottom-up:
1. **Apakah interface fisik/IP aktif?** \`ip addr show\`
2. **Apakah gateway lokal merespons?** \`ping 192.168.1.1\`
3. **Apakah DNS mampu menerjemahkan domain?** \`dig google.com\` atau \`nslookup domain.com\`
4. **Di mana paket terputus?** \`traceroute -I 8.8.8.8\`
5. **Apakah aplikasi web benar-benar mendengarkan (listening) di port terkait?**
\`\`\`bash
# Cek port yang terbuka dan status listener:
sudo ss -tulpn
\`\`\`
Perintah \`ss\` adalah pengganti modern dari \`netstat\` yang jauh lebih cepat dan informatif.
      `
    }
  ]
};

// Export jika dibutuhkan di modul
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}

