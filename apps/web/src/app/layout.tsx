import type { Metadata } from 'next';
import './globals.css';
import { Navbar, Footer } from '@porto/ui-komponen';
import { portfolioProfile } from '@porto/util-bersama';

export const metadata: Metadata = {
  title: `${portfolioProfile.name} | ${portfolioProfile.role}`,
  description: portfolioProfile.statement,
  keywords: [
    'DevOps',
    'Ansible',
    'Linux System Administration',
    'Active Directory',
    'Bash Scripting',
    'Portofolio IT'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col engineering-grid selection:bg-[#0F3460] selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

