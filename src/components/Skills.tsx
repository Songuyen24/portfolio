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
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Kỹ Năng & Công Nghệ
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Những công cụ và công nghệ mình sử dụng thường xuyên để xây dựng sản phẩm.
                    </p>
                </div>

                <div className="space-y-12">
                    {SKILLS_DATA.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-500 pl-4">
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
                                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-4 group"
                                    >
                                        {skill.icon && (
                                            <div className="w-12 h-12 relative">
                                                {/* Nếu icon là ảnh thì dung Image, nếu là string emoji thì render text. 
                                                     Ở đây data đang để emoji hoặc tên file, ta tạm render text/emoji nếu không phải path ảnh */}
                                                <div className="text-4xl flex items-center justify-center h-full">
                                                    {skill.icon}
                                                </div>
                                            </div>
                                        )}
                                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                            {skill.name}
                                        </h3>
                                        {skill.level && (
                                            <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400">
                                                {skill.level}
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
