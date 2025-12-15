'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiHeart } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <p>Free shipping on orders over Rs. 5000! 🚚</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 border border-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/e9pay-logo.png"
                alt="E9Shop"
                fill
                className="object-contain p-2"
              />
            </div>
            <span className="text-2xl font-bold text-black hidden sm:block">
              E9Shop
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Categories
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Deals
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search Icon (Mobile) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
            >
              <FiSearch size={24} />
            </button>

            {/* Favorites */}
            <Link href="/favorites" className="hidden sm:block text-gray-700 hover:text-blue-600 relative p-2">
              <FiHeart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="text-gray-700 hover:text-blue-600 relative p-2">
              <FiShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* User */}
            <Link href="/profile" className="hidden sm:block text-gray-700 hover:text-blue-600 p-2">
              <FiUser size={24} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 p-2"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="lg:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Shop
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Categories
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Deals
            </Link>
            <Link href="/favorites" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Favorites
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Profile
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}