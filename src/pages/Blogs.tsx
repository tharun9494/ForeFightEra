import { motion } from 'framer-motion';
import { Globe, Sparkles, DollarSign, Settings, ShoppingCart, Palette, GraduationCap, BookOpen, Briefcase } from 'lucide-react';

const FloatingCards = () => {
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
    { icon: <Globe className="w-10 h-10 text-indigo-600 mb-4" />, title: "Global Build Websites", description: "Whether you're a startup, freelancer, or established brand, we bring your vision to life with professional designs and seamless functionality." },
    { icon: <Sparkles className="w-10 h-10 text-indigo-600 mb-4" />, title: "Responsive Web Design", description: "Engage with hands-on projects and real-world applications Responsive Web Design." },
    { icon: <DollarSign className="w-10 h-10 text-indigo-600 mb-4" />, title: "Best Pricing", description: "We specialize in building high-quality, budget-friendly websites tailored to your business needs." },
    { icon: <Settings className="w-10 h-10 text-indigo-600 mb-4" />, title: "Maintain the Website", description: "Ensure smooth functionality and regular updates with our website maintenance services." },
    { icon: <ShoppingCart className="w-10 h-10 text-indigo-600 mb-4" />, title: "E-Commerce Development", description: "Build a fully functional online store with a seamless user experience and secure payment gateways." },
    { icon: <Palette className="w-10 h-10 text-indigo-600 mb-4" />, title: "Logo Creating", description: "Create unique, professional logos that represent your brand identity." },
    { icon: <GraduationCap className="w-10 h-10 text-indigo-600 mb-4" />, title: "Student Portfolio", description: "Showcase your skills and achievements with a personalized student portfolio website." },
    { icon: <BookOpen className="w-10 h-10 text-indigo-600 mb-4" />, title: "Education Web Portals", description: "Develop educational platforms for schools, colleges, and learning institutions." },
    { icon: <Briefcase className="w-10 h-10 text-indigo-600 mb-4" />, title: "Business Web Management Services", description: "Manage and optimize your business website with our expert solutions." },
  ];

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative bg-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCards;
