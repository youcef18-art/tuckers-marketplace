'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipNzs42PfytkwknK7XTYDD8BEk7mhRG1SjjvpG67=w1920',
    alt: 'Salad bar close-up',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipNzYT5zhETnkFmiKzB-x4ZPX6nojD3B5DhIYF-Z=w1920',
    alt: 'Salad bar with fruits',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipOqhWBVYDD7qbWDG8Ybclq5_qyfjrxzgxNPpGMz=w1920',
    alt: 'Fruits and toppings',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipPJXnWJRyl3v8Kk4m2-Stu_uFIQNrP3nMhiIb19=w1920',
    alt: 'Interior booths',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipPfHdBzkfHxXFyikKFWqUetEL0Ktm6PVfF0aU60=w1920',
    alt: 'Green walls and hanging plants',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipNkDyALT6QSMe1TyRDwrBw01xROtk027UmqxX76=w1920',
    alt: 'Arched windows dining',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipMgxtk0WkciJbtqymlLdzZ8ocPf-AVb8y8fDsL1=w1920',
    alt: 'Beautiful booth with glass panels',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipM36f7JN9Tk1favS-ffQPomZOH-mFHN7gXH46ZA=w1920',
    alt: 'Wide interior with lamps',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipOVadQB7ytZdlWy-KZNpiMWsX0Jx6X3jAcv7KRj=w1920',
    alt: 'Bar area',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipMZag9jsmmbRLTdczif_iNSaJ2Vxd7n7yXovvWg=w1920',
    alt: 'Hanging plants detail',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipMhA5TmjpQ_QVt8NFeZ_-XlCSP-GQ6dAp3fD5QL=w1920',
    alt: 'Full buffet area',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AF1QipOVaM_tSsMQC01o_4AFW7dx1tew9o5qjiOqkwBb=w1920',
    alt: 'Full dining room',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Gallery</h2>
          <h3 className="text-4xl sm:text-5xl font-playfair font-bold text-primary">
            A Feast for the Eyes
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-50"
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] m-8">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain"
            />
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
            }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % galleryImages.length);
            }}
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
