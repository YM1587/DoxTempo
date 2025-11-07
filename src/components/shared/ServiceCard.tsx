import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  type: 'studios' | 'infinite' | 'safaris';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  type,
}) => {
  const buttonClasses = {
    studios: 'text-dt-studios-600 hover:text-dt-studios-700',
    infinite: 'text-dt-infinite-600 hover:text-dt-infinite-700',
    safaris: 'text-dt-safaris-600 hover:text-dt-safaris-700',
  };

  const iconWrapperClasses = {
    studios: 'bg-dt-studios-50 text-dt-studios-600',
    infinite: 'bg-dt-infinite-50 text-dt-infinite-600',
    safaris: 'bg-dt-safaris-50 text-dt-safaris-600',
  };

  return (
    <div className="service-card">
      <div className="p-6 flex-grow">
        <div className={`inline-flex p-3 rounded-lg mb-4 ${iconWrapperClasses[type]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <Link
          to={link}
          className={`group inline-flex items-center font-medium ${buttonClasses[type]}`}
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;