'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiSearch, FiUser, FiMenu, FiX, FiChevronDown, FiLogOut, FiGrid } from 'react-icons/fi';
import { useAuth } from '@/contexts/AuthContext';
import { logOut } from '@/lib/firebase/auth';

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
  const router = useRouter();
  const { user, userData, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logOut();
    setUserDropdownOpen(false);
    router.push('/');
  };

  // Check if user is admin
  const isAdmin = userData?.role === 'admin';

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

            {/* User Menu or Login Button */}
            {!loading && (
              <>
                {user ? (
                  // User is logged in (admin or regular user)
                  <div 
                    className="relative hidden md:block"
                    onMouseEnter={() => setUserDropdownOpen(true)}
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                        {isAdmin ? '👑' : (userData?.name?.charAt(0) || user.email?.charAt(0) || 'U')}
                      </div>
                      <span className="hidden lg:inline">
                        {isAdmin ? 'Admin' : (userData?.name || 'User')}
                      </span>
                      <FiChevronDown size={16} />
                    </button>

                    {userDropdownOpen && (
                      <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                        <div className="px-6 py-3 border-b border-gray-100">
                          <p className="font-semibold text-gray-900">
                            {isAdmin ? '👑 Admin' : (userData?.name || 'User')}
                          </p>
                          <p className="text-sm text-gray-600 truncate">{user.email}</p>
                        </div>
                        
                        {isAdmin ? (
                          <Link
                            href="/admin"
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <FiGrid size={18} />
                            Admin Panel
                          </Link>
                        ) : (
                          <>
                            <Link
                              href="/dashboard"
                              className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              <FiGrid size={18} />
                              Dashboard
                            </Link>
                            
                            <Link
                              href="/profile/edit"
                              className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              <FiUser size={18} />
                              Edit Profile
                            </Link>
                          </>
                        )}

                        <div className="border-t border-gray-100 mt-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <FiLogOut size={18} />
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // User is NOT logged in - Show login button
                  <Link 
                    href="/login"
                    className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <FiUser size={18} />
                    Login
                  </Link>
                )}
              </>
            )}

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
            {/* User Info (Mobile) - For ALL logged in users */}
            {user && (
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {isAdmin ? '👑' : (userData?.name?.charAt(0) || user.email?.charAt(0) || 'U')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {isAdmin ? '👑 Admin' : (userData?.name || 'User')}
                    </p>
                    <p className="text-sm text-gray-600 truncate">{user.email}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {isAdmin ? (
                    <Link 
                      href="/admin"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  ) : (
                    <Link 
                      href="/dashboard"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

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

            {/* Login button for non-logged in users */}
            {!user && (
              <Link 
                href="/login"
                className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center mt-4"
              >
                Login / Register
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}