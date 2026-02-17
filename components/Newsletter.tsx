'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thanks for subscribing!');
    setEmail('');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-secondary bg-opacity-20 p-4 rounded-full">
              <Mail className="text-secondary" size={48} />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
            Stay Connected
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            Subscribe for exclusive offers and updates
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-md text-charcoal focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="bg-secondary text-primary px-8 py-4 rounded-md font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-secondary font-semibold"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
