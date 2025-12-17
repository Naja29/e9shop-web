import Image from 'next/image';
import Link from 'next/link';
import { FiShield, FiHeart, FiHome, FiTruck, FiCheck, FiPhone, FiMail, FiAlertCircle, FiAward, FiClock, FiUsers } from 'react-icons/fi';

const insuranceTypes = [
  {
    id: 1,
    icon: FiHeart,
    title: 'Life Insurance',
    description: 'Protect your family\'s future with comprehensive life insurance coverage',
    features: [
      'Coverage up to 100 million won',
      'Accident death compensation',
      'Critical illness coverage',
      'Family protection benefits',
      'Flexible premium options'
    ],
    price: 'From Rs.50,000/month',
    color: 'from-red-500 to-pink-600',
    popular: true
  },
  {
    id: 2,
    icon: FiTruck,
    title: 'Vehicle Insurance',
    description: 'Complete protection for your car with comprehensive coverage',
    features: [
      'Accident damage coverage',
      'Third-party liability',
      'Theft protection',
      'Natural disaster coverage',
      '24/7 roadside assistance'
    ],
    price: 'From Rs.80,000/month',
    color: 'from-blue-500 to-cyan-600',
    popular: true
  },
  {
    id: 3,
    icon: FiHome,
    title: 'Property Insurance',
    description: 'Secure your home and belongings against unforeseen events',
    features: [
      'Fire and natural disasters',
      'Theft and burglary',
      'Water damage coverage',
      'Liability protection',
      'Replacement cost coverage'
    ],
    price: 'From Rs.40,000/month',
    color: 'from-green-500 to-teal-600',
    popular: true
  },
  {
    id: 4,
    icon: FiShield,
    title: 'Accident Insurance',
    description: 'Coverage for workplace and non-workplace accidents',
    features: [
      'Medical expense coverage',
      'Hospitalization benefits',
      'Disability compensation',
      'Rehabilitation support',
      'Income protection'
    ],
    price: 'From Rs.30,000/month',
    color: 'from-purple-500 to-indigo-600',
    popular: false
  },
  {
    id: 5,
    icon: FiAlertCircle,
    title: 'Health Insurance',
    description: 'Additional health coverage for medical expenses',
    features: [
      'Hospital treatment costs',
      'Surgery expenses',
      'Medication coverage',
      'Regular health checkups',
      'Emergency care'
    ],
    price: 'From Rs.60,000/month',
    color: 'from-orange-500 to-red-600',
    popular: false
  },
  {
    id: 6,
    icon: FiUsers,
    title: 'Travel Insurance',
    description: 'Stay protected during your travels worldwide',
    features: [
      'Trip cancellation',
      'Medical emergencies abroad',
      'Lost luggage coverage',
      'Flight delays',
      'Emergency evacuation'
    ],
    price: 'From Rs.20,000/trip',
    color: 'from-yellow-500 to-orange-600',
    popular: false
  },
];

const whyChooseUs = [
  {
    icon: FiClock,
    title: '24/7 Emergency Support',
    description: 'Round-the-clock assistance for all emergencies and claims'
  },
  {
    icon: FiAward,
    title: 'Quick Claim Processing',
    description: 'Fast and hassle-free claim settlement within days'
  },
  {
    icon: FiShield,
    title: 'Comprehensive Coverage',
    description: 'All-inclusive protection for peace of mind'
  },
  {
    icon: FiUsers,
    title: 'Expert Consultation',
    description: 'Professional advice in Sinhala, Tamil, and Korean'
  },
];

const coverageDetails = [
  {
    title: 'Workplace Accidents',
    description: 'Full coverage for injuries and accidents at work',
    icon: '🏭'
  },
  {
    title: 'Non-Workplace Accidents',
    description: 'Protection during your free time and daily activities',
    icon: '🚶'
  },
  {
    title: 'Medical Treatment',
    description: 'All medical expenses covered until full recovery',
    icon: '🏥'
  },
  {
    title: 'Hospitalization',
    description: 'Hospital stay costs fully covered',
    icon: '🛏️'
  },
  {
    title: 'Emergency Transportation',
    description: 'Ambulance and emergency transport included',
    icon: '🚑'
  },
  {
    title: 'Death Compensation',
    description: 'Up to 100 million won for accidental death',
    icon: '💐'
  },
];

export default function InsurancePage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-pink-600 to-rose-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">🛡️</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insurance Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-red-100">
              Life, Property & Vehicle Insurance Coverage
            </p>
            <p className="text-lg mb-8 text-red-200">
              Protect yourself, your family, and your assets with comprehensive insurance coverage
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">100M</div>
                <div className="text-sm">Max Coverage</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">Fast</div>
                <div className="text-sm">Claims</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">365</div>
                <div className="text-sm">Days Coverage</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:010-2735-6199"
                className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                <FiPhone size={20} />
                Call: 010-2735-6199
              </a>
              <Link 
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types - Featured */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Insurance Plans</h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage for every aspect of your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {insuranceTypes.filter(ins => ins.popular).map((insurance) => (
              <div
                key={insurance.id}
                className="bg-white border-2 border-red-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${insurance.color} p-6 text-white`}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <insurance.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{insurance.title}</h3>
                  <p className="text-sm opacity-90">{insurance.description}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="text-2xl font-bold text-red-600 mb-4">{insurance.price}</div>
                  
                  <div className="space-y-3 mb-6">
                    {insurance.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/insurance/${insurance.id}`}
                    className="block w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                  >
                    Get This Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Other Insurance Types */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Coverage Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insuranceTypes.filter(ins => !ins.popular).map((insurance) => (
                <div
                  key={insurance.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${insurance.color} rounded-lg flex items-center justify-center mb-4`}>
                    <insurance.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{insurance.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{insurance.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-bold">{insurance.price}</span>
                    <Link href={`/insurance/${insurance.id}`} className="text-red-600 font-semibold hover:underline text-sm">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Covered?</h2>
            <p className="text-xl text-gray-600">
              Comprehensive protection for all situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coverageDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose E9Shop Insurance?</h2>
            <p className="text-xl text-gray-600">
              Your trusted insurance partner in South Korea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Special Benefits for Sri Lankans in Korea
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                      <FiCheck size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Anywhere in Korea Coverage</h3>
                    <p className="text-gray-600">We come to you wherever you are in South Korea for claims and assistance</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                      <FiClock size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Accident Compensation</h3>
                    <p className="text-gray-600">Full medical expenses covered for workplace and non-workplace accidents</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                      <FiHeart size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Death Compensation</h3>
                    <p className="text-gray-600">Up to 100 million won compensation for accidental death</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                      <FiUsers size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support in Your Language</h3>
                    <p className="text-gray-600">Sinhala, Tamil, and Korean language support available anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How to Get Insured</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Call or message us with your requirements</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Choose Plan</h3>
                <p className="text-gray-600 text-sm">Select the insurance plan that suits you</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Submit Details</h3>
                <p className="text-gray-600 text-sm">Provide necessary documents and information</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Get Covered</h3>
                <p className="text-gray-600 text-sm">Start your coverage immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Yourself and Your Loved Ones Today
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Don't wait for an emergency. Get comprehensive insurance coverage now and have peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:010-2735-6199"
              className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone size={20} />
              Call Now: 010-2735-6199
            </a>
            <Link 
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors"
            >
              Request Quote
            </Link>
          </div>

          <div className="mt-8 text-red-100">
            <p>🛡️ 365 Days Coverage • 24/7 Emergency Support • Fast Claims Processing</p>
          </div>
        </div>
      </section>
    </div>
  );
}