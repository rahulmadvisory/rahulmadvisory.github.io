'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto text-center md:text-left">
        <motion.div className="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="site-h1 mb-4"
          >
            <span className="block md:inline">Your Strategic Partner for</span>
            <span className="block md:inline accent-heading"> FP&A and Analytics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="site-h2 lead mb-4"
          >
            I help companies build financial models, analytics, and reporting systems that scale — bringing clarity to planning, forecasting, and strategic decision-making.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="muted-small mt-2 mb-8"
          >
            Trusted data. Aligned outcomes.
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="btn-primary"
            >
              View Services
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="btn-secondary"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}