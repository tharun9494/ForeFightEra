import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Star, Clock, ChevronRight, Sparkles, Globe, Award, ShoppingCart, Palette, GraduationCap, Settings, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { collection, query, limit, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getAuth } from 'firebase/auth';
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

  const services = [
    { icon: Globe, color: 'text-blue-500', bgColor: 'bg-blue-100', title: 'Global Build Websites', description: 'We bring your vision to life with professional designs and seamless functionality for startups, freelancers, or established brands.' },
    { icon: Sparkles, color: 'text-pink-500', bgColor: 'bg-pink-100', title: 'Responsive Web Design', description: 'Engage with hands-on projects and real-world applications for a flawless experience on any device.' },
    { icon: Award, color: 'text-green-500', bgColor: 'bg-green-100', title: 'Best Pricing', description: 'We specialize in building high-quality, budget-friendly websites tailored to your business needs.' },
    { icon: Clock, color: 'text-teal-500', bgColor: 'bg-teal-100', title: 'Website Maintenance', description: 'Ensure smooth functionality and regular updates with our reliable website maintenance services.' },
    { icon: ShoppingCart, color: 'text-purple-500', bgColor: 'bg-purple-100', title: 'E-Commerce Development', description: 'Build a fully functional online store with a seamless user experience and secure payment gateways.' },
    { icon: Palette, color: 'text-orange-500', bgColor: 'bg-orange-100', title: 'Logo Creation', description: 'Create unique, professional logos that represent your brand identity and make a lasting impression.' },
    { icon: GraduationCap, color: 'text-red-500', bgColor: 'bg-red-100', title: 'Student Portfolio', description: 'Showcase your skills and achievements with a personalized and professional student portfolio website.' },
    { icon: BookOpen, color: 'text-cyan-500', bgColor: 'bg-cyan-100', title: 'Education Web Portals', description: 'Develop comprehensive educational platforms for schools, colleges, and online learning institutions.' },
    { icon: Settings, color: 'text-gray-500', bgColor: 'bg-gray-200', title: 'Business Web Management', description: 'Manage and optimize your business website for performance and growth with our expert solutions.' },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
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
            
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20 sm:py-32"
        >
          <div className="max-w-3xl mx-auto text-center sm:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-xs sm:text-sm font-medium mb-3 sm:mb-4"
            >
              Welcome to ForeFight Era
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Transform Your Future with Modern Website
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed"
            >
              We will create a website tailored for your business or startup, ensuring it aligns with your needs. Our services come at a budget-friendly price to help you establish your online presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start"
            >
              <Link to="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-white/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  Explore products
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-yellow-600">Pioneering Digital Excellence</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              At ForeFight Era, we don't just build websites; we craft digital experiences that drive growth, inspire audiences, and create lasting impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-3 sm:p-4 bg-indigo-100 rounded-full inline-block mb-3 sm:mb-4">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Innovation at Heart</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">We blend creativity with cutting-edge technology to deliver solutions that are not only visually stunning but also functionally superior.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-3 sm:p-4 bg-yellow-100 rounded-full inline-block mb-3 sm:mb-4">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Client-Centric Approach</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Your vision is our blueprint. We collaborate closely with you at every step to ensure the final product is a perfect reflection of your brand.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <div className="p-3 sm:p-4 bg-green-100 rounded-full inline-block mb-3 sm:mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Uncompromising Quality</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">We are committed to excellence. Our rigorous quality assurance process ensures your website is secure, scalable, and pixel-perfect.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal Layout */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-gray-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-yellow-600">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Comprehensive web solutions for your business needs
            </p>
          </motion.div>

          {/* Horizontal Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
              >
                <div className={`p-2 sm:p-3 lg:p-4 ${service.bgColor} rounded-full inline-block mb-2 sm:mb-3 lg:mb-4`}>
                  <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${service.color}`} />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-1 sm:mb-2 lg:mb-3 leading-tight">{service.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">Ready to Start Your Project?</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">Let's connect! We are here to answer your questions and help you bring your ideas to life.</p>
                <motion.a 
                  href="https://wa.me/918919403905" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-white text-yellow-600 hover:bg-white/90 font-bold text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.a>
              </div>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <div className="flex items-center justify-center lg:justify-start">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>+91 89194 03905</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>forefightera@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Madanapalle, pin 517325, AP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}