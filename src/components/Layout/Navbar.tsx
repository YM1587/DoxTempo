import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'DT Studios', 
    href: '/studios',
    dropdown: [
      { name: 'Event Photography', href: '/studios#event-photography' },
      { name: 'Commercial Shoots', href: '/studios#commercial-shoots' },
      { name: 'Drone Coverage', href: '/studios#drone-coverage' },
      { name: 'Post-Production', href: '/studios#post-production' },
      { name: 'Influencer Marketing', href: '/studios#influencer-marketing' },
      { name: 'Studio Shoots', href: '/studios#studio-shoots' },
    ]
  },
  { 
    name: 'DT Infinite', 
    href: '/infinite',
    dropdown: [
      { name: 'Graphic Design', href: '/infinite#graphic-design' },
      { name: 'Website Development', href: '/infinite#website-development' },
      { name: 'Social Media', href: '/infinite#social-media' },
      { name: 'Digital Marketing', href: '/infinite#digital-marketing' },
      { name: 'Brand Strategy', href: '/infinite#brand-strategy' },
      { name: 'Creative Consulting', href: '/infinite#creative-consulting' },
    ]
  },
  { 
    name: 'DT Safaris', 
    href: '/safaris',
    dropdown: [
      { name: 'Safari Packages', href: '/safaris#safari-packages' },
      { name: 'Custom Itineraries', href: '/safaris#custom-itineraries' },
      { name: 'Travel Photography', href: '/safaris#travel-photography' },
      { name: 'Accommodation', href: '/safaris#accommodation' },
      { name: 'Destination Marketing', href: '/safaris#destination-marketing' },
      { name: 'Travel Insurance', href: '/safaris#travel-insurance' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-900 flex items-center"
            aria-label="DT Brands Logo - Go to homepage"
          >
            <span className="font-black">DT</span>
            <span className="font-light ml-1">Brands</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink
                  to={item.href}
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-200 hover:text-gray-900 ${
                      isActive ? 'text-gray-900' : 'text-gray-600'
                    }`
                  }
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center">
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                  </div>
                </NavLink>
                
                {/* Dropdown menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-100 rounded-lg shadow-lg transition-all duration-200 ${
                      activeDropdown === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dt-studios-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 h-screen' : 'opacity-0 h-0 pointer-events-none'
        } overflow-hidden bg-white`}
      >
        <div className="container-custom py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100 last:border-b-0">
              {item.dropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between py-3 text-left text-base font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`transition-all duration-200 overflow-hidden ${
                      activeDropdown === item.name ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 pr-2 py-2 space-y-2 bg-gray-50 rounded-lg my-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-3 text-base font-medium ${
                      isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              to="/contact"
              className="btn btn-primary w-full text-center justify-center"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;