import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "December 2024";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="w-10 h-10 text-blue-600" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-gray-500 mt-4"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-blue-600" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fill out contact forms on our website</li>
                  <li>Request quotes or proposals for services</li>
                  <li>Sign up for our newsletter or updates</li>
                  <li>Engage with our customer support</li>
                  <li>Apply for employment opportunities</li>
                </ul>
                <p>
                  The types of information we collect include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Project Information:</strong> Requirements, specifications, and project details</li>
                  <li><strong>Communication Data:</strong> Messages, feedback, and correspondence</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-8 h-8 mr-3 text-blue-600" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our web development services</li>
                  <li>Communicate with you about projects and services</li>
                  <li>Send you updates, newsletters, and marketing materials (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process payments and manage billing</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Analyze website usage and improve user experience</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 mr-3 text-blue-600" />
                How We Protect Your Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure hosting and infrastructure</li>
                  <li>Employee training on data protection</li>
                  <li>Regular backups and disaster recovery procedures</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3 text-blue-600" />
                Information Sharing
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business and providing services</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3 text-blue-600" />
                Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality and performance</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. The retention period depends on:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The type of information collected</li>
                  <li>The purpose for which it was collected</li>
                  <li>Legal and regulatory requirements</li>
                  <li>Business needs and obligations</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p><strong>Email:</strong> forefightera@gmail.com</p>
                  <p><strong>Phone:</strong> +91 89194 03905</p>
                  <p><strong>Address:</strong> Madanapalle, Pin 517325, Andhra Pradesh, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 