import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Star, Clock, ChevronRight, Sparkles, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { collection, query, limit, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getAuth } from 'firebase/auth';

export default function Home() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const coursesQuery = query(
          collection(db, 'programs'),
          orderBy('createdAt', 'desc'),
          limit(3)
        );
        const coursesSnapshot = await getDocs(coursesQuery);
        const coursesData = coursesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFeaturedCourses(coursesData);

        const blogsQuery = query(
          collection(db, 'blogs'),
          orderBy('createdAt', 'desc'),
          limit(2)
        );
        const blogsSnapshot = await getDocs(blogsQuery);
        const blogsData = blogsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLatestBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const auth = getAuth();
      const user = auth.currentUser;
      setIsLoggedIn(!!user);
    };
    checkLoginStatus();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Education Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-32"
        >
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4"
            >
              Welcome to ForeFight Era
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-6xl font-bold mb-6 leading-tight "
            >
              Transform Your Future with Modern Website
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl mb-8 text-white/90"
            >
              We will create a website tailored for your business or startup, ensuring it aligns with your needs. Our services come at a budget-friendly price to help you establish your online presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex space-x-4"
            >
              <Link to="/projects">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
                  Explore projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Move the floating cards section below */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <Globe className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Build Websites</h3>
              <p className="text-gray-600"> Whether you’re a startup, freelancer, or established brand, we bring your vision to life with professional designs and seamless functionality.</p>
            </motion.div>
            
            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <Sparkles className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Responsive Web Design</h3>
              <p className="text-gray-600">Engage with hands-on projects and real-world applications Responsive Web Design.</p>
            </motion.div>
            
            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <Award className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Best pricing</h3>
              <p className="text-gray-600">we specialize in building high-quality, budget-friendly websites tailored to your business needs</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Featured Courses */}
      {isLoggedIn && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-yellow-600 "> Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our most popular Projects and start your learning journey today.
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {featuredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    variants={item}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={course.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600">
                          {course.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 mr-1" />
                          <span className="text-sm">{course.rating || 4.5}</span>
                        </div>
                      </div>

                      <Link to={`/programs/${course.id}`}>
                        <Button className="w-full">
                          View Course
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </section>
      )}

      {/* Latest Blogs */}
      {isLoggedIn && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-yellow-600 ">Our services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest Services.
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {latestBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    variants={item}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={blog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                      <Link to={`/blogs/${blog.id}`}>
                        <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </section>
      )}
    </div>
  );
}