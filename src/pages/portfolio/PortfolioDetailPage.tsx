import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PortfolioDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  
  // Mock portfolio items data - in a real app, this would come from an API
  const portfolioItems = [
    {
      id: '1',
      title: 'E-commerce Website Redesign',
      category: 'Web Design',
      client: 'Fashion Boutique',
      year: '2023',
      description: 'A complete redesign of an e-commerce platform with a focus on user experience and conversion optimization.',
      challenge: 'The client needed a modern, mobile-friendly e-commerce website that would increase their conversion rates and provide a better shopping experience.',
      solution: 'We redesigned the entire user interface with a focus on simplicity, speed, and intuitive navigation. We implemented a responsive design that works flawlessly on all devices.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80',
        'https://images.unsplash.com/photo-1563986768494-4dee09f83530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      ]
    },
    {
      id: '2',
      title: 'Mobile App Development',
      category: 'Mobile Development',
      client: 'Health & Fitness Startup',
      year: '2023',
      description: 'A fitness tracking mobile application that helps users track their workouts and nutrition.',
      challenge: 'The client needed a user-friendly mobile app that would help their customers track fitness goals and maintain healthy habits.',
      solution: 'We developed a cross-platform mobile app with intuitive interfaces for tracking workouts, nutrition, and progress over time. The app includes social features for sharing achievements.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1650&q=80',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1781&q=80'
      ]
    },
    {
      id: '3',
      title: 'Brand Identity Design',
      category: 'Branding',
      client: 'Tech Startup',
      year: '2022',
      description: 'A complete brand identity package including logo, color palette, typography, and brand guidelines.',
      challenge: 'The client was launching a new tech product and needed a brand identity that would stand out in a crowded market and appeal to their target audience.',
      solution: 'We developed a unique and memorable brand identity with a modern logo, distinctive color palette, and comprehensive brand guidelines to ensure consistency across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
        'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80',
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      ]
    },
    {
      id: '4',
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      client: 'Financial Services Company',
      year: '2022',
      description: 'A complete redesign of a corporate website to improve user experience and conversion rates.',
      challenge: "The client had an outdated website that was difficult to navigate and wasn't effectively communicating their services or generating leads.",
      solution: "We redesigned the website with a modern, professional look that clearly communicates the client's services and value proposition. The new site includes intuitive navigation, clear calls to action, and a responsive design.",
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      ]
    }
  ];

  // Find the portfolio item with the matching ID
  const portfolioItem = portfolioItems.find(item => item.id === id);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!portfolioItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8 text-gray-800 dark:text-gray-300">Sorry, the project you're looking for doesn't exist or has been removed.</p>
        <Link to="/portfolio" className="btn btn-primary">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dark header background for transparent navbar */}
      <div className="w-full bg-dark dark:bg-gray-900 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="pt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{portfolioItem.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-800 bg-opacity-50 rounded-full px-4 py-2 text-white">
                <span className="font-medium">Category:</span> {portfolioItem.category}
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-full px-4 py-2 text-white">
                <span className="font-medium">Client:</span> {portfolioItem.client}
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-full px-4 py-2 text-white">
                <span className="font-medium">Year:</span> {portfolioItem.year}
              </div>
            </div>
            <p className="text-lg mb-8 text-gray-300">{portfolioItem.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary py-3 px-8 rounded-lg font-medium">
                Start a Project
              </Link>
              <Link to="/portfolio" className="btn py-3 px-8 rounded-lg font-medium border-2 border-white text-white hover:bg-white hover:text-dark transition-colors duration-300">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-16">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <div className="mb-8">
                {/* Buttons moved to header section */}
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-lg overflow-hidden shadow-xl -mt-24"
            >
              <img 
                src={portfolioItem.image} 
                alt={portfolioItem.title} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-20 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Challenge</h2>
              <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">{portfolioItem.challenge}</p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Solution</h2>
              <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">{portfolioItem.solution}</p>
            </motion.div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItem.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 * index }}
                className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
              >
                <img 
                  src={image} 
                  alt={`${portfolioItem.title} gallery ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-10 text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to start your project?</h2>
          <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">Let's create something amazing together!</p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioDetailPage; 