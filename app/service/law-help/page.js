import Image from 'next/image';
import Link from 'next/link';
import { FiScale, FiHome, FiHeart, FiFileText, FiShield, FiUsers, FiPhone, FiMail, FiDollarSign, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Legal Consultation Services - Sri Lankan Law Help | E9Shop',
  description: 'Get legal advice for Sri Lankan matters from Korea. Marriage, divorce, property disputes, and general legal consultation. Professional support in Sinhala, Tamil, and Korean.',
};

const legalServices = [
  {
    id: 1,
    icon: FiHeart,
    title: 'Marriage & Divorce',
    description: 'Legal assistance for marriage and divorce matters in Sri Lanka',
    issues: [
      'Divorce proceedings',
      'Custody battles',
      'Alimony and maintenance',
      'Marriage registration',
      'Property division',
      'Legal separation'
    ],
    color: 'from-pink-500 to-rose-600',
    popular: true
  },
  {
    id: 2,
    icon: FiHome,
    title: 'Property Disputes',
    description: 'Resolution of land and property related legal issues',
    issues: [
      'Land ownership disputes',
      'Property inheritance',
      'Boundary disputes',
      'Title deed issues',
      'Property transfer',
      'Tenant disputes'
    ],
    color: 'from-blue-500 to-indigo-600',
    popular: true
  },
  {
    id: 3,
    icon: FiFileText,
    title: 'Document Preparation',
    description: 'Legal document drafting and verification services',
    issues: [
      'Power of attorney',
      'Property deeds',
      'Contracts and agreements',
      'Affidavits',
      'Legal notices',
      'Will preparation'
    ],
    color: 'from-green-500 to-teal-600',
    popular: true
  },
  {
    id: 4,
    icon: FiDollarSign,
    title: 'Financial Disputes',
    description: 'Legal help for financial and debt related matters',
    issues: [
      'Debt recovery',
      'Loan disputes',
      'Business conflicts',
      'Contract breaches',
      'Financial fraud',
      'Insurance claims'
    ],
    color: 'from-yellow-500 to-orange-600',
    popular: false
  },
  {
    id: 5,
    icon: FiUsers,
    title: 'Family Law',
    description: 'Comprehensive family legal matters',
    issues: [
      'Child custody',
      'Adoption procedures',
      'Guardian appointments',
      'Family disputes',
      'Inheritance issues',
      'Elder care rights'
    ],
    color: 'from-purple-500 to-pink-600',
    popular: false
  },
  {
    id: 6,
    icon: FiShield,
    title: 'General Legal Advice',
    description: 'Consultation for various legal matters',
    issues: [
      'Legal rights',
      'Court procedures',
      'Legal documentation',
      'Case evaluation',
      'Legal opinions',
      'Preventive advice'
    ],
    color: 'from-indigo-500 to-blue-600',
    popular: false
  },
];

const howItWorks = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Discuss your legal issue in detail (First consultation: Rs.10,000)',
    duration: '30-60 min',
    icon: '📞'
  },
  {
    step: '2',
    title: 'Case Assessment',
    description: 'We evaluate your case and provide legal opinion',
    duration: '1-2 days',
    icon: '📋'
  },
  {
    step: '3',
    title: 'Action Plan',
    description: 'Receive detailed plan with costs and timeline',
    duration: '1 day',
    icon: '📝'
  },
  {
    step: '4',
    title: 'Document Preparation',
    description: 'We prepare all necessary legal documents',
    duration: '3-7 days',
    icon: '📄'
  },
  {
    step: '5',
    title: 'Case Handling',
    description: 'Our partner lawyers in Sri Lanka handle your case',
    duration: 'Varies',
    icon: '⚖️'
  },
  {
    step: '6',
    title: 'Regular Updates',
    description: 'Keep you informed throughout the process',
    duration: 'Ongoing',
    icon: '📢'
  },
];

