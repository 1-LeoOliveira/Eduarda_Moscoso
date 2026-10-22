import { useEffect } from 'react';
import { useRevelarNoScroll } from '@/react-app/hooks/useRevelarNoScroll';
import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Services from '@/react-app/components/Services';
import Pains from '@/react-app/components/Pains';
import Benefits from '@/react-app/components/Benefits';
import FirstSession from '@/react-app/components/FirstSession';
import OnlineCare from '@/react-app/components/OnlineCare';
import Faq from '@/react-app/components/Faq';
import Testimonials from '@/react-app/components/Testimonials';
import Footer from '@/react-app/components/Footer';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';

export default function Home() {
  useRevelarNoScroll();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pains />
      <Benefits />
      <FirstSession />
      <OnlineCare />
      <Testimonials />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
