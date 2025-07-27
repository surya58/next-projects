import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Next.js To-Do App",
  description: "A simple to-do app using React and Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen w-full bg-gray-100 overflow-x-hidden">
        <nav className="bg-white shadow p-4">
          <div className="max-w-4xl mx-auto flex gap-4">
            <Link href="/" className="text-blue-600 font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 font-semibold">
              About
            </Link>
          </div>
        </nav>
        <main className="w-full max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
