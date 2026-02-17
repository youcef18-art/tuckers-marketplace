'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stations = [
  {
    name: 'The Carvery',
    description: 'Premium roast beef and honey-glazed ham, carved fresh to your preference',
    image: 'https://lh3.googleusercontent.com/pw/AF1QipP_q4s9g3ZZpt4hWlbtf_MHf_yPQpVGN7uZDqDF=w1920',
  },
  {
    name: 'Wood-Fired Pizza Oven',
    description: 'Artisan pizzas made to order with fresh toppings',
    image: 'https://lh3.googleusercontent.com/pw/AF1QipOBD8NkYid_wmEO1FqhFBuq1f3JKgy7-E1WBPW2=w1920',
  },
  {
    name: 'The Pasta Bar',
    description: 'Build your perfect pasta with fresh ingredients',
    image: 'https://lh3.googleusercontent.com/pw/AF1QipMwCVHzzPQ_jnZ35-f5UrNbgrZQJYiXteyEc7gz=w1920',
  },
  {
    name: 'Salad Garden',
    description: 'Farm-fresh greens and house-made dressings',
    image: 'https://lh3.googleusercontent.com/pw/AF1QipOLfL93MVwWh3rhFIBrdTD4PpVOyv7IPSr0IxMy=w1920',
  },
  {
    name: 'Soup Kitchen',
    description: 'Daily rotating soups made from scratch',
    image: 'https://lh3.googleusercontent.com/pw/AF1QipNFK7mh4b4c5RIVYkG92JUh7k6_ATMRVMx8kIk2=w1920',
  },
  {
    name: 'Dessert Paradise',
    description: 'Decadent cakes, pastries, and sweet treats',
    image: 'https://lh3.googleusercontent.com/pw/AF1QipNrjskDlaz1GrxaakYMCzjTKau3QwMw0Das2qZP=w1920',
  },
];

export default function BuffetHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="buffet" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            Buffet Highlights
          </h2>
          <p className="text-xl text-cream max-w-2xl mx-auto">
            Explore our carefully curated stations featuring global cuisine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stations.map((station, index) => (
            <motion.div
              key={station.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={station.image}
                  alt={station.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">{station.name}</h3>
                <p className="text-cream text-sm">{station.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
