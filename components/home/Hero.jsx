import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">E9Shop</span>
            </h1>
            <p className="text-xl mb-4 text-blue-100">
              Your trusted service provider in South Korea
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Money transfer • Insurance • Visa services • Education • Stock market • Legal help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/services"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors text-center shadow-lg"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-blue-50 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-blue-200">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10K+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">Trusted</div>
                <div className="text-sm text-blue-200">In Korea</div>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="flex-1">
            <div className="relative w-full h-80 lg:h-96 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white border-opacity-20">
              <div className="text-center p-8">
                <div className="text-7xl mb-6">🏪</div>
                <h3 className="text-white text-2xl font-bold mb-3">E9 Pay</h3>
                <p className="text-blue-100 text-lg">
                  Korea's most trusted money exchange service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}