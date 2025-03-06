import { useEffect } from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Blog - Agency';
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Design in 2025',
      excerpt: 'Explore the emerging trends and technologies that will shape the web design landscape in the coming years.',
      category: 'Design',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    },
    {
      id: 2,
      title: 'How to Optimize Your Website for Maximum Performance',
      excerpt: 'Learn the essential techniques to enhance your website\'s speed, user experience, and search engine ranking.',
      category: 'Development',
      date: 'May 28, 2024',
      image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80',
      author: {
        name: 'Michael Chen',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      id: 3,
      title: 'The Power of Brand Storytelling in Digital Marketing',
      excerpt: 'Discover how crafting compelling brand narratives can elevate your marketing strategy and connect with audiences.',
      category: 'Marketing',
      date: 'May 10, 2024',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      author: {
        name: 'Emma Rodriguez',
        avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
      }
    },
    {
      id: 4,
      title: 'Accessibility in UI Design: Creating Inclusive Digital Experiences',
      excerpt: 'Understand the importance of accessibility in digital design and learn how to implement inclusive practices.',
      category: 'UI/UX',
      date: 'April 22, 2024',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      author: {
        name: 'David Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
      }
    },
    {
      id: 5,
      title: 'The Evolution of Mobile App Development',
      excerpt: 'Trace the journey of mobile app development and gain insights into where the industry is headed next.',
      category: 'Technology',
      date: 'April 5, 2024',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      author: {
        name: 'Alex Thompson',
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg'
      }
    },
    {
      id: 6,
      title: 'Building a Successful Digital Agency: Lessons Learned',
      excerpt: 'Key insights and strategies from our journey of building and growing a digital agency in a competitive market.',
      category: 'Business',
      date: 'March 18, 2024',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      author: {
        name: 'James Peterson',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    }
  ];

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
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Insights, trends, and stories from our experts
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button className="px-6 py-2 bg-primary text-white rounded-md">All</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">Design</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">Development</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">Marketing</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">Technology</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">Business</button>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <a href={`/blog/${post.id}`} className="block">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                  />
                </a>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">{post.date}</span>
                  </div>
                  <a href={`/blog/${post.id}`} className="block">
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <a href={`/blog/${post.id}`} className="text-primary font-medium text-sm flex items-center">
                      Read More
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav aria-label="Blog pagination">
              <ul className="flex items-center">
                <li>
                  <button
                    className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => {}}
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-900 dark:border-gray-700 dark:text-blue-300"
                    onClick={() => {}}
                    aria-label="Page 1"
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => {}}
                    aria-label="Page 2"
                  >
                    2
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => {}}
                    aria-label="Page 3"
                  >
                    3
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-2 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => {}}
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 