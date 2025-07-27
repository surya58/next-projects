import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../app/context/CartContext';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopApp - Modern E-commerce',
  description: 'A modern e-commerce application built with Next.js and shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}