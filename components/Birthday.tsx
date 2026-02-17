'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PartyPopper, Gift, Calendar, CreditCard } from 'lucide-react';

const conditions = [
  { icon: CreditCard, text: 'Must have valid ID' },
  { icon: Calendar, text: 'Valid on day of your actual birthday' },
  { icon: Gift, text: '1 buffet must be purchased' },
];

export default function Birthday() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="birthday" className="py-20 bg-gradient-to-br from-accent via-accent to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🎉</div>
        <div className="absolute top-20 right-20 text-7xl">🎂</div>
        <div className="absolute bottom-10 left-1/4 text-8xl">🎈</div>
        <div className="absolute bottom-20 right-1/3 text-6xl">🎊</div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <PartyPopper size={64} className="text-secondary" />
            </motion.div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4">
            HAPPY BIRTHDAY!
          </h2>
          
          <p className="text-2xl sm:text-3xl text-secondary font-semibold mb-8">
            Join us on your Birthday!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8"
          >
            <p className="text-2xl sm:text-3xl text-white mb-6 font-semibold">
              Celebrate your Birthday at Tucker's Marketplace,<br />
              and your meal is on us!*
            </p>
            <div className="inline-block bg-secondary text-primary px-8 py-4 rounded-full text-xl sm:text-2xl font-bold mb-6">
              Birthday BOGO - Buy one meal, get yours FREE!
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid sm:grid-cols-3 gap-6 mb-10"
          >
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center"
              >
                <condition.icon className="text-secondary mb-3" size={32} />
                <p className="text-white text-sm text-center">{condition.text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="inline-block bg-secondary text-primary px-12 py-5 rounded-md text-xl font-bold hover:bg-yellow-400 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Reserve Your Birthday Table Now!
            </a>
            <p className="text-white text-sm mt-4 italic">*Conditions may apply</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
