/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import images you placed in src/images
import samplePlanning from '../images/Sample planning model img.png';
import dashboardExamples from '../images/Dashboard examples.png';
import weeklySnapshot from '../images/weekly dashboard snapshot.png';

const projects = [
  {
    title: 'Sample planning model',
    description: 'A sample planning model demonstrating structure, inputs, and outputs used for scenario analysis and planning.',
    tech: ['Excel', 'Financial Modeling'],
    image: samplePlanning,
  },
  {
    title: 'Dashboard examples',
    description: 'A set of dashboards demonstrating KPI tracking and cohort analysis.',
    tech: ['Looker', 'Google Sheets', 'Data Studio'],
    image: dashboardExamples,
  },
  {
    title: 'Weekly dashboard snapshot',
    description: 'Automated weekly snapshot used for leadership trading reviews and highlights.',
    tech: ['Excel', 'Automation', 'KPI Visuals'],
    image: weeklySnapshot,
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Projects
          </motion.h2>
          <ProjectGrid items={projects} />
        </motion.div>
      </div>
    </section>
  );
}

function ProjectGrid({ items }: { items: typeof projects }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((i) => (i === null ? null : Math.min(items.length - 1, i + 1)));
      if (e.key === 'ArrowLeft') setSelectedIndex((i) => (i === null ? null : Math.max(0, i - 1)));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, items.length]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative h-48 bg-gray-200">
              {project.image ? (
                <img
                  src={(project.image as any)?.src || (project.image as any)}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">[Project Image]</div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedIndex(null)} />
          <div className="relative max-w-5xl w-full mx-4">
            <button
              className="absolute right-3 top-3 z-50 bg-white rounded-full p-2 shadow-md"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              âœ•
            </button>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-lg">
              <div className="w-full flex items-center justify-center max-h-[80vh] overflow-auto">
                <img
                  src={(items[selectedIndex].image as any)?.src || (items[selectedIndex].image as any)}
                  alt={items[selectedIndex].title}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-lg">{items[selectedIndex].title}</h4>
                <p className="text-sm muted">{items[selectedIndex].description}</p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <button
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                    onClick={() => setSelectedIndex((i) => (i === null ? null : Math.max(0, i - 1)))}
                    disabled={selectedIndex === 0}
                  >
                    Prev
                  </button>
                  <button
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                    onClick={() => setSelectedIndex((i) => (i === null ? null : Math.min(items.length - 1, i + 1)))}
                    disabled={selectedIndex === items.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
