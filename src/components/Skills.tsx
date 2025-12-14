'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { SKILLS_DATA } from './data/skills';

const Skills = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" className="py-20 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4 uppercase tracking-widest pixel-text-shadow">
                        Kỹ Năng & Công Nghệ
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-bold">
                        Công cụ và vũ khí chiến đấu.
                    </p>
                </div>

                <div className="space-y-12">
                    {SKILLS_DATA.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-[var(--primary)] pl-4 uppercase tracking-wider">
                                {category.title}
                            </h3>
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                            >
                                {category.items.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={item}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-gray-800 p-6 shadow-[4px_4px_0px_0px_#000] border-4 border-black flex flex-col items-center justify-center gap-4 group hover:bg-[var(--primary)] transition-none"
                                    >
                                        {skill.icon && (
                                            <div className="w-12 h-12 relative">
                                                <div className="text-4xl flex items-center justify-center h-full grayscale group-hover:grayscale-0 contrast-150">
                                                    {skill.icon}
                                                </div>
                                            </div>
                                        )}
                                        <h3 className="font-bold text-white uppercase group-hover:text-white transition-none">
                                            {skill.name}
                                        </h3>
                                        {skill.level && (
                                            <span className="text-xs px-3 py-1 bg-black text-white font-bold border-2 border-white">
                                                {skill.level.toUpperCase()}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
