import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Clock, Users, Sparkles } from 'lucide-react';

const Products = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Doctor Appointment Booking */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-yellow-600">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-yellow-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Doctor Appointment Booking</h3>
                    <div className="flex items-center text-yellow-600 mt-1">
                      <Sparkles className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  We're developing an innovative doctor appointment booking system that will revolutionize 
                  healthcare scheduling. Stay tuned for this upcoming service that will make managing your 
                  medical appointments easier than ever.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                    <span>24/7 Online Booking</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-2 text-yellow-600" />
                    <span>Multiple Specialist Options</span>
                  </div>
                </div>
                <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors w-full opacity-75 cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Event Hall Booking */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-yellow-600">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-yellow-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Event Hall Booking</h3>
                    <div className="flex items-center text-yellow-600 mt-1">
                      <Sparkles className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Get ready for our upcoming event hall booking platform. We're creating a comprehensive 
                  solution that will make finding and booking the perfect venue for your events simple 
                  and efficient.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2 text-yellow-600" />
                    <span>Flexible Date Selection</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-2 text-yellow-600" />
                    <span>Various Capacity Options</span>
                  </div>
                </div>
                <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors w-full opacity-75 cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;