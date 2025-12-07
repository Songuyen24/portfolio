'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from './data/info';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl bg-gray-200 dark:bg-gray-800 w-full max-w-md mx-auto relative overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                                Ảnh minh họa (Về tôi)
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-blue-100 dark:bg-blue-900/20 rounded-2xl -rotate-6"></div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Về Bản Thân Mình
                        </h2>

                        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            <p>
                                {PERSONAL_INFO.aboutMe}
                            </p>
                        </div>

                        {/* Timeline / Highlights */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                <div className="h-full mt-1.5 w-2 bg-blue-500 rounded-full"></div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Hiện tại</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Đang học tập và xây dựng các dự án cá nhân với Next.js.</p>
                                </div>
                            </div>

                            {PERSONAL_INFO.education.map((edu, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                    <div className="h-full mt-1.5 w-2 bg-purple-500 rounded-full"></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Học vấn - {edu.school}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.major} ({edu.period})</p>
                                        <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">GPA: {edu.gpa}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="#projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all">
                                Xem các dự án của mình <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
