'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const hours = [
  {
    title: 'Weekdays (Monday - Friday)',
    times: [
      { label: 'Lunch', time: '11:30am - 2:00pm' },
      { label: 'Dinner', time: '4:00pm - 9:00pm' },
    ],
  },
  {
    title: 'Weekend Breakfast',
    times: [
      { label: 'Saturday', time: '9:00am - 10:30am' },
      { label: 'Sunday', time: '9:00am - 10:30am' },
    ],
  },
  {
    title: 'Weekend Brunch',
    times: [
      { label: 'Saturday', time: 'Starting 10:30am' },
      { label: 'Sunday', time: 'Starting 10:30am' },
    ],
  },
  {
    title: 'Weekend Dinner',
    times: [
      { label: 'Saturday & Sunday', time: '4:00pm - 9:00pm' },
    ],
  },
];

export default function HoursLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-primary mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-charcoal">
            In the heart of ByWard Market, Ottawa's most vibrant neighborhood
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Clock className="text-secondary mr-3" size={28} />
                <h3 className="text-2xl font-playfair font-bold text-primary">
                  Hours of Operation
                </h3>
              </div>
              
              <div className="space-y-6">
                {hours.map((period, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">{period.title}</h4>
                    {period.times.map((time, i) => (
                      <div key={i} className="flex justify-between text-charcoal">
                        <span>{time.label}</span>
                        <span className="font-medium">{time.time}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Address</h4>
                  <p className="text-charcoal">
                    61 York Street<br />
                    ByWard Market<br />
                    Ottawa, ON
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-secondary mr-3" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone</h4>
                  <a href="tel:613-241-6525" className="text-charcoal hover:text-secondary">
                    613-241-6525
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="text-secondary mr-3" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <a href="mailto:reservations@eattuckers.ca" className="text-charcoal hover:text-secondary">
                    reservations@eattuckers.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/tuckersottawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com/eattuckers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[600px] rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.6404866886844!2d-75.69413168444151!3d45.42767997910044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a61aa21da7%3A0x58a6c5f2d0e2f1f8!2s61%20York%20St%2C%20Ottawa%2C%20ON%20K1N%205T2!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tucker's Marketplace Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
