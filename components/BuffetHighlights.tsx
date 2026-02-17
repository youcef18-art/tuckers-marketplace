'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const stations = [
  {
    name: 'The Carvery',
    description: 'Premium roast beef and honey-glazed ham, carved fresh to your preference',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Wood-Fired Pizza Oven',
    description: 'Artisan pizzas made to order with fresh toppings',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'The Pasta Bar',
    description: 'Build your perfect pasta with fresh ingredients',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Salad Garden',
    description: 'Farm-fresh greens and house-made dressings',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Soup Kitchen',
    description: 'Daily rotating soups made from scratch',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Dessert Paradise',
    description: 'Decadent cakes, pastries, and sweet treats',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function BuffetHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-primary mb-6">
            Buffet Highlights
          </h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            Explore our carefully curated stations featuring global cuisine
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stations.map((station, index) => (
            <motion.div
              key={station.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={station.image}
                  alt={station.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {station.name}
                </h3>
                <p className="text-sm text-gray-200">
                  {station.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
