'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-primary mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
                alt="Historic ByWard Market"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-charcoal leading-relaxed"
          >
            <p className="text-lg">
              Our story begins in <strong>1789 in Ireland</strong>, where <strong>Mother Tucker 
              (Mama Lisa)</strong> was born. In 1816, she immigrated to Canada with her husband 
              John Tucker, seeking a new life in the growing colony.
            </p>
            
            <p className="text-lg">
              They settled in <strong>Bytown</strong> (later renamed Ottawa), where they opened 
              a modest boarding house near the <strong>Rideau Canal</strong>. Mama Lisa became 
              legendary for her hearty cooking, serving generous meals to <strong>Colonel By's 
              men</strong> who were building the canal.
            </p>

            <p className="text-lg">
              More than just a cook, she was a <strong>mother figure</strong> to the workers — 
              tending to their wounds, listening to their grievances, and providing comfort far 
              from their families. Her warm hospitality and nurturing spirit earned her the beloved 
              name "Mother Tucker."
            </p>

            <p className="text-lg">
              In <strong>1994</strong>, we rebranded as <strong>Tucker's Marketplace</strong>, 
              transforming into a buffet-style restaurant while honoring Mama Lisa's legacy of 
              abundant, quality food and genuine care for our guests.
            </p>

            <p className="text-lg">
              Though we closed in <strong>June 2020</strong> due to COVID-19, our community's 
              love brought us back. We proudly reopened on <strong>January 25, 2023</strong>, 
              continuing the tradition that began over two centuries ago.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
