import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsConditions() {
  const lastUpdated = "December 2024";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FileText className="w-10 h-10 text-green-600" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Please read these terms and conditions carefully before using our services.
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
                <Scale className="w-8 h-8 mr-3 text-green-600" />
                Agreement to Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing and using the services provided by ForeFight Era ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms and Conditions ("Terms") govern your use of our website development services, including any information, text, graphics, photos, or other materials uploaded, downloaded, or appearing on our services.
                </p>
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
                <Users className="w-8 h-8 mr-3 text-green-600" />
                Services Description
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  ForeFight Era provides web development services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website design and development</li>
                  <li>E-commerce website development</li>
                  <li>Website maintenance and updates</li>
                  <li>Logo design and branding</li>
                  <li>SEO optimization services</li>
                  <li>Content management system development</li>
                  <li>Website hosting and domain services</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                </p>
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
                <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                Client Responsibilities
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information about your project requirements</li>
                  <li>Review and approve project deliverables in a timely manner</li>
                  <li>Provide necessary content, images, and materials for your project</li>
                  <li>Make payments according to the agreed payment schedule</li>
                  <li>Maintain the security of any login credentials provided</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
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
                <Shield className="w-8 h-8 mr-3 text-green-600" />
                Payment Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Initial Payment:</strong> 50% of the total project cost is required to commence work</li>
                  <li><strong>Final Payment:</strong> Remaining 50% is due upon project completion and before website launch</li>
                  <li><strong>Payment Methods:</strong> We accept bank transfers, UPI, and other digital payment methods</li>
                  <li><strong>Late Payments:</strong> Late payments may result in project delays or suspension of services</li>
                  <li><strong>Refunds:</strong> Refund policies are outlined in our separate Refund Policy</li>
                </ul>
                <p>
                  All prices are quoted in Indian Rupees (₹) and are subject to applicable taxes.
                </p>
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
                <AlertTriangle className="w-8 h-8 mr-3 text-green-600" />
                Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Intellectual property rights are governed as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Client Content:</strong> You retain ownership of all content you provide to us</li>
                  <li><strong>Our Work:</strong> We retain ownership of our proprietary code, frameworks, and tools</li>
                  <li><strong>Final Deliverables:</strong> Upon full payment, you receive rights to use the final website</li>
                  <li><strong>Third-Party Assets:</strong> You are responsible for obtaining rights to any third-party content</li>
                  <li><strong>Portfolio Rights:</strong> We may showcase completed work in our portfolio</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Project Timeline and Deliverables</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Project timelines and deliverables are subject to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project timelines are estimates and may vary based on complexity and client feedback</li>
                  <li>Delays caused by client feedback or content provision may extend project timelines</li>
                  <li>We will provide regular updates on project progress</li>
                  <li>Final deliverables will be provided upon project completion and payment</li>
                  <li>Revisions are included as specified in the project agreement</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our liability is limited as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not liable for any indirect, incidental, or consequential damages</li>
                  <li>Our total liability shall not exceed the amount paid for the specific service</li>
                  <li>We are not responsible for third-party services or integrations</li>
                  <li>We do not guarantee specific search engine rankings or business outcomes</li>
                  <li>Force majeure events may affect service delivery</li>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Confidentiality</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We are committed to maintaining the confidentiality of your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We will not disclose confidential information to third parties</li>
                  <li>Confidential information includes business plans, trade secrets, and proprietary data</li>
                  <li>We may use non-confidential information for portfolio purposes</li>
                  <li>Confidentiality obligations survive the termination of our agreement</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Either party may terminate this agreement under the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Written notice of 30 days for convenience</li>
                  <li>Immediate termination for material breach</li>
                  <li>Upon termination, you must pay for work completed</li>
                  <li>We will deliver completed work within 30 days of termination</li>
                  <li>Confidentiality obligations continue after termination</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Andhra Pradesh, India.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
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