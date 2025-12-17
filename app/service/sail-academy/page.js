import Image from 'next/image';
import Link from 'next/link';
import { FiBook, FiVideo, FiAward, FiUsers, FiClock, FiCheck, FiDownload } from 'react-icons/fi';

const courses = [
  {
    id: 1,
    icon: '🇰🇷',
    title: 'Korean Language Basics',
    level: 'Beginner',
    duration: '8 weeks',
    students: '2,500+',
    rating: 4.8,
    description: 'Learn Korean language from scratch. Perfect for beginners living in Korea.',
    topics: ['Hangul reading & writing', 'Basic grammar', 'Daily conversation', 'Essential vocabulary'],
    price: 'Free',
    featured: true
  },
  {
    id: 2,
    icon: '💼',
    title: 'Workplace Korean',
    level: 'Intermediate',
    duration: '6 weeks',
    students: '1,800+',
    rating: 4.9,
    description: 'Master Korean for work environments. Improve your career prospects.',
    topics: ['Business vocabulary', 'Formal language', 'Email writing', 'Meeting conversations'],
    price: 'Rs.45,000',
    featured: true
  },
  {
    id: 3,
    icon: '📝',
    title: 'TOPIK Preparation',
    level: 'All Levels',
    duration: '12 weeks',
    students: '3,200+',
    rating: 4.9,
    description: 'Prepare for TOPIK exam with expert guidance and practice tests.',
    topics: ['Reading strategies', 'Listening practice', 'Writing skills', 'Mock tests'],
    price: 'Rs.25,000',
    featured: true
  },
  {
    id: 4,
    icon: '🎓',
    title: 'Visa Application Guide',
    level: 'All Levels',
    duration: '4 weeks',
    students: '5,000+',
    rating: 4.7,
    description: 'Everything you need to know about Korean visa applications and extensions.',
    topics: ['Visa types explained', 'Application process', 'Required documents', 'Interview tips'],
    price: 'Free',
    featured: false
  },
  {
    id: 5,
    icon: '🏠',
    title: 'Living in Korea Guide',
    level: 'Beginner',
    duration: '3 weeks',
    students: '4,200+',
    rating: 4.6,
    description: 'Essential tips for daily life, culture, and survival in South Korea.',
    topics: ['Finding accommodation', 'Using public transport', 'Korean culture', 'Healthcare system'],
    price: 'Free',
    featured: false
  },
  {
    id: 6,
    icon: '💰',
    title: 'Financial Management',
    level: 'All Levels',
    duration: '5 weeks',
    students: '2,100+',
    rating: 4.8,
    description: 'Manage your money wisely while working in Korea. Save and invest smart.',
    topics: ['Budgeting tips', 'Banking in Korea', 'Sending money home', 'Tax basics'],
    price: 'Rs.30,000',
    featured: false
  },
];

const benefits = [
  { icon: FiVideo, title: 'Video Lessons', description: 'High-quality video content you can watch anytime' },
  { icon: FiBook, title: 'Study Materials', description: 'Comprehensive PDFs and worksheets included' },
  { icon: FiAward, title: 'Certificates', description: 'Earn certificates upon course completion' },
  { icon: FiUsers, title: 'Expert Teachers', description: 'Learn from experienced Korean instructors' },
  { icon: FiClock, title: 'Lifetime Access', description: 'Access your courses forever, learn at your pace' },
  { icon: FiCheck, title: 'Mobile Friendly', description: 'Learn on your phone with our mobile app' },
];

export default function SailAcademyPage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-teal-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">📚</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sail Academy
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              Learn Korean Language & Life Skills Online
            </p>
            <p className="text-lg mb-8 text-green-200">
              Professional courses designed specifically for Sri Lankans living in South Korea
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#courses"
                className="bg-red-400 text-green-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                Browse Courses
              </Link>
              <a 
                href="#download"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
              >
                <FiDownload size={20} />
                Download App
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-yellow-300">15K+</div>
                <div className="text-sm text-green-200">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-green-200">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">4.8★</div>
                <div className="text-sm text-green-200">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">
              Most popular courses among Sri Lankan workers in Korea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.filter(c => c.featured).map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-green-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Course Header */}
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white">
                  <div className="text-5xl mb-3">{course.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1">
                      ⭐ {course.rating}
                    </span>
                  </div>
                </div>

                {/* Course Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  {/* Course Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <FiClock size={16} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUsers size={16} />
                      {course.students}
                    </span>
                  </div>

                  {/* Topics */}
                  <div className="mb-6">
                    <div className="font-semibold text-sm text-gray-700 mb-2">What you'll learn:</div>
                    <ul className="space-y-1">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-green-600">{course.price}</div>
                    <Link
                      href={`/course/${course.id}`}
                      className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Courses */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">All Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.filter(c => !c.featured).map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-bold">{course.price}</span>
                    <Link href={`/course/${course.id}`} className="text-green-600 font-semibold hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sail Academy */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sail Academy?</h2>
            <p className="text-xl text-gray-600">
              The best online learning platform for Sri Lankans in Korea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">📱</div>
            <h2 className="text-4xl font-bold mb-4">Download Sail Academy App</h2>
            <p className="text-xl mb-8 text-green-100">
              Learn on the go! Access all courses from your mobile device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#"
                className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
              >
                <span className="text-3xl">📱</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>
              <a 
                href="#"
                className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
              >
                <span className="text-3xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Start Learning Today!
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of Sri Lankans improving their skills and knowledge in Korea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors"
            >
              Create Free Account
            </Link>
            <a 
              href="tel:010-2735-6199"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}