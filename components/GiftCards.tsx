'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gift, Users, Sparkles } from 'lucide-react';

const giftCards = [
  {
    icon: Gift,
    title: 'Standard Gift Card',
    description: 'Perfect for any occasion, available in custom amounts',
    features: ['Choose any amount', 'Never expires', 'Redeemable for any meal'],
    buttonText: 'Purchase Gift Card',
  },
  {
    icon: Users,
    title: 'Family Gift Card',
    description: 'Special family package, great for family gatherings',
    features: ['Perfect for families', 'Special package deals', 'Create lasting memories'],
    buttonText: 'Purchase Family Gift Card',
  },
];

export default function GiftCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gift-cards" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-primary mb-6">
            Gift Cards
          </h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            Give the gift of an unforgettable dining experience
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-secondary mr-3" size={40} />
            <h3 className="text-3xl font-playfair font-bold">Special Offer!</h3>
            <Sparkles className="text-secondary ml-3" size={40} />
          </div>
          <p className="text-2xl sm:text-3xl font-bold">
            Receive <span className="text-secondary">$10</span> for every{' '}
            <span className="text-secondary">$100</span> you spend on gift cards!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {giftCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-background border-2 border-primary rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <card.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-primary mb-3">
                {card.title}
              </h3>
              
              <p className="text-charcoal mb-6">
                {card.description}
              </p>

              <ul className="space-y-3 mb-8">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-charcoal">
                    <div className="bg-secondary rounded-full p-1 mr-3 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full bg-primary text-white text-center px-6 py-4 rounded-md text-lg font-bold hover:bg-opacity-90 transition-all duration-200"
              >
                {card.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-charcoal text-lg">
            For bulk orders or corporate gifts, please contact us at{' '}
            <a href="mailto:info@eattuckers.ca" className="text-primary hover:text-secondary font-semibold">
              info@eattuckers.ca
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
