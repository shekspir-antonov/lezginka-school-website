import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Directions from '@/components/Directions';
import Schedule from '@/components/Schedule';
import Prices from '@/components/Prices';
import Gallery from '@/components/Gallery';
import EnrollForm from '@/components/EnrollForm';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Directions />
        <Schedule />
        <Prices />
        <Gallery />
        <EnrollForm />
        <Contacts />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
