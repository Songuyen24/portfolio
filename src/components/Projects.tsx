'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from './data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Dự Án Tiêu Biểu
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Một số dự án cá nhân mà mình tâm đắc nhất trong quá trình học tập và làm việc.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
                        >
                            {/* Image Placeholder Area */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden group">
                                {/* Overlay khi hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.previewUrl} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.gitUrl} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform" title="View Code">
                                        <Github size={20} />
                                    </a>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-80 font-bold text-xl">
                                    {project.title} Preview
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
