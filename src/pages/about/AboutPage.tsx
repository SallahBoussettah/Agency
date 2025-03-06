import { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Set page title
  useEffect(() => {
    document.title = 'About Us - Agency';
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-dark text-white py-20">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Learn more about our agency and our team
          </motion.p>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend. 
                Donec in finibus tortor. Vivamus id enim vel mi eleifend ultricies ac in est. Morbi at venenatis lacus. 
                Donec eget tristique elit, at pharetra massa. Nam at est eget felis suscipit tempus.
              </p>
              <p className="text-gray-600 mb-6">
                Cras tincidunt sagittis turpis, non efficitur dui auctor nec. Pellentesque habitant morbi tristique 
                senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus 
                orci luctus et ultrices posuere cubilia curae; Cras efficitur est neque, eget ultricies eros aliquam ac.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 