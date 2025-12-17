import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiCalendar, FiUsers, FiDollarSign, FiCheck, FiPhone, FiMail, FiClock, FiAward, FiShield, FiThumbsUp } from 'react-icons/fi';

const popularRoutes = [
  {
    id: 1,
    from: 'Seoul (ICN)',
    to: 'Colombo (CMB)',
    fromFlag: '🇰🇷',
    toFlag: '🇱🇰',
    duration: '8h 30m',
    price: 'From Rs.850,000',
    airlines: ['SriLankan', 'Korean Air', 'Qatar'],
    popular: true
  },
  {
    id: 2,
    from: 'Busan (PUS)',
    to: 'Colombo (CMB)',
    fromFlag: '🇰🇷',
    toFlag: '🇱🇰',
    duration: '9h 15m',
    price: 'From Rs.920,000',
    airlines: ['SriLankan', 'Emirates'],
    popular: true
  },
  {
    id: 3,
    from: 'Seoul (ICN)',
    to: 'Dubai (DXB)',
    fromFlag: '🇰🇷',
    toFlag: '🇦🇪',
    duration: '10h 20m',
    price: 'From Rs.780,000',
    airlines: ['Emirates', 'Etihad'],
    popular: false
  },
  {
    id: 4,
    from: 'Seoul (ICN)',
    to: 'Singapore (SIN)',
    fromFlag: '🇰🇷',
    toFlag: '🇸🇬',
    duration: '6h 30m',
    price: 'From Rs.650,000',
    airlines: ['Singapore Airlines', 'Korean Air'],
    popular: false
  },
];

const services = [
  {
    icon: FiMapPin,
    title: 'Flight Booking',
    description: 'Book flights to Sri Lanka and worldwide destinations at competitive prices'
  },
  {
    icon: FiCalendar,
    title: 'Flexible Dates',
    description: 'Find the best deals with our flexible date search options'
  },
  {
    icon: FiUsers,
    title: 'Group Bookings',
    description: 'Special rates for group travel and family bookings'
  },
  {
    icon: FiDollarSign,
    title: 'Best Prices',
    description: 'Compare prices from multiple airlines to get the best deals'
  },
  {
    icon: FiShield,
    title: 'Secure Payment',
    description: 'Safe and secure payment methods with instant confirmation'
  },
  {
    icon: FiClock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service for all your travel needs'
  },
];

const airlines = [
  { name: 'SriLankan Airlines', logo: '🇱🇰' },
  { name: 'Korean Air', logo: '🇰🇷' },
  { name: 'Emirates', logo: '🇦🇪' },
  { name: 'Qatar Airways', logo: '🇶🇦' },
  { name: 'Singapore Airlines', logo: '🇸🇬' },
  { name: 'Thai Airways', logo: '🇹🇭' },
];

const benefits = [
  { icon: FiAward, title: 'Best Price Guarantee', description: 'Find a lower price? We\'ll match it!' },
  { icon: FiShield, title: 'Secure Booking', description: 'Your payment and data are 100% secure' },
  { icon: FiThumbsUp, title: 'Easy Cancellation', description: 'Flexible cancellation and modification options' },
  { icon: FiClock, title: 'Instant Confirmation', description: 'Get your e-ticket immediately after booking' },
];

export default function AirTicketsPage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">✈️</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Air Ticket Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-sky-100">
              Book Your Flight Home or Around the World
            </p>
            <p className="text-lg mb-8 text-sky-200">
              Best prices, trusted airlines, and excellent customer service
            </p>

            {/* Quick Search Box */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="text-left">
                  <label className="text-gray-700 font-semibold mb-2 block text-sm">From</label>
                  <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <FiMapPin className="text-blue-600" size={20} />
                    <input 
                      type="text" 
                      placeholder="Seoul (ICN)" 
                      className="bg-transparent outline-none flex-1 text-gray-900"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <label className="text-gray-700 font-semibold mb-2 block text-sm">To</label>
                  <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <FiMapPin className="text-blue-600" size={20} />
                    <input 
                      type="text" 
                      placeholder="Colombo (CMB)" 
                      className="bg-transparent outline-none flex-1 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <label className="text-gray-700 font-semibold mb-2 block text-sm">Departure Date</label>
                  <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <FiCalendar className="text-blue-600" size={20} />
                    <input 
                      type="date" 
                      className="bg-transparent outline-none flex-1 text-gray-900"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <label className="text-gray-700 font-semibold mb-2 block text-sm">Passengers</label>
                  <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <FiUsers className="text-blue-600" size={20} />
                    <select className="bg-transparent outline-none flex-1 text-gray-900">
                      <option>1 Passenger</option>
                      <option>2 Passengers</option>
                      <option>3 Passengers</option>
                      <option>4+ Passengers</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg">
                Search Flights
              </button>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:010-2735-6199"
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                <FiPhone size={20} />
                Call: 010-2735-6199
              </a>
              <a 
                href="mailto:info@e9shop.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <FiMail size={20} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes</h2>
            <p className="text-xl text-gray-600">
              Most booked flights by Sri Lankans in Korea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {popularRoutes.filter(r => r.popular).map((route) => (
              <div
                key={route.id}
                className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <div className="text-4xl mb-2">{route.fromFlag}</div>
                    <div className="font-bold text-gray-900">{route.from}</div>
                  </div>
                  <div className="text-3xl text-blue-600">✈️</div>
                  <div className="text-center flex-1">
                    <div className="text-4xl mb-2">{route.toFlag}</div>
                    <div className="font-bold text-gray-900">{route.to}</div>
                  </div>
                </div>

                <div className="border-t border-blue-200 pt-4 mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <FiClock size={16} />
                      {route.duration}
                    </span>
                    <span className="text-blue-600 font-bold text-lg">{route.price}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Airlines: {route.airlines.join(', ')}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>

          {/* Other Routes */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Popular Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularRoutes.filter(r => !r.popular).map((route) => (
                <div
                  key={route.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{route.fromFlag}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{route.from} → {route.to}</div>
                        <div className="text-sm text-gray-600">{route.duration}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-600 font-bold">{route.price}</div>
                      <button className="text-blue-600 text-sm font-semibold hover:underline">Book →</button>
                    </div>
                  </div>
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
              Complete flight booking solutions for your travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Airlines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Airlines</h2>
            <p className="text-xl text-gray-600">
              We work with the world's leading airlines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-5xl mb-3">{airline.logo}</div>
                <div className="text-sm font-semibold text-gray-700">{airline.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Book With E9Shop?</h2>
            <p className="text-xl text-gray-600">
              Your trusted travel partner in South Korea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
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

      {/* How to Book */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">How to Book</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Search for Flights</h3>
                  <p className="text-gray-600">Use our search tool or contact us directly with your travel dates and destination</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compare & Choose</h3>
                  <p className="text-gray-600">We'll show you the best options from multiple airlines with competitive prices</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Make Payment</h3>
                  <p className="text-gray-600">Secure payment through bank transfer or card payment</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Receive E-Ticket</h3>
                  <p className="text-gray-600">Get your e-ticket and booking confirmation immediately via email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Flight?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us now for the best flight deals and personalized service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:010-2735-6199"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone size={20} />
              Call Now: 010-2735-6199
            </a>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              Send Inquiry
            </Link>
          </div>

          <div className="mt-8 text-blue-100">
            <p>Available 24/7 • Fast Response • Best Prices Guaranteed</p>
          </div>
        </div>
      </section>
    </div>
  );
}