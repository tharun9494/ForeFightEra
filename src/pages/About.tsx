import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import Tharun from '../images/Tharun.jpeg'
import karthik from '../images/karthik1.jpeg'
import Prem from "../images/Prem.png"



export default function About() {
  const [successMessage, setSuccessMessage] = useState('');

  const stats = [
    {
      icon: BookOpen,
      label: 'Projects',
      value: '50+'
    },
    {
      icon: Users,
      label: 'Clients',
      value: '50+'
    },
    {
      icon: Award,
      label: 'Success Rate',
      value: '95%'
    }
  ];

  const team = [
    {
      name: 'Ontimitta Tharun',
      role: 'Founder & CEO',
      image: Tharun
    },
   
    {
      name: 'Kothala Prem Sai',
      role: 'Co-Founder & CTO',
      image: Prem
    }
  ];  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value; 
    const message = event.target.message.value;

    // Store data in Firestore
    try {
      await addDoc(collection(db, 'contacts'), {
        name: name,
        email: email,
        message: message,
        timestamp: Timestamp.fromDate(new Date())
      });
      setSuccessMessage('Message sent successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return (
    <div className="py-12">
      {/* Success message display */}
      {successMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          {successMessage}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mission Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At ForeFight Era, our mission is to empower businesses and startups by providing affordable, high-quality digital solutions that enhance their online presence. We strive to bridge the gap between innovation and accessibility, ensuring that every business—regardless of size—has the opportunity to thrive in the digital world.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {team.map((member) => (
                  <motion.div
                    key={member.name}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="w-full h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                  <span>Madanapalle, pin 517325 ,AP</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-indigo-600" />
                  <span>+91 8919403905</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                  <span>forefightera@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  <span>www.forefightera.in</span>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="bg-yellow-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Connect With Us</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://tharun-portfo.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="https://wa.me/9189191403905" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-50">
                  Contact on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="text-gray-600">
              <p>📞 Contact Us: +91 89194 03905</p>
              <p>📧 forefightera@gmail.com</p>
              <p className="mt-4 italic">👉 Visit our portfolio to see more of our work!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}