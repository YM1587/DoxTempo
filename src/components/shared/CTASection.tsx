import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  type?: 'studios' | 'infinite' | 'safaris' | 'default';
  bgColor?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  type = 'default',
  bgColor = 'bg-gray-100',
}) => {
  const primaryButtonClasses = {
    default: 'btn-primary',
    studios: 'btn-studios',
    infinite: 'btn-infinite',
    safaris: 'btn-safaris',
  };

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to={primaryButtonLink} className={`btn ${primaryButtonClasses[type]}`}>
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink} className="btn btn-outline">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;