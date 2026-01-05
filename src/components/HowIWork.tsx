'use client';

import { motion } from 'framer-motion';

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
          <motion.h2 className="section-title text-center mb-8">How I Work</motion.h2>

          <div className="max-w-3xl mx-auto">
            <ol className="list-decimal list-inside space-y-6 text-gray-700 dark:text-gray-300">
              <li>
                <h3 className="font-semibold inline">Understand the context</h3>
                <p className="mt-2">Start with a short discussion to understand business goals, current challenges, and decision priorities.</p>
              </li>

              <li>
                <h3 className="font-semibold inline">Define the scope</h3>
                <p className="mt-2">Agree on clear deliverables, timelines, and success criteria — focused on what matters most.</p>
              </li>

              <li>
                <h3 className="font-semibold inline">Build and iterate</h3>
                <p className="mt-2">Develop models, reports, or analyses in close collaboration, with regular check-ins and feedback.</p>
              </li>

              <li>
                <h3 className="font-semibold inline">Deliver clarity</h3>
                <p className="mt-2">Provide decision-ready outputs, clear documentation, and handover support where needed.</p>
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
