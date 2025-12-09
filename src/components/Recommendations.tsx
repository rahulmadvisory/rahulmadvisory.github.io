/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

const recommendations = [
    {
        name: "Ngoc Mai Chu",
        title: "Senior FP&A Manager | SaaS & E-commerce",
        image: "/placeholder-avatar.jpg",
        text: `I had the pleasure of working with Rahul when I joined GYG as a Planning Manager on the FP&A team. At the time, Rahul was the Head of Strategy FP&A and was instrumental in my transition and growth.

Rahul is an exceptional leader with deep expertise across all facets of FP&A, including Marketing, Supply, and Tech. Working closely with him on long-term strategic planning was an incredibly valuable experience. He not only guided me through the intricacies of our planning model but also demonstrated a genuine commitment to mentorship and team development. His strengths in financial modeling, strategic thinking, and stakeholder management made him a trusted partner to cross-functional teams.

Rahul brings a unique blend of strategic vision, results-driven focus, and a collaborative spirit. His approachable nature and positive energy elevate those around him. I highly recommend Rahul for his exceptional leadership, expertise, and the lasting impact he brings to any team.`,
    },
    {
        name: "Elisabetta Casagrande",
        title: "Principal/Lead Product Management Consultant @ Product People",
        image: "/placeholder-avatar.jpg",
        text: `I've had the pleasure to work with Rahul as he was leading the Category Planning & Analytics team at Zalando. His commercial acumen and analytical capabilities are remarkable, as well as his ability to manage every stakeholder. His contribution was critical in pre-season planning, monthly forecasting and weekly trading, providing both guidance and tools.`,
    },
    {
        name: "Wouter Blok",
        title: "Growth Consultant | CMO Advisor | Advisory Board Member",
        image: "/placeholder-avatar.jpg",
        text: `Rahul came to me, from a different department, for mentorship. He identified skills he wanted to grow and sought the right person to share his challenges and questions with. Rahul has a strong desire to keep quenching his appetite for knowledge and learn from how others have overcome their adversities. As a dedicated and persevering employee he has already come very far in his career, I wish him a great next challenge that will make the best use of his skills in strategic and financial planning.`,
    }
];

export default function Recommendations() {
    return (
        <section id="recommendations" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                    >
                        Recommendations
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recommendations.map((recommendation, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="card p-6 rounded-lg"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700">{/* avatar */}</div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{recommendation.name}</h3>
                                                <p className="text-sm muted">{recommendation.title}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 italic">"{recommendation.text}"</p>
                                    </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
