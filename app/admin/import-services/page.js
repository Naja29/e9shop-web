'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { createService } from '@/lib/firebase/firestore';
import sampleServices from '@/lib/sampleServices';
import Link from 'next/link';
import { FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

export default function ImportServicesPage() {
  const router = useRouter();
  const { user, userData, loading } = useAuth();
  const [importing, setImporting] = useState(false);
  const [results, setResults] = useState([]);
  const [completed, setCompleted] = useState(false);

  const handleImport = async () => {
    if (!confirm(`This will add ${sampleServices.length} sample services to your database. Continue?`)) {
      return;
    }

    setImporting(true);
    setResults([]);
    const importResults = [];

    for (const service of sampleServices) {
      try {
        const { id, error } = await createService(service);
        
        if (error) {
          importResults.push({
            name: service.name,
            success: false,
            error: error
          });
        } else {
          importResults.push({
            name: service.name,
            success: true,
            id: id
          });
        }
      } catch (err) {
        importResults.push({
          name: service.name,
          success: false,
          error: err.message
        });
      }
    }

    setResults(importResults);
    setImporting(false);
    setCompleted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!user || userData?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <FiAlertCircle className="mx-auto text-red-500 mb-4" size={48} />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Only administrators can import services.</p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Import Sample Services</h1>
          <p className="text-gray-600 mb-8">
            Add {sampleServices.length} pre-configured E9Shop services to your database
          </p>

          {!completed && !importing && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-4">Services to Import:</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {sampleServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{service.name}</p>
                        <p className="text-xs text-gray-600">{service.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Note:</strong> This will create {sampleServices.length} new services in your Firestore database.
                  Existing services will not be affected.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleImport}
                  className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg"
                >
                  Import All Services
                </button>
                <Link
                  href="/admin/services"
                  className="px-8 py-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-bold text-lg"
                >
                  Cancel
                </Link>
              </div>
            </div>
          )}

          {importing && (
            <div className="text-center py-12">
              <FiLoader className="animate-spin mx-auto text-blue-600 mb-4" size={48} />
              <p className="text-xl font-semibold text-gray-900">Importing services...</p>
              <p className="text-gray-600 mt-2">Please wait, this may take a moment.</p>
            </div>
          )}

          {completed && (
            <div className="space-y-6">
              <div className="text-center py-6">
                <FiCheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Import Complete!</h2>
                <p className="text-gray-600">
                  Successfully imported {results.filter(r => r.success).length} out of {results.length} services
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
                <h3 className="font-bold text-gray-900 mb-4">Import Results:</h3>
                <div className="space-y-2">
                  {results.map((result, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                      }`}
                    >
                      {result.success ? (
                        <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      ) : (
                        <FiAlertCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                      )}
                      <div className="flex-1">
                        <p className={`font-semibold ${result.success ? 'text-green-900' : 'text-red-900'}`}>
                          {result.name}
                        </p>
                        {result.success ? (
                          <p className="text-xs text-green-700">ID: {result.id}</p>
                        ) : (
                          <p className="text-xs text-red-700">Error: {result.error}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/admin/services"
                  className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg text-center"
                >
                  View Services in Admin Panel
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-bold text-lg"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
