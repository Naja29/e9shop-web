'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminWrapper from '@/components/admin/AdminWrapper';
import { FiSearch, FiShield, FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function AdminUsers() {
  const { user, userData } = useAuth();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user || userData?.role !== 'admin') return;

      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const usersData = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersData);
        setFilteredUsers(usersData);
        setLoadingUsers(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, [user, userData]);

  useEffect(() => {
    const filtered = users.filter(u =>
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.phone?.includes(searchTerm)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const toggleAdminRole = async (userId, currentRole) => {
    if (!confirm(`Are you sure you want to ${currentRole === 'admin' ? 'remove admin access from' : 'make'} this user ${currentRole === 'admin' ? '' : 'an admin'}?`)) {
      return;
    }

    try {
      const userRef = doc(db, 'users', userId);
      const newRole = currentRole === 'admin' ? 'user' : 'admin';
      
      await updateDoc(userRef, {
        role: newRole,
        updatedAt: new Date()
      });

      setUsers(users.map(u => 
        u.id === userId ? { ...u, role: newRole } : u
      ));

      alert(`User role updated to ${newRole} successfully!`);
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Failed to update user role');
    }
  };

  return (
    <AdminWrapper>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-2">{filteredUsers.length} total users</p>
        </div>

        {loadingUsers ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading users...</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Joined
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                          No users found
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((u) => (
                        <tr key={u.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                {u.name?.charAt(0) || u.email?.charAt(0) || 'U'}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{u.name || 'No name'}</p>
                                <p className="text-sm text-gray-500">{u.uid?.substring(0, 12)}...</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm text-gray-700">
                                <FiMail size={14} className="text-gray-400" />
                                {u.email}
                              </div>
                              {u.phone && (
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                  <FiPhone size={14} className="text-gray-400" />
                                  {u.phone}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                                u.role === 'admin'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {u.role === 'admin' ? <FiShield size={12} /> : <FiUser size={12} />}
                              {u.role || 'user'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {u.createdAt?.toDate
                              ? u.createdAt.toDate().toLocaleDateString()
                              : 'N/A'}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => toggleAdminRole(u.id, u.role)}
                              disabled={user && u.id === user.uid}
                              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                                user && u.id === user.uid
                                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                  : u.role === 'admin'
                                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              }`}
                            >
                              {user && u.id === user.uid
                                ? 'You'
                                : u.role === 'admin'
                                ? 'Remove Admin'
                                : 'Make Admin'}
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminWrapper>
  );
}