import { motion } from 'framer-motion';
import { RotateCcw, XCircle, CheckCircle, Clock, AlertTriangle, DollarSign } from 'lucide-react';

export default function RefundPolicy() {
  const lastUpdated = "December 2024";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-red-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <RotateCcw className="w-10 h-10 text-red-600" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Cancellation & Refund Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We strive to ensure your satisfaction with our services. Here's our clear and fair refund policy.
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
                <DollarSign className="w-8 h-8 mr-3 text-red-600" />
                General Refund Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At ForeFight Era, we are committed to delivering high-quality web development services. Our refund policy is designed to be fair and transparent for both parties.
                </p>
                <p>
                  <strong>Important Note:</strong> Refunds are processed based on the work completed and the stage of the project. We do not provide full refunds once substantial work has been completed.
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
                <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                When Refunds Are Available
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Refunds may be available in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Project Cancellation Before Work Begins:</strong> 100% refund if cancelled before any work has commenced</li>
                  <li><strong>Service Unavailability:</strong> Full refund if we are unable to provide the agreed service</li>
                  <li><strong>Quality Issues:</strong> Partial refund if the delivered work does not meet agreed specifications</li>
                  <li><strong>Timeline Violations:</strong> Partial refund if we fail to meet agreed deadlines without valid reasons</li>
                  <li><strong>Technical Issues:</strong> Refund for any technical problems caused by our services</li>
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
                <XCircle className="w-8 h-8 mr-3 text-red-600" />
                When Refunds Are Not Available
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Refunds are not available in the following cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Work Completed:</strong> No refund after project completion and delivery</li>
                  <li><strong>Client Changes:</strong> No refund for changes in project requirements after work has begun</li>
                  <li><strong>Delayed Feedback:</strong> No refund for delays caused by late client feedback</li>
                  <li><strong>Third-Party Issues:</strong> No refund for issues caused by third-party services or integrations</li>
                  <li><strong>Domain/Hosting:</strong> No refund for domain registration or hosting fees</li>
                  <li><strong>Content Issues:</strong> No refund for delays due to missing or late content from client</li>
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
                <Clock className="w-8 h-8 mr-3 text-blue-600" />
                Refund Timeline
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Our refund processing timeline:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Refund Request Review:</strong> 3-5 business days</li>
                  <li><strong>Refund Processing:</strong> 7-10 business days after approval</li>
                  <li><strong>Bank Transfer:</strong> 3-5 business days (depending on your bank)</li>
                  <li><strong>Total Timeline:</strong> 10-20 business days from request to receipt</li>
                </ul>
                <p>
                  <strong>Note:</strong> Refund processing times may vary depending on the payment method used and your financial institution.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Project Cancellation Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>Project cancellation terms:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Before Work Begins:</strong> 100% refund of initial payment</li>
                  <li><strong>During Planning Phase (0-25% complete):</strong> 75% refund of initial payment</li>
                  <li><strong>During Design Phase (25-50% complete):</strong> 50% refund of initial payment</li>
                  <li><strong>During Development Phase (50-75% complete):</strong> 25% refund of initial payment</li>
                  <li><strong>During Testing Phase (75-100% complete):</strong> No refund available</li>
                </ul>
                <p>
                  <strong>Note:</strong> Project completion percentage is determined by our project manager based on work completed.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How to Request a Refund</h2>
              <div className="space-y-4 text-gray-700">
                <p>To request a refund, please follow these steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Contact Us:</strong> Send an email to forefightera@gmail.com with your refund request</li>
                  <li><strong>Provide Details:</strong> Include your project details, reason for refund, and any supporting documentation</li>
                  <li><strong>Review Process:</strong> We will review your request within 3-5 business days</li>
                  <li><strong>Approval/Rejection:</strong> You will receive a response with our decision and explanation</li>
                  <li><strong>Processing:</strong> If approved, refund will be processed according to our timeline</li>
                </ol>
                <p>
                  <strong>Required Information:</strong> Project name, client name, payment details, reason for refund, and any relevant screenshots or documentation.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you disagree with our refund decision, we offer the following dispute resolution process:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Internal Review:</strong> Your case will be reviewed by our management team</li>
                  <li><strong>Mediation:</strong> We may suggest mediation to resolve the dispute amicably</li>
                  <li><strong>Documentation:</strong> Both parties will provide relevant documentation and evidence</li>
                  <li><strong>Final Decision:</strong> A final decision will be made within 10 business days</li>
                </ul>
                <p>
                  We are committed to fair resolution of all disputes and will work with you to find a mutually acceptable solution.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-yellow-600" />
                Important Considerations
              </h2>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All refund requests must be submitted within 30 days of project completion</li>
                  <li>Refunds are processed in the same currency and method as the original payment</li>
                  <li>Bank transfer fees may be deducted from the refund amount</li>
                  <li>We reserve the right to modify this policy with 30 days notice</li>
                  <li>This policy does not affect your statutory rights</li>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  For refund requests or questions about this policy, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p><strong>Email:</strong> forefightera@gmail.com</p>
                  <p><strong>Phone:</strong> +91 89194 03905</p>
                  <p><strong>Address:</strong> Madanapalle, Pin 517325, Andhra Pradesh, India</p>
                  <p><strong>Response Time:</strong> Within 24-48 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 