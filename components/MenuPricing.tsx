'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const pricingData = {
  breakfast: {
    title: 'Breakfast',
    items: [
      { age: 'Kids (under 3)', price: 'FREE!', highlight: true },
      { age: 'Kids (3yr-10yr)', price: '$17.97 +tax', highlight: false },
      { age: 'Adults (11yr-65yr)', price: '$19.97 +tax', highlight: false },
      { age: 'Seniors (65+)', price: '$19.97 +tax', highlight: false },
    ],
  },
  lunch: {
    title: 'Lunch',
    items: [
      { age: 'Kids (under 3)', price: 'FREE!', highlight: true },
      { age: 'Kids (3yr-10yr)', price: '$17.97 +tax', highlight: false },
      { age: 'Adults (11yr-65yr)', price: '$28.97 +tax', highlight: false },
      { age: 'Seniors (65+)', price: '$28.97 +tax', highlight: false },
    ],
  },
  brunchDinnerWeekday: {
    title: 'Brunch/Dinner (Sun-Thu)',
    items: [
      { age: 'Kids (under 3)', price: 'FREE!', highlight: true },
      { age: 'Kids (3yr-10yr)', price: '$17.97 +tax', highlight: false },
      { age: 'Adults (11yr-65yr)', price: '$36.97 +tax', highlight: false },
      { age: 'Seniors (65+)', price: '$31.97 +tax', highlight: false },
    ],
  },
  brunchDinnerWeekend: {
    title: 'Brunch/Dinner (Fri-Sat)',
    items: [
      { age: 'Kids (under 3)', price: 'FREE!', highlight: true },
      { age: 'Kids (3yr-10yr)', price: '$17.97 +tax', highlight: false },
      { age: 'Adults (11yr-65yr)', price: '$38.97 +tax', highlight: false },
      { age: 'Seniors (65+)', price: '$31.97 +tax', highlight: false },
    ],
  },
};

const highlights = [
  'Freshly carved Roast Beef',
  'Carved Ham',
  'Made to Order Wood-fired Pizzas',
  'Salad Bar',
  'Pasta Bar',
];

export default function MenuPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('breakfast');

  return (
    <section id="menu" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-6">
            Menu & Pricing
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Unlimited access to our buffet with premium selections
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {Object.entries(pricingData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === key
                  ? 'bg-secondary text-primary shadow-lg'
                  : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
              }`}
            >
              {data.title}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {pricingData[activeTab as keyof typeof pricingData].items.map((item, index) => (
            <motion.div
              key={item.age}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                item.highlight ? 'ring-2 ring-secondary' : ''
              }`}
            >
              <h3 className="text-lg font-bold text-primary mb-3 text-center">
                {item.age}
              </h3>
              <div className={`text-3xl font-playfair font-bold text-center ${
                item.highlight ? 'text-accent' : 'text-secondary'
              }`}>
                {item.price}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8"
        >
          <h3 className="text-2xl font-playfair font-bold text-white text-center mb-6">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center space-x-3 text-white">
                <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                  <Check size={16} className="text-primary" />
                </div>
                <span className="text-lg">{highlight}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-white text-sm italic mb-4">
              *90min Seatings. For Extended Seating contact{' '}
              <a href="mailto:info@eattuckers.ca" className="text-secondary hover:underline">
                info@eattuckers.ca
              </a>
            </p>
            <a
              href="#contact"
              className="inline-block bg-secondary text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-lg"
            >
              Reserve Your Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
