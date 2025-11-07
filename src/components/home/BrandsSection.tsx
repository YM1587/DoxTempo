import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Palette, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BrandsSection: React.FC = () => {
  const brandCards = [
    {
      title: 'DT Studios',
      icon: <Camera size={32} />,
      description: 'Capturing moments, creating memories. From events to commercial shoots, our media production services bring your vision to life.',
      color: 'bg-dt-studios-600',
      link: '/studios',
      image: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'DT Infinite',
      icon: <Palette size={32} />,
      description: "Your brand's creative powerhouse. We design, develop, and market to elevate your business and reach new audiences.",
      color: 'bg-dt-infinite-600',
      link: '/infinite',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'DT Safaris',
      icon: <Compass size={32} />,
      description: 'Discover Africa the DT way. Customized safari experiences, travel itineraries, and photography adventures await.',
      color: 'bg-dt-safaris-600',
      link: '/safaris',
      image: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Brands</h2>
          <p className="text-lg text-gray-600">
            Three distinct services, one unified experience. Each brand of the DT family 
            operates with excellence, innovation, and a commitment to exceeding expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="card overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center rounded-lg p-2 text-white mb-4 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <Link
                  to={card.link}
                  className="group inline-flex items-center font-medium text-gray-900 hover:text-gray-700"
                >
                  Explore More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;