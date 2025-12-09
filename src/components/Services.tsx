 'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, MagnifyingGlassIcon, ComputerDesktopIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const servicesIntro = {
  title: 'Services',
  lead: 'I help companies turn financial data into clear insights, automated reporting, and decision-ready analysis that drives real business results.',
  summary:
    'I help businesses make better decisions through structured financial planning, clear analytics, and executive-ready insights. With experience across FP&A, business analytics, and dashboard development, I deliver practical solutions that make data easy to use, understand, and act on.',
};

const services = [
  {
    group: 'Strategic FP&A Services',
    items: [
      { title: 'Financial Modeling', desc: 'Custom-built models for long-term planning, annual budgets, and scenario analysis.' },
      { title: 'Budgeting & Forecasting', desc: 'End-to-end support including templates, input management, reconciliations, and final outputs.' },
      { title: 'Cost Control Support', desc: 'Variance tracking, cost visibility tools, and proactive cost management frameworks.' },
      { title: 'Performance Reporting', desc: 'Weekly and monthly performance views across marketing, sales, product, and company-wide KPIs.' },
      { title: 'Investor Presentation Prep', desc: 'Clean, data-backed presentations for investor meetings and leadership reviews.' },
      { title: 'Ad-hoc Financial Analysis', desc: 'Quick, focused analysis to answer urgent leadership questions or operational challenges.' },
      { title: 'Financial Documentation', desc: 'Model documentation, process notes, and stakeholder guides for seamless handover.' },
    ],
  },
  {
    group: 'Analytics & Insights Services',
    items: [
      { title: 'Business Reporting', desc: 'Automated, easy-to-use reports that bring transparency and consistency to performance management.' },
      { title: 'Data Analysis & Insights', desc: 'Problem-driven analysis with clear insights and recommended next steps.' },
      { title: 'Stakeholder Communication', desc: 'Workshops, requirement gathering, and insight presentations to cross-functional teams.' },
      { title: 'Data Collection Systems', desc: 'Templates and structured processes to improve data quality and input consistency.' },
    ],
  },
  {
    group: 'Dashboards & Automation',
    items: [
      { title: 'Dashboard Development', desc: 'Dashboards built on Looker, Power BI, Tableau, Data Studio, MicroStrategy, and other tools.' },
      { title: 'Process Automation', desc: 'Excel/Sheets automation for data processing, validations, and seamless reporting.' },
      { title: 'KPI Visualization', desc: 'Clear visual representations of key metrics to support better business conversations.' },
    ],
  },
  {
    group: 'Presentations & Business Storytelling',
    items: [
      { title: 'Executive Deck Creation', desc: 'Crisp, professional presentations aligned with leadership expectations.' },
      { title: 'Performance Decks', desc: 'Weekly and monthly business review decks with structured narratives and meaningful insights.' },
      { title: 'Narrative Building', desc: 'Transforming data into simple, compelling business stories that drive decisions.' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold section-title mb-4">{servicesIntro.title}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((group, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: gi * 0.06 }}
                viewport={{ once: true }}
                className="card p-6 hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] flex items-center justify-center text-white">
                    {gi === 0 && <BriefcaseIcon className="w-6 h-6" />}
                    {gi === 1 && <MagnifyingGlassIcon className="w-6 h-6" />}
                    {gi === 2 && <ComputerDesktopIcon className="w-6 h-6" />}
                    {gi === 3 && <DocumentTextIcon className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{group.group}</h4>
                  </div>
                </div>
                <ul className="space-y-3">
                  {group.items.map((it, i) => (
                    <li key={i} className="text-sm">
                      <div className="font-medium text-gray-900 dark:text-gray-100">{it.title}</div>
                      {it.desc && <div className="text-xs muted">{it.desc}</div>}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{servicesIntro.summary}</p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">If you don’t see the exact service you need, drop me an email and I’ll connect you with trusted partners to deliver the capability at the highest possible quality wherever feasible.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
