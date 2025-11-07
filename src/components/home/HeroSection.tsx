import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Creativity. Innovation. Exploration.
            <span className="block mt-2 text-dt-studios-400">The DT Experience.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your one-stop destination for media production, creative services,
            and unforgettable safari experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Book a Service
            </Link>
            <Link to="/portfolio" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Explore Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;