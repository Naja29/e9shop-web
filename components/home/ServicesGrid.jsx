import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Foreign Money Transfer',
    category: 'E9 Pay Service',
    description: 'Transfer money from South Korea to any bank in Sri Lanka easily',
    features: ['LKR Bank Accounts', 'USD Bank Accounts', 'Fast & Secure'],
    icon: '💸',
    color: 'from-blue-500 to-blue-600',
    link: '/service/e9-pay'
  },
  {
    id: 2,
    title: 'Domestic Money Transfer',
    category: 'E9 Pay Service',
    description: 'Transfer money to friends in Korea to other bank accounts',
    features: ['Same-day transfer', 'Low fees', 'All banks supported'],
    icon: '🏦',
    color: 'from-green-500 to-green-600',
    link: '/service/e9-pay'
  },
  {
    id: 3,
    title: 'Bill Payments',
    category: 'E9 Pay Service',
    description: 'Pay water, electricity, and telecom bills from Korea',
    features: ['Water bills', 'Electricity bills', 'Mobile recharge'],
    icon: '💡',
    color: 'from-yellow-500 to-orange-600',
    link: '/service/e9-pay'
  },
  {
    id: 4,
    title: 'Insurance Services',
    category: 'Insurance',
    description: 'Life, property, and vehicle insurance coverage',
    features: ['24/7 coverage', 'Accident compensation', 'Quick claims'],
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    link: '/service/insurance'
  },
  {
    id: 5,
    title: 'Visa Consultation',
    category: 'Visa Services',
    description: 'Expert visa consultation for all visa types in Korea',
    features: ['E7-4, F2, F5', 'D2, D4, D10', 'Citizenship'],
    icon: '📋',
    color: 'from-purple-500 to-indigo-600',
    link: '/service/visa-consultation'
  },
  {
    id: 6,
    title: 'Stock Market Investment',
    category: 'Investment',
    description: 'Invest in Colombo Stock Market from Korea',
    features: ['Real-time trading', 'Expert guidance', 'Secure platform'],
    icon: '📈',
    color: 'from-teal-500 to-cyan-600',
    link: '/service/stock-market'
  },
  {
    id: 7,
    title: 'Air Ticket Services',
    category: 'Travel',
    description: 'Book flights to Sri Lanka and worldwide destinations',
    features: ['Best prices', 'Easy booking', 'Customer support'],
    icon: '✈️',
    color: 'from-sky-500 to-blue-600',
    link: '/service/air-tickets'
  },
  {
    id: 8,
    title: 'Legal Consultation',
    category: 'Law Help',
    description: 'Get legal advice for Sri Lanka from Korea',
    features: ['Marriage issues', 'Property disputes', 'General law'],
    icon: '⚖️',
    color: 'from-amber-500 to-orange-600',
    link: '/service/law-help'
  },
];

export default function ServicesGrid({ title = "Our Services", limit = 8 }) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">
            Comprehensive services for Sri Lankans in South Korea
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <div className="text-xs font-semibold mb-1 opacity-90">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-bold">
                    {service.title}
                  </h3>
                </div>

                {/* Service Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <FiCheck className="text-green-500 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <FiArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit && services.length > limit && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
            >
              View All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}