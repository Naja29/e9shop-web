import Image from 'next/image';
import Link from 'next/link';
import { FiAward, FiUsers, FiHeart, FiTrendingUp, FiShield, FiClock, FiGlobe, FiTarget } from 'react-icons/fi';

export const metadata = {
  title: 'About E9Shop - Your Trusted Partner in South Korea',
  description: 'Learn about E9Shop, the leading service provider for Sri Lankans in Korea. Our story, mission, values, and commitment to serving our community.',
};

const milestones = [
  { year: '2018', title: 'E9Shop Founded', description: 'Started with E9 Pay money transfer service' },
  { year: '2019', title: 'Expanded Services', description: 'Added insurance and visa consultation' },
  { year: '2020', title: 'Sail Academy Launched', description: 'Online education platform for Korean language' },
  { year: '2021', title: '5,000 Customers', description: 'Reached milestone of 5,000 satisfied customers' },
  { year: '2022', title: 'New Office Opening', description: 'Expanded to multiple locations across Korea' },
  { year: '2023', title: 'Stock Market Service', description: 'Launched investment platform' },
  { year: '2024', title: '10,000+ Customers', description: 'Trusted by over 10,000 Sri Lankans in Korea' },
  { year: '2025', title: 'Digital Innovation', description: 'Mobile app and enhanced online services' },
];

const values = [
  {
    icon: FiHeart,
    title: 'Customer First',
    description: 'Your needs and satisfaction are our top priority. We go the extra mile to ensure you receive the best service.',
    color: 'text-red-600 bg-red-100'
  },
  {
    icon: FiShield,
    title: 'Trust & Security',
    description: 'We handle your money and personal information with the highest level of security and confidentiality.',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: FiUsers,
    title: 'Community Focus',
    description: 'We are part of the Sri Lankan community in Korea and dedicated to supporting our people.',
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: FiTrendingUp,
    title: 'Excellence',
    description: 'We continuously improve our services to provide the best solutions for your needs.',
    color: 'text-purple-600 bg-purple-100'
  },
];

const team = [
  {
    name: 'Founder & CEO',
    role: 'Leadership',
    description: 'Visionary leader with 15+ years of experience in financial services',
    icon: '👨‍💼'
  },
  {
    name: 'Customer Service Team',
    role: 'Support',
    description: '24/7 multilingual support in Sinhala, Tamil, and Korean',
    icon: '👥'
  },
  {
    name: 'Financial Advisors',
    role: 'Money Transfer & Investment',
    description: 'Expert team handling all financial transactions securely',
    icon: '💰'
  },
  {
    name: 'Visa Consultants',
    role: 'Immigration Services',
    description: 'Licensed professionals with immigration law expertise',
    icon: '📋'
  },
  {
    name: 'Insurance Agents',
    role: 'Insurance Services',
    description: 'Certified agents providing comprehensive coverage',
    icon: '🛡️'
  },
  {
    name: 'Education Team',
    role: 'Sail Academy',
    description: 'Experienced Korean language instructors',
    icon: '👨‍🏫'
  },
];

const stats = [
  { icon: FiUsers, number: '10,000+', label: 'Happy Customers' },
  { icon: FiGlobe, number: '8', label: 'Service Categories' },
  { icon: FiClock, number: '24/7', label: 'Customer Support' },
  { icon: FiAward, number: '7+', label: 'Years in Business' },
];

const services = [
  { icon: '💸', name: 'E9 Pay Service', description: 'Money transfer & bill payments' },
  { icon: '📚', name: 'Sail Academy', description: 'Korean language courses' },
  { icon: '✈️', name: 'Air Tickets', description: 'Flight booking services' },
  { icon: '🛡️', name: 'Insurance', description: 'Life, vehicle, property coverage' },
  { icon: '🎓', name: 'Student Visa', description: 'Study in Korea support' },
  { icon: '📈', name: 'Stock Market', description: 'Investment services' },
  { icon: '📋', name: 'Visa Consultation', description: 'All visa types assistance' },
  { icon: '⚖️', name: 'Law Help', description: 'Legal consultation' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About E9Shop
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Your Trusted Service Partner in South Korea
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              For over 7 years, we've been serving the Sri Lankan community in Korea with 
              dedication, trust, and excellence. We're more than a service provider – we're 
              your partner in success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                How E9Shop became the trusted name for Sri Lankans in Korea
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  E9Shop was founded in 2018 with a simple mission: to make life easier for Sri Lankans 
                  working and living in South Korea. What started as a small money transfer service has 
                  grown into a comprehensive platform offering everything from financial services to 
                  education and legal support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We understand the challenges of living far from home – sending money to family, dealing 
                  with visa issues, learning a new language, and navigating unfamiliar systems. That's why 
                  we created E9Shop: a one-stop solution for all your needs in Korea.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we're proud to serve over 10,000 customers across South Korea, with services 
                  available 24/7 in Sinhala, Tamil, and Korean. Our team of experts is dedicated to 
                  providing fast, secure, and reliable services that you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all text-center"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              7 years of growth and innovation
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 text-right md:text-left">
                      {index % 2 === 0 && (
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                          <div className="text-blue-600 font-bold text-2xl mb-2">{milestone.year}</div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      )}
                    </div>

                    <div className="hidden md:flex w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className="flex-1">
                      {index % 2 !== 0 && (
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                          <div className="text-blue-600 font-bold text-2xl mb-2">{milestone.year}</div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-blue-600 font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Expert professionals dedicated to serving you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-xl transition-all text-center"
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Everything you need, all in one place
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{service.name}</h3>
                <p className="text-gray-600 text-xs">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6">
                <FiTarget size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, reliable, and accessible services that empower Sri Lankans 
                in South Korea to thrive, succeed, and stay connected with their roots. We strive to 
                be the bridge between Korea and Sri Lanka, making life easier for our community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-6">
                <FiTrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and comprehensive service platform for the Sri Lankan community 
                in Korea, recognized for our excellence, innovation, and unwavering commitment to 
                customer satisfaction. We envision a future where every Sri Lankan in Korea has access 
                to seamless, secure, and reliable services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers and let us help you succeed in Korea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Contact Us Today
            </Link>
            <a 
              href="tel:010-2735-6199"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              Call: 010-2735-6199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}