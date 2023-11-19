import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wojciech Glid - Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        { children }
        <footer className="w-full h-[100px] flex justify-center items-center">
          <p className="text-xs">© 2023 Wojciech Glid. All rights reserved</p>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
