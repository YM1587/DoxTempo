import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import CTASection from '../components/shared/CTASection';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Daniel Thompson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'With over 15 years of experience in media production and creative direction, Daniel leads the DT brands with a vision for excellence and innovation.',
    },
    {
      name: 'Maya Johnson',
      role: 'Creative Director, DT Infinite',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Maya brings her expertise in design and digital strategy to help clients build compelling brands that stand out in crowded markets.',
    },
    {
      name: 'James Kariuki',
      role: 'Head of Safari Operations',
      image: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Born and raised in Kenya, James combines his local knowledge and passion for wildlife to create unforgettable safari experiences.',
    },
    {
      name: 'Sophia Chen',
      role: 'Lead Photographer, DT Studios',
      image: 'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Award-winning photographer Sophia specializes in capturing authentic moments that tell powerful stories across all types of media.',
    },
  ];

  const fadeInUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <>
      <PageHeader
        title="About DT Brands"
        subtitle="Our story of creativity, innovation, and exploration across multiple industries."
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Story
              </motion.h2>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>
                  Founded in 2015, DT Brands began as a small photography studio with a passion for 
                  capturing moments that tell compelling stories. As our client base grew, so did our 
                  services and vision.
                </p>
                <p>
                  What started as DT Studios quickly expanded as we recognized the interconnected 
                  needs of our clients. Many clients who came for photography also needed branding 
                  and digital services, leading to the birth of DT Infinite Creative Agency.
                </p>
                <p>
                  Our founder's passion for travel and wildlife photography inspired the creation of 
                  DT Safaris, offering unique safari experiences that combine adventure, cultural 
                  immersion, and professional photography.
                </p>
                <p>
                  Today, DT Brands operates as an integrated family of services, allowing clients to 
                  benefit from our expertise across media production, creative services, and safari 
                  experiences under one unified approach.
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="DT Brands team in action" 
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
              Our Mission & Values
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At DT Brands, we're driven by a commitment to excellence, innovation, and authentic connections with our clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpItem}
            >
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering quality that exceeds expectations 
                and creates lasting value for our clients.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpItem}
            >
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and innovation, constantly exploring new techniques, technologies, 
                and approaches to deliver fresh solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpItem}
            >
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We value authentic relationships with our clients and partners, building trust through 
                transparency, integrity, and genuine care for their success.
              </p>
            </motion.div>
          </div>
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
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The talented individuals who bring creativity, expertise, and passion to everything we do.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="card overflow-hidden"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpItem}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection
        title="Want to Join Our Journey?"
        subtitle="Whether you're looking to work with us or become a part of our team, we'd love to hear from you."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </>
  );
};

export default About;