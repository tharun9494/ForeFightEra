import { motion } from 'framer-motion';
import { Calendar, Building2, Sparkles, ShieldCheck, Users, Heart, Award, ArrowRight, Package, ExternalLink, CheckCircle2 } from 'lucide-react';
import logo from '../images/3.png';
import govupaluImage from '../images/govupalu.png';
import tharunfarmsImage from '../images/tharunfarms.png';
import { Button } from '@/components/ui/button';

const liveProducts = [
  {
    icon: Package,
    title: 'Govupalu',
    desc: 'Fresh, pure milk delivered to your doorstep. Order premium quality milk online with convenient delivery options. Experience the best in dairy products.',
    website: 'https://www.govupalu.com',
    image: govupaluImage,
  },
  {
    icon: Package,
    title: 'Tharun Official Farms',
    desc: 'Premium agricultural products and farm-fresh produce. Discover quality farming solutions and fresh produce directly from our farms to your table.',
    website: '#', // Add the actual website URL when available
    image: tharunfarmsImage,
  },
];

const upcomingProducts = [
  {
    icon: Calendar,
    title: 'Doctor Appointment Booking',
    desc: 'A seamless platform to book doctor appointments, manage schedules, and receive timely reminders. Designed for both clinics and patients.',
  },
  {
    icon: Building2,
    title: 'Event Hall Booking',
    desc: 'Book event halls for any occasion with ease. Flexible date selection, capacity options, and instant confirmation. Perfect for businesses and individuals.',
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
        className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gray-50 text-center"
      >
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <img src={logo} alt="ForeFight Era Logo" className="h-16 sm:h-20 md:h-24 mx-auto mb-4 sm:mb-6 opacity-90" />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 px-2"
          >
            Our Products & Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 px-2"
          >
            ForeFight Era is committed to building digital products that solve real-world problems and elevate your experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Live Products Section */}
      {liveProducts.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 px-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-700 rounded-full mb-3 sm:mb-4">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-semibold">Live Products</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">Our Launched Products</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                Explore our live products and services that are making a difference today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {liveProducts.map((product, idx) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ y: -4, shadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image Section - Beside Name */}
                    <div className="relative w-full sm:w-28 md:w-32 lg:w-40 h-40 sm:h-auto sm:min-h-[120px] bg-gradient-to-br from-yellow-50 to-orange-50 flex-shrink-0">
                      {product.image && (
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      {product.website && product.website !== '#' && (
                        <motion.a
                          href={product.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-md hover:bg-white transition-colors touch-manipulation"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-600" />
                        </motion.a>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col justify-between min-h-0">
                      <div>
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <div className="p-1.5 sm:p-2 bg-yellow-100 rounded-lg flex-shrink-0">
                            <product.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-600" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{product.title}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">{product.desc}</p>
                      </div>
                      {product.website && product.website !== '#' && (
                        <motion.a
                          href={product.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg text-xs sm:text-sm font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg w-full sm:w-fit touch-manipulation"
                        >
                          Visit Website
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Products Section */}
      {upcomingProducts.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 px-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-100 text-yellow-700 rounded-full mb-3 sm:mb-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-semibold">Coming Soon</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">Upcoming Products</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                Exciting new products and services launching soon. Stay tuned for updates!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {upcomingProducts.map((product, idx) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-dashed border-gray-200 p-4 sm:p-6 md:p-8 hover:border-yellow-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-yellow-100 rounded-xl flex-shrink-0">
                      <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{product.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{product.desc}</p>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-100 text-yellow-700 rounded-full text-xs sm:text-sm font-semibold">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Coming Soon
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-3 sm:mb-4">Why Choose ForeFight Era?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just build products—we build trust, relationships, and a better digital future.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
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
                className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 text-center"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 text-yellow-600" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <img src={logo} alt="ForeFight Era Logo" className="h-16 sm:h-20 md:h-24 mx-auto mb-4 sm:mb-6 opacity-80" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Empowering the Digital Era</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
            At <span className="font-bold text-yellow-600">ForeFight Era</span>, we believe in the power of technology to transform lives and businesses. Our mission is to create digital products that are not only functional, but also delightful to use and impactful for our clients and their communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 px-2">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
            <span className="text-base sm:text-lg font-semibold text-yellow-700">Trusted by Innovators</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white pb-12 sm:pb-16 md:pb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center px-3 sm:px-4"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-16 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Stay Tuned for Launch!</h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8">Follow us for updates or contact us to partner on our upcoming products.</p>
              <motion.a 
                href="https://wa.me/918919403905" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block touch-manipulation"
              >
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-white/90 font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}