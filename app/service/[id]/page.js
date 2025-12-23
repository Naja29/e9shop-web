'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiDollarSign, FiCheckCircle, FiMail, FiPhone } from 'react-icons/fi';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    fetchService();
  }, [params.id]);

  const fetchService = async () => {
    try {
      const serviceDoc = await getDoc(doc(db, 'services', params.id));
      
      if (serviceDoc.exists()) {
        setService({ id: serviceDoc.id, ...serviceDoc.data() });
      } else {
        router.push('/service');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching service:', error);
      setLoading(false);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    alert(`Thank you for your interest in ${service.name}! We'll contact you soon.`);
    setShowBookingForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Service not found</p>
          <Link href="/service" className="text-blue-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/service" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <FiArrowLeft size={20} />
            Back to Services
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
              {service.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.name}</h1>
            <p className="text-xl text-blue-100 mb-6">{service.description}</p>
            
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <FiDollarSign size={24} />
                <span className="font-semibold">{service.price}</span>
              </div>
              {service.duration && (
                <div className="flex items-center gap-2">
                  <FiClock size={24} />
                  <span>{service.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              {service.imageUrl && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                  <img src={service.imageUrl} alt={service.name} className="w-full h-96 object-cover" />
                </div>
              )}

              {service.features && service.features.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Details</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed">{service.description}</p>
                  
                  {service.duration && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Time</h3>
                      <p>{service.duration}</p>
                    </div>
                  )}

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pricing</h3>
                    <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h3>
                
                {!showBookingForm ? (
                  <>
                    <button onClick={() => setShowBookingForm(true)} className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors mb-4">
                      Book This Service
                    </button>

                    <div className="space-y-4 pt-4 border-t">
                      <a href="tel:010-2735-6199" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <FiPhone className="text-green-600" size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Call us</div>
                          <div className="font-semibold">010-2735-6199</div>
                        </div>
                      </a>

                      <a href="mailto:info@e9shop.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FiMail className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Email us</div>
                          <div className="font-semibold">info@e9shop.com</div>
                        </div>
                      </a>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-900">
                        <strong>24/7 Support Available</strong><br />
                        We&apos;re here to help you anytime
                      </p>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Submit Request
                    </button>

                    <button type="button" onClick={() => setShowBookingForm(false)} className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                      Cancel
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for Other Services?</h2>
            <p className="text-gray-600 mb-8">
              Explore our full range of services designed for Sri Lankans in South Korea
            </p>
            <Link href="/service" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}