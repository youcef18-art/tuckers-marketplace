'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Best buffet in Ottawa! The variety is incredible and everything is fresh. We bring the whole family every month. Kids love it!',
    source: 'Google Reviews',
  },
  {
    name: 'Michael T.',
    rating: 5,
    text: 'The wood-fired pizzas are amazing! Great value for money and the location in ByWard Market is perfect. Highly recommend for tourists.',
    source: 'TripAdvisor',
  },
  {
    name: 'Linda K.',
    rating: 5,
    text: 'We celebrated my birthday here with the BOGO deal - what a treat! The staff was wonderful and the food selection was outstanding.',
    source: 'Google Reviews',
  },
  {
    name: 'James R.',
    rating: 5,
    text: 'As seniors, we appreciate the great pricing and quality. The carved meats are top-notch. This is our go-to spot for Sunday brunch!',
    source: 'TripAdvisor',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-200">
            Loved by families, tourists, and locals alike
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-xl relative"
            >
              <Quote className="absolute top-4 right-4 text-secondary opacity-20" size={40} />
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-secondary fill-secondary" size={16} />
                ))}
              </div>

              <p className="text-charcoal mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.source}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-secondary text-primary px-10 py-4 rounded-md text-lg font-bold hover:bg-yellow-400 transition-all duration-200 shadow-lg"
          >
            Book Your Table Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
