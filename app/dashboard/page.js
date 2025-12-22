'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { logOut } from '@/lib/firebase/auth';
import { getUserBookings } from '@/lib/firebase/firestore';
import { FiUser, FiMail, FiPhone, FiLogOut, FiBookmark, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const { user, userData, loading } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (user) {
        const { data, error } = await getUserBookings(user.uid);
        if (!error && data) {
          setBookings(data);
        }
        setLoadingBookings(false);
      }
    };

    fetchBookings();
  }, [user]);

  const handleLogout = async () => {
    await logOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#C1D7D8] flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#C1D7D8] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {userData?.name?.charAt(0) || user.email?.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome, {userData?.name || 'User'}!
                </h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              <FiLogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FiUser className="text-blue-600" size={24} />
              Profile Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Full Name
                </label>
                <div className="flex items-center gap-2 text-gray-900">
                  <FiUser className="text-gray-400" />
                  <span>{userData?.name || 'Not set'}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Email
                </label>
                <div className="flex items-center gap-2 text-gray-900">
                  <FiMail className="text-gray-400" />
                  <span>{user.email}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Phone
                </label>
                <div className="flex items-center gap-2 text-gray-900">
                  <FiPhone className="text-gray-400" />
                  <span>{userData?.phone || 'Not set'}</span>
                </div>
              </div>
              <Link
                href="/profile/edit"
                className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiSettings size={18} />
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Bookings */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FiBookmark className="text-blue-600" size={24} />
              My Bookings
            </h2>
            
            {loadingBookings ? (
              <div className="text-center py-8 text-gray-600">Loading bookings...</div>
            ) : bookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">You haven't made any bookings yet.</p>
                <Link
                  href="/"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Services
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        {booking.serviceName}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          booking.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : booking.status === 'completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Booked on:{' '}
                      {booking.createdAt?.toDate
                        ? booking.createdAt.toDate().toLocaleDateString()
                        : 'N/A'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
            >
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-gray-900 mb-2">Browse Services</h3>
              <p className="text-gray-600 text-sm">Explore all available services</p>
            </Link>
            <Link
              href="/contact"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
            >
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">Get help from our team</p>
            </Link>
            <Link
              href="/profile/edit"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
            >
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-2">Account Settings</h3>
              <p className="text-gray-600 text-sm">Manage your account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
