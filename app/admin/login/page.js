'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { signIn } from '@/lib/firebase/auth';
import { FiLock, FiMail, FiEye, FiEyeOff, FiShield } from 'react-icons/fi';

export default function AdminLoginPage() {
  const router = useRouter();
  const { user, userData, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Redirect if already logged in as admin
  useEffect(() => {
    if (!loading && user && userData?.role === 'admin') {
      router.push('/admin');
    }
  }, [user, userData, loading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    setError('');

    const { user: loggedInUser, error: authError } = await signIn(formData.email, formData.password);

    if (authError) {
      setError('Invalid email or password');
      setLoggingIn(false);
      return;
    }

    // Wait a moment for userData to load
    setTimeout(() => {
      // Check if user is admin - this will be checked by AuthContext
      // The useEffect above will handle the redirect
      setLoggingIn(false);
    }, 1000);
  };

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  // If already logged in as admin, show loading while redirecting
  if (user && userData?.role === 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Redirecting to Admin Panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
            <FiShield className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-blue-200">E9Shop Administration</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Warning Message */}
          <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 mb-6">
            <p className="text-yellow-100 text-sm text-center">
              <strong>🔒 Restricted Access</strong><br />
              Only authorized administrators can access this panel
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-100 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-blue-300" size={20} />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="admin@e9shop.com"
                  disabled={loggingIn}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-blue-300" size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="block w-full pl-10 pr-12 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter admin password"
                  disabled={loggingIn}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  disabled={loggingIn}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-blue-300 hover:text-white transition-colors" size={20} />
                  ) : (
                    <FiEye className="text-blue-300 hover:text-white transition-colors" size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loggingIn}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loggingIn ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <FiShield size={20} />
                  Access Admin Panel
                </>
              )}
            </button>
          </form>

          {/* Info Notice */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-blue-200 text-xs text-center">
              If you're not an administrator, please use the{' '}
              <a href="/login" className="text-white hover:underline font-semibold">
                regular login page
              </a>
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <a href="/" className="text-blue-200 hover:text-white transition-colors">
            ← Back to Website
          </a>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <p className="text-blue-300 text-xs">
            🔒 Secured with Firebase Authentication
          </p>
        </div>
      </div>
    </div>
  );
}
