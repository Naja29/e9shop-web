'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiArrowRight, FiClock, FiDollarSign } from 'react-icons/fi';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function AllServicesPage() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'Financial Services', label: 'Financial Services' },
    { value: 'Education', label: 'Education' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Insurance', label: 'Insurance' },
    { value: 'Visa Services', label: 'Visa Services' },
    { value: 'Investment', label: 'Investment' },
    { value: 'Legal Services', label: 'Legal Services' },
    { value: 'Other', label: 'Other' },
  ];

  const staticServices = [
    {
      id: 'e9-pay',
      name: 'E9 Pay Service',
      category: 'Financial Services',
      description: 'Fast and secure money transfer service to Sri Lanka',
      price: 'Low fees',
      duration: '24 hours',
      features: ['Quick transfer', 'Low fees', 'Secure'],
      imageUrl: '',
      isStatic: true
    },
    {
      id: 'sail-academy',
      name: 'Sail Academy',
      category: 'Education',
      description: 'Korean language courses for all levels',
      price: 'Rs.50,000',
      duration: '3 months',
      features: ['Beginner to Advanced', 'Certified teachers', 'Flexible schedule'],
      imageUrl: '',
      isStatic: true
    },
    {
      id: 'air-tickets',
      name: 'Air Tickets',
      category: 'Travel',
      description: 'Affordable flight bookings worldwide',
      price: 'Best prices',
      duration: 'Instant booking',
      features: ['Best prices', 'Multiple airlines', 'Easy booking'],
      imageUrl: '',
      isStatic: true
    }
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    filterServices();
  }, [searchTerm, selectedCategory, services]);

  const fetchServices = async () => {
    try {
      console.log('Fetching services from Firebase...');
      const servicesSnapshot = await getDocs(collection(db, 'services'));
      
      console.log('Total documents:', servicesSnapshot.size);
      
      const dbServices = servicesSnapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Service:', doc.id, data);
        return {
          id: doc.id,
          ...data,
          isStatic: false
        };
      });
      
      const allServices = [...staticServices, ...dbServices];
      console.log('All services:', allServices);
      
      setServices(allServices);
      setFilteredServices(allServices);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices(staticServices);
      setFilteredServices(staticServices);
      setLoading(false);
    }
  };

  const filterServices = () => {
    let filtered = services;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(s =>
        s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">All Our Services</h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">Complete Solutions for Sri Lankans in South Korea</p>
            <p className="text-lg text-blue-200">Browse through all our services - from financial to education</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>

              <div className="md:w-64">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">Showing {filteredServices.length} of {services.length} services</div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading services...</p>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No services found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                  {service.imageUrl ? (
                    <img src={service.imageUrl} alt={service.name} className="w-full h-56 object-cover" />
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-white text-6xl">
                        {service.category === 'Financial Services' && '💰'}
                        {service.category === 'Education' && '📚'}
                        {service.category === 'Travel' && '✈️'}
                        {service.category === 'Insurance' && '🛡️'}
                        {service.category === 'Visa Services' && '📋'}
                        {service.category === 'Investment' && '📈'}
                        {service.category === 'Legal Services' && '⚖️'}
                        {!['Financial Services', 'Education', 'Travel', 'Insurance', 'Visa Services', 'Investment', 'Legal Services'].includes(service.category) && '🎯'}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">{service.category}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <FiDollarSign size={16} className="text-blue-600" />
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      {service.duration && (
                        <div className="flex items-center gap-1">
                          <FiClock size={16} className="text-blue-600" />
                          <span>{service.duration}</span>
                        </div>
                      )}
                    </div>

                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-blue-600 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link href={`/service/${service.id}`} className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2">
                      Learn More
                      <FiArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-xl text-blue-100 mb-8">Our team is here to help you find the perfect service for your needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">Contact Us</Link>
              <a href="tel:010-2735-6199" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">Call: 010-2735-6199</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}