import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  type?: 'studios' | 'infinite' | 'safaris' | 'default';
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  type = 'default',
}) => {
  const bgGradient = {
    default: 'bg-gradient-to-r from-gray-800 to-gray-900',
    studios: 'bg-gradient-to-r from-dt-studios-800 to-dt-studios-900',
    infinite: 'bg-gradient-to-r from-dt-infinite-800 to-dt-infinite-900',
    safaris: 'bg-gradient-to-r from-dt-safaris-800 to-dt-safaris-900',
  };

  return (
    <div className={`py-20 ${bgGradient[type]} text-white`}>
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-200 animate-fade-in animation-delay-200">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;