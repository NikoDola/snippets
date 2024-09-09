import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { WrapUsers } from '@/context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WrapUsers>
          {children}
        </WrapUsers>
      </body>
    </html>
  );
}
