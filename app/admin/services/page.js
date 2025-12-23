'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminWrapper from '@/components/admin/AdminWrapper';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiX, FiImage } from 'react-icons/fi';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function AdminServices() {
  const { user, userData } = useAuth();
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    duration: '',
    features: '',
    imageUrl: '',
    status: 'active'
  });

  const categories = [
    'Financial Services',
    'Education',
    'Travel',
    'Insurance',
    'Visa Services',
    'Investment',
    'Legal Services',
    'Other'
  ];

  useEffect(() => {
    fetchServices();
  }, [user, userData]);

  useEffect(() => {
    const filtered = services.filter(s =>
      s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);

  const fetchServices = async () => {
    if (!user || userData?.role !== 'admin') return;

    try {
      const servicesSnapshot = await getDocs(collection(db, 'services'));
      const servicesData = servicesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setServices(servicesData);
      setFilteredServices(servicesData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  };

  const handleAddClick = () => {
    setEditingService(null);
    setFormData({
      name: '',
      category: '',
      description: '',
      price: '',
      duration: '',
      features: '',
      imageUrl: '',
      status: 'active'
    });
    setShowModal(true);
  };

  const handleEditClick = (service) => {
    setEditingService(service);
    setFormData({
      name: service.name || '',
      category: service.category || '',
      description: service.description || '',
      price: service.price || '',
      duration: service.duration || '',
      features: service.features?.join('\n') || '',
      imageUrl: service.imageUrl || '',
      status: service.status || 'active'
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const featuresArray = formData.features
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0);

    const serviceData = {
      name: formData.name,
      category: formData.category,
      description: formData.description,
      price: formData.price,
      duration: formData.duration,
      features: featuresArray,
      imageUrl: formData.imageUrl,
      status: formData.status,
      updatedAt: serverTimestamp()
    };

    try {
      if (editingService) {
        // Update existing service
        const serviceRef = doc(db, 'services', editingService.id);
        await updateDoc(serviceRef, serviceData);
        setServices(services.map(s =>
          s.id === editingService.id ? { ...s, ...serviceData } : s
        ));
        alert('Service updated successfully!');
      } else {
        // Add new service
        serviceData.createdAt = serverTimestamp();
        const docRef = await addDoc(collection(db, 'services'), serviceData);
        setServices([...services, { id: docRef.id, ...serviceData }]);
        alert('Service added successfully!');
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Failed to save service');
    }
  };

  const handleDelete = async (serviceId, serviceName) => {
    if (!confirm(`Are you sure you want to delete "${serviceName}"?`)) return;

    try {
      await deleteDoc(doc(db, 'services', serviceId));
      setServices(services.filter(s => s.id !== serviceId));
      alert('Service deleted successfully!');
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service');
    }
  };

  return (
    <AdminWrapper>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
            <p className="text-gray-600 mt-2">{filteredServices.length} total services</p>
          </div>
          <button
            onClick={handleAddClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FiPlus size={20} />
            Add New Service
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading services...</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.length === 0 ? (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No services found
                </div>
              ) : (
                filteredServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {service.imageUrl ? (
                      <img src={service.imageUrl} alt={service.name} className="w-full h-48 object-cover" />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <FiImage className="text-white" size={48} />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${service.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {service.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{service.category}</p>
                      <p className="text-gray-700 mb-4 line-clamp-2">{service.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span className="font-semibold text-blue-600">{service.price}</span>
                        {service.duration && <span>{service.duration}</span>}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditClick(service)}
                          className="flex-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-200 transition-colors flex items-center justify-center gap-2"
                        >
                          <FiEdit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(service.id, service.name)}
                          className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
                        >
                          <FiTrash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 my-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingService ? 'Edit Service' : 'Add New Service'}
                </h2>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                  <FiX size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Price *</label>
                    <input
                      type="text"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="e.g., Rs.50,000 or Contact for quote"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g., 1-2 business days"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Features (one per line)</label>
                  <textarea
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                    rows={5}
                    placeholder="Fast processing&#10;Secure transactions&#10;24/7 support"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {editingService ? 'Update Service' : 'Add Service'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminWrapper>
  );
}