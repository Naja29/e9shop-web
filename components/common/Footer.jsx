import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';

const services = [
  { name: 'E9 Pay Service', href: '/service/e9-pay' },
  { name: 'Sail Academy', href: '/service/sail-academy' },
  { name: 'Air Tickets', href: '/service/air-tickets' },
  { name: 'Insurance', href: '/service/insurance' },
  { name: 'Student Visa', href: '/service/student-visa' },
  { name: 'Stock Market', href: '/service/stock-market' },
  { name: 'Visa Consultation', href: '/service/visa-consultation' },
  { name: 'Law Help', href: '/service/law-help' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const e9PayServices = [
  { name: 'Foreign Money Transfer', href: '/service/foreign-transfer' },
  { name: 'Domestic Transfer', href: '/service/domestic-transfer' },
  { name: 'Bill Payments', href: '/service/bill-payments' },
  { name: 'Bank Account Opening', href: '/service/bank-account' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden">
                <Image
                  src="/images/e9pay-logo.png"
                  alt="E9Shop"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">E9Shop</div>
                <div className="text-xs text-gray-400">Your Trusted Partner</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Complete service solutions for Sri Lankans living in South Korea. 
              Money transfer, insurance, visa services, education, and more - all in one place.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:010-2735-6199" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <FiPhone size={18} className="flex-shrink-0" />
                <span>010-2735-6199</span>
              </a>
              <a href="mailto:info@e9shop.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <FiMail size={18} className="flex-shrink-0" />
                <span>info@e9shop.com</span>
              </a>
              <div className="flex items-start gap-3">
                <FiMapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Seoul, South Korea<br />Available Nationwide</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <div className="text-white font-semibold mb-3">Follow Us</div>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <FiFacebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                  <FiInstagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                  <FiTwitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                  <FiYoutube size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* E9 Pay Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">E9 Pay Services</h3>
            <ul className="space-y-2">
              {e9PayServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-white font-bold text-lg mb-4 mt-8">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get latest updates, news, and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Operating Hours */}
            <div className="mt-8">
              <h3 className="text-white font-bold text-lg mb-4">Operating Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs inline-block">
                    24/7 Emergency Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} E9Shop. All rights reserved. | Serving Sri Lankans in South Korea since 2015
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-950 border-t border-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Licensed & Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>10 Years in Business</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}