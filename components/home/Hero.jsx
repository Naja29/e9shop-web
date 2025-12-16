import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left text-white order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Welcome to <span className="text-yellow-300">E9Shop</span>
            </h1>
            <p className="text-lg md:text-xl mb-3 md:mb-4 text-blue-100">
              Your trusted service provider in South Korea
            </p>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-200">
              Money transfer • Insurance • Visa services • Education • Stock market • Legal help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/services"
                className="bg-yellow-400 text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors text-center shadow-lg"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold border-2 border-white hover:bg-blue-50 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-xs md:text-sm text-blue-200">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">10K+</div>
                <div className="text-xs md:text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">Trusted</div>
                <div className="text-xs md:text-sm text-blue-200">In Korea</div>
              </div>
            </div>
          </div>

          {/* Right Image - Mobile Optimized */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square lg:h-[300px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-banner.jpg"
                alt="E9Shop Services"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}