'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Store, Menu, X } from 'lucide-react';
import { useCart } from '../app/context/CartContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-emerald-800 shadow-md">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2">
          <Store className="h-6 w-6 fill-white" />
          <Link href="/" className="text-2xl font-bold text-white">
            E-Shop
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-white" asChild>
            <Link href="/products">Products</Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative text-white">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="text-white" />
          </Button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X />
          </Button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
            <Link href="/products">Products</Link>
          </Button>

          <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
            <Link href="/cart" className="flex items-center justify-between w-full">
              <span>Cart</span>
              {totalItems > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
