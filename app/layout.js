import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E9Shop - Complete Service Solutions for Sri Lankans in Korea',
  description: 'E9 Pay money transfer, insurance, visa services, Sail Academy courses, stock market investment, and legal help. Trusted by 10,000+ Sri Lankans in South Korea. 24/7 support available.',
  keywords: 'E9Shop, E9 Pay, money transfer Korea Sri Lanka, insurance Korea, visa consultation Korea, Sail Academy, Korean language, Sri Lankan services Korea, Colombo stock market',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}