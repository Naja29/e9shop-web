'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminWrapper from '@/components/admin/AdminWrapper';
import { FiPlus, FiEdit2, FiTrash2, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { getAllServices, updateService, createService } from '@/lib/firebase/firestore';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function AdminServices() {
  const { user, userData } = useAuth();
  const [services, setServices] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [loadingServices, setLoadingServices] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    icon: '🔵',
    features: ''
  });

  useEffect(() => {
    const fetchServices = async () => {
      if (!user || userData?.role !== 'admin') return;

      const { data, error } = await getAllServices();
      if (!error && data) {
        setServices(data);
      }
      setLoadingServices(false);
    };

    fetchServices();
  }, [user, userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: parseFloat(formData.price) || 0,
      icon: formData.icon,
      features: formData.features.split('\n').filter(f => f.trim()),
      active: true
    };

    if (editingService) {
      const { error } = await updateService(editingService.id, serviceData);
      if (!error) {
        setServices(services.map(s =>
          s.id === editingService.id ? { ...s, ...serviceData } : s
        ));
        alert('Service updated successfully!');
        resetForm();
      } else {
        alert('Failed to update service');
      }
    } else {
      const { id, error } = await createService(serviceData);
      if (!error) {
        setServices([...services, { id, ...serviceData }]);
        alert('Service created successfully!');
        resetForm();
      } else {
        alert('Failed to create service');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      category: '',
      price: '',
      icon: '🔵',
      features: ''
    });
    setEditingService(null);
    setShowAddForm(false);
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData({
      name: service.name || '',
      description: service.description || '',
      category: service.category || '',
      price: service.price?.toString() || '',
      icon: service.icon || '🔵',
      features: service.features?.join('\n') || ''
    });
    setShowAddForm(true);
  };

  const handleDelete = async (serviceId) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      await deleteDoc(doc(db, 'services', serviceId));
      setServices(services.filter(s => s.id !== serviceId));
      alert('Service deleted successfully!');
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service');
    }
  };

  const toggleServiceStatus = async (serviceId, currentStatus) => {
    const { error } = await updateService(serviceId, { active: !currentStatus });
    if (!error) {
      setServices(services.map(s =>
        s.id === serviceId ? { ...s, active: !currentStatus } : s
      ));
    }
  };

  return (
    <AdminWrapper>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Service Management</h1>
            <p className="text-gray-600 mt-2">{services.length} total services</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
          >
            <FiPlus size={20} />
            Add Service
          </button>
        </div>

        {loadingServices ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading services...</p>
          </div>
        ) : (
          <>
            {/* Add/Edit Form */}
            {showAddForm && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {editingService ? 'Edit Service' : 'Add New Service'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="e.g., Visa Consultation"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Category *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="e.g., visa, insurance, education"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Price (KRW)
                      </label>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="50000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Icon Emoji
                      </label>
                      <input
                        type="text"
                        value={formData.icon}
                        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="🔵"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Describe the service..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Features (one per line)
                    </label>
                    <textarea
                      value={formData.features}
                      onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      {editingService ? 'Update Service' : 'Create Service'}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Services List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl shadow-lg p-6 ${
                    !service.active ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon || '🔵'}</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleServiceStatus(service.id, service.active)}
                        className={`p-2 rounded-lg transition-colors ${
                          service.active
                            ? 'text-green-600 hover:bg-green-50'
                            : 'text-gray-400 hover:bg-gray-100'
                        }`}
                        title={service.active ? 'Active' : 'Inactive'}
                      >
                        {service.active ? <FiToggleRight size={24} /> : <FiToggleLeft size={24} />}
                      </button>
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <FiEdit2 size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>

                  <div className="border-t border-gray-200 pt-3 space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Category:</span> {service.category}
                    </p>
                    {service.price > 0 && (
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Price:</span> ₩{service.price.toLocaleString()}
                      </p>
                    )}
                    {service.features && service.features.length > 0 && (
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Features:</span>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {services.length === 0 && (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-gray-500 text-lg">No services yet. Add your first service!</p>
              </div>
            )}
          </>
        )}
      </div>
    </AdminWrapper>
  );
}
