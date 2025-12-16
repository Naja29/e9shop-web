import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiDollarSign, FiCreditCard, FiGlobe, FiShield } from 'react-icons/fi';

const services = [
  {
    id: 1,
    icon: FiGlobe,
    title: 'Foreign Money Transfer',
    description: 'Transfer money from South Korea to any bank in Sri Lanka easily',
    features: [
      'Transfer to LKR bank accounts',
      'Transfer to USD bank accounts',
      'Same-day processing',
      'Competitive exchange rates',
      'Secure & reliable'
    ],
    link: '/service/foreign-transfer'
  },
  {
    id: 2,
    icon: FiCreditCard,
    title: 'Domestic Money Transfer',
    description: 'Transfer money to friends in Korea to other bank accounts',
    features: [
      'Transfer to any Korean bank',
      'Instant processing',
      'Low transaction fees',
      'No hidden charges',
      '24/7 available'
    ],
    link: '/service/domestic-transfer'
  },
  {
    id: 3,
    icon: FiDollarSign,
    title: 'Leasing & Finance Payments',
    description: 'Pay your leasing and finance installments in Sri Lanka',
    features: [
      'All major finance companies',
      'Direct payment to lender',
      'Payment confirmation',
      'Scheduled payments available',
      'Payment history tracking'
    ],
    link: '/service/leasing-payments'
  },
  {
    id: 4,
    icon: FiShield,
    title: 'Insurance Premium Payments',
    description: 'Pay insurance premiums for Sri Lankan insurance companies',
    features: [
      'Life insurance',
      'Vehicle insurance',
      'Property insurance',
      'Auto-renewal options',
      'Premium reminders'
    ],
    link: '/service/insurance-payments'
  },
  {
    id: 5,
    icon: FiCheck,
    title: 'Utility Bill Payments',
    description: 'Pay water and electricity bills from Korea',
    features: [
      'NWSDB water bills',
      'CEB electricity bills',
      'LECO electricity bills',
      'Online bill viewing',
      'Payment receipts'
    ],
    link: '/service/utility-payments'
  },
  {
    id: 6,
    icon: FiCreditCard,
    title: 'Telecom Payments',
    description: 'Pay telecom bills and recharge mobile phones',
    features: [
      'Prepaid mobile recharge',
      'Postpaid bill payments',
      'Broadband payments',
      'Satellite TV bills',
      'All major providers'
    ],
    link: '/service/telecom-payments'
  },
  {
    id: 7,
    icon: FiGlobe,
    title: 'Bank Account Opening',
    description: 'Open a Korean bank account online easily',
    features: [
      'No paperwork needed',
      'Foreign ID accepted',
      'Online process',
      'Quick approval',
      'Full support provided'
    ],
    link: '/service/bank-account'
  },
  {
    id: 8,
    icon: FiArrowRight,
    title: 'Other Services',
    description: 'Additional services tailored to your needs',
    features: [
      'Custom payment solutions',
      'Bulk transfers',
      'Business payments',
      'Consultation services',
      'Special requests'
    ],
    link: '/contact'
  },
];

const steps = [
  { step: '1', title: 'Register', description: 'Create your E9 Pay account in minutes' },
  { step: '2', title: 'Verify', description: 'Complete simple verification process' },
  { step: '3', title: 'Transfer', description: 'Start sending money securely' },
  { step: '4', title: 'Track', description: 'Monitor your transactions in real-time' },
];

export default function E9PayServicePage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              E9 Pay Service
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Korea's Most Trusted Money Exchange Service
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Transfer money, pay bills, and manage your finances from anywhere in South Korea
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                Get Started Now
              </Link>
              <a 
                href="tel:010-2735-6199"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
              >
                Call: 010-2735-6199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our E9 Pay Services</h2>
            <p className="text-xl text-gray-600">
              Everything you need for financial transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <FiArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How E9 Pay Works</h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and secure in 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FiArrowRight className="text-blue-600" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose E9 Pay */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose E9 Pay?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <FiShield size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">100% Secure</h3>
                  <p className="text-gray-600">Bank-level security with encrypted transactions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <FiDollarSign size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Best Rates</h3>
                  <p className="text-gray-600">Competitive exchange rates with low fees</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                    <FiCheck size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Fast Processing</h3>
                  <p className="text-gray-600">Most transfers completed within hours</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                    <FiGlobe size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Always here to help whenever you need</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers using E9 Pay for their financial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Create Account Now
            </Link>
            <a 
              href="tel:010-2735-6199"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              Talk to Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}