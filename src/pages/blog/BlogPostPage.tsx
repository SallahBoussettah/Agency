import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  
  // Mock blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Web Design: Trends to Watch in 2023',
      category: 'Web Design',
      author: 'Jane Smith',
      date: 'April 15, 2023',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      summary: 'Discover the emerging trends that are shaping the future of web design in 2023 and beyond.',
      content: '<p>The world of web design is constantly evolving, with new trends and technologies emerging each year. In 2023, we\'re seeing a shift towards more immersive and interactive experiences, with a focus on accessibility and performance.</p><p>Minimalism continues to dominate, but with a twist. Designers are incorporating subtle animations and micro-interactions to create engaging experiences without overwhelming users. Dark mode is no longer just a preference but a standard feature that users expect.</p><p>Another significant trend is the rise of 3D elements and immersive experiences. With WebGL and Three.js becoming more accessible, designers are creating stunning visual experiences that blur the line between the digital and physical worlds.</p><p>Accessibility is also taking center stage, with more designers prioritizing inclusive design practices. This includes considerations for users with disabilities, as well as optimizing for different devices and connection speeds.</p><p>AI-driven design tools are also making waves, allowing designers to automate repetitive tasks and focus on creativity. These tools can generate layout suggestions, color palettes, and even entire design systems based on a few inputs.</p><p>As we move forward, the line between web design and app design continues to blur. Progressive Web Apps (PWAs) are becoming more popular, offering app-like experiences within a browser. This trend is likely to continue as browsers become more powerful and support more native features.</p><p>Finally, we\'re seeing a renewed emphasis on sustainability in web design. This includes optimizing images and code to reduce carbon footprints, as well as designing with longevity in mind rather than following short-lived trends.</p>',
      tags: ['Web Design', 'Trends', 'UX/UI', 'Technology'],
      relatedPosts: ['2', '3'],
      readTime: 5
    },
    {
      id: '2',
      title: 'How to Optimize Your Website for Better Conversion Rates',
      category: 'Marketing',
      author: 'John Doe',
      date: 'March 22, 2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80',
      summary: 'Learn proven strategies to optimize your website and increase conversion rates significantly.',
      content: '<p>Your website is often the first point of contact between your business and potential customers. Optimizing it for conversions is crucial for business growth. In this article, we\'ll explore some proven strategies to boost your conversion rates.</p><p>First, let\'s talk about your website\'s speed. Research shows that a one-second delay in page load time can reduce conversions by up to 7%. Optimize your images, leverage browser caching, and use a content delivery network (CDN) to improve loading times.</p><p>Next, consider your call-to-action (CTA) buttons. They should be prominent, use action-oriented text, and create a sense of urgency. A/B testing different colors, text, and positions can help you find the most effective combination.</p><p>Your website\'s navigation should be intuitive and straightforward. Users should be able to find what they\'re looking for within three clicks. Streamline your menu structure and include a search function for larger sites.</p><p>Social proof is another powerful conversion tool. Include testimonials, reviews, case studies, and trust badges to build credibility and reassure potential customers.</p><p>Mobile optimization is no longer optional. With more than half of web traffic coming from mobile devices, your website must provide a seamless experience across all screen sizes.</p><p>Lastly, use analytics to track user behavior and identify potential bottlenecks in your conversion funnel. Tools like Google Analytics and heatmaps can provide valuable insights into how users interact with your site.</p>',
      tags: ['Marketing', 'Conversion Rate', 'Web Development', 'Business'],
      relatedPosts: ['1', '3'],
      readTime: 6
    },
    {
      id: '3',
      title: 'The Complete Guide to Content Marketing for 2023',
      category: 'Marketing',
      author: 'Sarah Johnson',
      date: 'February 10, 2023',
      image: 'https://images.unsplash.com/photo-1494135003731-acd2dfe90a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
      summary: 'Explore the latest trends and strategies in content marketing to grow your business in 2023.',
      content: '<p>Content marketing continues to be one of the most effective ways to attract, engage, and retain customers. In 2023, several new trends are emerging that can help businesses stand out in a crowded digital landscape.</p><p>Video content is dominating across all platforms. Short-form videos on platforms like TikTok and Instagram Reels are particularly effective for reaching younger audiences. Meanwhile, longer-form content on YouTube can establish your brand as an authority in your industry.</p><p>Personalization is becoming more sophisticated. With advancements in AI and data analytics, businesses can now deliver highly personalized content experiences based on user behavior, preferences, and demographics.</p><p>User-generated content (UGC) is proving to be a powerful tool for building authenticity and trust. Encouraging customers to share their experiences with your products or services can provide social proof and expand your reach.</p><p>Voice search optimization is increasingly important as more people use voice assistants like Siri, Alexa, and Google Assistant. This means focusing on conversational keywords and providing direct answers to common questions.</p><p>Interactive content such as quizzes, polls, calculators, and interactive infographics can significantly increase engagement and time spent on your website. They also provide valuable data about your audience.</p><p>Finally, content repurposing is becoming a strategic necessity. Creating a piece of content once and adapting it for different platforms and formats can maximize your ROI and reach different segments of your audience.</p>',
      tags: ['Content Marketing', 'Digital Marketing', 'Strategy', 'Business'],
      relatedPosts: ['1', '2'],
      readTime: 7
    }
  ];
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === id);

  // Find related posts
  const getRelatedPosts = () => {
    if (!post) return [];
    return post.relatedPosts
      .map(relatedId => blogPosts.find(item => item.id === relatedId))
      .filter(Boolean); // Filter out any undefined values
  };

  const relatedPosts = getRelatedPosts();

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

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="mb-8">Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
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
          <div className="max-w-4xl mx-auto pt-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4 flex items-center">
                <span className="text-sm font-medium text-primary mr-4">{post.category}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{post.title}</h1>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-gray-600 mr-3"></div>
                <div>
                  <p className="font-medium text-white">By {post.author}</p>
                  <p className="text-sm text-gray-400">{post.readTime} min read</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-16">
        {/* Featured Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-xl mb-10 max-w-4xl mx-auto -mt-20"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Post Content */}
        <div className="max-w-4xl mx-auto mb-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-lg max-w-none dark:prose-invert text-gray-800 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-sm text-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  relatedPost && (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.id}`}
                      className="block group transition-transform duration-300 transform hover:-translate-y-2"
                    >
                      <div className="h-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <span className="text-sm font-medium text-primary bg-blue-50 dark:bg-blue-900 px-3 py-1 rounded-full">{relatedPost.category}</span>
                          <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-800 dark:text-gray-300 mb-4">{relatedPost.summary}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{relatedPost.date}</span>
                            <span className="text-primary font-medium">Read more →</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Subscription Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-10 text-center max-w-4xl mx-auto shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Enjoyed this article?</h2>
          <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">Subscribe to our newsletter to receive the latest insights and news.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg flex-grow bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn btn-primary whitespace-nowrap px-6 py-3 rounded-lg font-medium">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage; 