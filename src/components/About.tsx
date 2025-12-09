'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            About Me
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I’m a finance and analytics professional with hands-on experience in FP&A, business reporting, dashboard development, and data-driven decision support. Over the years, I’ve worked closely with leadership, cross-functional teams, and business stakeholders to build financial models, streamline planning cycles, automate reporting processes, and present insights that drive strategic decisions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My work sits at the intersection of finance, data, and storytelling. Whether it’s building a long-term planning model, designing dashboards that surface the right KPIs, or creating presentations for investor meetings, I focus on clarity, impact, and reliability.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I take pride in simplifying complex information, creating scalable processes, and building tools that make financial and business data accessible to everyone—from founders and managers to analysts and operators.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              If you’re looking for structured financial planning, meaningful analytics, or executive-ready outputs, I can help you bring order, accuracy, and insight to your data.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}