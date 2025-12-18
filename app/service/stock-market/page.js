import Image from 'next/image';
import Link from 'next/link';
import { FiTrendingUp, FiDollarSign, FiPieChart, FiBarChart2, FiShield, FiClock, FiUsers, FiAward, FiPhone, FiMail, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Colombo Stock Market Investment - Trade from Korea | E9Shop',
  description: 'Invest in Sri Lankan stocks from South Korea. Real-time trading, expert guidance, and secure platform. Start building your wealth today.',
};

const investmentPlans = [
  {
    id: 1,
    name: 'Starter Plan',
    description: 'Perfect for beginners starting their investment journey',
    minInvestment: 'Rs.50,000',
    features: [
      'Real-time stock prices',
      'Basic market analysis',
      'Email support',
      'Monthly reports',
      'Educational resources'
    ],
    icon: '🌱',
    color: 'from-green-500 to-teal-600',
    popular: false
  },
  {
    id: 2,
    name: 'Growth Plan',
    description: 'For serious investors looking to grow wealth',
    minInvestment: 'Rs.200,000',
    features: [
      'All Starter features',
      'Advanced analytics',
      'Priority support',
      'Weekly market insights',
      'Portfolio recommendations',
      'Dedicated advisor'
    ],
    icon: '📊',
    color: 'from-blue-500 to-indigo-600',
    popular: true
  },
  {
    id: 3,
    name: 'Premium Plan',
    description: 'For high-value investors seeking maximum returns',
    minInvestment: 'Rs.500,000',
    features: [
      'All Growth features',
      'Personal wealth manager',
      '24/7 premium support',
      'Daily market analysis',
      'Custom investment strategies',
      'Tax optimization advice',
      'VIP events access'
    ],
    icon: '💎',
    color: 'from-purple-500 to-pink-600',
    popular: true
  },
];

const topSectors = [
  { name: 'Banking & Finance', icon: '🏦', growth: '+12.5%', color: 'text-green-600' },
  { name: 'Manufacturing', icon: '🏭', growth: '+8.3%', color: 'text-green-600' },
  { name: 'Telecommunications', icon: '📡', growth: '+15.7%', color: 'text-green-600' },
  { name: 'Consumer Goods', icon: '🛒', growth: '+6.2%', color: 'text-green-600' },
  { name: 'Real Estate', icon: '🏘️', growth: '+10.1%', color: 'text-green-600' },
  { name: 'Tourism & Hospitality', icon: '✈️', growth: '+18.4%', color: 'text-green-600' },
];

const benefits = [
  {
    icon: FiTrendingUp,
    title: 'High Growth Potential',
    description: 'Emerging market with strong growth opportunities'
  },
  {
    icon: FiShield,
    title: 'Secure Platform',
    description: 'Bank-level security with encrypted transactions'
  },
  {
    icon: FiUsers,
    title: 'Expert Guidance',
    description: 'Professional advisors with local market knowledge'
  },
  {
    icon: FiClock,
    title: 'Real-Time Trading',
    description: 'Live market data and instant trade execution'
  },
  {
    icon: FiBarChart2,
    title: 'Portfolio Tracking',
    description: 'Monitor your investments 24/7 from anywhere'
  },
  {
    icon: FiAward,
    title: 'Tax Benefits',
    description: 'Guidance on tax-efficient investment strategies'
  },
];

const howItWorks = [
  {
    step: '1',
    title: 'Open Account',
    description: 'Register and complete KYC verification online',
    icon: '📝'
  },
  {
    step: '2',
    title: 'Fund Account',
    description: 'Transfer money from Korea to your investment account',
    icon: '💰'
  },
  {
    step: '3',
    title: 'Research & Analyze',
    description: 'Access market data and expert recommendations',
    icon: '🔍'
  },
  {
    step: '4',
    title: 'Start Trading',
    description: 'Buy and sell stocks with real-time execution',
    icon: '📈'
  },
  {
    step: '5',
    title: 'Monitor & Grow',
    description: 'Track performance and reinvest profits',
    icon: '📊'
  },
];