const pricingInfo = [
  {
    service: 'Initial Consultation',
    price: 'Rs.10,000',
    description: 'First consultation for basic legal advice',
    duration: '30-60 minutes'
  },
  {
    service: 'Document Review',
    price: 'Rs.30,000 - Rs.80,000',
    description: 'Review and verification of legal documents',
    duration: 'Per document'
  },
  {
    service: 'Document Drafting',
    price: 'Rs.100,000 - Rs.300,000',
    description: 'Preparation of legal documents',
    duration: 'Per document'
  },
  {
    service: 'Case Representation',
    price: 'Custom Quote',
    description: 'Full case handling and court representation',
    duration: 'Based on case complexity'
  },
];

const faqs = [
  {
    question: 'Can I get legal help for Sri Lankan matters while in Korea?',
    answer: 'Yes! We connect you with experienced lawyers in Sri Lanka who can handle your legal matters. We facilitate communication and ensure you stay informed throughout the process.'
  },
  {
    question: 'How much does the initial consultation cost?',
    answer: 'The initial consultation costs ₩30,000 (approximately 30,000-35,000 LKR). This covers basic legal advice and case assessment. Additional services are charged separately based on case complexity.'
  },
  {
    question: 'What languages are supported?',
    answer: 'We provide services in Sinhala, Tamil, and Korean. Our team can communicate with you in your preferred language and work with lawyers in Sri Lanka.'
  },
  {
    question: 'How long does it take to resolve a case?',
    answer: 'Timeline varies greatly depending on case type and complexity. Simple document preparation may take 1-2 weeks, while court cases can take several months to years. We provide realistic timelines after case assessment.'
  },
];

const benefits = [
  {
    icon: FiClock,
    title: '24/7 Accessibility',
    description: 'Contact us anytime from Korea for urgent legal matters'
  },
  {
    icon: FiUsers,
    title: 'Network of Lawyers',
    description: 'Access to experienced lawyers across Sri Lanka'
  },
  {
    icon: FiShield,
    title: 'Confidential Service',
    description: 'All consultations are strictly confidential'
  },
  {
    icon: FiDollarSign,
    title: 'Transparent Pricing',
    description: 'Clear cost breakdown before proceeding with case'
  },
];

export default function LawHelpPage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">⚖️</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Legal Consultation Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Professional Legal Help for Sri Lankan Matters
            </p>
            <p className="text-lg mb-8 text-gray-400">
              Get expert legal advice from Korea for matters in Sri Lanka
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">Rs.10K</div>
                <div className="text-sm">First Consultation</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">3</div>
                <div className="text-sm">Languages</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm">Confidential</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:010-2735-6199"
                className="bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                <FiPhone size={20} />
                Call: 010-2735-6199
              </a>
              <Link 
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Get Legal Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services - Popular */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legal Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive legal assistance for common issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {legalServices.filter(s => s.popular).map((service) => (
              <div
                key={service.id}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common Issues:</h4>
                  <div className="space-y-2 mb-6">
                    {service.issues.map((issue, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{issue}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                  >
                    Get Help Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Legal Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {legalServices.filter(s => !s.popular).map((service) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="text-gray-900 font-semibold text-sm hover:underline">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help You</h2>
            <p className="text-xl text-gray-600">
              Simple process to get legal assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <div className="text-xs text-amber-600 font-semibold">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Fees</h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for legal services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {pricingInfo.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-all"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{item.service}</h3>
                  <p className="text-gray-600 text-sm mb-1">{item.description}</p>
                  <div className="text-xs text-gray-500">{item.duration}</div>
                </div>
                <div className="text-2xl font-bold text-amber-600">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
            <div className="flex gap-3">
              <FiAlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Important Notes:</h4>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Initial consultation fee (Rs.10,000) is for basic legal advice only</li>
                  <li>Additional services (document preparation, case representation) are charged separately</li>
                  <li>Court filing fees and other government charges are separate</li>
                  <li>Detailed cost breakdown provided before proceeding with case</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Legal Services?</h2>
            <p className="text-xl text-gray-600">
              Professional legal support you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about legal consultation
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-amber-600">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-6">
                  <span className="text-amber-600 font-bold">A:</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Get professional legal advice and protect your rights. Our experienced team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:010-2735-6199"
              className="bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone size={20} />
              Call: 010-2735-6199
            </a>
            <Link 
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>

          <div className="mt-8 text-gray-400">
            <p>⚖️ Confidential • Professional • Experienced • Multilingual Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}