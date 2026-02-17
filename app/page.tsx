import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import OurStory from '@/components/OurStory';
import MenuPricing from '@/components/MenuPricing';
import BuffetHighlights from '@/components/BuffetHighlights';
import Birthday from '@/components/Birthday';
import GiftCards from '@/components/GiftCards';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import HoursLocation from '@/components/HoursLocation';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Welcome />
      <OurStory />
      <MenuPricing />
      <BuffetHighlights />
      <Birthday />
      <GiftCards />
      <Testimonials />
      <Gallery />
      <HoursLocation />
      <Newsletter />
      <Footer />
    </main>
  );
}
