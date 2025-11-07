import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ServiceCard from '../components/shared/ServiceCard';
import CTASection from '../components/shared/CTASection';
import Testimonial from '../components/shared/Testimonial';
import { PenTool, Globe, Share2, BarChart3, Briefcase, LightbulbIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Infinite: React.FC = () => {
  const services = [
    {
      title: 'Graphic Design',
      description: 'Professional logo design, business cards, brochures, and comprehensive branding packages tailored to your business needs.',
      icon: <PenTool size={24} />,
      link: '/infinite#graphic-design',
      id: 'graphic-design',
    },
    {
      title: 'Website Design & Development',
      description: 'Custom website creation with responsive design, seamless user experience, and optimization for search engines and conversions.',
      icon: <Globe size={24} />,
      link: '/infinite#website-development',
      id: 'website-development',
    },
    {
      title: 'Social Media Management',
      description: 'Strategic planning, content creation, community engagement, and performance analysis for all major social platforms.',
      icon: <Share2 size={24} />,
      link: '/infinite#social-media',
      id: 'social-media',
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, PPC advertising, email campaigns, and content marketing.',
      icon: <BarChart3 size={24} />,
      link: '/infinite#digital-marketing',
      id: 'digital-marketing',
    },
    {
      title: 'Brand Strategy & Identity',
      description: 'Strategic brand positioning, messaging, visual identity development, and guidelines for consistent brand application.',
      icon: <Briefcase size={24} />,
      link: '/infinite#brand-strategy',
      id: 'brand-strategy',
    },
    {
      title: 'Creative Consulting',
      description: 'Expert guidance on creative direction, design thinking, and innovation strategies to solve complex business challenges.',
      icon: <LightbulbIcon size={24} />,
      link: '/infinite#creative-consulting',
      id: 'creative-consulting',
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
        title="DT Infinite – Your Brand's Creative Powerhouse"
        subtitle="Creative services that transform ideas into effective brand experiences and digital solutions."
        type="infinite"
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
              From branding and design to digital marketing and development, 
              our creative solutions help businesses stand out and succeed.
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
                  type="infinite"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-dt-infinite-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-dt-infinite-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Creative Process
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              How we transform ideas into effective creative solutions that achieve your business goals.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-dt-infinite-100 text-dt-infinite-600 rounded-full mb-4">
                  <span className="font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-gray-600">
                  We learn about your business, goals, target audience, and current challenges through in-depth consultation.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-dt-infinite-100 text-dt-infinite-600 rounded-full mb-4">
                  <span className="font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                <p className="text-gray-600">
                  We develop a tailored approach based on research, industry insights, and creative expertise.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-dt-infinite-100 text-dt-infinite-600 rounded-full mb-4">
                  <span className="font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Creation</h3>
                <p className="text-gray-600">
                  Our team brings the strategy to life through design, development, content, and implementation.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-dt-infinite-100 text-dt-infinite-600 rounded-full mb-4">
                  <span className="font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Refinement</h3>
                <p className="text-gray-600">
                  We analyze performance, gather feedback, and continuously optimize for the best possible results.
                </p>
              </div>
            </motion.div>
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
              Recent Projects
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A selection of our creative work for clients across various industries.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Brand identity project" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bloom Cafe Rebrand</h3>
                <p className="text-gray-500 text-sm mb-3">Brand Identity, Packaging, Website</p>
                <p className="text-gray-600 mb-4">
                  Complete brand refresh for an artisanal coffee shop, including logo design, packaging, 
                  menu design, and responsive website.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Website design project" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">TechPro Solutions</h3>
                <p className="text-gray-500 text-sm mb-3">Web Design, Development, SEO</p>
                <p className="text-gray-600 mb-4">
                  Custom website design and development for a tech consulting firm, with integrated 
                  booking system and comprehensive SEO strategy.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Social media campaign" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ActiveLife Campaign</h3>
                <p className="text-gray-500 text-sm mb-3">Social Media, Content Marketing</p>
                <p className="text-gray-600 mb-4">
                  Multi-platform social media campaign for a fitness brand that increased engagement 
                  by 150% and grew their audience by 10,000 followers.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="/portfolio" className="btn btn-infinite">
              View Full Portfolio
            </a>
          </motion.div>
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
              Hear what our clients have to say about working with DT Infinite.
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
                quote="DT Infinite transformed our brand from outdated to outstanding. Their strategic approach to our rebrand and website development resulted in a 40% increase in online inquiries."
                author="James Wilson"
                company="CEO, Wilson Architects"
                service="infinite"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Testimonial
                quote="The social media strategy DT Infinite developed for us completely changed our online presence. Their content is engaging, on-brand, and has helped us connect with a whole new audience."
                author="Emma Rodriguez"
                company="Marketing Director, Glow Beauty"
                service="infinite"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Elevate Your Brand?"
        subtitle="Let's discuss how DT Infinite can help transform your ideas into effective creative solutions."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        type="infinite"
        bgColor="bg-dt-infinite-50"
      />
    </>
  );
};

export default Infinite;