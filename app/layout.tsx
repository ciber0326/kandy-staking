import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import Header from './Header';

export const metadata = {
  title: 'Moon Moverz',
  description: 'Moon Moverz staking platform',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header/>
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
