'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { AuthProvider } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <html lang="en">
      <head>
        <title>E9Shop - Complete Service Solutions for Sri Lankans in Korea</title>
        <meta name="description" content="E9 Pay money transfer, insurance, visa services, Sail Academy courses, stock market investment, and legal help. Trusted by 10,000+ Sri Lankans in South Korea. 24/7 support available." />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {!isAdminRoute && <Header />}
          <main>{children}</main>
          {!isAdminRoute && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}