'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils, Pizza, ChefHat } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: '50+ Daily Selections',
    description: 'Fresh, rotating menu items prepared daily',
  },
  {
    icon: Pizza,
    title: 'Wood-Fired Pizzas',
    description: 'Made to order from our authentic wood-fired oven',
  },
  {
    icon: ChefHat,
    title: 'Freshly Carved Meats',
    description: 'Premium roast beef and ham carved fresh',
  },
];

export default function Welcome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="welcome" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-primary mb-6">
              Welcome to Tucker's Marketplace
            </h2>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              Located in the heart of Ottawa's historic ByWard Market, Tucker's Marketplace 
              has been serving the community with exceptional buffet dining since the days 
              of Mama Tucker.
            </p>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              Whether you're a family looking for a great meal (kids under 3 eat FREE!), 
              tourists exploring ByWard Market, or locals celebrating a special occasion, 
              we have something for everyone.
            </p>
            <a
              href="#story"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Learn Our Story
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AF1QipOJ-z11UREQ-rEexcShO5vVsvoIvpU9gpvE7dSl=w1920"
              alt="Tucker's Marketplace Dining"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
