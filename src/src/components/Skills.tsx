 'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, MagnifyingGlassIcon, PresentationChartBarIcon, UserGroupIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const skillGroups = [
  {
    title: 'Financial Planning & Analysis',
    items: [
      'Financial Modeling (Planning Models, Budgets, Forecasts)',
      'Scenario & Sensitivity Analysis',
      'Budgeting & Forecasting Process',
      'Cost Control & Variance Analysis',
      'Company-wide Performance Reporting',
      'Investor & Leadership Presentations',
      'Ad-hoc Financial Analysis',
    ],
  },
  {
    title: 'Analytics & Insights',
    items: [
      'Data Analysis & Interpretation',
      'Business Reporting & KPI Frameworks',
      'Requirements Gathering',
      'Insight Storytelling',
      'Data Quality & Validation',
      'Process Documentation',
    ],
  },
  {
    title: 'Dashboards & Automation',
    items: [
      'Looker, Tableau, Power BI',
      'Google Data Studio, MicroStrategy',
      'Google Sheets Automation',
      'Excel Advanced Automation',
      'KPI Visualization',
    ],
  },
  {
    title: 'Business & Collaboration',
    items: [
      'Cross-functional Communication',
      'Stakeholder Alignment',
      'Executive-ready Outputs',
      'Problem Structuring',
      'Clear Verbal & Written Communication',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Skills</motion.h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group, gi) => (
              <motion.div key={gi} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: gi * 0.08 }} viewport={{ once: true }} className="space-y-3 p-3">
                <div className="flex items-center gap-2">
                  {/* group icon */}
                  <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                    {gi === 0 && <ChartBarIcon />}
                    {gi === 1 && <MagnifyingGlassIcon />}
                    {gi === 2 && <PresentationChartBarIcon />}
                    {gi === 3 && <UserGroupIcon />}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{group.title}</h3>
                </div>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  {group.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRightIcon className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications removed as requested */}
        </motion.div>
      </div>
    </section>
  );
}