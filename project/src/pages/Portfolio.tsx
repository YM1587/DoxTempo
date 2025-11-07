import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import CTASection from '../components/shared/CTASection';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectItem {
  id: string;
  title: string;
  category: 'photography' | 'design' | 'branding' | 'safari';
  brand: 'studios' | 'infinite' | 'safaris';
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    // DT Studios Projects
    {
      id: "1",
      title: "Nyota Fashion Week",
      category: "photography",
      brand: "studios",
      image: "https://images.pexels.com/photos/5866272/pexels-photo-5866272.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Complete photography and videography coverage for East Africa's premier fashion event, including runway, backstage, and designer interviews."
    },
    {
      id: "2",
      title: "Green Hills Resort",
      category: "photography",
      brand: "studios",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Commercial property shoot featuring aerial drone footage, interior photography, and promotional video for a luxury eco-resort."
    },
    {
      id: "3",
      title: "Thompson Wedding",
      category: "photography",
      brand: "studios",
      image: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Full-day wedding coverage using documentary-style photography to capture authentic moments and emotions throughout the celebration."
    },
    
    // DT Infinite Projects
    {
      id: "4",
      title: "Savana Coffee Co.",
      category: "branding",
      brand: "infinite",
      image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Complete brand identity development including logo design, packaging, in-store materials, and brand guidelines for an artisanal coffee company."
    },
    {
      id: "5",
      title: "Horizon Tech Solutions",
      category: "design",
      brand: "infinite",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Website design and development for a technology consulting firm, featuring custom illustrations, interactive elements, and streamlined user experience."
    },
    {
      id: "6",
      title: "Vitality Wellness",
      category: "branding",
      brand: "infinite",
      image: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Brand strategy and visual identity for a holistic wellness center, including logo, website, social media templates, and marketing materials."
    },
    
    // DT Safaris Projects
    {
      id: "7",
      title: "Maasai Mara Expedition",
      category: "safari",
      brand: "safaris",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Custom 10-day photography safari during the Great Migration, with professional guidance and exclusive wildlife viewing opportunities."
    },
    {
      id: "8",
      title: "Tanzania Cultural Immersion",
      category: "safari",
      brand: "safaris",
      image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Specialized cultural safari experience featuring village visits, traditional ceremonies, and authentic interactions with local communities."
    },
    {
      id: "9",
      title: "Victoria Falls Adventure",
      category: "safari",
      brand: "safaris",
      image: "https://images.pexels.com/photos/6641877/pexels-photo-6641877.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Multi-activity safari combining wildlife viewing, adventure sports, and landscape photography at one of Africa's most spectacular natural wonders."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter || project.brand === filter);

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
        title="Our Portfolio"
        subtitle="Showcasing creative work across media production, design, and safari experiences."
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('photography')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'photography' 
                  ? 'bg-dt-studios-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Photography
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'design' 
                  ? 'bg-dt-infinite-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Web Design
            </button>
            <button
              onClick={() => setFilter('branding')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'branding' 
                  ? 'bg-dt-infinite-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Branding
            </button>
            <button
              onClick={() => setFilter('safari')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'safari' 
                  ? 'bg-dt-safaris-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Safari Experiences
            </button>
            <button
              onClick={() => setFilter('studios')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'studios' 
                  ? 'bg-dt-studios-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              DT Studios
            </button>
            <button
              onClick={() => setFilter('infinite')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'infinite' 
                  ? 'bg-dt-infinite-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              DT Infinite
            </button>
            <button
              onClick={() => setFilter('safaris')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'safaris' 
                  ? 'bg-dt-safaris-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              DT Safaris
            </button>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={filter} // Remount the component when filter changes
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card overflow-hidden h-full">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <div className="flex items-center mb-4">
                        {project.brand === 'studios' && (
                          <span className="inline-block px-3 py-1 text-xs rounded-full bg-dt-studios-100 text-dt-studios-700">
                            DT Studios
                          </span>
                        )}
                        {project.brand === 'infinite' && (
                          <span className="inline-block px-3 py-1 text-xs rounded-full bg-dt-infinite-100 text-dt-infinite-700">
                            DT Infinite
                          </span>
                        )}
                        {project.brand === 'safaris' && (
                          <span className="inline-block px-3 py-1 text-xs rounded-full bg-dt-safaris-100 text-dt-safaris-700">
                            DT Safaris
                          </span>
                        )}
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 ml-2">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">Try changing your filter selection.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <div className="flex items-center mb-4">
                {selectedProject.brand === 'studios' && (
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-dt-studios-100 text-dt-studios-700">
                    DT Studios
                  </span>
                )}
                {selectedProject.brand === 'infinite' && (
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-dt-infinite-100 text-dt-infinite-700">
                    DT Infinite
                  </span>
                )}
                {selectedProject.brand === 'safaris' && (
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-dt-safaris-100 text-dt-safaris-700">
                    DT Safaris
                  </span>
                )}
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 ml-2">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="flex justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      <CTASection
        title="Inspired by Our Work?"
        subtitle="Let's collaborate on your next project and create something exceptional together."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </>
  );
};

export default Portfolio;