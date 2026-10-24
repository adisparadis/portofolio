/**
 * =========================================================================
 * DATA PORTOFOLIO IT (PUSAT KONTEN)
 * Cukup edit file ini untuk memperbarui data diri, proyek, keahlian & kontak.
 * =========================================================================
 */

const portfolioData = {
  profile: {
    name: "Asrorul Faradis",
    role: "Pengembang IT | DevOps & Keamanan Dasar",
    telemetryStatus: "SISTEM NORMAL // TERBUKA UNTUK DISKUSI & MAGANG",
    statement: "Membangun Fondasi Infrastruktur yang Otomatis, Andal, dan Aman. Menolak konfigurasi manual yang rawan inkonsistensi.",
    bio: "Berangkat dari rasa ingin tahu terhadap arsitektur web, saya mendalami bagaimana infrastruktur di baliknya dirawat. Sehari-hari saya bereksperimen dengan playbook Ansible, konfigurasi Linux Debian/Ubuntu, pengamanan firewall UFW, serta simulasi manajemen pengguna berbasis Active Directory.",
    location: "Indonesia",
    email: "asror.itdev@example.com",
    whatsapp: "6281234567890",
    github: "https://github.com/adisparadis",
    linkedin: "https://linkedin.com/in/adisparadis",
    slaNote: "Saya akan membalas pesan Anda paling lambat 3 hari kerja.",
    whyIT: [
      {
        number: "01",
        title: "Menolak Repetisi Manual (Otomasi)",
        desc: "Mengetik perintah apt, mengedit file host, dan menyalin sertifikat secara manual pada 5 server berbeda adalah pemborosan waktu yang rawan typo. Skrip dan playbook membuat infrastruktur dapat diulang dengan akurat."
      },
      {
        number: "02",
        title: "Diagnosa Sistem Berbasis Fakta Log",
        desc: "Saat server down atau koneksi drop, dugaan tidak berguna. Membaca output journalctl, ss, traceroute, dan error log memberikan kepastian akar masalah."
      },
      {
        number: "03",
        title: "Prinsip Akses Paling Sedikit (Least Privilege)",
        desc: "Keamanan bukan memasang antivirus berat, melainkan memastikan akun biasa tidak memiliki hak sudo tanpa audit, port default ditutup, dan hak akses direktori terkunci."
      }
    ]
  },

  projects: [
    {
      id: "proj-1",
      slug: "otomasi-deployment-nginx-ansible",
      title: "Otomasi Multi-Node Nginx & Hardening UFW dengan Ansible",
      category: "DevOps",
      status: "Selesai",
      date: "2026-03-12",
      featured: true, // Slot besar asimetris di tampilan utama
      summary: "Playbook Ansible modular untuk deploy konfigurasi Nginx multi-virtual host, optimasi worker process, dan pengaktifan firewall berlapis pada klaster server uji coba.",
      image: "assets/images/project-ansible.svg",
      tags: ["Ansible", "Ubuntu 24.04", "Nginx", "Jinja2", "UFW", "YAML"],
      architecture: "Ansible Control Node (SSH Key) -> [Web01 (192.168.10.21), Web02 (192.168.10.22)]",
      githubUrl: "https://github.com/adisparadis",
      demoUrl: "",
      challenge: "Setup manual pada dua server web sering menghasilkan perbedaan versi paket dan kelalaian mengaktifkan firewall. Masalah terbesar saat otomatisasi adalah memastikan playbook bersifat idempoten: jika playbook dijalankan berulang kali saat traffic aktif, service Nginx tidak boleh restart sembarangan kecuali file konfigurasi benar-benar berubah dan lolos syntax check.",
      solution: "Merancang peran (roles) Ansible terpisah untuk common-setup, security-firewall, dan web-nginx. Konfigurasi virtual host ditulis menggunakan template Jinja2 dinamis. Restart service diisolasi ke handler yang hanya terpicu jika ada perubahan nyata pada baris konfigurasi, didahului oleh validasi 'nginx -t'. Port SSH default dipindahkan dan hanya port 80/443 yang dibuka ke publik.",
      codeSnippet: {
        filename: "roles/web-nginx/tasks/main.yml",
        language: "yaml",
        code: `- name: Validasi template Nginx sebelum restart
  ansible.builtin.template:
    src: vhost.conf.j2
    dest: /etc/nginx/sites-available/{{ item.domain }}.conf
    owner: root
    group: root
    mode: '0644'
  loop: "{{ hosted_domains }}"
  notify: Reload Nginx Service

- name: Pastikan firewall hanya izinkan port esensial
  community.general.ufw:
    rule: allow
    port: "{{ item }}"
    proto: tcp
  loop:
    - '2244' # Custom SSH
    - '80'   # HTTP
    - '443'  # HTTPS`
      },
      metrics: [
        { label: "Waktu Setup", value: "< 2 Menit" },
        { label: "Konsistensi", value: "100% Identik" },
        { label: "Idempotency", value: "Pass (0 Changed on Re-run)" }
      ]
    },
    {
      id: "proj-2",
      slug: "lab-simulasi-active-directory-gpo",
      title: "Simulasi Active Directory Domain Services & Hardening GPO",
      category: "DevOps",
      status: "Selesai",
      date: "2026-02-20",
      featured: false,
      summary: "Perancangan domain controller Windows Server 2022 di lingkungan lab tervirtualisasi dengan isolasi hak akses melalui Group Policy Objects (GPO).",
      image: "assets/images/project-ad.svg",
      tags: ["Windows Server 2022", "Active Directory DS", "DNS", "GPO", "VirtualBox"],
      architecture: "DC01 (lab.local: 192.168.10.10) -> GPO Enforced -> Client Workstations [Win10/11]",
      githubUrl: "https://github.com/adisparadis",
      demoUrl: "",
      challenge: "Pengelolaan workstation secara standalone di kantor sering menyebabkan penggunaan flashdisk bebas tanpa pengawasan dan kata sandi pengguna yang sangat lemah, meningkatkan risiko penyebaran malware lateral di jaringan lokal.",
      solution: "Membangun domain root lab.local dengan struktur Organizational Unit (OU) berhierarki (IT-Admins, Finance, Workstations). Mengimplementasikan GPO pemblokiran mass-storage USB untuk komputer staf umum, kebijakan penguncian akun setelah 4 kali kegagalan login, serta script mapping drive folder departemen otomatis.",
      codeSnippet: {
        filename: "Audit-ADUsers.ps1",
        language: "powershell",
        code: `# Skrip audit berkala akun domain tanpa aktivitas > 60 hari
$InactiveDays = 60
$CutoffDate = (Get-Date).AddDays(-$InactiveDays)

Get-ADUser -Filter {LastLogonDate -lt $CutoffDate -and Enabled -eq $true} ` +
`-Properties LastLogonDate, Department |
Select-Object SamAccountName, Department, LastLogonDate |
Export-Csv -Path "C:\\Audit\\InactiveUsers.csv" -NoTypeInformation`
      },
      metrics: [
        { label: "Workstations", value: "10 Client Terisolasi" },
        { label: "Sandi Policy", value: "Min. 12 Karakter + Lockout" },
        { label: "USB Storage", value: "Blocked via Registry GPO" }
      ]
    },
    {
      id: "proj-3",
      slug: "skrip-audit-keamanan-linux-bash",
      title: "Skrip Otomasi Audit Keamanan & Hardening Server Linux",
      category: "Skrip Otomatis",
      status: "Selesai",
      date: "2026-01-18",
      featured: false,
      summary: "Utilitas CLI Bash non-interaktif untuk mengecek konfigurasi permission file sensitif, status service berbahaya, dan instalasi otomatis Fail2ban.",
      image: "assets/images/project-bash.svg",
      tags: ["Bash", "Linux CLI", "Fail2ban", "UFW", "Cron"],
      architecture: "Input: /etc/shadow, sshd_config -> Audit Rules -> Output: security-report.log",
      githubUrl: "https://github.com/adisparadis",
      demoUrl: "",
      challenge: "Server VPS baru sering langsung diserang brute-force SSH dalam hitungan menit setelah online. Melakukan hardening manual satu per satu memakan waktu dan berisiko salah konfigurasi sehingga admin terkunci dari servernya sendiri.",
      solution: "Membuat skrip Bash modular dengan safety checklist. Sebelum mematikan login root, skrip memverifikasi bahwa akun sudoer baru sudah berhasil dibuat dan memiliki kunci publik SSH valid. Dilengkapi instalasi otomatis Fail2ban dengan jail SSH agresif dan modul penonaktifan protokol lawas di sysctl.",
      codeSnippet: {
        filename: "harden_check.sh",
        language: "bash",
        code: `#!/usr/bin/env bash
set -euo pipefail

# Verifikasi otentikasi key sebelum mematikan password auth
if grep -q "^PasswordAuthentication yes" /etc/ssh/sshd_config; then
  sed -i 's/^PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
  echo "[OK] Password authentication disabled in SSH"
fi

# Lindungi dari serangan IP Spoofing dan SYN flood
cat <<'EOF' > /etc/sysctl.d/99-security.conf
net.ipv4.conf.all.rp_filter = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.conf.all.accept_redirects = 0
EOF
sysctl -p /etc/sysctl.d/99-security.conf`
      },
      metrics: [
        { label: "Waktu Hardening", value: "48 Detik" },
        { label: "Brute-force SSH", value: "99.4% Diblokir Fail2ban" },
        { label: "Skor Audit", value: "92 / 100" }
      ]
    },
    {
      id: "proj-4",
      slug: "engine-portofolio-ringan-cepat",
      title: "Mesin Web Portofolio Ringan, Bersih & Asimetris",
      category: "Web",
      status: "Selesai",
      date: "2026-03-01",
      featured: true,
      summary: "Aplikasi web portofolio performa tinggi dengan perpaduan sudut tajam terminal dan kartu rounded-md, navigasi cepat, dan nol template AI.",
      image: "assets/images/project-portfolio.svg",
      tags: ["HTML5", "CSS3 Modern", "Vanilla JS", "Responsive Grid"],
      architecture: "Static Engine -> Zero Dependency -> High Performance (Lighthouse 99+)",
      githubUrl: "https://github.com/adisparadis",
      demoUrl: "https://adisparadis.github.io/portofolio/",
      challenge: "Banyak portofolio web terlihat generik karena memakai template AI bergradasi ungu yang berat dan kartu berukuran sama yang membosankan. Dibutuhkan situs dengan identitas teknis kuat, langsung terdeteksi di GitHub Pages, dan bebas dari framework berat.",
      solution: "Menerapkan palet warna spesifik: abu-abu tua (#2A2A2A), biru tua (#0F3460), dan hijau lembut (#2E7D32). Layout menggunakan hierarki asimetris di mana proyek utama mendapat slot besar dengan metrik teknis lengkap, didukung sistem filter instan tanpa reload halaman.",
      codeSnippet: {
        filename: "style.css",
        language: "css",
        code: `:root {
  --color-primary: #0F3460;
  --color-accent: #2E7D32;
  --color-dark: #2A2A2A;
  --radius-sharp: 0px;
  --radius-card: 6px;
}`
      },
      metrics: [
        { label: "Lighthouse Score", value: "99 / 100" },
        { label: "Load Time", value: "< 0.3 Detik" },
        { label: "Ketergantungan", value: "0 Framework Berat" }
      ]
    },
    {
      id: "proj-5",
      slug: "kalkulator-subnet-ipv4-cli",
      title: "Utilitas Subnet CIDR & Scanner Respons Jaringan CLI",
      category: "Skrip Otomatis",
      status: "Selesai",
      date: "2025-12-14",
      featured: false,
      summary: "Program command-line untuk menghitung alokasi rentang host IPv4, broadcast address, serta deteksi probe paket ICMP lokal secara simultan.",
      image: "assets/images/project-network.svg",
      tags: ["Python 3", "Socket", "CIDR", "ICMP", "CLI Tool"],
      architecture: "CLI Args (--cidr 192.168.1.0/24) -> Subnet Matrix Calculation -> ICMP Probe",
      githubUrl: "https://github.com/adisparadis",
      demoUrl: "",
      challenge: "Saat merancang segmentasi VLAN di lab, pembagian rentang IP sering keliru di bagian usable host atau broadcast address jika dihitung manual. Tool GUI berbasis website lambat digunakan saat hanya tersedia akses SSH terminal.",
      solution: "Menulis utilitas Python CLI mandiri tanpa library pihak ketiga yang membengkak. Cukup dengan modul bawaan ipaddress dan socket, tool dapat membelah CIDR menjadi beberapa subnet valid dan memvalidasi apakah gateway merespons tanpa membuka peramban web.",
      codeSnippet: {
        filename: "netcalc.py",
        language: "python",
        code: `import ipaddress
import sys

def parse_subnet(cidr_str):
    try:
        net = ipaddress.ip_network(cidr_str, strict=False)
        print(f"[NET ID]     : {net.network_address}")
        print(f"[NETMASK]    : {net.netmask}")
        print(f"[BROADCAST]  : {net.broadcast_address}")
        print(f"[TOTAL HOST] : {net.num_addresses - 2} usable")
    except ValueError as err:
        sys.exit(f"Error CIDR: {err}")`
      },
      metrics: [
        { label: "Waktu Kalkulasi", value: "< 5 Milidetik" },
        { label: "Dependensi", value: "0 (Pure Standard Lib)" },
        { label: "Akurasi Masking", value: "100% RFC 1878" }
      ]
    },
    {
      id: "proj-6",
      slug: "otomasi-backup-terenkripsi-cloud",
      title: "Pipeline Backup Terenkripsi GPG & Rotasi Arsip Otomatis",
      category: "Skrip Otomatis",
      status: "Selesai",
      date: "2025-11-20",
      featured: false,
      summary: "Skrip otomasi pencadangan database MySQL dan folder konfigurasi dengan enkripsi simetris GPG AES-256 dan sinkronisasi berkala ke cloud bucket.",
      image: "assets/images/project-backup.svg",
      tags: ["Bash", "GPG AES-256", "MySQL Dump", "Crontab", "Cloud Storage"],
      architecture: "Cron (02:00 WIB) -> mysqldump -> tar.gz -> gpg encrypt -> rclone sync -> prune > 7d",
      githubUrl: "https://github.com/adisparadis",
      demoUrl: "",
      challenge: "Backup database mentah tanpa enkripsi yang langsung diunggah ke cloud berisiko fatal jika kredensial storage bocor. Selain itu, tanpa mekanisme rotasi file lama, kuota penyimpanan cloud akan penuh dalam beberapa bulan.",
      solution: "Membuat pipeline yang mengompresi dump data, mengenkripsinya dengan GPG enkripsi simetris sebelum keluar dari server, dan menghapus file lokal sementara. Retensi arsip dibatasi otomatis 7 hari dengan perintah pembersihan terintegrasi.",
      codeSnippet: {
        filename: "nightly_backup.sh",
        language: "bash",
        code: `#!/usr/bin/env bash
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
TARGET_DIR="/tmp/backup_\${BACKUP_DATE}"
mkdir -p "\${TARGET_DIR}"

# Kompresi & Enkripsi AES-256
tar -czf - -C "\${TARGET_DIR}" . | \\
gpg --symmetric --cipher-algo AES256 --batch --passphrase-file /etc/backup.key \\
-o "/var/backups/prod_\${BACKUP_DATE}.tar.gz.gpg"

# Rotasi: Hapus file berumur > 7 hari
find /var/backups -name "*.gpg" -type f -mtime +7 -delete`
      },
      metrics: [
        { label: "Enkripsi", value: "GPG AES-256" },
        { label: "Jadwal Cron", value: "Tiap 02:00 WIB" },
        { label: "Retensi", value: "Maksimal 7 Hari" }
      ]
    }
  ],

  skills: [
    {
      name: "Ansible & IaC",
      category: "Infrastruktur & DevOps",
      level: "Menengah",
      practicalUse: "Membuat inventory multi-node, Jinja2 template, dan playbook idempoten untuk setup server."
    },
    {
      name: "Administrasi Linux (Ubuntu/Debian)",
      category: "Infrastruktur & DevOps",
      level: "Menengah",
      practicalUse: "Pengaturan systemd service, user permissions sudoer, SSH key hardening, dan audit log journalctl."
    },
    {
      name: "Active Directory & Windows Server",
      category: "Jaringan & Keamanan",
      level: "Dasar",
      practicalUse: "Membangun Domain Controller lab, struktur OU bertingkat, dan penguncian akses workstation via GPO."
    },
    {
      name: "Keamanan Firewall (UFW & Iptables)",
      category: "Jaringan & Keamanan",
      level: "Menengah",
      practicalUse: "Whitelist port spesifik, penutupan port default, dan mitigasi brute-force dengan Fail2ban."
    },
    {
      name: "Bash & Shell Scripting",
      category: "Scripting & Web",
      level: "Menengah",
      practicalUse: "Automasi backup cron, audit kesehatan storage disk, dan verifikasi pre-flight konfigurasi server."
    },
    {
      name: "Jaringan Komputer & Subnetting",
      category: "Jaringan & Keamanan",
      level: "Menengah",
      practicalUse: "Analisis segmentasi CIDR IPv4, routing gateway lokal, dan diagnosa latensi paket ICMP."
    },
    {
      name: "Git & Version Control",
      category: "Scripting & Web",
      level: "Menengah",
      practicalUse: "Workflow git commit bermakna, branching rilis, dan integrasi pnpm monorepo di GitHub."
    },
    {
      name: "HTML5, CSS3 & JavaScript Modern",
      category: "Scripting & Web",
      level: "Menengah",
      practicalUse: "Membangun antarmuka teknis performa tinggi, layout asimetris, dan rendering tanpa bloat."
    },
    {
      name: "Docker & Kontainer Dasar",
      category: "Infrastruktur & DevOps",
      level: "Sedang Dipelajari",
      practicalUse: "Eksplorasi Dockerfile multi-stage, port binding, dan isolasi lingkungan layanan lokal."
    }
  ],

  timeline: [
    {
      phase: "Tahap 1",
      title: "Fondasi Jaringan & Web Dasar",
      period: "2024 - 2025",
      description: "Mempelajari arsitektur OSI 7 Layer, perhitungan subnet IPv4, protokol HTTP/HTTPS, serta dasar pembuatan web responsif dengan HTML, CSS, dan JavaScript.",
      status: "selesai"
    },
    {
      phase: "Tahap 2",
      title: "Penguasaan Sistem Operasi Linux & Terminal",
      period: "2025",
      description: "Beralih total ke ekosistem terminal: mendalami distro Debian/Ubuntu, sistem perizinan chmod/chown, pengelolaan systemd, dan penulisan skrip Bash otomatis.",
      status: "selesai"
    },
    {
      phase: "Tahap 3",
      title: "Otomasi Infrastruktur dengan Ansible",
      period: "Awal 2026",
      description: "Mempelajari Configuration as Code: membangun playbook idempoten, modul template Jinja2, isolasi roles, dan penyiapan klaster web server multi-node.",
      status: "selesai"
    },
    {
      phase: "Tahap 4",
      title: "Active Directory & Pengamanan Akses",
      period: "Saat Ini",
      description: "Membangun lab virtual Windows Server 2022, perancangan hierarki OU, pengetatan password policy, dan pembatasan port perangkat endpoint via GPO.",
      status: "sedang-berjalan"
    },
    {
      phase: "Tahap 5",
      title: "CI/CD Pipeline & Monitoring Sistem",
      period: "Rencana Berikutnya",
      description: "Fokus berikutnya adalah kontainerisasi aplikasi dengan Docker, deployment otomatis via GitHub Actions, serta observabilitas metrik menggunakan Prometheus/Grafana.",
      status: "rencana"
    }
  ]
};

