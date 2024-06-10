import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar, Sidebar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard Template',
  description: 'Dashboard Template to make your work easier',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={'bg-primary text-typography'}>
        <Sidebar />
        <div className='w-[calc(100%-200px)] md:ml-[200px] '>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
