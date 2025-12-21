'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiHeart, FiChevronDown } from 'react-icons/fi';

const servicesMenu = [
  { 
    name: 'E9 Pay Service', 
    href: '/service/e9-pay',
    items: [
      { name: 'Foreign Transfer', href: '/service/foreign-transfer' },
      { name: 'Domestic Transfer', href: '/service/domestic-transfer' },
      { name: 'Bill Payments', href: '/service/bill-payments' },
      { name: 'Bank Account Opening', href: '/service/bank-account' },
    ]
  },
  { name: 'Sail Academy', href: '/service/sail-academy' },
  { name: 'Air Tickets', href: '/service/air-tickets' },
  { name: 'Insurance', href: '/service/insurance' },
  { name: 'Student Visa', href: '/service/student-visa' },
  { name: 'Stock Market', href: '/service/stock-market' },
  { name: 'Visa Consultation', href: '/service/visa-consultation' },
  { name: 'Law Help', href: '/service/law-help' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <p>🇱🇰🇰🇷 Serving Sri Lankans in South Korea | 24/7 Helpline: 010-2735-6199 | Safe & Secure Services</p>
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
            <div className="hidden sm:block">
              {/* <div className="text-2xl font-bold text-blue-600">E9Shop</div>
              <div className="text-xs text-gray-500">Your Trusted Partner</div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                Services
                <FiChevronDown size={16} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                  {servicesMenu.map((service) => (
                    <div key={service.name}>
                      <Link
                        href={service.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                      {service.items && (
                        <div className="pl-4 border-l-2 border-gray-100 ml-6">
                          {service.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              • {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden xl:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search Icon (Tablet/Mobile) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="xl:hidden text-gray-700 hover:text-blue-600 p-2"
            >
              <FiSearch size={24} />
            </button>

            {/* Login/Register Button */}
            <Link 
              href="/login"
              className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              <FiUser size={18} />
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2"
            >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="xl:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Home
            </Link>
            
            {/* Services in Mobile */}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <div className="text-xs font-bold text-gray-500 px-4 mb-2">SERVICES</div>
              {servicesMenu.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition-colors block"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-2 mt-2">
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors block"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors block"
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors block"
              >
                Blog
              </Link>
            </div>

            <Link 
              href="/login"
              className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center mt-4"
            >
              Login / Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}