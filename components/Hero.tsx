'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/pw/AF1QipOeXpFtBGCfZMro03rVyPaKY88AavwyGs1ZN_7j=w1920"
          alt="Tucker's Marketplace Buffet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6"
          >
            Ottawa's Favourite Buffet is Back!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white mb-12 font-light"
          >
            Over 50 rotating selections daily in the heart of ByWard Market
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => handleScroll('#menu')}
              className="bg-secondary text-primary px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              View Our Menu
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 shadow-lg w-full sm:w-auto"
            >
              Reserve a Table
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => handleScroll('#welcome')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white hover:text-secondary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} />
        </motion.button>
      </motion.div>
    </section>
  );
}
