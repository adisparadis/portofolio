/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@porto/ui-komponen', '@porto/util-bersama'],
  reactStrictMode: true
  // 'standalone' dihapus: tidak diperlukan di Vercel, dan menyebabkan EPERM symlink di Windows
};

export default nextConfig;

