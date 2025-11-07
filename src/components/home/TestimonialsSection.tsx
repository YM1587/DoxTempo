import React, { useState, useEffect } from 'react';
import Testimonial from '../shared/Testimonial';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "DT Studios captured our wedding beautifully. Their attention to detail and creativity made our special day even more memorable.",
    author: "Sarah & James Thompson",
    company: "Wedding Clients",
    service: "studios" as const,
  },
  {
    quote: "Working with DT Infinite transformed our business. Their web design and branding strategy helped us stand out in a competitive market.",
    author: "Michael Chen",
    company: "CEO, TechStart Solutions",
    service: "infinite" as const,
  },
  {
    quote: "Our safari experience with DT Safaris was incredible. From the itinerary planning to the guided tours, everything was perfect.",
    author: "Emma Williams",
    company: "Travel Enthusiast",
    service: "safaris" as const,
  },
  {
    quote: "The drone coverage DT Studios provided for our real estate listings added incredible value. Properties sold faster with their stunning aerial shots.",
    author: "Robert Johnson",
    company: "Premium Properties",
    service: "studios" as const,
  },
  {
    quote: "DT Infinite's social media management increased our engagement by 200%. Their creative content strategy transformed our online presence.",
    author: "Lisa Ahmed",
    company: "Marketing Director, Fashion Forward",
    service: "infinite" as const,
  },
  {
    quote: "The custom travel itinerary from DT Safaris made our family trip stress-free and unforgettable. They thought of everything so we didn't have to.",
    author: "The Garcia Family",
    company: "Family Travelers",
    service: "safaris" as const,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<typeof testimonials>([]);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const endIndex = Math.min(currentIndex + itemsPerSlide, testimonials.length);
    setDisplayedTestimonials(testimonials.slice(currentIndex, endIndex));
  }, [currentIndex, itemsPerSlide]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - itemsPerSlide));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(testimonials.length - itemsPerSlide, prev + itemsPerSlide));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Hear from clients who have experienced the DT difference across our media production,
            creative services, and safari adventures.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    company={testimonial.company}
                    service={testimonial.service}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerSlide >= testimonials.length}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;