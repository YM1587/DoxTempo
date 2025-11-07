import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ServiceCard from '../components/shared/ServiceCard';
import CTASection from '../components/shared/CTASection';
import Testimonial from '../components/shared/Testimonial';
import { Compass, Map, Camera, Home, PenTool, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Safaris: React.FC = () => {
  const services = [
    {
      title: 'Safari Packages',
      description: 'Curated safari experiences in Africa and beyond, ranging from wildlife photography trips to cultural immersion journeys.',
      icon: <Compass size={24} />,
      link: '/safaris#safari-packages',
      id: 'safari-packages',
    },
    {
      title: 'Custom Travel Itineraries',
      description: 'Personalized travel plans tailored to your interests, timeline, and budget for unique and memorable experiences.',
      icon: <Map size={24} />,
      link: '/safaris#custom-itineraries',
      id: 'custom-itineraries',
    },
    {
      title: 'Travel Photography/Videography',
      description: 'Professional photography and videography services to document your journey with stunning visual memories.',
      icon: <Camera size={24} />,
      link: '/safaris#travel-photography',
      id: 'travel-photography',
    },
    {
      title: 'Accommodation & Transport',
      description: 'Premium lodging and transportation arrangements from luxury lodges and private vehicles to authentic camping experiences.',
      icon: <Home size={24} />,
      link: '/safaris#accommodation',
      id: 'accommodation',
    },
    {
      title: 'Destination Marketing',
      description: 'Strategic promotion for tourism boards, hotels, and destinations to attract travelers and enhance visibility.',
      icon: <PenTool size={24} />,
      link: '/safaris#destination-marketing',
      id: 'destination-marketing',
    },
    {
      title: 'Travel Insurance & Visa Assistance',
      description: 'Comprehensive support with travel documentation, insurance coverage, and visa requirements for a stress-free journey.',
      icon: <FileCheck size={24} />,
      link: '/safaris#travel-insurance',
      id: 'travel-insurance',
    },
  ];

  const destinations = [
    {
      name: "Maasai Mara, Kenya",
      description: "Witness the spectacular Great Migration and encounter abundant wildlife in one of Africa's most famous reserves.",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Serengeti, Tanzania",
      description: "Explore endless plains teeming with wildlife and experience breathtaking sunsets in this iconic national park.",
      image: "https://images.pexels.com/photos/7174384/pexels-photo-7174384.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Kruger National Park, South Africa",
      description: "Discover incredible biodiversity and the Big Five in one of Africa's largest and most diverse wildlife sanctuaries.",
      image: "https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Victoria Falls, Zambia/Zimbabwe",
      description: "Marvel at the 'Smoke That Thunders,' one of the world's most spectacular waterfalls and natural wonders.",
      image: "https://images.pexels.com/photos/6641877/pexels-photo-6641877.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        title="DT Safaris – Discover Africa the DT Way"
        subtitle="Extraordinary travel experiences combining adventure, culture, and photography across Africa's most breathtaking destinations."
        type="safaris"
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
              From carefully curated safaris to personalized travel experiences, 
              we handle every aspect of your journey with expertise and attention to detail.
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
                  type="safaris"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-dt-safaris-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-dt-safaris-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Popular Destinations
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore some of our most sought-after safari destinations and experiences.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.map((destination, index) => (
              <motion.div 
                key={destination.name} 
                variants={itemVariants}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-white/80">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose DT Safaris?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-dt-safaris-100 text-dt-safaris-600 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Local Expertise</h3>
                    <p className="text-gray-600">
                      Our team includes local guides with intimate knowledge of the terrain, wildlife, and culture.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-dt-safaris-100 text-dt-safaris-600 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Photography Focus</h3>
                    <p className="text-gray-600">
                      All our safaris are designed with photography in mind, ensuring you capture the perfect moments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-dt-safaris-100 text-dt-safaris-600 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Personalized Experience</h3>
                    <p className="text-gray-600">
                      Every safari is tailored to your preferences, interests, and travel style for a truly unique adventure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-dt-safaris-100 text-dt-safaris-600 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Responsible Tourism</h3>
                    <p className="text-gray-600">
                      We're committed to sustainable practices that respect wildlife, support local communities, and preserve natural environments.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/16004037/pexels-photo-16004037.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Safari experience" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
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
              Hear from travelers who have experienced our safari adventures.
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
                quote="Our family safari with DT was the trip of a lifetime. The guides were knowledgeable, the accommodations were perfect, and the wildlife photography opportunities were incredible."
                author="The Anderson Family"
                company="USA"
                service="safaris"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Testimonial
                quote="As a photographer, I was amazed by how DT Safaris positioned us for the perfect shots. Their knowledge of animal behavior and lighting conditions made all the difference in my wildlife portfolio."
                author="Michael Chang"
                company="Professional Photographer"
                service="safaris"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <CTASection
        title="Ready for Your African Adventure?"
        subtitle="Let's plan your perfect safari experience with expert guidance and personalized itineraries."
        primaryButtonText="Explore Packages"
        primaryButtonLink="/contact"
        secondaryButtonText="Request Custom Plan"
        secondaryButtonLink="/contact"
        type="safaris"
        bgColor="bg-dt-safaris-50"
      />
    </>
  );
};

export default Safaris;