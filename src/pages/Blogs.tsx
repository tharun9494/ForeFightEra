import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Sparkles, Award, Clock, ShoppingCart, Palette, GraduationCap,
  BookOpen, Settings, ChevronDown, ArrowRight, Phone, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

const faqs = [
    { q: "What is the typical timeline for a new website?", a: "A typical website project takes about 4-6 weeks from start to finish. This includes discovery, design, development, and launch. The timeline can vary depending on the complexity of the project." },
    { q: "How much does a new website cost?", a: "The cost of a website depends on its scope and features. We offer customized quotes based on your specific needs. Contact us for a free consultation and estimate." },
    { q: "Will I be able to update the website myself?", a: "Yes! We build our websites on user-friendly content management systems (CMS) that allow you to easily update content, images, and other elements without any coding knowledge." },
    { q: "Do you provide website maintenance services?", a: "Absolutely. We offer various maintenance packages to ensure your website remains secure, up-to-date, and performs optimally." }
];

const processSteps = [
    { number: "01", title: "Discovery & Strategy", description: "We start by understanding your business, goals, and target audience to create a tailored strategy." },
    { number: "02", title: "Design & UX", description: "Our team designs a beautiful, intuitive user interface that reflects your brand and engages your users." },
    { number: "03", title: "Development & Testing", description: "We bring the designs to life with clean, efficient code and rigorously test everything to ensure a flawless experience." },
    { number: "04", title: "Launch & Optimization", description: "After launch, we monitor performance and provide support to ensure your new website delivers results." }
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const FaqItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={item} className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, marginTop: isOpen ? '16px' : '0px' }}
        className="overflow-hidden"
      >
        <p className="text-gray-600">{a}</p>
      </motion.div>
    </motion.div>
  );
};

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600"
          >
            From concept to launch, we provide comprehensive web solutions to elevate your brand.
          </motion.p>
        </div>
      </motion.section>
      
      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 15px 25px rgba(0,0,0,0.08)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                    >
                        <div className={`p-4 ${service.bgColor} rounded-full inline-block mb-6`}>
                            <service.icon className={`w-10 h-10 ${service.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-600 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined workflow to ensure quality and efficiency from start to finish.
            </p>
          </div>
          <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={{ show: { transition: { staggerChildren: 0.2 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
          >
            {processSteps.map((step) => (
              <motion.div key={step.number} variants={item} className="text-center">
                <div className="text-5xl font-bold text-yellow-300">{step.number}</div>
                <h3 className="text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-yellow-600 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">
                    Have questions? We've got answers.
                </p>
            </div>
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
                {faqs.map((faq, index) => <FaqItem key={index} q={faq.q} a={faq.a} />)}
            </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white pb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl p-10 md:p-16 shadow-2xl">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg opacity-90 mb-8">Let's connect! We are here to answer your questions and help you bring your ideas to life.</p>
              <motion.a 
                href="https://wa.me/918919403905" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-white/90 font-bold">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
