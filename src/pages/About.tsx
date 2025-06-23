import { motion } from 'framer-motion';
import { Users, Award, Zap, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Tharun from '../images/Tharun.jpeg';
import Prem from '../images/Prem.png';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Ontimitta Tharun',
    role: 'Founder & CEO',
    image: Tharun,
    bio: 'Visionary leader with a passion for innovation and a drive to empower businesses through technology.'
  },
  {
    name: 'Kothala Prem Sai',
    role: 'Co-Founder & CTO',
    image: Prem,
    bio: 'Technology expert dedicated to building robust, scalable, and cutting-edge digital solutions.'
  }
];

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 bg-gray-50 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            We're Building the Future of Web Presence.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600"
          >
            ForeFight Era is dedicated to empowering businesses with high-quality, affordable digital solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-yellow-600 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To empower businesses and startups by providing affordable, high-quality digital solutions that enhance their online presence.
              </p>
              <p className="text-lg text-gray-600">
                We strive to bridge the gap between innovation and accessibility, ensuring that every business—regardless of size—has the opportunity to thrive in the digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="w-8 h-8 mr-3 text-indigo-500"/>
                Our Core Values
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><Zap className="w-6 h-6 mr-3 text-yellow-500 mt-1 flex-shrink-0"/> <strong>Innovation:</strong> Continuously exploring new technologies.</li>
                <li className="flex items-start"><Users className="w-6 h-6 mr-3 text-yellow-500 mt-1 flex-shrink-0"/> <strong>Client-Success:</strong> Your growth is our success.</li>
                <li className="flex items-start"><Award className="w-6 h-6 mr-3 text-yellow-500 mt-1 flex-shrink-0"/> <strong>Integrity:</strong> Upholding transparency and honesty.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-600 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The driving force behind our innovation and success.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="bg-white rounded-2xl shadow-xl overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-center items-center h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover object-center rounded-full border-4 border-yellow-200 shadow-md transition-all duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-indigo-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have a project in mind? We'd love to hear about it.
          </p>
          <Link to="/services">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}