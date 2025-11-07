import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  company?: string;
  service: 'studios' | 'infinite' | 'safaris';
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, service }) => {
  const colorClasses = {
    studios: 'bg-dt-studios-50 border-dt-studios-200',
    infinite: 'bg-dt-infinite-50 border-dt-infinite-200',
    safaris: 'bg-dt-safaris-50 border-dt-safaris-200',
  };

  return (
    <div className={`p-6 rounded-xl border ${colorClasses[service]} h-full flex flex-col`}>
      <div className="flex-grow">
        <svg className="h-8 w-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 mb-4">{quote}</p>
      </div>
      <div>
        <p className="font-semibold">{author}</p>
        {company && <p className="text-sm text-gray-500">{company}</p>}
      </div>
    </div>
  );
};

export default Testimonial;