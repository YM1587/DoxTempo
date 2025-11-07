import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ServiceCard from '../components/shared/ServiceCard';
import CTASection from '../components/shared/CTASection';
import Testimonial from '../components/shared/Testimonial';
import { Camera, Video, DroneIcon as Drone, Film, Users, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Studios: React.FC = () => {
  const services = [
    {
      title: 'Event Photography & Videography',
      description: 'Professional coverage for weddings, corporate events, and special occasions that capture the essence and emotion of your memorable moments.',
      icon: <Camera size={24} />,
      link: '/studios#event-photography',
      id: 'event-photography',
    },
    {
      title: 'Commercial/Brand Shoots',
      description: 'High-quality photography and video for businesses, products, and services that showcase your brand in the best possible light.',
      icon: <Video size={24} />,
      link: '/studios#commercial-shoots',
      id: 'commercial-shoots',
    },
    {
      title: 'Drone Coverage',
      description: 'Breathtaking aerial photography and videography that provides unique perspectives for real estate, events, landscapes, and more.',
      icon: <Drone size={24} />,
      link: '/studios#drone-coverage',
      id: 'drone-coverage',
    },
    {
      title: 'Post-Production',
      description: 'Expert editing, color grading, sound design, and visual effects that transform raw footage into polished, professional content.',
      icon: <Film size={24} />,
      link: '/studios#post-production',
      id: 'post-production',
    },
    {
      title: 'Influencer/Content Marketing',
      description: 'Strategic content creation for social media influencers and brands looking to engage audiences with authentic storytelling.',
      icon: <Users size={24} />,
      link: '/studios#influencer-marketing',
      id: 'influencer-marketing',
    },
    {
      title: 'Studio Shoots',
      description: 'Controlled environment photography for portraits, products, and commercial work with professional lighting and backdrops.',
      icon: <Building size={24} />,
      link: '/studios#studio-shoots',
      id: 'studio-shoots',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <PageHeader
        title="DT Studios – Capturing Moments, Creating Memories"
        subtitle="Professional photography, videography, and post-production services for all your creative needs."
        type="studios"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From capturing the perfect moment to producing stunning visual content, 
              our media production team delivers excellence for every project.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                id={service.id}
                variants={itemVariants}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  type="studios"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-dt-studios-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-dt-studios-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Work
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A glimpse into our portfolio of media production work across various industries.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Wedding photography" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Product photography" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/1108822/pexels-photo-1108822.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Drone photography" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Studio portrait" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="/portfolio" className="btn btn-studios">
              View Full Portfolio
            </a>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hear what our clients have to say about their experience with DT Studios.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Testimonial
                quote="DT Studios captured our wedding day perfectly. Their team was professional, creative, and made everyone feel comfortable. The photos and video exceeded our expectations!"
                author="Mark & Lisa Johnson"
                company="Wedding Clients"
                service="studios"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Testimonial
                quote="The drone footage DT Studios provided for our real estate listings was a game-changer. Properties with their aerial photography sold 30% faster than those without."
                author="Sarah Williams"
                company="Williams Real Estate"
                service="studios"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Capture Your Perfect Moment?"
        subtitle="Let's discuss how DT Studios can help bring your vision to life with our professional media production services."
        primaryButtonText="Book Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        type="studios"
        bgColor="bg-dt-studios-50"
      />
    </>
  );
};

export default Studios;