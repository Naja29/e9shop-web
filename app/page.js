import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <ServicesGrid title="Featured Services" limit={8} />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Contact Banner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help? We're Here 24/7</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us anytime for assistance with any service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:010-2735-6199"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              📞 Call: 010-2735-6199
            </a>
            <a 
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}