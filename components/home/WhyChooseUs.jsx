import { FiShield, FiClock, FiAward, FiHeart, FiTrendingUp, FiUsers } from 'react-icons/fi';

const benefits = [
  {
    icon: FiShield,
    title: 'Safe & Secure',
    description: 'Your money and data are protected with bank-level security',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: FiClock,
    title: '24/7 Service',
    description: 'Available round the clock for all your needs',
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: FiAward,
    title: 'Trusted by 10K+',
    description: 'Over 10,000 satisfied customers in South Korea',
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: FiHeart,
    title: 'Customer First',
    description: 'Dedicated support team always ready to help',
    color: 'text-red-600 bg-red-100'
  },
  {
    icon: FiTrendingUp,
    title: 'Best Rates',
    description: 'Competitive exchange rates and low service fees',
    color: 'text-yellow-600 bg-yellow-100'
  },
  {
    icon: FiUsers,
    title: 'Expert Team',
    description: 'Professional staff with years of experience',
    color: 'text-indigo-600 bg-indigo-100'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#C1D7D8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose E9Shop?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The most trusted service provider for Sri Lankans in South Korea
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5 Years</div>
              <div className="text-gray-600">In Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Secure & Safe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}