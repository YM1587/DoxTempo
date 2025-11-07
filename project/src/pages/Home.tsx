import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandsSection from '../components/home/BrandsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/shared/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection
        title="Ready to Start Your DT Experience?"
        subtitle="Whether you need media production, creative services, or a custom safari adventure, we're here to help bring your vision to life."
        primaryButtonText="Book a Service"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </>
  );
};

export default Home;