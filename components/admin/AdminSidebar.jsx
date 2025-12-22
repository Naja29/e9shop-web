'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { logOut } from '@/lib/firebase/auth';
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiMessageSquare,
  FiPackage,
  FiStar,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiExternalLink,
  FiGrid
} from 'react-icons/fi';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, userData } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logOut();
    router.push('/');
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: FiGrid,
      href: '/admin',
      exact: true
    },
    {
      name: 'Users',
      icon: FiUsers,
      href: '/admin/users'
    },
    {
      name: 'Bookings',
      icon: FiCalendar,
      href: '/admin/bookings'
    },
    {
      name: 'Messages',
      icon: FiMessageSquare,
      href: '/admin/messages'
    },
    {
      name: 'Services',
      icon: FiPackage,
      href: '/admin/services'
    },
    {
      name: 'Reviews',
      icon: FiStar,
      href: '/admin/reviews'
    }
  ];

  const isActive = (href, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="relative w-10 h-10 border border-gray-600 rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/e9pay-logo.png"
              alt="E9Shop"
              fill
              className="object-contain p-1"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">E9Shop</h1>
            <p className="text-sm text-gray-400">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {userData?.name?.charAt(0) || user?.email?.charAt(0) || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold truncate">
              {userData?.name || 'Admin'}
            </p>
            <p className="text-sm text-gray-400 truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.href, item.exact)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-700 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
        >
          <FiExternalLink size={20} />
          <span className="font-medium">View Website</span>
        </Link>
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors"
        >
          <FiLogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-lg shadow-lg"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-gray-800 min-h-screen fixed left-0 top-0">
        <SidebarContent />
      </aside>

      {/* Sidebar - Mobile */}
      <aside
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-gray-800 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <SidebarContent />
        </div>
      </aside>
    </>
  );
}
