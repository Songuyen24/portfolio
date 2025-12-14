'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from './data/info';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-[var(--background)] overflow-hidden">
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
                        <div className="aspect-square bg-gray-200 border-4 border-black w-full max-w-md mx-auto relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            {/* Scanlines */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl uppercase tracking-widest text-center pixel-text-shadow">
                                INSERT COIN<br />TO SEE IMAGE
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-[var(--secondary)] border-4 border-black"></div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6 uppercase tracking-widest pixel-text-shadow">
                            Về Bản Thân Mình
                        </h2>

                        <div className="pixel-box p-6 bg-white text-black mb-8">
                            <p className="text-lg leading-relaxed font-bold">
                                {PERSONAL_INFO.aboutMe}
                            </p>
                        </div>

                        {/* Timeline / Highlights */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4 p-4 border-4 border-black bg-gray-100 hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                <div className="h-4 w-4 mt-1 bg-[var(--primary)] border-2 border-black"></div>
                                <div>
                                    <h4 className="font-bold text-black uppercase">Hiện tại</h4>
                                    <p className="text-gray-700 font-bold text-sm">Đang học tập và xây dựng các dự án cá nhân với Next.js.</p>
                                </div>
                            </div>

                            {PERSONAL_INFO.education.map((edu, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 border-4 border-black bg-gray-100 hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                    <div className="h-4 w-4 mt-1 bg-[var(--secondary)] border-2 border-black"></div>
                                    <div>
                                        <h4 className="font-bold text-black uppercase">Học vấn - {edu.school}</h4>
                                        <p className="text-gray-700 font-bold text-sm">{edu.major} ({edu.period})</p>
                                        <p className="text-gray-600 font-bold text-xs mt-1">GPA: {edu.gpa}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="#projects" className="pixel-btn inline-flex items-center gap-2 px-6 py-3 font-bold text-white no-underline">
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
