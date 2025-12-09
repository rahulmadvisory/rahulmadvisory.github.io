'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        company: "GetYourGuide",
        role: "Head of FP&A - Strategy & Technology",
        period: "2.5 years",
        points: [
            "Drive Marketplace Strategy & Tech Improvements through data-driven insights",
            "Partner with corporate strategy to define marketplace strategy and set KPIs",
            "Facilitate key business reviews with leadership",
            "Manage financial impact and ROI assessments",
            "Provide financial oversight for payments and fraud"
        ]
    },
    {
        company: "Omio",
        role: "Senior Manager Financial Planning & Analysis",
        period: "3.5 years",
        points: [
            "Led Group Business Planning with different business owners and departments",
            "Prepared and led monthly management meetings and investor reporting",
            "Conducted Weekly Business Reviews for leadership team",
            "Supported senior stakeholders in evaluating business opportunities",
            "Collaborated with analysts across departments for business metrics analysis"
        ]
    },
    {
        company: "Zalando SE",
        role: "Multiple Roles Including Lead Category Planning & Analytics",
        period: "3.5 years",
        points: [
            "Led seasonal and yearly planning with top-down guidance",
            "Managed in-season trading actions and budget management",
            "Created forecasting solutions for merchandising operations",
            "Conducted strategic planning and performance analysis",
            "Bridged gap between Business and Merchandising departments"
        ]
    }
];

const education = [
    {
        school: "IÉSEG School of Management",
        degree: "Master of Business Administration (M.B.A.)",
        field: "International Business",
        year: "2014"
    },
    {
        school: "S.P. Jain Institute of Management & Research",
        degree: "Master's Degree",
        field: "International Management",
        year: "2013 - 2014"
    },
    {
        school: "JECRC",
        degree: "B.Tech",
        field: "IT",
        year: "2006 - 2010"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                    >
                        Professional Experience
                    </motion.h2>
                    <div className="max-w-4xl mx-auto">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="mb-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.company}</h3>
                                <p className="text-lg font-semibold mb-2">{exp.role}</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="mb-2">{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-12 mt-20"
                    >
                        Education
                    </motion.h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                            >
                                <h3 className="font-bold text-lg mb-2">{edu.school}</h3>
                                <p className="text-blue-600 dark:text-blue-400">{edu.degree}</p>
                                <p className="text-gray-600 dark:text-gray-400">{edu.field}</p>
                                <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.year}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}