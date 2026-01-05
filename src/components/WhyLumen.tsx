'use client';

import { motion } from 'framer-motion';

export default function WhyLumen() {
  return (
    <section id="why-lumen" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title text-center mb-8">Why Lumen</motion.h2>

          <div className="max-w-3xl mx-auto">
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>11 years across analytics and FP&amp;A in high-growth tech and consumer companies</li>
              <li>Led planning, forecasting, and performance management across marketplace, strategy, and technology teams</li>
              <li>Hands-on experience with long-term planning, budgeting, reforecasting, and P&amp;L ownership</li>
              <li>Built and maintained financial models, dashboards, and automated reporting used by leadership</li>
              <li>Regularly partnered with founders, CFOs, and senior stakeholders on decision-making and business cases</li>
              <li>Strong communicator, able to translate complex financial and data topics for non-finance teams</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
