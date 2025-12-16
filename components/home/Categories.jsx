import Link from 'next/link';
import { FiCreditCard, FiBook, FiAirplay, FiShield, FiFileText, FiTrendingUp, FiUsers, FiAlertCircle } from 'react-icons/fi';

const categories = [
  { 
    id: 1, 
    name: 'E9 Pay Service', 
    icon: FiCreditCard, 
    badge: '', 
    color: 'bg-blue-100 text-blue-600',
    description: 'Money transfer & bill payments'
  },
  { 
    id: 2, 
    name: 'Sail Academy', 
    icon: FiBook, 
    badge: 'NEW', 
    color: 'bg-green-100 text-green-600',
    description: 'Online courses about Korea'
  },
  { 
    id: 3, 
    name: 'Air Ticket Services', 
    icon: FiAirplay, 
    badge: null, 
    color: 'bg-purple-100 text-purple-600',
    description: 'Flight booking services'
  },
  { 
    id: 4, 
    name: 'Insurance', 
    icon: FiShield, 
    badge: null, 
    color: 'bg-red-100 text-red-600',
    description: 'Life, property & vehicle insurance'
  },
  { 
    id: 5, 
    name: 'Student Visa', 
    icon: FiFileText, 
    badge: '', 
    color: 'bg-yellow-100 text-yellow-600',
    description: 'Student visa services'
  },
  { 
    id: 6, 
    name: 'Stock Market', 
    icon: FiTrendingUp, 
    badge: null, 
    color: 'bg-teal-100 text-teal-600',
    description: 'Colombo stock market investment'
  },
  { 
    id: 7, 
    name: 'Visa Consultation', 
    icon: FiUsers, 
    badge: 'NEW', 
    color: 'bg-indigo-100 text-indigo-600',
    description: 'Visa consultation & support'
  },
  { 
    id: 8, 
    name: 'Law Help', 
    icon: FiAlertCircle, 
    badge: null, 
    color: 'bg-orange-100 text-orange-600',
    description: 'Legal consultation services'
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-[#C1D7D8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-600 mt-2">Everything you need, all in one place</p>
          </div>
          <Link href="/categories" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
            See All
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 relative h-full">
                {category.badge && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {category.badge}
                  </span>
                )}
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-center mb-2">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 text-center line-clamp-2">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}