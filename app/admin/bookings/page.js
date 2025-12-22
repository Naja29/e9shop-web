'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminWrapper from '@/components/admin/AdminWrapper';
import { FiSearch, FiCalendar } from 'react-icons/fi';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function AdminBookings() {
  const { user, userData } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loadingBookings, setLoadingBookings] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user || userData?.role !== 'admin') return;

      try {
        const bookingsSnapshot = await getDocs(collection(db, 'bookings'));
        const bookingsData = await Promise.all(
          bookingsSnapshot.docs.map(async (bookingDoc) => {
            const booking = { id: bookingDoc.id, ...bookingDoc.data() };
            
            if (booking.userId) {
              const userDoc = await getDoc(doc(db, 'users', booking.userId));
              if (userDoc.exists()) {
                booking.userData = userDoc.data();
              }
            }
            
            return booking;
          })
        );
        
        bookingsData.sort((a, b) => {
          const dateA = a.createdAt?.toDate?.() || new Date(0);
          const dateB = b.createdAt?.toDate?.() || new Date(0);
          return dateB - dateA;
        });
        
        setBookings(bookingsData);
        setFilteredBookings(bookingsData);
        setLoadingBookings(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoadingBookings(false);
      }
    };

    fetchBookings();
  }, [user, userData]);

  useEffect(() => {
    let filtered = bookings;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(b => b.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(b =>
        b.serviceName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.userData?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.userData?.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBookings(filtered);
  }, [searchTerm, statusFilter, bookings]);

  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      const bookingRef = doc(db, 'bookings', bookingId);
      await updateDoc(bookingRef, {
        status: newStatus,
        updatedAt: new Date()
      });

      setBookings(bookings.map(b =>
        b.id === bookingId ? { ...b, status: newStatus } : b
      ));

      alert(`Booking status updated to ${newStatus}!`);
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Failed to update booking status');
    }
  };

  const statusOptions = [
    { value: 'all', label: 'All Bookings', count: bookings.length },
    { value: 'pending', label: 'Pending', count: bookings.filter(b => b.status === 'pending').length },
    { value: 'confirmed', label: 'Confirmed', count: bookings.filter(b => b.status === 'confirmed').length },
    { value: 'completed', label: 'Completed', count: bookings.filter(b => b.status === 'completed').length },
    { value: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length },
  ];

  return (
    <AdminWrapper>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
          <p className="text-gray-600 mt-2">{filteredBookings.length} bookings found</p>
        </div>

        {loadingBookings ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading bookings...</p>
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {statusOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setStatusFilter(option.value)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      statusFilter === option.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label} ({option.count})
                  </button>
                ))}
              </div>

              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by service name, booking ID, user name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
              {filteredBookings.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <FiCalendar className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 text-lg">No bookings found</p>
                </div>
              ) : (
                filteredBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {booking.serviceName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Booking ID: {booking.id}
                            </p>
                          </div>
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${
                              booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : booking.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'completed'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Customer</p>
                            <p className="font-semibold text-gray-900">
                              {booking.userData?.name || 'Unknown'}
                            </p>
                            <p className="text-sm text-gray-600">
                              {booking.userData?.email || 'No email'}
                            </p>
                            {booking.userData?.phone && (
                              <p className="text-sm text-gray-600">
                                {booking.userData.phone}
                              </p>
                            )}
                          </div>

                          <div>
                            <p className="text-sm text-gray-600 mb-1">Booking Date</p>
                            <p className="font-semibold text-gray-900">
                              {booking.createdAt?.toDate
                                ? booking.createdAt.toDate().toLocaleString()
                                : 'N/A'}
                            </p>
                            {booking.updatedAt && (
                              <p className="text-sm text-gray-600 mt-1">
                                Last updated:{' '}
                                {booking.updatedAt?.toDate
                                  ? booking.updatedAt.toDate().toLocaleString()
                                  : 'N/A'}
                              </p>
                            )}
                          </div>
                        </div>

                        {booking.details && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600 mb-1">Additional Details</p>
                            <pre className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg whitespace-pre-wrap">
                              {JSON.stringify(booking.details, null, 2)}
                            </pre>
                          </div>
                        )}
                      </div>

                      <div className="flex lg:flex-col gap-2">
                        {booking.status !== 'confirmed' && booking.status !== 'completed' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                          >
                            Confirm
                          </button>
                        )}
                        {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'completed')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                          >
                            Complete
                          </button>
                        )}
                        {booking.status !== 'cancelled' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </AdminWrapper>
  );
}
