import Image from 'next/image';
import Link from 'next/link';
import { FiFileText, FiCheckCircle, FiClock, FiUsers, FiAward, FiShield, FiPhone, FiMail, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';

export const metadata = {
  title: 'Visa Consultation Services - All Korean Visa Types | E9Shop',
  description: 'Expert visa consultation for E7-4, F2, F5, D2, D4, D10, F6, and citizenship. Professional guidance for all visa types in South Korea.',
};

const visaTypes = [
  {
    id: 1,
    code: 'E7-4',
    name: 'Special Activity Visa',
    description: 'For skilled workers in specific fields',
    duration: '1-3 years',
    canWork: true,
    canExtend: true,
    features: [
      'Work in specific industries',
      'Change employer possible',
      'Bring family members',
      'Path to permanent residency',
      'Social benefits eligible'
    ],
    icon: '💼',
    color: 'from-blue-500 to-indigo-600',
    popular: true
  },
  {
    id: 2,
    code: 'F2',
    name: 'Resident Visa',
    description: 'Long-term residency for qualified individuals',
    duration: '3 years (renewable)',
    canWork: true,
    canExtend: true,
    features: [
      'Work freely (no restrictions)',
      'Change jobs anytime',
      'Permanent residency pathway',
      'Social welfare benefits',
      'Family reunification'
    ],
    icon: '🏠',
    color: 'from-green-500 to-teal-600',
    popular: true
  },
  {
    id: 3,
    code: 'F5',
    name: 'Permanent Resident Visa',
    description: 'Permanent residency status',
    duration: 'Permanent',
    canWork: true,
    canExtend: false,
    features: [
      'Indefinite stay in Korea',
      'All employment rights',
      'Same rights as citizens (except voting)',
      'No renewal needed',
      'Easy re-entry'
    ],
    icon: '⭐',
    color: 'from-purple-500 to-pink-600',
    popular: true
  },
  {
    id: 4,
    code: 'D2',
    name: 'Student Visa',
    description: 'For university degree students',
    duration: '1-4 years',
    canWork: true,
    canExtend: true,
    features: [
      'Study at universities',
      'Part-time work (20h/week)',
      'Extendable during studies',
      'Can upgrade to D10',
      'Scholarship eligible'
    ],
    icon: '🎓',
    color: 'from-cyan-500 to-blue-600',
    popular: false
  },
  {
    id: 5,
    code: 'D4',
    name: 'Language Training Visa',
    description: 'For Korean language learners',
    duration: '6 months - 2 years',
    canWork: false,
    canExtend: true,
    features: [
      'Learn Korean language',
      'Cultural experience',
      'Part-time work (with permission)',
      'Can upgrade to D2',
      'Multiple entry'
    ],
    icon: '🇰🇷',
    color: 'from-orange-500 to-red-600',
    popular: false
  },
  {
    id: 6,
    code: 'D10',
    name: 'Job Seeker Visa',
    description: 'For graduates seeking employment',
    duration: 'Up to 2 years',
    canWork: true,
    canExtend: true,
    features: [
      'After graduation',
      'Job search period',
      'Work full-time',
      'Change to work visa',
      'Internship eligible'
    ],
    icon: '🔍',
    color: 'from-yellow-500 to-orange-600',
    popular: false
  },
  {
    id: 7,
    code: 'F6',
    name: 'Marriage Visa',
    description: 'For spouses of Korean nationals',
    duration: '1-3 years',
    canWork: true,
    canExtend: true,
    features: [
      'Married to Korean citizen',
      'Work without restrictions',
      'Path to F5',
      'Family benefits',
      'Social welfare'
    ],
    icon: '💑',
    color: 'from-pink-500 to-rose-600',
    popular: false
  },
  {
    id: 8,
    code: 'Citizenship',
    name: 'Korean Citizenship',
    description: 'Become a Korean citizen',
    duration: 'Permanent',
    canWork: true,
    canExtend: false,
    features: [
      'Full citizenship rights',
      'Voting rights',
      'Korean passport',
      'No visa renewals',
      'All benefits'
    ],
    icon: '🏆',
    color: 'from-indigo-600 to-purple-700',
    popular: false
  },
];

const services = [
  {
    icon: FiFileText,
    title: 'Visa Assessment',
    description: 'Free evaluation of your eligibility for different visa types'
  },
  {
    icon: FiUsers,
    title: 'Document Preparation',
    description: 'Complete assistance with all required documents and forms'
  },
  {
    icon: FiCheckCircle,
    title: 'Application Support',
    description: 'Step-by-step guidance through the entire application process'
  },
  {
    icon: FiShield,
    title: 'Legal Compliance',
    description: 'Ensure your application meets all immigration requirements'
  },
  {
    icon: FiClock,
    title: 'Status Updates',
    description: 'Regular updates on your application progress'
  },
  {
    icon: FiAward,
    title: 'Post-Approval Support',
    description: 'Assistance even after visa approval for renewals and changes'
  },
];

const successStories = [
  {
    name: 'Kumara P.',
    visa: 'E7-4 → F2',
    story: 'Successfully upgraded from E7-4 to F2 visa with E9Shop\'s expert guidance',
    duration: '6 months',
    rating: 5
  },
  {
    name: 'Nimal S.',
    visa: 'F2 → F5',
    story: 'Obtained permanent residency (F5) after 5 years on F2 visa',
    duration: '8 months',
    rating: 5
  },
  {
    name: 'Sanduni M.',
    visa: 'D2 → D10 → E7',
    story: 'From student to skilled worker visa with smooth transitions',
    duration: '1 year',
    rating: 5
  },
];

const applicationProcess = [
  {
    step: '1',
    title: 'Free Consultation',
    description: 'Discuss your current situation and visa goals',
    duration: '30 min'
  },
  {
    step: '2',
    title: 'Eligibility Check',
    description: 'We assess your eligibility for different visa types',
    duration: '1-2 days'
  },
  {
    step: '3',
    title: 'Document Checklist',
    description: 'Receive detailed list of required documents',
    duration: '1 day'
  },
  {
    step: '4',
    title: 'Document Review',
    description: 'We review and verify all your documents',
    duration: '3-5 days'
  },
  {
    step: '5',
    title: 'Application Submission',
    description: 'Submit application to immigration office',
    duration: '1 day'
  },
  {
    step: '6',
    title: 'Follow-up',
    description: 'Track application and handle any requests',
    duration: '1-3 months'
  },
];

const whyChooseUs = [
  {
    icon: FiAward,
    stat: '500+',
    label: 'Successful Applications',
    description: 'Helped over 500 clients with visa approvals'
  },
  {
    icon: FiTrendingUp,
    stat: '95%',
    label: 'Success Rate',
    description: 'One of the highest approval rates in the industry'
  },
  {
    icon: FiUsers,
    stat: '10+',
    label: 'Years Experience',
    description: 'Decade of expertise in Korean immigration law'
  },
  {
    icon: FiClock,
    stat: '24/7',
    label: 'Support Available',
    description: 'Always here when you need us'
  },
];

export default function VisaConsultationPage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">📋</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Visa Consultation Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-indigo-100">
              Expert Guidance for All Korean Visa Types
            </p>
            <p className="text-lg mb-8 text-indigo-200">
              E7-4 • F2 • F5 • D2 • D4 • D10 • F6 • Citizenship - We handle it all
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm">Clients Helped</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">8</div>
                <div className="text-sm">Visa Types</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                Free Consultation
              </Link>
              <a 
                href="tel:010-2735-6199"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
              >
                <FiPhone size={20} />
                Call: 010-2735-6199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types - Popular */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Most Requested Visa Types</h2>
            <p className="text-xl text-gray-600">
              We specialize in these popular visa categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {visaTypes.filter(v => v.popular).map((visa) => (
              <div
                key={visa.id}
                className="bg-white border-2 border-indigo-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${visa.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{visa.icon}</div>
                  <div className="text-sm font-semibold mb-1 opacity-90">{visa.code}</div>
                  <h3 className="text-2xl font-bold mb-2">{visa.name}</h3>
                  <p className="text-sm opacity-90">{visa.description}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiClock size={16} />
                      <span>{visa.duration}</span>
                    </div>
                    {visa.canWork && (
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Work Allowed
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    {visa.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                  >
                    Apply for {visa.code}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Other Visa Types */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Visa Types We Handle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {visaTypes.filter(v => !v.popular).map((visa) => (
                <div
                  key={visa.id}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{visa.icon}</div>
                  <div className="text-sm font-bold text-indigo-600 mb-1">{visa.code}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{visa.name}</h4>
                  <p className="text-gray-600 text-xs mb-3">{visa.description}</p>
                  <Link href="/contact" className="text-indigo-600 font-semibold text-sm hover:underline">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">
              Comprehensive visa consultation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help You</h2>
            <p className="text-xl text-gray-600">
              Our proven 6-step process
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {applicationProcess.map((process, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 flex gap-6 items-start hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {process.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                    <span className="text-sm text-indigo-600 font-semibold">{process.duration}</span>
                  </div>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from real clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <div className="bg-indigo-100 text-indigo-600 inline-block px-3 py-1 rounded-full text-sm font-bold mb-3">
                  {story.visa}
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold text-gray-900">{story.name}</div>
                  <div>Process time: {story.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose E9Shop?</h2>
            <p className="text-xl text-gray-600">
              The trusted name in visa consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} />
                </div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">{item.stat}</div>
                <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Visa?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Get expert guidance and maximize your chances of visa approval
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Book Free Consultation
            </Link>
            <a 
              href="tel:010-2735-6199"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone size={20} />
              Call: 010-2735-6199
            </a>
          </div>

          <div className="mt-8 text-indigo-100">
            <p>📋 95% Success Rate • 500+ Approvals • Expert Team • 24/7 Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}