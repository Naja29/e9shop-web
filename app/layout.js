import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E9Shop - Your Shopping Destination',
  description: 'Shop the best products at great prices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}