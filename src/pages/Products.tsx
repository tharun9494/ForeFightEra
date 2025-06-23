import { motion } from 'framer-motion';
import { Calendar, Building2, Sparkles, ShieldCheck, Users, Heart, Award, ArrowRight } from 'lucide-react';
import logo from '../images/3.png';
import { Button } from '@/components/ui/button';

const products = [
  {
    icon: Calendar,
    title: 'Doctor Appointment Booking',
    desc: 'A seamless platform to book doctor appointments, manage schedules, and receive timely reminders. Designed for both clinics and patients.',
    comingSoon: true,
  },
  {
    icon: Building2,
    title: 'Event Hall Booking',
    desc: 'Book event halls for any occasion with ease. Flexible date selection, capacity options, and instant confirmation. Perfect for businesses and individuals.',
    comingSoon: true,
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: 'Cutting-Edge Innovation',
    desc: 'We leverage the latest technology to deliver products that are modern, reliable, and scalable.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Security',
    desc: 'Your data and privacy are our top priorities. Our products are built with robust security in mind.'
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    desc: 'Every feature is designed with the end-user in mind, ensuring a smooth and intuitive experience.'
  },
  {
    icon: Heart,
    title: 'Dedicated Support',
    desc: 'Our team is always here to help, from onboarding to ongoing support and updates.'
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 bg-gray-50 text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src={logo} alt="ForeFight Era Logo" className="h-24 mx-auto mb-6 opacity-90" />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            Our Upcoming Products
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600"
          >
            ForeFight Era is committed to building digital products that solve real-world problems and elevate your experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.title}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 15px 25px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-left relative"
              >
                <div className="flex items-center mb-4">
                  <product.icon className="w-10 h-10 text-yellow-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{product.desc}</p>
                {product.comingSoon && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold absolute top-6 right-6">
                    <Sparkles className="w-4 h-4 mr-1" /> Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-600 mb-4">Why Choose ForeFight Era?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just build products—we build trust, relationships, and a better digital future.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.04, boxShadow: "0px 10px 20px rgba(0,0,0,0.07)" }}
                transition={{ type: "spring", stiffness: 250 }}
                className="bg-white rounded-2xl shadow-md p-8 text-center"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={logo} alt="ForeFight Era Logo" className="h-20 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering the Digital Era</h2>
          <p className="text-lg text-gray-600 mb-6">
            At <span className="font-bold text-yellow-600">ForeFight Era</span>, we believe in the power of technology to transform lives and businesses. Our mission is to create digital products that are not only functional, but also delightful to use and impactful for our clients and their communities.
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <Award className="w-8 h-8 text-yellow-600" />
            <span className="text-lg font-semibold text-yellow-700">Trusted by Innovators</span>
          </div>
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
              <h2 className="text-4xl font-bold mb-4">Stay Tuned for Launch!</h2>
              <p className="text-lg opacity-90 mb-8">Follow us for updates or contact us to partner on our upcoming products.</p>
              <motion.a 
                href="https://wa.me/918919403905" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-white/90 font-bold">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}