'use client';

import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#story' },
  { name: 'Menu & Pricing', href: '#menu' },
  { name: 'Celebrations', href: '#birthday' },
  { name: 'Gift Cards', href: '#gift-cards' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-playfair font-bold text-secondary mb-4">
              Tucker's
            </h3>
            <p className="text-gray-300 mb-4 italic">
              "Ottawa's Favourite Buffet Since the Days of Mama Tucker"
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tuckersottawa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/eattuckers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock size={20} className="mr-2" />
              Hours
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Weekday Lunch:</strong><br />
                11:30am - 2:00pm
              </li>
              <li>
                <strong>Dinner:</strong><br />
                4:00pm - 9:00pm
              </li>
              <li>
                <strong>Weekend Breakfast:</strong><br />
                9:00am - 10:30am
              </li>
              <li>
                <strong>Weekend Brunch:</strong><br />
                Starting 10:30am
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                <span>
                  61 York Street<br />
                  ByWard Market<br />
                  Ottawa, ON
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:613-241-6525" className="hover:text-secondary transition-colors">
                  613-241-6525
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:reservations@eattuckers.ca" className="hover:text-secondary transition-colors">
                  reservations@eattuckers.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Tucker's Marketplace. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Proudly serving Ottawa's ByWard Market since the days of Mama Tucker
          </p>
        </div>
      </div>
    </footer>
  );
}
