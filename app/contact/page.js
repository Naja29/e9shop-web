'use client';

import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle, FiUser, FiCheckCircle } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Submitting form data:', formData);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: FiPhone,
      title: 'Phone',
      info: '010-2735-6199',
      description: 'Available 24/7 for emergency support',
      link: 'tel:010-2735-6199',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: FiMessageCircle,
      title: 'WhatsApp',
      info: '010-2735-6199',
      description: 'Quick responses via WhatsApp',
      link: 'https://wa.me/821027356199',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'info@e9shop.com',
      description: 'Get a response within 24 hours',
      link: 'mailto:info@e9shop.com',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      info: 'Seoul, South Korea',
      description: 'Visit us at our office',
      link: '#map',
      color: 'from-red-500 to-pink-600'
    },
  ];

  const services = [
    'E9 Pay Service',
    'Sail Academy',
    'Air Tickets',
    'Insurance',
    'Student Visa',
    'Stock Market',
    'Visa Consultation',
    'Law Help',
    'Other'
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed (Emergency only)' },
  ];

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">📞</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">We&apos;re Here to Help You 24/7</p>
            <p className="text-lg text-blue-200">Have questions? Need assistance? Contact us through any channel below</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Methods</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a key={index} href={method.link} className="group" target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 hover:border-blue-500">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <div className="text-blue-600 font-semibold mb-2">{method.info}</div>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form and we&apos;ll get back to you within 24 hours</p>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <FiCheckCircle className="text-green-600" size={24} />
                  <div>
                    <div className="font-semibold text-green-900">Message Sent Successfully!</div>
                    <div className="text-green-700 text-sm">We&apos;ll contact you soon.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="Enter your full name" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="010-XXXX-XXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Interested In *</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none" placeholder="Tell us how we can help you..." />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <FiClock className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-semibold text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-semibold text-blue-900 mb-1">Emergency Support</div>
                  <div className="text-blue-700 text-sm">Available 24/7 for urgent matters</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 text-blue-100">Our team is ready to assist you right now</p>
                
                <div className="space-y-4">
                  <a href="tel:010-2735-6199" className="flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-30 transition-colors">
                    <FiPhone size={24} />
                    <div>
                      <div className="text-sm opacity-90">Call Now</div>
                      <div className="font-bold">010-2735-6199</div>
                    </div>
                  </a>

                  <a href="https://wa.me/821027356199" className="flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-30 transition-colors">
                    <FiMessageCircle size={24} />
                    <div>
                      <div className="text-sm opacity-90">WhatsApp</div>
                      <div className="font-bold">Chat with us</div>
                    </div>
                  </a>

                  <a href="mailto:info@e9shop.com" className="flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-30 transition-colors">
                    <FiMail size={24} />
                    <div>
                      <div className="text-sm opacity-90">Email Us</div>
                      <div className="font-bold">info@e9shop.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FiMapPin className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                </div>
                <div className="text-gray-700 mb-4">
                  <div className="font-semibold mb-1">E9Shop Headquarters</div>
                  <div>Seoul, South Korea</div>
                  <div className="text-sm text-gray-600 mt-2">Near major subway stations for easy access</div>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to frequently asked questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                What services does E9Shop provide?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We provide E9 Pay money transfer, insurance services, visa consultation, Sail Academy courses, 
                air ticket booking, stock market investment, and legal help services for Sri Lankans in South Korea.
              </p>
            </details>

            <details className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                How can I transfer money to Sri Lanka?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Contact us via phone or visit our office. We&apos;ll guide you through the E9 Pay process. 
                You can transfer to any bank in Sri Lanka, usually within 24 hours.
              </p>
            </details>

            <details className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                Do you provide support in Sinhala or Tamil?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes! Our staff speaks Sinhala, Tamil, and Korean. We can assist you in your preferred language.
              </p>
            </details>

            <details className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                What are your service charges?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Service charges vary by service type. Contact us for detailed pricing information. 
                We offer competitive rates and transparent pricing with no hidden fees.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}