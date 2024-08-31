// src/app/layout.tsx

import { ReactNode } from 'react';
import { WrapFunction } from '@/context/userContext';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <WrapFunction>
      <html lang="en">
        <body className={inter.className}>
          <NavBar/>
          {children}
        </body>
      </html>
    </WrapFunction>
  );
}