const faqs = [
  {
    question: 'Can I invest in Sri Lankan stocks from Korea?',
    answer: 'Yes! We provide a complete platform for Sri Lankans in Korea to invest in the Colombo Stock Exchange. All transactions are handled securely online.'
  },
  {
    question: 'What is the minimum investment amount?',
    answer: 'You can start with as little as ₩500,000 (approximately 200,000 LKR). We recommend starting small and gradually increasing your investment as you learn.'
  },
  {
    question: 'How do I transfer money for investment?',
    answer: 'Use our E9 Pay service to transfer money from your Korean bank account directly to your investment account in Sri Lanka.'
  },
  {
    question: 'Is my investment safe?',
    answer: 'All investments are made through regulated brokers registered with the Securities and Exchange Commission of Sri Lanka. However, stock market investments carry inherent risks.'
  },
];

export default function StockMarketPage() {
  return (
    <div className="bg-[#C1D7D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">📈</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Colombo Stock Market Investment
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-teal-100">
              Invest in Sri Lankan Stocks from South Korea
            </p>
            <p className="text-lg mb-8 text-teal-200">
              Build wealth through smart investments in Sri Lanka's growing economy
            </p>

            {/* Live Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm mb-1">ASPI</div>
                <div className="text-2xl font-bold">12,845</div>
                <div className="text-xs text-green-300">+2.4% ↑</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm mb-1">S&P SL20</div>
                <div className="text-2xl font-bold">3,421</div>
                <div className="text-xs text-green-300">+1.8% ↑</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm mb-1">Turnover</div>
                <div className="text-2xl font-bold">2.5B</div>
                <div className="text-xs">LKR</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm mb-1">Volume</div>
                <div className="text-2xl font-bold">85M</div>
                <div className="text-xs">Shares</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-yellow-400 text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                Start Investing Today
              </Link>
              <a 
                href="tel:010-2735-6199"
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
              >
                <FiPhone size={20} />
                Call Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Plans</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that matches your investment goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {investmentPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 ${
                  plan.popular ? 'border-2 border-teal-500 relative' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold">{plan.minInvestment}</div>
                  <div className="text-sm opacity-90">Minimum Investment</div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <FiCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-lg font-semibold transition-colors text-center ${
                      plan.popular
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Choose {plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Sectors */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Performing Sectors</h2>
            <p className="text-xl text-gray-600">
              Explore high-growth investment opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topSectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{sector.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{sector.name}</h3>
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${sector.color}`}>
                    {sector.growth}
                  </div>
                </div>
                <div className="text-xs text-gray-500">Year-to-date performance</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Invest With Us?</h2>
            <p className="text-xl text-gray-600">
              Professional investment services tailored for Sri Lankans in Korea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
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

      {/* How It Works */}
      <section className="py-16 bg-[#C1D7D8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600">
              Simple steps to begin your investment journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-5xl mb-3">{step.icon}</div>
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-teal-600">
                    <span className="text-2xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex gap-4">
            <FiAlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Investment Risk Warning</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Stock market investments carry risk, and past performance does not guarantee future results. 
                The value of investments can go down as well as up, and you may lose some or all of your invested capital. 
                Please invest responsibly and only invest what you can afford to lose. We recommend consulting with our 
                financial advisors before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about stock market investment
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-teal-600">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-6">
                  <span className="text-teal-600 font-bold">A:</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Open your investment account today and start your journey to financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-400 text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Open Investment Account
            </Link>
            <a 
              href="tel:010-2735-6199"
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone size={20} />
              Talk to Advisor
            </a>
          </div>

          <div className="mt-8 text-teal-100">
            <p>📈 Expert Guidance • Real-Time Trading • Secure Platform</p>
          </div>
        </div>
      </section>
    </div>
  );
}