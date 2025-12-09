'use client';

import { motion } from 'framer-motion';

const certifications = [
    {
        title: "Finance Foundations: Business Valuation",
        issuer: "LinkedIn Learning",
        icon: "📊"
    },
    {
        title: "Strategic Planning Foundations",
        issuer: "LinkedIn Learning",
        icon: "🎯"
    },
    {
        title: "Finance Foundations",
        issuer: "LinkedIn Learning",
        icon: "💹"
    },
    {
        title: "Accounting Foundations: Managerial Accounting",
        issuer: "LinkedIn Learning",
        icon: "📈"
    },
    {
        title: "Managerial Economics",
        issuer: "LinkedIn Learning",
        icon: "📚"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                        Certifications
                    </motion.h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-center gap-4"
                            >
                                <span className="text-3xl">{cert.icon}</span>
                                <div>
                                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">{cert.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}