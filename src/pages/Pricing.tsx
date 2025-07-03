import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Basic Website',
    price: '₹9,999',
    originalPrice: '₹14,999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Contact Form',
      'Basic SEO Setup',
      'Social Media Integration',
      '1 Month Free Support',
      'Mobile Optimized',
      'Basic Analytics'
    ],
    icon: Globe,
    popular: false,
    color: 'bg-blue-500'
  },
  {
    name: 'Professional Website',
    price: '₹19,999',
    originalPrice: '₹24,999',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Basic',
      'Up to 10 Pages',
      'Advanced SEO',
      'Blog Section',
      'Email Integration',
      '3 Months Support',
      'Performance Optimization',
      'Google Analytics',
      'Social Media Feeds',
      'Custom Domain Setup'
    ],
    icon: Zap,
    popular: true,
    color: 'bg-yellow-500'
  },
  {
    name: 'E-Commerce Website',
    price: '₹25,000+',
    originalPrice: '₹35,000',
    description: 'Complete online store solution',
    features: [
      'Everything in Professional',
      'Product Catalog',
      'Payment Gateway Integration',
      'Order Management',
      'Inventory System',
      '6 Months Support',
      'SSL Certificate',
      'Multiple Payment Options',
      'Shipping Calculator',
      'Customer Reviews',
      'Admin Dashboard',
      'Sales Reports'
    ],
    icon: Shield,
    popular: false,
    color: 'bg-green-500'
  }
];

const additionalServices = [
  {
    name: 'Logo Design',
    price: '₹1,999',
    description: 'Professional logo design with multiple concepts'
  },
  {
    name: 'Website Maintenance',
    price: '₹1,999/month',
    description: 'Regular updates, security, and performance monitoring'
  },
  {
    name: 'SEO Services',
    price: '₹2,999/month',
    description: 'Search engine optimization to improve rankings'
  },
  {
    name: 'Content Writing',
    price: '₹500/page',
    description: 'Professional content writing for your website'
  }
];

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-yellow-50 to-orange-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your business. All plans include responsive design and modern features.
          </motion.p>
        </div>
      </motion.section>

      {/* Pricing Plans */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 ${
                  plan.popular ? 'ring-2 ring-yellow-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold">Save ₹{parseInt(plan.originalPrice.replace('₹', '').replace(',', '')) - parseInt(plan.price.replace('₹', '').replace(',', ''))}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    } font-semibold py-3`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your website with our additional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-3">{service.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Common questions about our pricing and services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Do you offer custom pricing for large projects?",
                a: "Yes, we provide custom quotes for enterprise-level projects and special requirements. Contact us to discuss your specific needs."
              },
              {
                q: "What's included in the support period?",
                a: "Our support includes bug fixes, minor updates, and technical assistance. Major changes may require additional charges."
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely! You can upgrade your plan at any time. We'll prorate the difference and add the new features seamlessly."
              },
              {
                q: "Do you provide hosting and domain services?",
                a: "Yes, we can help you with hosting setup and domain registration. These are additional services with separate pricing."
              },
              {
                q: "What payment terms do you offer?",
                a: "We require 50% upfront payment to start the project, with the remaining 50% due upon completion and before launch."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-white/90 font-semibold px-8 py-3">
                  Get Free Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/918919403905"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 