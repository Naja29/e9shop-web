'use client';

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Kumara Perera',
    role: 'Factory Worker, Seoul',
    rating: 5,
    text: 'E9Shop has made sending money home so easy! Fast, reliable, and great rates. Highly recommended!',
    avatar: '👨'
  },
  {
    id: 2,
    name: 'Nimalka Silva',
    role: 'Restaurant Staff, Busan',
    rating: 5,
    text: 'The insurance service saved me during an emergency. Thank you E9Shop for being there 24/7!',
    avatar: '👩'
  },
  {
    id: 3,
    name: 'Roshan Fernando',
    role: 'Construction Worker, Incheon',
    rating: 5,
    text: 'Best visa consultation service! They helped me get my F2 visa without any hassle.',
    avatar: '👨'
  },
  {
    id: 4,
    name: 'Sanduni Mendis',
    role: 'Student, Daegu',
    rating: 5,
    text: 'Using E9 Pay to pay my bills in Sri Lanka is so convenient. No more worrying about late payments!',
    avatar: '👩'
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Real stories from real people
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="text-6xl text-blue-200 absolute top-4 left-4 opacity-50">"</div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="fill-yellow-400 text-yellow-400" size={24} />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors shadow-md"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors shadow-md"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}