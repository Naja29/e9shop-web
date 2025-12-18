import Image from 'next/image';
import Link from 'next/link';
import { FiBook, FiFileText, FiCheckCircle, FiClock, FiDollarSign, FiUsers, FiAward, FiGlobe, FiPhone, FiMail } from 'react-icons/fi';

export const metadata = {
  title: 'Student Visa Services - Study in Korea | E9Shop',
  description: 'Complete student visa assistance for Korean universities. D-2, D-4 visa application, university admission, and settlement support for Sri Lankan students.',
};

const visaTypes = [
  {
    id: 1,
    type: 'D-2 Visa',
    title: 'University Student Visa',
    description: 'For bachelor\'s, master\'s, and doctoral degree programs',
    duration: '1-4 years',
    features: [
      'Full-time degree programs',
      'Part-time work allowed (20 hrs/week)',
      'Can bring family members',
      'Renewable throughout studies',
      'Path to F-2 visa after graduation'
    ],
    icon: '🎓',
    color: 'from-blue-500 to-indigo-600',
    popular: true
  },
  {
    id: 2,
    type: 'D-4 Visa',
    title: 'Language Training Visa',
    description: 'For Korean language course students',
    duration: '6 months - 2 years',
    features: [
      'Korean language institutes',
      'TOPIK preparation courses',
      'Part-time work allowed (with conditions)',
      'Can upgrade to D-2 visa',
      'Flexible course schedules'
    ],
    icon: '🇰🇷',
    color: 'from-green-500 to-teal-600',
    popular: true
  },
  {
    id: 3,
    type: 'D-10 Visa',
    title: 'Job Seeker Visa',
    description: 'For graduates seeking employment',
    duration: 'Up to 2 years',
    features: [
      'For university graduates',
      'Job search period',
      'Internship opportunities',
      'Can work full-time',
      'Convertible to work visa'
    ],
    icon: '💼',
    color: 'from-purple-500 to-pink-600',
    popular: false
  },
];

const universities = [
  { name: 'Seoul National University', rank: '#1', icon: '🏛️', type: 'National' },
  { name: 'KAIST', rank: '#2', icon: '🔬', type: 'Science & Tech' },
  { name: 'POSTECH', rank: '#3', icon: '⚙️', type: 'Engineering' },
  { name: 'Korea University', rank: 'Top 5', icon: '📚', type: 'Private' },
  { name: 'Yonsei University', rank: 'Top 5', icon: '🎯', type: 'Private' },
  { name: 'Hanyang University', rank: 'Top 10', icon: '🏗️', type: 'Engineering' },
];

const services = [
  {
    icon: FiFileText,
    title: 'Visa Application',
    description: 'Complete visa application assistance with document preparation'
  },
  {
    icon: FiBook,
    title: 'University Admission',
    description: 'Help with university selection and admission applications'
  },
  {
    icon: FiGlobe,
    title: 'Document Translation',
    description: 'Professional translation of academic documents'
  },
  {
    icon: FiCheckCircle,
    title: 'Interview Preparation',
    description: 'Mock interviews and tips for visa interviews'
  },
  {
    icon: FiDollarSign,
    title: 'Scholarship Guidance',
    description: 'Information on scholarships and financial aid'
  },
  {
    icon: FiUsers,
    title: 'Settlement Support',
    description: 'Help with accommodation, banking, and initial setup'
  },
];

const applicationProcess = [
  {
    step: '1',
    title: 'Free Consultation',
    description: 'Discuss your study goals and visa requirements',
    duration: '1 day'
  },
  {
    step: '2',
    title: 'University Selection',
    description: 'Choose the best university and program for you',
    duration: '1 week'
  },
  {
    step: '3',
    title: 'Document Preparation',
    description: 'Gather and prepare all required documents',
    duration: '2-3 weeks'
  },
  {
    step: '4',
    title: 'Application Submission',
    description: 'Submit admission and visa applications',
    duration: '1 day'
  },
  {
    step: '5',
    title: 'Visa Processing',
    description: 'Wait for visa approval and attend interview if needed',
    duration: '4-8 weeks'
  },
  {
    step: '6',
    title: 'Arrival Support',
    description: 'Help with arrival, registration, and settlement',
    duration: '1 week'
  },
];

const requirements = [
  { icon: '📄', title: 'Valid Passport', description: 'Minimum 6 months validity' },
  { icon: '🎓', title: 'Academic Records', description: 'Transcripts and certificates' },
  { icon: '💰', title: 'Financial Proof', description: 'Bank statements (₩20M+)' },
  { icon: '📝', title: 'Study Plan', description: 'Statement of purpose' },
  { icon: '🏥', title: 'Health Certificate', description: 'Medical examination report' },
  { icon: '📸', title: 'Photos', description: 'Passport-sized photos' },
];

export default function StudentVisaPage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">🎓</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Student Visa Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-indigo-100">
              Your Gateway to Studying in South Korea
            </p>
            <p className="text-lg mb-8 text-indigo-200">
              Complete assistance for university admission and student visa application
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm">Students Helped</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm">Universities</div>
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
                Start Your Journey
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

      {/* Visa Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Visa Types</h2>
            <p className="text-xl text-gray-600">
              Choose the right visa for your study goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {visaTypes.filter(v => v.popular).map((visa) => (
              <div
                key={visa.id}
                className="bg-white border-2 border-indigo-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${visa.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{visa.icon}</div>
                  <div className="text-sm font-semibold mb-1 opacity-90">{visa.type}</div>
                  <h3 className="text-2xl font-bold mb-2">{visa.title}</h3>
                  <p className="text-sm opacity-90">{visa.description}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <FiClock size={18} />
                    <span className="font-semibold">Duration: {visa.duration}</span>
                  </div>

                  <div className="space-y-3 mb-6">
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
                    Apply for {visa.type}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Other Visa Type */}
          <div className="max-w-5xl mx-auto">
            {visaTypes.filter(v => !v.popular).map((visa) => (
              <div
                key={visa.id}
                className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="text-6xl">{visa.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-purple-600 mb-1">{visa.type}</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{visa.title}</h3>
                    <p className="text-gray-600 mb-4">{visa.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {visa.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Universities We Work With</h2>
            <p className="text-xl text-gray-600">
              Get admission to Korea's prestigious universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{uni.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-indigo-600 mb-1">{uni.rank} in Korea</div>
                    <h3 className="font-bold text-gray-900 mb-1">{uni.name}</h3>
                    <div className="text-sm text-gray-600">{uni.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">
              Complete support for your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all"
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
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Step-by-step guide to your student visa
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {applicationProcess.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex gap-6 items-start hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Required Documents</h2>
            <p className="text-xl text-gray-600">
              What you need to prepare for your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{req.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{req.title}</h3>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Study in Korea?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Start your application today and let us guide you through every step
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Schedule Free Consultation
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
            <p>🎓 95% Success Rate • 500+ Students Helped • Expert Guidance</p>
          </div>
        </div>
      </section>
    </div>
  );
}