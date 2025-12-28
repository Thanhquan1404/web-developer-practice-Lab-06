'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-xl sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold hover:scale-105 transition-transform">
          <span className="text-3xl">🚀</span>
          <span>Knowledge Hub</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-blue-100 transition-colors font-semibold">
            Home
          </Link>
          <Link href="/docs" className="hover:text-blue-100 transition-colors font-semibold">
            Docs
          </Link>
          <a href="#features" className="hover:text-blue-100 transition-colors font-semibold">
            Features
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4 space-y-4">
          <Link href="/" className="block hover:text-blue-100 transition-colors">
            Home
          </Link>
          <Link href="/docs" className="block hover:text-blue-100 transition-colors">
            Docs
          </Link>
          <a href="#features" className="block hover:text-blue-100 transition-colors">
            Features
          </a>
        </div>
      )}
    </header>
  );
}