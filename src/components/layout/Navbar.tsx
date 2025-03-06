import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on a detail page (which needs dark navbar)
  const isDetailPage = () => {
    return (
      location.pathname.includes('/portfolio/') || 
      location.pathname.includes('/blog/') || 
      location.pathname.includes('/services/')
    );
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Check initial scroll position immediately
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Re-run effect when pathname changes
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  // Determine if navbar should have dark styling
  const useNavbarDarkStyling = !scrolled && (location.pathname === '/' || isDetailPage());

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 
        useNavbarDarkStyling ? 'bg-transparent py-5' : 'bg-white dark:bg-gray-900 py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold font-heading ${
              useNavbarDarkStyling ? 'text-white' : 'text-primary dark:text-white'
            }`}
          >
            Agency<span className="text-primary">.</span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link 
                to={link.path} 
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : useNavbarDarkStyling 
                      ? 'text-white' 
                      : 'text-dark dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute h-0.5 w-full transform transition-all duration-300 ${
                isOpen 
                  ? 'bg-dark dark:bg-white rotate-45 top-2' 
                  : useNavbarDarkStyling 
                    ? 'bg-white top-0' 
                    : 'bg-dark dark:bg-white top-0'
              }`} 
            />
            <span 
              className={`absolute h-0.5 w-full top-2 transition-all duration-300 ${
                isOpen 
                  ? 'opacity-0' 
                  : useNavbarDarkStyling 
                    ? 'bg-white' 
                    : 'bg-dark dark:bg-white'
              }`} 
            />
            <span 
              className={`absolute h-0.5 w-full transform transition-all duration-300 ${
                isOpen 
                  ? 'bg-dark dark:bg-white -rotate-45 top-2' 
                  : useNavbarDarkStyling 
                    ? 'bg-white top-4' 
                    : 'bg-dark dark:bg-white top-4'
              }`} 
            />
          </div>
        </button>
        
        {/* Mobile Menu */}
        <motion.div 
          className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, x: '100%' }}
          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className={`text-xl font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-dark dark:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mt-4"
            >
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 