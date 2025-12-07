'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Định nghĩa kiểu dữ liệu cho Skill
interface Skill {
    name: string;
    icon: string; // Trong thực tế có thể dùng Component Icon hoặc đường dẫn ảnh
    category: 'Frontend' | 'Backend' | 'Tools';
    color: string;
}

const skillsData: Skill[] = [
    { name: 'React', icon: '⚛️', category: 'Frontend', color: 'bg-blue-100 text-blue-600' },
    { name: 'Next.js', icon: '▲', category: 'Frontend', color: 'bg-black text-white dark:bg-white dark:text-black' },
    { name: 'TypeScript', icon: 'TS', category: 'Frontend', color: 'bg-blue-100 text-blue-700' },
    { name: 'Tailwind CSS', icon: '🌊', category: 'Frontend', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'bg-green-100 text-green-600' },
    { name: 'Git', icon: '📦', category: 'Tools', color: 'bg-orange-100 text-orange-600' },
    { name: 'Figma', icon: '🎨', category: 'Tools', color: 'bg-purple-100 text-purple-600' },
    { name: 'VS Code', icon: '💻', category: 'Tools', color: 'bg-blue-50 text-blue-500' },
];

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

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-4 group"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2 ${skill.color} font-bold`}>
                                {skill.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                {skill.name}
                            </h3>
                            <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400">
                                {skill.category}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
