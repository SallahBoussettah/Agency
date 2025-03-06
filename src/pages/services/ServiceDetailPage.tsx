import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  
  // Mock services data - in a real app, this would come from an API
  const services = [
    {
      id: '1',
      title: 'Web Design',
      description: 'We create stunning, user-friendly websites that drive results.',
      longDescription: 'Our web design services focus on creating beautiful, functional, and responsive websites that engage your audience and drive conversions. We combine aesthetics with usability to deliver websites that not only look great but also perform exceptionally well.',
      process: [
        'Discovery and Research',
        'Wireframing and Prototyping',
        'UI/UX Design',
        'Development',
        'Testing and Launch',
        'Maintenance and Support'
      ],
      benefits: [
        'Increased user engagement',
        'Higher conversion rates',
        'Improved brand perception',
        'Better search engine rankings',
        'Mobile-friendly experiences'
      ],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      caseStudies: [
        {
          title: 'E-commerce Website Redesign',
          client: 'Fashion Boutique',
          result: '156% increase in conversion rate',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80'
        },
        {
          title: 'Corporate Website Redesign',
          client: 'Financial Services Company',
          result: '89% increase in lead generation',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
        }
      ]
    },
    {
      id: '2',
      title: 'Web Development',
      description: 'We build robust, scalable, and high-performance websites and web applications.',
      longDescription: 'Our web development services focus on building robust, scalable, and high-performance websites and web applications that meet your specific business needs. We use the latest technologies and best practices to deliver solutions that are both powerful and easy to use.',
      process: [
        'Requirements Analysis',
        'Architecture Planning',
        'Front-end Development',
        'Back-end Development',
        'Database Integration',
        'Testing and Deployment',
        'Performance Optimization'
      ],
      benefits: [
        'Custom functionality tailored to your needs',
        'Scalable solutions that grow with your business',
        'Secure and reliable applications',
        'Seamless integration with existing systems',
        'Ongoing support and maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      caseStudies: [
        {
          title: 'Custom CRM Development',
          client: 'Sales Organization',
          result: '47% improvement in sales efficiency',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
          title: 'E-commerce Platform',
          client: 'Retail Chain',
          result: '210% increase in online sales',
          image: 'https://images.unsplash.com/photo-1563986768494-4dee09f83530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
        }
      ]
    },
    {
      id: '3',
      title: 'Mobile Apps',
      description: 'We develop innovative, user-friendly mobile applications for iOS and Android.',
      longDescription: 'Our mobile app development services are designed to help you reach your audience on the go. We create native and cross-platform mobile applications that provide exceptional user experiences and help you achieve your business objectives.',
      process: [
        'App Strategy & Planning',
        'UI/UX Design',
        'Native/Cross-platform Development',
        'API Integration',
        'Testing & Quality Assurance',
        'App Store Submission',
        'Ongoing Support & Updates'
      ],
      benefits: [
        'Reach your audience on the go',
        'Increased brand loyalty',
        'New revenue streams',
        'Improved customer engagement',
        'Valuable customer insights through analytics'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      caseStudies: [
        {
          title: 'Fitness Tracking App',
          client: 'Health & Fitness Startup',
          result: '250,000+ downloads in first year',
          image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
        },
        {
          title: 'Food Delivery App',
          client: 'Restaurant Chain',
          result: '35% increase in delivery orders',
          image: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1650&q=80'
        }
      ]
    },
    {
      id: '4',
      title: 'Branding',
      description: 'We create distinctive brand identities that resonate with your target audience.',
      longDescription: 'Our branding services help you establish a strong, distinctive identity that resonates with your target audience. From logo design to comprehensive brand guidelines, we create cohesive and memorable brand experiences that set you apart from the competition.',
      process: [
        'Brand Discovery & Research',
        'Brand Strategy Development',
        'Logo & Visual Identity Design',
        'Brand Guidelines Creation',
        'Brand Collateral Design',
        'Brand Implementation Support'
      ],
      benefits: [
        'Increased brand recognition and recall',
        'Consistent brand presentation across all channels',
        'Improved customer trust and loyalty',
        'Clear differentiation from competitors',
        'Cohesive and impactful marketing materials'
      ],
      image: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      caseStudies: [
        {
          title: 'Brand Identity Design',
          client: 'Tech Startup',
          result: 'Successfully secured $2M in funding',
          image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80'
        },
        {
          title: 'Brand Refresh',
          client: 'Established Retail Brand',
          result: '68% improvement in customer perception',
          image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80'
        }
      ]
    },
    {
      id: '5',
      title: 'Digital Marketing',
      description: 'We develop and execute data-driven marketing strategies that deliver results.',
      longDescription: 'Our digital marketing services help you reach your target audience, engage potential customers, and drive conversions. We develop and execute data-driven marketing strategies tailored to your business goals, using a mix of channels and tactics to maximize your ROI.',
      process: [
        'Marketing Audit & Analysis',
        'Strategy Development',
        'Campaign Planning & Creation',
        'Channel Selection & Optimization',
        'Campaign Execution',
        'Performance Tracking & Reporting',
        'Continuous Optimization'
      ],
      benefits: [
        'Increased website traffic and engagement',
        'Higher conversion rates and lead generation',
        'Improved ROI on marketing spend',
        'Better understanding of your audience',
        'Data-driven decision making'
      ],
      image: 'https://images.unsplash.com/photo-1571677246347-5040e090e18b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
      caseStudies: [
        {
          title: 'SEO & Content Marketing',
          client: 'B2B Software Company',
          result: '312% increase in organic traffic',
          image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80'
        },
        {
          title: 'PPC Campaign',
          client: 'E-commerce Store',
          result: '476% ROAS (Return on Ad Spend)',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80'
        }
      ]
    },
    {
      id: '6',
      title: 'UX/UI Design',
      description: 'We create intuitive, engaging user experiences that delight your customers.',
      longDescription: 'Our UX/UI design services focus on creating intuitive, engaging, and accessible digital experiences that delight your users. We combine user research, design thinking, and creative execution to build interfaces that are both beautiful and functional.',
      process: [
        'User Research & Persona Development',
        'User Journey Mapping',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Implementation Support'
      ],
      benefits: [
        'Improved user satisfaction and retention',
        'Reduced user friction and support costs',
        'Higher conversion rates',
        'Consistent user experience across platforms',
        'Accessible design for all users'
      ],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      caseStudies: [
        {
          title: 'App Redesign',
          client: 'Banking Institution',
          result: '94% increase in user satisfaction',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
          title: 'E-commerce UX Optimization',
          client: 'Online Retailer',
          result: '25% reduction in cart abandonment',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1755&q=80'
        }
      ]
    }
  ];

  // Find the service with the matching ID
  const service = services.find(item => item.id === id);

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

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
        <p className="mb-8">Sorry, the service you're looking for doesn't exist or has been removed.</p>
        <Link to="/services" className="btn btn-primary">
          Back to Services
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{service.title}</h1>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl">{service.longDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary py-3 px-8 rounded-lg font-medium">
                Request a Quote
              </Link>
              <Link to="/services" className="btn py-3 px-8 rounded-lg font-medium border-2 border-white text-white hover:bg-white hover:text-dark transition-colors duration-300">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-16">
        {/* Service Image */}
        <div className="mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto -mt-20"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="mb-20 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 shadow-md"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 * index }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{caseStudy.title}</h3>
                  <p className="mb-2 text-gray-800 dark:text-gray-300"><span className="font-medium">Client:</span> {caseStudy.client}</p>
                  <p className="text-primary font-bold">{caseStudy.result}</p>
                </div>
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to get started?</h2>
          <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">Contact us today to discuss your project needs and how we can help you achieve your goals.</p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceDetailPage; 