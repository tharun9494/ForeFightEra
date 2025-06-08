import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Star, Clock, ChevronRight, Sparkles, Globe, Award, ShoppingCart, Palette, GraduationCap, Settings, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { collection, query, limit, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getAuth } from 'firebase/auth';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkyBackground from '@/components/SkyBackground';
import background from '../../src/images/background.mp4'

interface Course {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  duration?: string;
  rating?: number;
}

interface Blog {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export default function Home() {
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        // Remove the query for now since we don't need it for the homepage
        // const coursesQuery = query(
        //   collection(db, 'programs'),
        //   orderBy('createdAt', 'desc'),
        //   limit(3)
        // );
        // const coursesSnapshot = await getDocs(coursesQuery);
        // const coursesData = coursesSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // })) as Course[];
        // setFeaturedCourses(coursesData);

        // const blogsQuery = query(
        //   collection(db, 'blogs'),
        //   orderBy('createdAt', 'desc'),
        //   limit(2)
        // );
        // const blogsSnapshot = await getDocs(blogsQuery);
        // const blogsData = blogsSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // })) as Blog[];
        // setLatestBlogs(blogsData);

        // Set empty arrays for now
        setFeaturedCourses([]);
        setLatestBlogs([]);
      } catch (error) {
        console.error('Error fetching content:', error);
        // Set empty arrays in case of error
        setFeaturedCourses([]);
        setLatestBlogs([]);
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
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* Video Background */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10"></div>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={background} type="video/mp4" />
            </video>
            <div className="absolute bottom-6 left-11 z-30 bg-white/90 rounded-full px-5 py-3 shadow-2xl flex items-center gap-3">
              <Heart className="text-red-500 w-12 h-12" />
              <span className="text-lg font-bold text-indigo-700">ForeFight Era Private Limited</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-32"
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
              className="text-6xl font-bold mb-6 leading-tight"
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
              className="flex flex-wrap gap-4"
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
              <a href="https://forms.gle/VGtgpZUoke6YV79CA" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-500 text-white hover:bg-yellow-600">
                  Apply for Internship
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-600">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognized and approved by leading government bodies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ministry_of_Corporate_Affairs_India.svg/1200px-Ministry_of_Corporate_Affairs_India.svg.png"
                  alt="MCA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">MCA Approved</h3>
              <p className="text-gray-600">Registered under Ministry of Corporate Affairs</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://5.imimg.com/data5/KS/RU/JK/SELLER-83054718/msme-certificate-500x500.jpg"
                  alt="MSME Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">MSME Registered</h3>
              <p className="text-gray-600">Recognized by Ministry of Micro, Small & Medium Enterprises</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://www.startupindia.gov.in/sih/themes/custom/startup_india/images/header-icons/DPIIT-header.png"
                  alt="DPIIT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">DPIIT Recognized</h3>
              <p className="text-gray-600">Approved by Department for Promotion of Industry and Internal Trade</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-600">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <Globe className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Build Websites</h3>
              <p className="text-gray-600">Whether you're a startup, freelancer, or established brand, we bring your vision to life with professional designs and seamless functionality.</p>
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
              <h3 className="text-xl font-bold mb-2">Best Pricing</h3>
              <p className="text-gray-600">We specialize in building high-quality, budget-friendly websites tailored to your business needs.</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <Clock className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Website Maintenance</h3>
              <p className="text-gray-600">Ensure smooth functionality and regular updates with our website maintenance services.</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <ShoppingCart className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">E-Commerce Development</h3>
              <p className="text-gray-600">Build a fully functional online store with a seamless user experience and secure payment gateways.</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <Palette className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Logo Creation</h3>
              <p className="text-gray-600">Create unique, professional logos that represent your brand identity.</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <GraduationCap className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Student Portfolio</h3>
              <p className="text-gray-600">Showcase your skills and achievements with a personalized student portfolio website.</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <BookOpen className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Education Web Portals</h3>
              <p className="text-gray-600">Develop educational platforms for schools, colleges, and learning institutions.</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <Settings className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Business Web Management</h3>
              <p className="text-gray-600">Manage and optimize your business website with our expert solutions.</p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-indigo-600">Get in Touch</h3>
              <div className="space-y-4">
                <p className="text-gray-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2 text-yellow-500" />
                  +91 89194 03905
                </p>
                <p className="text-gray-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2 text-yellow-500" />
                  forefightera@gmail.com
                </p>
                <p className="text-gray-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                  Madanapalle, pin 517325, AP
                </p>
              </div>
              <div className="mt-6">
                <a href="https://wa.me/9189191403905" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}